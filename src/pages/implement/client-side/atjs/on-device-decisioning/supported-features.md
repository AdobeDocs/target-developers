---
keywords:
- implementation
- javascript library
- js
- atjs
- on-device decisioning
- on device decisioning
- supported features
description: Learn which features are supported for on-device decisioning.
title: Which Features Are Supported in On-Device Decisioning
feature: at.js
role: Developer
exl-id: 3531ff55-c3db-44c1-8d0a-d7ec2ccb6505
---
# Supported features for on-device decisioning

The Adobe Target JS SDK gives customers the flexibility to choose between performance and freshness of data for decisions. In other words, if delivering the most relevant and engaging personalized content via machine learning is most important to you, a live server call should be made. But when performance is more critical, an on-device and in-memory decision should be made. For on-device decisioning to work, refer to the following sections that list the features that are supported.

## Supported activity types

The following table indicates which [activity types](https://experienceleague.adobe.com/docs/target/using/activities/target-activities-guide.html) created by the [Form-based Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html) or [Visual Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html) (VEC) are supported or not supported for on-device decisioning.

|Activity type|Supported?|
| --- | --- |
|[A/B Test](https://experienceleague.adobe.com/docs/target/using/activities/abtest/test-ab.html)|Yes|
|[Auto-Allocate](https://experienceleague.adobe.com/docs/target/using/activities/auto-allocate/automated-traffic-allocation.html)|No|
|[Auto-Target](https://experienceleague.adobe.com/docs/target/using/activities/auto-target/auto-target-to-optimize.html) ![Premium](../../../assets/premium.png)|No|
|[Multivariate Test](https://experienceleague.adobe.com/docs/target/using/activities/multivariate-test/multivariate-testing.html) (MVT)|No|
|[Experience Targeting](https://experienceleague.adobe.com/docs/target/using/activities/experience-targeting/experience-target.html) (XT)|Yes|
|[Automated Personalization](https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html) ![Premium](../../../assets/premium.png)|No|
|[Recommendations](https://experienceleague.adobe.com/docs/target/using/recommendations/recommendations.html) ![Premium](../../../assets/premium.png)|No|
|[Activities using Analytics for Target](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html?) (A4T)|Yes|

## Audience targeting

The following table indicates which audience rules are supported or not supported for on-device decisioning. 

|Audience rule|Supported?|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html)|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html)|No|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html)|No|
|[Custom parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html)|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html)|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html)|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html)|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)|No|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html)|No|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html)|Yes|
|Adobe Experience Cloud Audiences<br />(Audiences from Adobe Analytics, Adobe Audience Manager, and Adobe Experience Manager|No|

### Geo targeting for on-device decisioning

To maintain minimal latency for on-device decisioning activities with geo-based audiences, Adobe recommends you provide the geo values yourself in the call to [getOffers](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffers-atjs-2.md). Set the Geo object in the Context of the request. This means from the browser, a way to determine the location of each visitor. For example, you can perform an IP-to-Geo lookup, using a service you configure. Some hosting providers, such as Google Cloud, provide this functionality via custom headers in each `HttpServletRequest`.

```javascript
window.adobe.target.getOffers({ 
	decisioningMethod: "on-device", 
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

However, if you are not able to perform IP-to-Geo lookups on your server, but you still want to perform on-device decisioning for [getOffers](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffers-atjs-2.md) requests that contain geo-based audiences, this is also supported. The downside of this approach is that it uses a remote IP-to-Geo lookup, which adds latency to each `getOffers` call. This latency should be lower than a `getOffers` call with server-side decisioning, because it hits a CDN that is located close to your server. Provide only the "ipAddress" field in the Geo object in the Context of your request for the SDK to retrieve the geo-location of your visitor's IP address. If any other field in addition to the "ipAddress" is provided, the Target SDK will not fetch the geo-location metadata for resolution.

```javascript
window.adobe.target.getOffers({ 
	decisioningMethod: "on-device", 
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

### Allocation method

The following table indicates which allocation methods are supported or not supported for on-device decisioning.

|Allocation method|Supported?|
| --- | --- |
|Manual|Yes|
|[Auto-allocate to best experience](https://experienceleague.adobe.com/docs/target/using/activities/auto-allocate/automated-traffic-allocation.html)|No|
|[Auto-target for personalized experiences](https://experienceleague.adobe.com/docs/target/using/activities/auto-target/auto-target-to-optimize.html)|No|
