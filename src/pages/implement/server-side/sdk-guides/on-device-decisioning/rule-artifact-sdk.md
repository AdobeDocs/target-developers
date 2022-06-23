# Downloading, Storing, and Updating the Rule Artifact Automatically via the Adobe Target SDK

This approach is best when you are able to initialize the Adobe Target SDK at the same time you initialize and start your web server. The rule artifact will be downloaded by the Adobe Target SDK and cached into memory before your web server application starts serving requests. Once your web application is up and running, all Adobe Target decisions will be executed using the in-memory rule artifact. The cached rule artifact will be updated based on the `pollingInterval` you specify during the SDK initialization step.

## Summary of steps

1. Install the SDK
1. Initialize the SDK
1. Store and Use the Rule Artifact

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
        clientReady: startWebServer
    }
};

const TargetClient = TargetClient.create(CONFIG);

function startWebServer() {
    //Adobe Target SDK has now downloaded the JSON Artifacts and is available in the memory.
    //You can start your web server now to serve requests now.
}
```

### Java

```javascript
ClientConfig config = ClientConfig.builder()
    .client("<you target client code>")
    .organizationId("<your EC org id>")
    .build();
TargetClient targetClient = TargetClient.create(config);
```

1. Both client and organizationId can be retrieved from Adobe Target by navigating to **Administration** > **Implementation**, as shown here.

<!--- Insert image-client-code.png --->
![alt image](assets/asset-rule-artifact-3.png)

## Store and Use the Rule Artifact

You do not need to manage the rule artifact yourself and calling the SDK methods should be straightforward.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

### Node.js

```javascript
//req is the request object from the server request listener method
const targetCookie = req.cookies[TargetClient.TargetCookieName];
const request = {
    context: {
        channel: "web"
    },
    execute: {
        mboxes: [{
            address: { url: req.headers.host + req.originalUrl },
            name: "on-device-homepage-banner"
        }],
    },
};

TargetClient.getOffers({
    request,
    targetCookie
}).then(function(response) {
    //This Target response is coming from the In-memory Target artifact.
    console.log("Target response", response);
}).catch(function(err) {
    console.error("Target:", err);
})
```

### Java

```
MboxRequest mbox = new MboxRequest().name("homepage").index(0);
TargetDeliveryRequest request = TargetDeliveryRequest.builder()
    .context(new Context().channel(ChannelType.WEB))
    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))
    .build();
TargetDeliveryResponse response = targetClient.getOffers(request);
```

<InlineAlert variant="info" slots="text"/>

In the code sample above, the `TargetClient` object holds a reference to the in-memory rule artifact. When you use this object for invoking standard SDK methods, it uses the in-memory rule artifact for decisioning. If your application is structured such that you need to call the SDK methods in files other than the one that initializes and listens to client requests, and if those files do not have access to the TargetClient object, then you can download the JSON payload and store it in a local JSON file to be consumed on other files, which need to initialize the SDK. This is explained in the next section, regarding [downloading the rule artifact using a JSON payload](rule-artifact-json.md).

Here is an example that starts a web application after initializing the Adobe Target SDK.

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
        clientReady: startWebServer
    }
};

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

