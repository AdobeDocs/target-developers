# Downloading, Storing, and Updating the Rule Artifact via JSON Payload

This approach is best if your application is structured in a way that requires the SDK to be initialized on each file in which it uses SDK methods. Before your web application can use the JSON payload of the rule artifact during SDK initialization, you should ensure the JSON payload is downloaded and is available for your application to use.

## Summary of steps

1. Install the SDK
1. Initialize the SDK
1. Store and Use the JSON Payload

## Install the SDK

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### NPM

```javascript
npm i @adobe/target-nodejs-sdk -P
```

### MVN

```javascript
<dependency>
    <groupId>com.adobe.target</groupId>
    <artifactId>java-sdk</artifactId>
    <version>1.0</version>
</dependency>
```

## Initialize the SDK

1. First, import the SDK. Import to the same file from which you can control your server start-up.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### Node.js

```javascript
const TargetClient = require("@adobe/target-nodejs-sdk");
```

### Java

```javascript
import com.adobe.target.edge.client.ClientConfig;
import com.adobe.target.edge.client.TargetClient;
```

1. To configure the SDK, use the create method.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### Node.js

```javascript
const CONFIG = {
    client: "<your target client code>",
    organizationId: "your EC org id",
    decisioningMethod: "on-device",
    pollingInterval : 300000,
    events: {
        artifactDownloadSucceeded: onArtifactDownloadSucceeded,
        artifactDownloadFailed: onArtifactDownloadFailed
    }
};

const TargetClient = TargetClient.create(CONFIG);

function onArtifactDownloadSucceeded(event) {
    //Adobe Target SDK has now downloaded the JSON Artifact/Payload
    console.log(event.artifactLocation) // Location from where the Artifact is downloaded.
    console.log(event.artifactPayload) // JSON Payload which we can store locally.
}

function onArtifactDownloadFailed(event) {
    //Adobe Target SDK has failed to download the JSON Artifact/Payload.
    console.log(event.artifactLocation) // Location from where the Artifact is downloaded.
    console.log(event.error.message) // Error message
}
```

### Java

```javascript
package com.adobe.target.edge.client.model.ondevice.OnDeviceDecisioningHandler;

ClientConfig config = ClientConfig.builder()
    .client("<you target client code>")
    .organizationId("<your EC org id>")
    .onDeviceDecisioningHandler(
      new OnDeviceDecisioningHandler() {
        void onDeviceDecisioningReady() {
          // On-Device Decision is ready.
        }
        void artifactDownloadSucceeded(byte[] artifactData) {
          // Store artifactData to local disk.        
          // ...
        }
      }
    )
    .build();
TargetClient targetClient = TargetClient.create(config);
```

1. Both client and `organizationId` can be retrieved from Adobe Target by navigating to **Administration** > **Implementation**, as shown here.

<!--- Insert image-client-code.png --->
![alt image](assets/asset-rule-artifact-3.png)

## Store and Use the JSON Payload

The mechanism you use to store the JSON payload depends on your system architecture. You can use a local file, a database, or a memory object caching system such as Memcached . You need to be able to read this JSON from your application for consumption. In this guide, we use a local file as the storage.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### Node.js

```javascript
//... Code removed for brevity

function onArtifactDownloadSucceeded(event) {
    const jsonPath = 'src/config/target-rules.json'
    fs.writeFile(jsonPath, JSON.stringify(event.artifactPayload), 'utf8', (err) => {
        if (err) {
            throw err;
        };
        console.log(`The artifact from '${event.artifactLocation}' is now saved to '${jsonPath}'`);
    });
}


function onArtifactDownloadFailed(event) {
  console.log(`The local decisioning artifact failed to download from '${event.artifactLocation}' with the following error message: ${event.error.message}`);
}

//... Code removed for brevity
```

### Java

```javascript
MboxRequest mbox = new MboxRequest().name("homepage").index(0);
TargetDeliveryRequest request = TargetDeliveryRequest.builder()
    .context(new Context().channel(ChannelType.WEB))
    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))
    .build();
TargetDeliveryResponse response = targetClient.getOffers(request);
```

<InlineAlert variant="info" slots="text"/>

By initializing the Adobe Target SDK via the JSON payload, your server is ready to serve requests immediately with on-device decisioning activities, since the Adobe Target SDK does not need to wait for the rule artifact to be downloaded.

Here is an example demonstrating the JSON payload-initializing capability.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### Node.js

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
    client: "<your target client code>",
    organizationId: "your EC org id",
    decisioningMethod: "on-device",
    pollingInterval : 300000,
    events: {
        clientReady : startWebServer,
        artifactDownloadSucceeded : onArtifactDownloadSucceeded,
        artifactDownloadFailed : onArtifactDownloadFailed
    },
};

function onArtifactDownloadSucceeded(event) {
    const jsonPath = 'src/config/target-rules.json'
    fs.writeFile(jsonPath, JSON.stringify(event.artifactPayload), 'utf8', (err) => {
        if (err) {
            throw err;
        };
        console.log(`The artifact from '${event.artifactLocation}' is now saved to '${jsonPath}'`);
    });
}

function onArtifactDownloadFailed(event) {
  console.log(`The on-device decisioning artifact failed to download from '${event.artifactLocation}' with the following error message: ${event.error.message}`);
}

const app = express();
const targetClient = TargetClient.create(CONFIG);

app.use(cookieParser());

function saveCookie(res, cookie) {
  if (!cookie) {
    return;
  }

  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});
}

const getResponseHeaders = () => ({
  "Content-Type": "text/html",
  "Expires": new Date().toUTCString()
});

function sendSuccessResponse(res, response) {
  res.set(getResponseHeaders());
  saveCookie(res, response.targetCookie);
  res.status(200).send(response);
}

function sendErrorResponse(res, error) {
  res.set(getResponseHeaders());
  res.status(500).send(error);
}

function startWebServer() {
    app.get('/*', async (req, res) => {
    const targetCookie = req.cookies[TargetClient.TargetCookieName];
    const request = {
        execute: {
        mboxes: [{
            address: { url: req.headers.host + req.originalUrl },
            name: "on-device-homepage-banner" // Ensure that you have a LIVE Activity running on this location
        }]
        }};

    try {
        const response = await targetClient.getOffers({ request, targetCookie });
        sendSuccessResponse(res, response);
    } catch (error) {
        console.error("Target:", error);
        sendErrorResponse(res, error);
    }
    });

    app.listen(3000, function () {
    console.log("Listening on port 3000 and watching!");
    });
}
```

### Java

```javascript
import com.adobe.target.edge.client.ClientConfig;
import com.adobe.target.edge.client.TargetClient;
import com.adobe.target.delivery.v1.model.ChannelType;
import com.adobe.target.delivery.v1.model.Context;
import com.adobe.target.delivery.v1.model.ExecuteRequest;
import com.adobe.target.delivery.v1.model.MboxRequest;
import com.adobe.target.edge.client.entities.TargetDeliveryRequest;
import com.adobe.target.edge.client.model.TargetDeliveryResponse;

@Controller
public class TargetController {

  private TargetClient targetClient;

  TargetController() {
    // You should instantiate TargetClient in a Bean and inject the instance into this class 
    // but we show the code here for demonstration purpose.
    ClientConfig config = ClientConfig.builder()
        .client("<you target client code>")
        .organizationId("<your EC org id>")
        .onDeviceDecisioningHandler(
          new OnDeviceDecisioningHandler() {
            void onDeviceDecisioningReady() {
              // On-Device Decision is ready.
            }
            void artifactDownloadSucceeded(byte[] artifactData) {
              // Store artifactData to local disk.        
              // ...
            }
          }
        )
        .build();
    targetClient = TargetClient.create(config);
  }

  @GetMapping("/")
  public String homePage() {
    MboxRequest mbox = new MboxRequest().name("homepage").index(0);
    TargetDeliveryRequest request = TargetDeliveryRequest.builder()
        .context(new Context().channel(ChannelType.WEB))
        .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))
        .build();
    TargetDeliveryResponse response = targetClient.getOffers(request);
    // ...
  }
}
```