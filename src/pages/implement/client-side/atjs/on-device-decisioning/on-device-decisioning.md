---
keywords:
- implementation
- javascript library
- js
- atjs
- on-device decisioning
- on device decisioning
- at.js
- on-device
- on device
description: Learn how to perform on-device decisioning with the at.js library
title: How Does On-device Decisioning Work with the at.js JavaScript Library?
feature: at.js
role: Developer
exl-id: 5ad6032b-9865-4c80-8800-705673657286
---
# On-device decisioning for at.js

Starting with version 2.5.0, at.js offers on-device decisioning. On-device decisioning lets you cache your [A/B Test](https://experienceleague.adobe.com/docs/target/using/activities/abtest/test-ab.html) and [Experience Targeting](https://experienceleague.adobe.com/docs/target/using/activities/experience-targeting/experience-target.html) (XT) activities on the browser to perform in-memory decisioning without a blocking network request to the Adobe Target Edge Network. 

<InlineAlert variant="info" slots="text"/>

On-device decisioning is available for both client-side as well as server-side implementations. This article describes on-device decisioning for client-side. For information regarding on-device decisioning for server-side, reference the server-side implementation documentation [here](../../../server-side/sdk-guides/on-device-decisioning/).

Target also offers the flexibility of delivering the most relevant and up-to-date experience from your experimentation and Machine Learning-driven (ML-driven) personalization activities via a live server call. In other words, when performance is most important, you can choose to use on-device decisioning. However, when the most relevant, up-to-date, and ML-driven experience is needed, a server call can be made instead.

## What are the benefits of on-device decisioning?

The benefits of on-device decisioning include:

* **Deliver blazing fast decisions and experiences.** Bucketing and decisioning are performed in-memory and on the browser to avoid blocking network requests. 
* **Enhance application performance.** Run experiments and deliver personalization to your customers and users without compromising end-user experiences. 
* **Improve Google Site Quality Score.** With decisioning happening in-memory, improve the Google Site Quality score of your online business to make it more discoverable by consumers. 
* **Learn from real-time analytics.** Gain insights from your activity performance in real time via [Analytics for Target](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html) (A4T) reporting. A4T allows you to pivot your strategy at critical moments.

## Supported features

The Adobe Target JS SDK gives customers the flexibility to choose between performance and freshness of data for decisions. In other words, if delivering the most relevant and engaging personalized content via machine learning is most important to you, a live server call should be made. But when performance is more critical, an on-device and in-memory decision should be made. For on-device decisioning to work, refer to the list of features that are supported: 

* Activity types
* Audience targeting
* Allocation method

For more information, see [Supported features for on-device decisioning](/src/pages/implement/client-side/atjs/on-device-decisioning/supported-features.md).

## How does on-device decisioning work?

When you deploy and initialize at.js with on-device decisioning enabled, a [rule artifact](/src/pages/implement/client-side/atjs/on-device-decisioning/rule-artifact.md) that includes your on-device decisioning for A/B and XT activities, audiences, and assets, is downloaded from the closest Akamai CDN to your visitor and cached locally on your visitor's browser. When a request is made from at.js to retrieve an experience, the decision regarding which experience to return is made in-memory, based on the metadata encoded in the cached rule artifact.

## Decisioning method

With on-device decisioning, Target introduces a new setting called Decisioning Method. The Decisioning Method setting dictates how at.js delivers your experiences. Decisioning Method has three values:

* Server-side only
* On-device only
* Hybrid

### Server-side only

Server-side only is the default decisioning method that is set out of the box when at.js 2.5.0+ is implemented and deployed on your web properties.

Using server-side only as the default configuration means that all decisions are made on the Target edge network, which involves a blocking server call. This approach can introduce incremental latency, but it also provides significant benefits, such as giving you the ability to apply Target’s machine-learning capabilities that include [Recommendations](https://experienceleague.adobe.com/docs/target/using/recommendations/recommendations.html), [Automated Personalization](https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html) (AP), and [Auto-Target](https://experienceleague.adobe.com/docs/target/using/activities/auto-target/auto-target-to-optimize.html) activities. 

Furthermore, enhancing your personalized experiences by using Target’s user profile, which is persisted across sessions and channels, can provide powerful outcomes for your business. 

Lastly, server-side only lets you use the Adobe Experience Cloud and fine-tune audiences that can be targeted against through Audience Manager and Adobe Analytics segments. 

The following diagram illustrates the interaction between your visitor, the browser, at.js 2.5.0+, and the Adobe Target Edge network. This flow diagram captures new visitors and returning visitors.

![Server-side only flow diagram](/assets/server-side-only.png)

The following list corresponds to the numbers in the diagram:

|Step|Description|
| --- | --- |
|1|The Experience Cloud Visitor ID is retrieved from the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/home.html?).|
|2|The at.js library loads synchronously and hides the document body.<br />   The at.js library can also be loaded asynchronously with an optional pre-hiding snippet implemented on the page.|
|3|The at.js library hides the body to prevent flickering.|
|4|A page-load request is made that includes all configured parameters, such as (ECID, Customer ID, Custom Parameters, User Profile, and so forth.)|
|5|Profile scripts execute and then feed into the Profile Store.<br />The Profile Store requests qualified audiences from the Audience Library (for example, audiences shared from Adobe Analytics, Adobe Audience Manager, and so forth.).<br />Customer attributes are sent to the Profile Store in a batch process.|
|6|The Profile Store is used for audience qualification and bucketing to filter activities.|
|7|The resulting content is selected after the experience is determined from live Target activities.|
|8|The at.js library hides the corresponding elements on the page that are associated with the experience that must be rendered.|
|9|The at.js library displays the body so that the rest of the page can be loaded for your visitor to view.|
|10|The at.js library manipulates the DOM to render the experience from the Target Edge Network.|
|11|The experience renders for the visitor.|
|12|The entire web page loads.|
|13|Analytics data is sent to Data Collection servers.| 
|14|Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.|

### On-device only

On-device only is the decisioning method that must be set in at.js 2.5.0+ when on-device decisioning should be used only throughout your web pages. 

On-device decisioning can deliver your experiences and personalization activities at blazing fast speed because the decisions are made from a cached rules artifact that contains all of your activities that qualify for on-device decisioning. 

To learn more about which activities qualify for on-device decisioning, see [Supported features in on-device decisioning](/src/pages/implement/client-side/atjs/on-device-decisioning/supported-features.md). 

This decisioning method should be used only if performance is highly critical across all the pages that require decisions from Target. Furthermore, keep in mind that when this decisioning method is selected, your Target activities that do not qualify for on-device decisioning will not be delivered or executed. The at.js library 2.5.0+ is configured to only look for the cached rules artifact to make decisions.  

The following diagram illustrates the interaction between your visitor, the browser, at.js 2.5.0+, and the Akamai CDN. The Akamai CDN caches the rules artifact for the visitor's first visit. For the first page visit for a new visitor, the JSON rules artifact must be downloaded from the Akamai CDN to be cached locally on the visitor's browser. After the JSON rules artifact is downloaded, the decision is made immediately without a blocking network call. The following flow diagram captures new visitors.

![On-device only flow diagram](/assets/on-device-only.png)

The following list corresponds to the numbers in the diagram:

<InlineAlert variant="info" slots="text"/>

Adobe Target Admin servers qualify all of your activities that are eligible for on-device decisioning, generate the JSON rules artifact, and propagates it to the Akamai CDN. Your activities are continuously monitored for updates to output a new JSON rules artifact to be propagated to the Akamai CDN.

|Step|Description|
| --- | --- |
|1|The Experience Cloud Visitor ID is retrieved from the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/home.html).|
|2|The at.js library loads synchronously and hides the document body.<br />The at.js library can also be loaded asynchronously with an optional pre-hiding snippet implemented on the page.|
|3|The at.js library hides the body to prevent flickering.|
|4|The at.js library makes a request to retrieve the JSON rule artifact from the nearest Akamai CDN to the visitor.|
|5|The Akamai CDN responds with the JSON rule artifact.|
|6|The JSON rule artifact is cached locally on the visitor's browser.|
|7|The at.js library interprets the JSON rule artifact and executes the decision to retrieve the experience and hides the tested elements.|
|8|The at.js library displays the body so that the rest of the page can be loaded for your visitor to view.|
|9|The at.js library manipulates the DOM to render the experience from the cached JSON rule artifact.|
|10|The experience renders for the visitor.|
|11|The entire web page loads.| 
|12|Analytics data is sent to Data Collection servers. Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.|

The following diagram illustrates the interaction between your visitor, the browser, at.js 2.5.0+, and the cached JSON rule artifact for the visitor's subsequent page hit or returning visit. Because the JSON rules artifact is already cached and available on the browser, the decision is made immediately without a blocking network call. This flow diagram captures subsequent page navigation or returning visitors.

![On-device only flow diagram for subsequent page navigation and repeat visits](/assets/on-device-only-subsequent.png)

The following list corresponds to the numbers in the diagram:

<InlineAlert variant="info" slots="text"/>

Adobe Target Admin servers qualify all of your activities that are eligible for on-device decisioning, generate the JSON rules artifact, and propagates it to the Akamai CDN. Your activities are continuously monitored for updates to output a new JSON rules artifact to be propagated to the Akamai CDN.

|Step|Description|
| --- | --- |
|1|The Experience Cloud Visitor ID is retrieved from the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/home.html).|
|2|The at.js library loads synchronously and hides the document body.<br />The at.js library can also be loaded asynchronously with an optional pre-hiding snippet implemented on the page.|
|3|The at.js library hides the body to prevent flickering.|
|4|The at.js library interprets the JSON rule artifact and executes the decision in memory to retrieve the experience.|
|5|The tested elements are hidden.|
|6|The at.js library displays the body so that the rest of the page can be loaded for your visitor to view.|
|7|The at.js library manipulates the DOM to render the experience from the cached JSON rule artifact.|
|8|The experience renders for the visitor.|
|9|The entire web page loads.|
|10|Analytics data is sent to Data Collection servers. Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.|

### Hybrid

Hybrid is the decisioning method that must be set in at.js 2.5.0+ when both on-device decisioning and activities that require a network call to the Adobe Target Edge network must be executed. 

When you are managing both on-device decisioning activities and server-side activities, it can be a bit complicated and tedious when thinking about how to deploy and provision Target on your pages. With hybrid as the decisioning method, Target knows when it must make a server call to the Adobe Target Edge network for activities that require server-side execution, and also when to only execute on-device decisions. 

The JSON rules artifact includes metadata to inform at.js whether an mbox has a server-side activity running or an on-device decisioning activity. This decisioning method ensures that activities you intend to be delivered quickly are done through on-device decisioning and for activities that require more powerful ML-driven personalization, those activities are done via the Adobe Target Edge network.

The following diagram illustrates the interaction between your visitor, the browser, at.js 2.5.0+, the Akamai CDN, and the Adobe Target Edge Network for a new visitor visiting your page for the first time. The takeaway from this diagram is that the JSON rules artifact is downloaded asynchronously while the decisions are made through the Adobe Target Edge network. 

This approach ensures that the size of the artifact, which can include many activities, doesn’t negatively influence the latency of the decision. Downloading the JSON rules artifact synchronously and making the decision thereafter can also have adverse effects to latency and can be inconsistent. Therefore, the hybrid decisioning method is a best practice recommendation to always make a server-side call for the decision for a new visitor, and as the JSON rules artifact is cached in parallel. For any subsequent page visits and return visits, the decisions are made from the cache and in-memory through the JSON rules artifact.

![Hybrid flow diagram for a first-time visitor](/assets/hybrid-first-time-visitor.png)

The following list corresponds to the numbers in the diagram:

<InlineAlert variant="info" slots="text"/>

Adobe Target Admin servers qualify all of your activities that are eligible for on-device decisioning, generate the JSON rules artifact, and propagates it to the Akamai CDN. Your activities are continuously monitored for updates to output a new JSON rules artifact to be propagated to the Akamai CDN.

|Step|Description|
| --- | --- |
|1|The Experience Cloud Visitor ID is retrieved from the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/home.html).|
|2|The at.js library loads synchronously and hides the document body.<br />The at.js library can also be loaded asynchronously with an optional pre-hiding snippet implemented on the page.|
|3|The at.js library hides the body to prevent flickering.|
|4|A page-load request is made to the Adobe Target Edge Network, including all configured parameters such as (ECID, Customer ID, Custom Parameters, User Profile, and so forth.)| 
|5|In parallel, at.js makes a request to retrieve the JSON rule artifact from the nearest Akamai CDN to the visitor.|
|6|(Adobe Target Edge Network) Profile scripts execute and then feed into the Profile Store. The Profile Store requests qualified audiences from the Audience Library (for example, audiences shared from Adobe Analytics, Adobe Audience Manager, and so forth.).|
|7|The Akamai CDN responds with the JSON rule artifact.|
|8|The Profile Store is used for audience qualification and bucketing to filter activities.|
|9|The resulting content is selected after the experience is determined from live Target activities.|
|10|The at.js library hides the corresponding elements on the page that are associated with the experience that must be rendered.|
|11|The at.js library displays the body so that the rest of the page can be loaded for your visitor to view.|
|12|The at.js library manipulates the DOM to render the experience from the Target Edge Network.|
|13|The experience renders for the visitor.|
|14|The entire web page loads.|
|15|Analytics data is sent to Data Collection servers. Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.|

The following diagram illustrates the interaction between your visitor, the browser, at.js 2.5.0+, and the cached JSON rules artifact for a subsequent page navigation or a return visit. In this diagram, focus only on the use case that an on-device decision is made for the subsequent page navigation or return visit. Keep in mind that depending on which activities are live for certain pages, a server-side call can be made to execute server-side decisions.

![Hybrid flow diagram for subsequent page navigation and repeat visits](/assets/hybrid-subsequent.png)

The following list corresponds to the numbers in the diagram:

<InlineAlert variant="info" slots="text"/>

Adobe Target Admin servers qualify all of your activities that are eligible for on-device decisioning, generate the JSON rules artifact, and propagates it to the Akamai CDN. Your activities are continuously monitored for updates to output a new JSON rules artifact to be propagated to the Akamai CDN.

|Step|Description|
| --- | --- |
|1|The Experience Cloud Visitor ID is retrieved from the [Adobe Experience Cloud Identity Service](https://experienceleague.adobe.com/docs/id-service/using/home.html).|
|2|The at.js library loads synchronously and hides the document body.<br />The at.js library can also be loaded asynchronously with an optional pre-hiding snippet implemented on the page.|
|3|The at.js library hides the body to prevent flickering.|
|4|A request is made to retrieve an experience.|
|5|The at.js library confirms that the JSON rule artifact has already been cached and executes the decision in memory to retrieve the experience.| 
|6|The tested elements are hidden.|
|7|The at.js library displays the body so that the rest of the page can be loaded for your visitor to view.|
|8|The at.js library manipulates the DOM to render the experience from the cached JSON rule artifact.| 
|9|The experience renders for the visitor.|
|10|The entire web page loads.|
|11|Analytics data is sent to Data Collection servers. Targeted data is matched to Analytics data via the SDID and is processed into the Analytics reporting storage. Analytics data can then be viewed in both Analytics and Target via Analytics for Target (A4T) reports.|

## How do I enable on-device decisioning?

On-device decisioning is available for all Target customers who use At.js 2.5.0+. 

To enable on-device decisioning:

<InlineAlert variant="info" slots="text"/>

You must have the Admin or Approver [user role](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html) to enable or disable the On-Device Decisioning toggle.

1. Click **Administration** > **Implementation** > **Account details**.
2. Under **Account details**, slide the **On-Device Decisioning** toggle to the "on" position.

   ![On-device decisioning toggle](/assets/on-device-decisioning-toggle.png)

   The "Include all existing on-device decisioning qualified activities in the artifact" option displays if you enable on-device decisioning.
3. (Conditional) Slide the toggle to the "on" position if you want all your live Target activities that qualify for on-device decisioning to be automatically included in the artifact.

   Leaving this toggle off means you must re-create and activate any on-device decisioning activities for them to be included in the generated rules artifact. In other words, any activity in live state before turning on the On-Device Decisioning toggle are not included in the rules artifact.

After enabling the On-Device Decisioning toggle, Target begins generating and propagating [rule artifacts](/src/pages/implement/client-side/atjs/on-device-decisioning/rule-artifact.md) for your client.

<InlineAlert variant="warning" slots="text"/>

Make sure you enable the toggle before you initialize the Adobe Target SDK to use on-device decisioning. The rule artifacts first need to generate and propagate to the Akamai CDNs for on-device decisioning to work. Propagation can take five to ten minutes for the first rule artifact to generate and propagate to the Akamai CDN.

## How do I configure at.js 2.5.0+ to use on-device decisioning?

1. Click **Administration** > **Implementation** > **Account details**.
2. Under **Implementation Methods** > **Main Implementation Method**, click **Edit** next to your at.js version (must be at.js 2.5.0 or later).
 
   ![Edit Main Implementation Method settings](/assets/main-implementation-method.png)

<InlineAlert variant="warning" slots="text"/>

Before changing these default settings, consult with Client Care to avoid affecting your current implementation.

3. Select the desired decisioning method:

   * Server-side only
   * On-device only
   * Hybrid

   ![Edit at.js settings panel](/assets/global-settings.png)

### Global settings

You can configure a default Decisioning Method for all of Target decisions. The various decisioning methods are Server-side only, On-device only, and Hybrid. The decisioning method that is selected in the Target UI is configured in `window.targetGlobalSettings` under the `decisioningMethod` field. Learn more about the `decisioningMethod` in [targetGlobalSettings()](/src/pages/implement/client-side/atjs/atjs-functions/targetglobalsettings.md#decisioningmethod).

```javascript
<head> 
    <script type="text/javascript">

        window.targetGlobalSettings = { 
            clientCode: "yourClientCodeHere", 
            imsOrgId: "imsOrgId@AdobeOrg", 
            decisioningMethod: "on-device"

        }; 
    </script>

    <script type="text/javascript" src="at.js"></script> 
</head>
```

### Customized setting

If you set the `decisioningMethod` in `window.targetGlobalSettings`, but would like to override the `decisioningMethod` for each Adobe Target decision according to your use case, you can do this procedure by specifying `decisioningMethod` in At.js2.5.0+’s [getOffers()](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffers-atjs-2.md) call.

```javascript
adobe.target.getOffers({ 

  decisioningMethod:"on-device", 
  request: { 
    execute: { 
      mboxes: [ 
        { 
          index: 0, 
          name: "homepage" 
        } 
      ] 
    } 
 } 
});
```

<InlineAlert variant="info" slots="text"/>

In order to use “on-device” or “hybrid” as a decisioning method in the getOffers() call, ensure that the global setting has `decisioningMethod` as “on-device” or “hybrid.” The at.js library 2.5.0+ must know whether to download and cache the JSON rules artifact immediately after loading on the page. If the decisioning method for the global setting is set to “server-side”, and “on-device” or “hybrid” decisioning method is passed into the getOffers() call, at.js 2.5.0+ would not have the JSON rule artifact cached to execute your on-device decisions.

### Artifact Cache TTL

Target represents your activities that qualify for on-device decisioning as an artifact that consists of metadata, rules, and conditions. This artifact is cached on the Akamai CDN. During the first-time visit of your user, the user's browser downloads and caches the artifact that represents your on-device decisioning activities. 

On subsequent visits to your site, the browser automatically checks whether it must download a newer version of the artifact. This check adds latency. The Artifact Cache TTL defines the number of minutes you don't want the browser to check for an updated artifact since the last successful download. The longer the time frame, the better the performance. The shorter the time frame, the better the data freshness, but at the cost of added latency.

## How do I know that an activity is on-device decisioning eligible?

After you create an activity that is on-device decisioning eligible, a label that reads On-Device Decisioning Eligible, is visible in the activity's Overview page. 

![On-Device Decisioning Eligible label on the activity's Overview page.](/assets/on-device-decisioning-eligible-label.png)

This label does not mean that the activity will always be delivered via on-device decisioning. Only when at.js 2.5.0+ is configured to use on-device decisioning will this activity be executed on-device. If at.js 2.5.0+ is not configured to use on-device, then this activity will still be delivered via a server call that is made from at.js.

You can filter for all activities that are on-device decisioning eligible on the Activities page via the On-Device Decisioning Eligible filter.

![On-Device Decisioning Eligible filter on Activities page.](/assets/on-device-decisioning-filter.png)

<InlineAlert variant="info" slots="text"/>

After creating and activating an activity that is on-device decisioning eligible, it can take five to ten minutes before it is included in the rules artifact that is generated and propagated to the Akamai CDN point of presences.

## Summary of steps to ensure my on-device decisioning activities are delivered via At.js 2.5.0+?

1. Access the Adobe Target UI and navigate to **Administration** > **Implementation** > **Account Details** to enable the **On-Device Decisioning** toggle. 
1. Enable the **"Include all existing on-device decisioning qualified activities in the artifact"** toggle. 

   The first JSON rules artifact generation can take up to 10 minutes. 

2. Create and activate an [activity type that is supported by on-device decisioning](/src/pages/implement/client-side/atjs/on-device-decisioning/supported-features.md), and verify that it is on-device decisioning eligible. 
3. Set the **Decisioning Method** to either **“Hybrid”** or **“On-device only”** through the at.js settings UI. 
4. Download and deploy At.js 2.5.0+ to your pages.
