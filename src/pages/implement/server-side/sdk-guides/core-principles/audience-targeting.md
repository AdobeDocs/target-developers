# Audience targeting

## Overview

Audiences can be used to target your experimentation and personalization activities. Adobe Target supports myriad powerful audience targeting capabilities out of the box. The following attributes are available for [audience targeting](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/create-audience.html):

### Target Library

For more information, see [Target Library](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/target-library.html).
​
* Referred from Bing
* Chrome Browser
* Firefox Browser
* Referred from Google
* Internet Explorer
* Linux Operating System
* Mac OS Operating System
* New Visitors
* Returning Visitors
* Safari Browser
* Tablet Device
* Windows Operating System
* Referred from Yahoo

### Geo

For more information, see [Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html).
​​
* Country/Region
* State
* City
* Zip Code
* Latitude
* Longitude
* DMA
* Mobile Carrier

### Network

For more information, see [Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html).

* ISP
* Domain Name
* Connection Speed

### Mobile

For more information, see [Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html).

* Device Marketing Name
* Device Model
* Device Vendor
* Is Mobile Device
* Is Mobile Phone
* Is Tablet
* OS
* Screen Height (px)
* Screen Width (px)

### Custom

For more information, see [Custom parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html).

* any key / value pair

### Operating system

For more information, see [Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html).

* Linux
* Macintosh
* Windows

### Site pages

For more information, see [Site pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html).

* Current Page
* Previous Page
* Landing Page
* HTTP Header

### Browser

For more information, see [Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html).

* Type
* Language
* Version

### Visitor Profile

For more information, see [Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html). 

* any key / value pair, which is persisted

### Traffic Sources

For more information, see [Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html).

* From Baidu
* From Bing
* From Google
* From Yahoo
* Referring Landing Page: URL
* Referring Landing Page: Domain
* Referring Landing Page: Query

### Time Frame

For more information, see [Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html).

* Start Date / End Date

## Client Hints

Adobe Target requires Client Hints for correct segmentation of Browser, Operating System, and Mobile audience attributes, as well as certain instances of Profile Scripts. For more background information, see [User Agent and Client Hints](../../../client-side/atjs/user-agent-and-client-hints.md).

### How to Pass Client Hints to Adobe Target

Starting with Node.js SDK v2.4.0 and Java SDK v2.3.0, Client Hints can be sent to Target via `getOffers()` calls. Client Hints should be included on the `request.context` object, along with User Agent.

<CodeBlock slots="heading, code" repeat="2" languages="js, Java" />

#### Node.js SDK

```js
targetClient.getOffers({ 
    request: { 
        context: { 
            channel: "mobile" 
            userAgent: "Mozilla/5.0 (Linux; Android 12; Pixel 4a) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36", 
            clientHints: { 
                mobile: "true", 
                platform: "Linux", 
                platformVersion: "12.1", 
                model: "Pixel 4a", 
                browserUAWithMajorVersion: "\"Not A;Brand\";v=\"98\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"", 
                browserUAWithFullVersion: "\" Not A;Brand\";v=\"98.0.0.0\", \"Chromium\";v=\"98.0.4844.83\", \"Google Chrome\";v=\"98.0.4758.101\"", 
                bitness: "64", 
                architecture: "x86" 
            } 
        }, 
        execute: { 
            mboxes: [{ 
                name: "home", 
                index: 1 
            }] 
        } 
    } 
});
```

#### Java SDK

```javascript
import com.adobe.target.delivery.v1.model.ClientHints; 
import com.adobe.target.delivery.v1.model.Context; 
import com.adobe.target.delivery.v1.model.ExecuteRequest; 
import com.adobe.target.edge.client.model.TargetDeliveryRequest; 

 
ClientHints clientHints = new ClientHints(); 
clientHints.setMobile(true); 
clientHints.setPlatform("macOS"); 
clientHints.setArchitecture("x86"); 
clientHints.setPlatformVersion("11.3.1"); 
clientHints.setBrowserUAWithMajorVersion( 
  "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\""); 
String userAgent = 
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36"; 

 
TargetDeliveryRequest request = TargetDeliveryRequest.builder() 
        .execute(new ExecuteRequest().pageLoad(pageLoad)) 
        .context(new Context().clientHints(clientHints).userAgent(userAgent)) 
        .build(); 
```

## On-device decisioning

The following table indicates which audience rules are supported or not supported for on-device decisioning.

|Audience Rule|On-device Decisioning|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html)|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html)|No|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html)|No|
|[Custom Parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html)|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html)|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html)|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html)|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)|No|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html)|No|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html)|Yes|
|[Experience Cloud Audiences](https://experienceleague.adobe.com/docs/target/using/integrate/mmp.html) (Audiences from Adobe Audience Manager, Adobe Analytics, and Adobe Experience Manager|No|

### Geo targeting for on-device decisioning

In order to maintain near-zero latency for on-device decisioning activities with geo-based audiences, Adobe recommends you provide the geo values yourself in the call to `getOffers`. Do this by setting the `Geo` object in the `Context` of the request. This means your server will need a way to determine the location of each end user. For example, your server may perform an IP-to-Geo lookup, using a service you configure. Some hosting providers, such as Google Cloud, provide this functionality via custom headers in each `HttpServletRequest`.

<CodeBlock slots="heading, code" repeat="2" languages="js, java" />

#### Node.js

```js
const CONFIG = {
    client: "acmeclient",
    organizationId: "1234567890@AdobeOrg",
    decisioningMethod: "on-device"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
    request: {
        context: {
            geo: {
                city: "SAN FRANCISCO",
                countryCode: "US",
                stateCode: "CA",
                latitude: 37.75,
                longitude: -122.4
            }
        },
        execute: {
            pageLoad: {}
        }
    }
})
```

#### Java

```javascript
public class TargetRequestUtils {

    public static Context getContext(HttpServletRequest request) {
        Context context = new Context()
            .geo(ipToGeoLookup(request.getRemoteAddr()))
            .channel(ChannelType.WEB)
            .timeOffsetInMinutes(330.0)
            .address(getAddress(request));
        return context;
    }

    public static Geo ipToGeoLookup(String ip) {
        GeoResult geoResult = geoLookupService.lookup(ip);
        return new Geo()
            .city(geoResult.getCity())
            .stateCode(geoResult.getStateCode())
            .countryCode(geoResult.getCountryCode());
    }
}
```

However, if you do not have the ability to perform IP-to-Geo lookups on your server, but you still want to perform on-device decisioning for `getOffers` requests that contain geo-based audiences, this is also supported. The downside of this approach is that it will use a remote IP-to-Geo lookup, which will add latency to each `getOffers` call. This latency should be lower than a remote `getOffers` call, since it hits a CDN that is located close to your server. You must **only** provide the `ipAddress` field in the `Geo` object in the `Context` of your request, in order for the SDK to retrieve the geo-location of your user's IP address. If any other field in addition to the `ipAddress` is provided, the Target SDK will not fetch the geo-location metadata for resolution.

<CodeBlock slots="heading, code" repeat="2" languages="js, java" />

#### Node.js

```js
const CONFIG = {
    client: "acmeclient",
    organizationId: "1234567890@AdobeOrg",
    decisioningMethod: "on-device"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
    request: {
        context: {
            geo: {
                ipAddress: "127.0.0.1"
            }
        },
        execute: {
            pageLoad: {}
        }
    }
})
```

#### Java

```javascript
public class TargetRequestUtils {

    public static Context getContext(HttpServletRequest request) {
        Context context = new Context()
            .geo(new Geo().ipAddress(request.getRemoteAddr()))
            .channel(ChannelType.WEB)
            .timeOffsetInMinutes(330.0)
            .address(getAddress(request));
        return context;
    }

}
```

## Server-side decisioning

The following table indicates which audience rules are supported or not supported for server-side decisioning.

|Audience Rule|Server-side Decisioning|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html)|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html)|Yes|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html)|Yes|
|[Custom Parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html)|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html)|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html)|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html)|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)|Yes|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html)|Yes|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html)|Yes|
|[Experience Cloud Audiences](https://experienceleague.adobe.com/docs/target/using/integrate/mmp.html) (Audiences from Adobe Audience Manager, Adobe Analytics, and Adobe Experience Manager|Yes|