---
keywords: serverstate;targetGlobalSettings;targetglobalsettings;globalSettings;globalsettings;global settings;at.js;functions;function;clientCode;clientcode;serverDomain;serverdomain;cookieDomain;cookiedomain;crossDomain;crossdomain;timeout;globalMboxAutoCreate;visitorApiTimeout;defaultContentHiddenStyle;defaultContentVisibleStyle;bodyHiddenStyle;bodyHidingEnabled;imsOrgId;secureOnly;overrideMboxEdgeServer;overrideMboxEdgeServerTimeout;optoutEnabled;optout;opt out;selectorsPollingTimeout;dataProviders;Hybrid Personalization;deviceIdLifetime
description: Use the targetGlobalSettings() function for the Adobe [!DNL Target] at.js JavaScript library to override settings instead of using the [!DNL Target] UI or REST APIs.
title: How Do I Use the targetGlobalSettings() Function?
feature: at.js
role: Developer
exl-id: 14080cf6-6a15-4829-b95d-62c068898564
---
# targetGlobalSettings()

You can override settings in the at.js library using `targetGlobalSettings()`, rather than configuring the settings in the [!DNL Target] Standard/Premium UI or by using REST APIs.

## Settings {#section_42C759AE9B524A43B8659018677224B8}

You can override the following settings:

### bodyHiddenStyle

* **Type**: String
* **Default Value**: body { opacity: 0 } 
* **Description**: Used only when `globalMboxAutocreate === true` to minimize the chance of flicker.

  For more information, see [How at.js Manages Flicker](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md).

### bodyHidingEnabled

* **Type**: Boolean
* **Default Value**: true
* **Description**: Used to control flicker when `target-global-mbox` is used to deliver offers created in the Visual Experience Composer, also known as visual offers.

### clientCode

* **Type**: String
* **Default Value**: Value set via UI.
* **Description**: Represents the client code.

### cookieDomain

* **Type**: String
* **Default Value**: If possible set to the top level domain.
* **Description**: Represents the domain used when saving cookies.

### crossDomain

* **Type**: String
* **Default Value**: Value set via UI.
* **Description**: Indicates whether cross-domain tracking is enabled or not. The allowed values are: disabled, enabled,or x-only.

### cspScriptNonce

* **Type**: See [Content Security Policy](#content-security) below.
* **Default Value**: See [Content Security Policy](#content-security) below.
* **Description**: See [Content Security Policy](#content-security) below.

### cspStyleNonce

* **Type**: See [Content Security Policy](#content-security) below.
* **Default Value**: See [Content Security Policy](#content-security) below.
* **Description**: See [Content Security Policy](#content-security) below.

### dataProviders

* **Type**: See [Data Providers](#data-providers) below.
* **Default Value**: See [Data Providers](#data-providers) below.
* **Description**: See [Data Providers](#data-providers) below.

### decisioningMethod {#on-device-decisioning}

* **Type**: String 
* **Default Value**: server-side 
* **Other Values**: on-device, hybrid 
* **Description**: See Decisioning Methods below.

  **Decisioning Methods** 

  With on-device decisioning, Target introduces a new setting called [!UICONTROL Decisioning Method] that dictates how at.js delivers your experiences. The `decisioningMethod` has three values: server-side only, on-device only, and hybrid. When `decisioningMethod` is set in `targetGlobalSettings()`, it acts as the default decisioning method for all [!DNL Target] decisions.

  **[!UICONTROL Server-side only]**:

  [!UICONTROL Server-side only] is the default decisioning method that is set out of the box when at.js 2.5+ is implemented and deployed on your web properties.

  Using [!UICONTROL server-side only] as the default configuration means that all decisions are made on the [!DNL Target] edge network, which involves a blocking server call. This approach can introduce incremental latency, but it also provides significant benefits, such as giving you the ability to apply Target’s machine-learning capabilities that include [Recommendations](/help/c-recommendations/recommendations.md), [Automated Personalization](/help/c-activities/t-automated-personalization/automated-personalization.md) (AP), and [Auto-Target](/help/c-activities/auto-target/auto-target-to-optimize.md) activities. 

  Furthermore, enhancing your personalized experiences by using Target’s user profile, which is persisted across sessions and channels, can provide powerful outcomes for your business. 

  Lastly, [!UICONTROL server-side only] lets you use the Adobe Experience Cloud and fine-tune audiences that can be targeted against through Audience Manager and Adobe Analytics segments.

  **[!UICONTROL On-device only]**:

  [!UICONTROL On-Device only] is the decisioning method that must be set in at.js 2.5+ when on-device decisioning should be used only throughout your web pages. 

  On-device decisioning can deliver your experiences and personalization activities at blazing fast speed because the decisions are made from a cached rules artifact that contains all of your activities that qualify for on-device decisioning. 

  To learn more about which activities qualify for on-device decisioning, see the supported features section. 

  This decisioning method should be used only if performance is highly critical across all the pages that require decisions from [!DNL Target]. Furthermore, keep in mind that when this decisioning method is selected, your [!DNL Target] activities that do not qualify for on-device decisioning will not be delivered or executed. The at.js library 2.5+ is configured to only look for the cached rules artifact to make decisions.

  **Hybrid**:

  [!UICONTROL Hybrid] is the decisioning method that must be set in at.js 2.5+ when both on-device decisioning and activities that require a network call to the Adobe Target Edge network must be executed. 

  When you are managing both on-device decisioning activities and server-side activities, it can be a bit complicated and tedious when thinking about how to deploy and provision [!DNL Target] on your pages. With hybrid as the decisioning method, [!DNL Target] knows when it must make a server call to the Adobe Target Edge network for activities that require server-side execution, and also when to only execute on-device decisions. 

  The JSON rules artifact includes metadata to inform at.js whether an mbox has a server-side activity running or an on-device decisioning activity. This decisioning method ensures that activities you intend to be delivered quickly are done through on-device decisioning and for activities that require more powerful ML-driven personalization, those activities are done via the Adobe Target Edge network.

### defaultContentHiddenStyle

* **Type**: String 
* **Default Value**: visibility: hidden
* **Description**: Used only for wrapping mboxes that use DIV with class name "mboxDefault" and are executed via `mboxCreate()`, `mboxUpdate()`, or `mboxDefine()` to hide default content.

### defaultContentVisibleStyle

* **Type**: String
* **Default Value**: visibility: visible
* **Description**: Used only for wrapping mboxes that use DIV with class name "mboxDefault" and are executed via `mboxCreate()`, `mboxUpdate()`, or `mboxDefine()` to reveal applied offer if any or default content.

### deviceIdLifetime

* **Type**: Number
* **Default Value**: 63244800000 ms = 2 years
* **Description**: Amount of time `deviceId` is persisted in cookies.

>[!NOTE]
>
>The deviceIdLifetime setting is overrideable in at.js version 2.3.1 or later.

### enabled

* **Type**: Boolean
* **Default Value**: true
* **Description**: When enabled, a [!DNL Target] request to retrieve experiences and DOM manipulation to render the experiences is executed automatically. Furthermore, [!DNL Target] calls can be executed manually via `getOffer(s)` / `applyOffer(s)`. 

  When disabled, [!DNL Target] requests are not automatically or manually executed.

### globalMboxAutoCreate

* **Type**: Number
* **Default Value**: Value set via UI.
* **Description**: Indicates whether the global mbox request should be fired or not.

### imsOrgId

* **Type**: Sting 
* **Default Value**: true
* **Description**: Represents the IMS ORG ID.

### optinEnabled

* **Type**: Boolean
* **Default Value**: false
* **Description**: [!DNL Target] provides opt-in functionality support via [!DNL Adobe Experience Platform] to help support your consent management strategy. Opt-in functionality lets customers control how and when the [!DNL Target] tag is fired. There is also an option via [!DNL Adobe Experience Platform] to pre-approve the [!DNL Target] tag. To enable the ability to use Opt-In in the [!DNL Target] at.js library, add the `optinEnabled=true` setting. In [!DNL Adobe Experience Platform] you must select “enable” from the [!UICONTROL GDPR Opt-In] drop-down list in the extension installation view. See the [Adobe Experience Platform documentation](/help/c-implementing-target/c-implementing-target-for-client-side-web/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md) for more details. For more information about this setting as it relates to privacy and data protection regulations, including the European Union’s General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), see [Privacy and data protection regulations](/help/c-implementing-target/c-considerations-before-you-implement-target/c-privacy/cmp-privacy-and-general-data-protection-regulation.md).  

### optoutEnabled

* **Type**: Boolean
* **Default Value**: false
* **Description**: Indicates whether Target should call the Visitor API `isOptedOut()` function. This is part of Device Graph enablement.

### overrideMboxEdgeServer

* **Type**: Boolean
* **Default Value**: true (true beginning with at.js version 1.6.2)
* **Description**: Indicates if we should use `<clientCode>.tt.omtrdc.net` domain or `mboxedge<clusterNumber>.tt.omtrdc.net` domain.

  If this value is true, `mboxedge<clusterNumber>.tt.omtrdc.net` domain will be saved to a cookie. Currently not working with [CNAME](/help/c-implementing-target/c-considerations-before-you-implement-target/implement-cname-support-in-target.md) when using at.js versions prior to at.js 1.8.2 and at.js 2.3.1. If this is an issue for you, consider [updating at.js](/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md) to a newer, supported version.

### overrideMboxEdgeServerTimeout

* **Type**: Number
* **Default Value**: 1860000 => 31 minutes
* **Description**: Indicates the cookie lifetime that contains the `mboxedge<clusterNumber>.tt.omtrdc.net` value.

### pageLoadEnabled

* **Type**: Boolean
* **Default Value**: true
* **Description**: When enabled, automatically retrieve experiences that must be returned on page load.

### secureOnly

* **Type**: Boolean
* **Default Value**: false
* **Description**: Indicates whether at.js should use HTTPS only or be allowed to switch between HTTP and HTTPS based on the page protocol. When set to true, secureOnly also sets the Secure and SameSite attributes to the mbox cookie.

### selectorsPollingTimeout

* **Type**: Number
* **Default Value**: 5000 ms = 5 s
* **Description**: In at.js 0.9.6, [!DNL Target] introduced this new setting that can be overridden via `targetGlobalSettings`.

  The `selectorsPollingTimeout` setting represents how long the client is willing to wait for all the elements identified by selectors to appear on the page.
  
  Activities created via the Visual Experience Composer (VEC) have offers that contain selectors.

### serverDomain

* **Type**: String
* **Default Value**: Value set via UI.
* **Description**: Represents the Target edge server.

### serverState

* **Type**: See [Hybrid personalization](#server-state) below.
* **Default Value**: See [Hybrid personalization](#server-state) below.
* **Description**: See [Hybrid personalization](#server-state) below.

### telemetryEnabled {#telemetry}

* **Type**: Boolean
* **Default Value**: true
* **Description**: When enabled, [!DNL Adobe] collects SDK feature usage and performance telemetry data. Personal data is not collected.

### timeout

* **Type**: Number
* **Default Value**: Value set via UI.
* **Description**: Represents the [!DNL Target] edge request timeout.

### viewsEnabled

* **Type**: Boolean
* **Default Value**: true
* **Description**: When enabled, automatically retrieve views that must be returned on page load. Views are supported in at.js 2.*x* only.

### visitorApiTimeout

* **Type**: Number
* **Default Value**: 2000 ms = 2 s
* **Description**: Represents the [!UICONTROL Visitor API] request timeout.

## Usage {#section_9AD6FA3690364F7480C872CB55567FB0}

This function can be defined before at.js is loaded or in **[!UICONTROL Administration]** > **[!UICONTROL Implementation]** > **[!UICONTROL Edit at.js Settings]** > **[!UICONTROL Code Settings]** > **[!UICONTROL Library Header]**.

The Library Header field allows you to enter free-form JavaScript. The customization code should look something similar to the following example:

```javascript
window.targetGlobalSettings = {  
   timeout: 200, // using custom timeout  
   visitorApiTimeout: 500, // using custom API timeout  
   enabled: document.location.href.indexOf('https://www.adobe.com') >= 0 // enabled ONLY on adobe.com  
};
```

## Data Providers {#data-providers}

This setting lets customers gather data from third-party data providers, such as Demandbase, BlueKai, and custom services, and pass the data to Target as mbox parameters in the global mbox request. It supports the collection of data from multiple providers via async and sync requests. Using this approach makes it easy to manage flicker of default page content, while including independent timeouts for each provider to limit the impact on page performance

>[!NOTE]
>
>Data Providers requires [!DNL at.js] 1.3 or later.

The following videos contain more information:

| Video | Description |
|--- |--- |
|[Using Data Providers in Adobe Target](https://helpx.adobe.com/target/kt/using/dataProviders-atjs-feature-video-use.html)|Data Providers is a capability that allows you to easily pass data from third parties to Target. A third party could be a weather service, a DMP, or even your own web service. You can then use this data to build audiences, target content, and enrich the visitor profile.|
|[Implement Data Providers in Adobe Target](https://helpx.adobe.com/target/kt/using/dataProviders-atjs-technical-video-implement.html)|Implementation details and examples of how to use Adobe Target's dataProviders feature to retrieve data from third-party data providers and pass it in the Target request.|

The `window.targetGlobalSettings.dataProviders` setting is an array of data providers.

Each data provider has the following structure:

| Key | Type | Description |
|--- |--- |--- |
|name|String|Name of provider.|
|version|String|Provider version. This key will be used for provider evolution.|
|timeout|Number|Represents the provider timeout if this is a network request.  This key is optional.|
|provider|Function|The function that contains the provider data fetching logic.<br>The function has a single required parameter: `callback`. The callback parameter is a function that should be invoked only when the data has been successfully fetched or there is an error.<br>The callback expects two parameters:<ul><li>error: Indicates if an error occurred. If everything is OK, then this parameter should be set to null.</li><li>params: A JSON object, representing the parameters that will be sent in a Target request.</li></ul>|

The following example shows where the data provider is using sync execution:

```javascript
var syncDataProvider = { 
  name: "simpleDataProvider", 
  version: "1.0.0", 
  provider: function(callback) { 
    callback(null, {t1: 1}); 
  } 
}; 
  
window.targetGlobalSettings = { 
  dataProviders: [ 
    syncDataProvider 
  ] 
};
```

After at.js processes `window.targetGlobalSettings.dataProviders`, the Target request will contain a new parameter: `t1=1`.

The following is an example if the parameters that you want to add to the Target request are fetched from a third-party service, such as Bluekai, Demandbase, and so forth:

```javascript
var blueKaiDataProvider = { 
   name: "blueKai", 
   version: "1.0.0", 
   provider: function(callback) { 
      // simulating network request 
     setTimeout(function() { 
       callback(null, {t1: 1, t2: 2, t3: 3}); 
     }, 1000); 
   } 
} 
  
window.targetGlobalSettings = { 
   dataProviders: [ 
      blueKaiDataProvider 
   ] 
};
```

After at.js processes `window.targetGlobalSettings.dataProviders`, the Target request will contain additional parameters: `t1=1`, `t2=2` and `t3=3`.

The following example uses data providers to collect weather API data and send it as parameters in a Target request. The Target request will have additional params, such as `country` and `weatherCondition`.

```javascript
var weatherProvider = { 
      name: "weather-api", 
      version: "1.0.0", 
      timeout: 2000, 
      provider: function(callback) { 
        var API_KEY = "caa84fc6f5dc77b6372d2570458b8699"; 
        var lat = 44.426767399999996; 
        var lon = 26.1025384; 
        var url = "//api.openweathermap.org/data/2.5/weather?lang=en"; 
        var data = { 
          lat: lat, 
          lon: lon, 
          appId: API_KEY 
        } 
 
        $.ajax({ 
          type: "GET", 
                url: url, 
          dataType: "json", 
          data: data, 
          success: function(data) { 
            console.log("Weather data", data); 
            callback(null, { 
              country: data.sys.country, 
              weatherCondition: data.weather[0].main 
            }); 
          }, 
          error: function(err) { 
            console.log("Error", err); 
            callback(err); 
          } 
        });         
      } 
    }; 
 
    window.targetGlobalSettings = { 
      dataProviders: [weatherProvider] 
    };
```

Consider the following when working with the `dataProviders` setting:

* If the data providers added to `window.targetGlobalSettings.dataProviders` are async, they will be executed in parallel. The Visitor API request will be executed in parallel with functions added to `window.targetGlobalSettings.dataProviders` to allow a minimum wait time. 
* at.js won't try to cache the data. If the data provider fetches data only once, the data provider should make sure that data is cached and, when the provider function is invoked, serve the cache data for the second invocation.

## Content Security Policy {#content-security}

at.js 2.3.0+ supports setting Content Security Policy nonces on SCRIPT and STYLE tags appended to the page DOM when applying delivered Target offers.

The SCRIPT and STYLE nonces should be set in `targetGlobalSettings.cspScriptNonce` and `targetGlobalSettings.cspStyleNonce` correspondingly, prior to at.js 2.3.0+ loading. See an example below:

```javascript
...
<head>
 <script nonce="<script_nonce_value>">
window.targetGlobalSettings = {
  cspScriptNonce: "<csp_script_nonce_value>",
  cspStyleNonce: "<csp_style_nonce_value>"
};
 </script>
 <script nonce="<script_nonce_value>" src="at.js"></script>
...
</head>
...
```

After `cspScriptNonce` and `cspStyleNonce` settings are specified, at.js 2.3.0+ sets these as nonce attributes on all SCRIPT and STYLE tags that it appends to the DOM when applying Target offers.

## Hybrid personalization {#server-state}

`serverState` is a setting available in at.js v2.2+ that can be used to optimize page performance when a hybrid integration of Target is implemented. Hybrid integration means that you are using both at.js v2.2+ on the client-side and the delivery API or a Target SDK on the server-side to deliver experiences. `serverState` gives at.js v2.2+ the ability to apply experiences directly from content fetched on the server side and returned to the client as part of the page being served.

### Pre-requisites

You must have a hybrid integration of [!DNL Target].
  
* **Server-side**:  You must use the new [delivery API](https://developers.adobetarget.com/api/delivery-api/) or [Target SDKs](https://developers.adobetarget.com/api/delivery-api/#section/SDKs).
* **Client-side**: You must use [at.js version 2.2 or later](/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md).

### Code samples

To better understand how this works, please see the code examples below that you would have on your server. The code assumes you are using the [Target Node.js SDK](https://github.com/adobe/target-nodejs-sdk).

```javascript
// First, we fetch the offers via Target Node.js SDK API, as usual
const targetResponse = await targetClient.getOffers(options);
// A successfull response will contain Target Delivery API request and response objects, which we need to set as serverState
const serverState = {
  request: targetResponse.request,
  response: targetResponse.response
};
// Finally, we should set window.targetGlobalSettings.serverState in the returned page, by replacing it in a page template, for example
const PAGE_TEMPLATE = `
<!doctype html>
<html>
<head>
  ...
  <script>
    window.targetGlobalSettings = {
      overrideMboxEdgeServer: true,
      serverState: ${JSON.stringify(serverState, null, " ")}
    };
  </script>
  <script src="at.js"></script>
</head>
...
</html>
`;
// Return PAGE_TEMPLATE to the client ...
```

A sample `serverState` object JSON for view prefetch looks as follows:

```
{
 "request": {
  "requestId": "076ace1cd3624048bae1ced1f9e0c536",
  "id": {
   "tntId": "08210e2d751a44779b8313e2d2692b96.21_27"
  },
  "context": {
   "channel": "web",
   "timeOffsetInMinutes": 0
  },
  "experienceCloud": {
   "analytics": {
    "logging": "server_side",
    "supplementalDataId": "7D3AA246CC99FD7F-1B3DD2E75595498E"
   }
  },
  "prefetch": {
   "views": [
    {
     "address": {
      "url": "my.testsite.com/"
     }
    }
   ]
  }
 },
 "response": {
  "status": 200,
  "requestId": "076ace1cd3624048bae1ced1f9e0c536",
  "id": {
   "tntId": "08210e2d751a44779b8313e2d2692b96.21_27"
  },
  "client": "testclient",
  "edgeHost": "mboxedge21.tt.omtrdc.net",
  "prefetch": {
   "views": [
    {
     "name": "home",
     "key": "home",
     "options": [
      {
       "type": "actions",
       "content": [
        {
         "type": "setHtml",
         "selector": "#app > DIV.app-container:eq(0) > DIV.page-container:eq(0) > DIV:nth-of-type(2) > SECTION.section:eq(0) > DIV.container:eq(1) > DIV.heading:eq(0) > H1.title:eq(0)",
         "cssSelector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION:nth-of-type(1) > DIV:nth-of-type(2) > DIV:nth-of-type(1) > H1:nth-of-type(1)",
         "content": "<span style=\"color:#FF0000;\">Latest</span> Products for 2020"
        }
       ],
       "eventToken": "t0FRvoWosOqHmYL5G18QCZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
       "responseTokens": {
        "profile.memberlevel": "0",
        "geo.city": "dublin",
        "activity.id": "302740",
        "experience.name": "Experience B",
        "geo.country": "ireland"
       }
      }
     ],
     "state": "J+W1Fq18hxliDDJonTPfV0S+mzxapAO3d14M43EsM9f12A6QaqL+E3XKkRFlmq9U"
    }
   ]
  }
 }
}
```

After the page is loaded in the browser, at.js applies all the [!DNL Target] offers from `serverState` immediately, without firing any network calls against the [!DNL Target] edge. Additionally, at.js prehides only the DOM elements for which [!DNL Target] offers are available in the content fetched server-side, thus positively impacting page-load performance and end-user experience.

### Important Notes

Consider the following when using `serverState`:

* At the moment, at.js v2.2 supports only delivering experiences via serverState for:

  * VEC-created activities that are executed on page load.
  * Pre-fetched views.

    In case of SPAs using [!DNL Target] Views and `triggerView()` in the at.js API, at.js v2.2 caches the content for all Views prefetched on the server-side and applies these as soon as each View is triggered via `triggerView()`, again without firing any additional content-fetching calls to Target.

  * **Note**:  Currently, mboxes retrieved on the server-side is not supported in `serverState`.

* When applying `serverState `offers, at.js takes into consideration `pageLoadEnabled` and `viewsEnabled` settings, e.g. Page Load offers will not be applied if the `pageLoadEnabled` setting is false.

  To turn these settings on, enable the toggle in **[!UICONTROL Administration] > [!UICONTROL Implementation] > [!UICONTROL Edit] > [!UICONTROL Page Load Enabled]**.

  ![Page Load Enabled settings](/help/c-implementing-target/c-implementing-target-for-client-side-web/assets/page-load-enabled-setting.png)

* If you are using `serverState` and using `<script>` tags in the content returned, ensure that your HTML content uses `<\/script>` instead of `</script>`. If you use `</script>`, the browser interprets `</script>` as the end on an inline SCRIPT and it might break the HTML page.

### Additional resources

To learn more how `serverState` works, check out the following resources:

* [Sample code](https://github.com/Adobe-Marketing-Cloud/target-node-client-samples/tree/master/advanced-atjs-integration-serverstate).
* [Single Page Application (SPA) sample app with `serverState`](https://github.com/Adobe-Marketing-Cloud/target-node-client-samples/tree/master/react-shopping-cart-demo).
