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

The following table indicates which [activity types](/help/main/c-activities/target-activities-guide.md) created by the [Form-based Experience Composer](/help/main/c-experiences/form-experience-composer.md) or [Visual Experience Composer](/help/main/c-experiences/c-visual-experience-composer/visual-experience-composer.md) (VEC) are supported or not supported for on-device decisioning.

|Activity type|Supported?|
| --- | --- |
|[A/B Test](/help/main/c-activities/t-test-ab/test-ab.md)|Yes|
|[Auto-Allocate](/help/main/c-activities/automated-traffic-allocation/automated-traffic-allocation.md)|No|
|[Auto-Target](/help/main/c-activities/auto-target/auto-target-to-optimize.md) ![Premium](/help/main/assets/premium.png)|No|
|[Multivariate Test](/help/main/c-activities/c-multivariate-testing/multivariate-testing.md) (MVT)|No|
|[Experience Targeting](/help/main/c-activities/t-experience-target/experience-target.md) (XT)|Yes|
|[Automated Personalization](/help/main/c-activities/t-automated-personalization/automated-personalization.md) ![Premium](/help/main/assets/premium.png)|No|
|[Recommendations](/help/main/c-recommendations/recommendations.md) ![Premium](/help/main/assets/premium.png)|No|
|[Activities using Analytics for Target](/help/main/c-integrating-target-with-mac/a4t/a4t.md) (A4T)|Yes|

## Audience targeting

The following table indicates which audience rules are supported or not supported for on-device decisioning. 

|Audience rule|Supported?|
| --- | --- |
|[Geo](/help/main/c-target/c-audiences/c-target-rules/geo.md)|Yes|
|[Network](/help/main/c-target/c-audiences/c-target-rules/network.md)|No|
|[Mobile](/help/main/c-target/c-audiences/c-target-rules/mobile.md)|No|
|[Custom parameters](/help/main/c-target/c-audiences/c-target-rules/custom-parameters.md)|Yes|
|[Operating System](/help/main/c-target/c-audiences/c-target-rules/operating-system.md)|Yes|
|[Site Pages](/help/main/c-target/c-audiences/c-target-rules/site-pages.md)|Yes|
|[Browser](/help/main/c-target/c-audiences/c-target-rules/browser.md)|Yes|
|[Visitor Profile](/help/main/c-target/c-audiences/c-target-rules/visitor-profile.md)|No|
|[Traffic Sources](/help/main/c-target/c-audiences/c-target-rules/traffic-sources.md)|No|
|[Time Frame](/help/main/c-target/c-audiences/c-target-rules/time-frame.md)|Yes|
|Adobe Experience Cloud Audiences<br />(Audiences from Adobe Analytics, Adobe Audience Manager, and Adobe Experience Manager|No|

### Geo targeting for on-device decisioning

To maintain minimal latency for on-device decisioning activities with geo-based audiences, Adobe recommends you provide the geo values yourself in the call to [getOffers](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-getoffers-atjs-2.md). Set the Geo object in the Context of the request. This means from the browser, a way to determine the location of each visitor. For example, you can perform an IP-to-Geo lookup, using a service you configure. Some hosting providers, such as Google Cloud, provide this functionality via custom headers in each `HttpServletRequest`.

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

However, if you are not able to perform IP-to-Geo lookups on your server, but you still want to perform on-device decisioning for [getOffers](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-getoffers-atjs-2.md) requests that contain geo-based audiences, this is also supported. The downside of this approach is that it uses a remote IP-to-Geo lookup, which adds latency to each `getOffers` call. This latency should be lower than a `getOffers` call with server-side decisioning, because it hits a CDN that is located close to your server. Provide only the "ipAddress" field in the Geo object in the Context of your request for the SDK to retrieve the geo-location of your visitor's IP address. If any other field in addition to the "ipAddress" is provided, the Target SDK will not fetch the geo-location metadata for resolution.

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
|[Auto-allocate to best experience](/help/main/c-activities/automated-traffic-allocation/automated-traffic-allocation.md)|No|
|[Auto-target for personalized experiences](/help/main/c-activities/auto-target/auto-target-to-optimize.md)|No|
