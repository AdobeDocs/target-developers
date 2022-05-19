---
keywords:
- at.js
- functions
- javascript library
description: View a list of functions that can be used with the 1.x and 2.x versions of the at.js JavaScript library in Adobe Target.
title: What Functions Can I Use with at.js?
feature: at.js
role: Developer
exl-id: a386e478-16f4-4bf6-9771-6b1e75f2e362
---
# at.js functions

List of functions that can be used with the Adobe Target at.js JavaScript library. Click the links in the Function column for more information and examples.

|Function|Details|
| --- | --- | 
|[adobe.target.getOffer(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffer.md)|This function fires a request to get a Target offer. Use with `adobe.target.applyOffer()` to process the response or use your own success handling.|
|[adobe.target.getOffers(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffers-atjs-2.md)<br />(at.js 2.x)|This function lets you retrieve multiple offers by passing in multiple mboxes. Additionally, multiple offers can be retrieved for all views in active activities.<br />**Note:** This function was introduced with at.js 2.x. This function is not available for at.js version 1.*x*.|
|[adobe.target.applyOffer(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-applyoffer.md)|This function is for applying the response content.|
|[adobe.target.applyOffers(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-applyoffers-atjs-2.md)<br />(at.js 2.x)|This function lets you apply more than one offer that was retrieved by adobe.target.getOffers().<br />**Note:** This function was introduced with at.js 2.x. This function is not available for at.js version 1.*x*.|
|[adobe.target.triggerView (viewName, options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-triggerview-atjs-2.md)<br />(at.js 2.x)|This function can be called whenever a new page is loaded or when a component on a page is re-rendered.<br /> This function should be implemented for single page applications (SPAs) in order to use the Visual Experience Composer (VEC) to create A/B Tests and Experience Targeting (XT) activities.|
|[adobe.target.trackEvent(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-trackevent.md)|This function fires a request to report user actions, such as clicks and conversions. It does not deliver activities in the response.|
|[mboxCreate(mbox,params)](/src/pages/implement/client-side/atjs/atjs-functions/mboxcreate-atjs.md)<br />(at.js 1.x)|Executes a request and applies the offer to the closest DIV with mboxDefault class name.<br />**Note:** This function is available for at.js versions 1.*x* only. This function was deprecated with the release of at.js 2.x. This function returns default content if used with at.js 2.x.|
|[mboxDefine(options) and mboxUpdate(options)](/src/pages/implement/client-side/atjs/atjs-functions/mboxdefine-mboxupdate-atjs-1x.md)<br />(at.js 1.x)|Define and update an mbox.<br />**Note:** This function is available for at.js versions 1.*x* only. This function was deprecated with the release of at.js 2.x. This function returns default content if used with at.js 2.x.|
|[targetGlobalSettings(options)](/src/pages/implement/client-side/atjs/atjs-functions/targetglobalsettings.md)|You can override settings in the at.js library using `targetGlobalSettings()`, rather than configuring them in the Target Standard/Premium UI or by using REST APIs.<ul><li>Data Providers: This setting lets customers gather data from third-party data providers, such as Demandbase, BlueKai, and custom services, and pass the data to Target as mbox parameters in the global mbox request.</li></ul>|
|[targetPageParams(options)](/src/pages/implement/client-side/atjs/atjs-functions/targetpageparams.md)|This method allows you to attach parameters to the global mbox from outside of the request code.|
|[targetPageParamsAll(options)](/src/pages/implement/client-side/atjs/atjs-functions/targetpageparamsall.md)|This method allows you to attach parameters to all mboxes from outside of the request code.|
|[registerExtension(options)](/src/pages/implement/client-side/atjs/atjs-functions/registerextension-atjs-1x.md)<br />(at.js 1.x)|Provides a standard way to register a specific extension.<br />**Note:** This function is available for at.js versions 1.*x* only. This function was deprecated with the release of at.js 2.x. This function returns default content if used with at.js 2.x.|
|[at.js custom events](/src/pages/implement/client-side/atjs/atjs-functions/atjs-custom-events.md)|at.js custom events let you know when an mbox request or offer fails or succeeds.|
|[adobe.target.sendNotifications(options)](/src/pages/implement/client-side/atjs/atjs-functions/adobe.target.sendnotifications-atjs-21.md)<br />(at.js 2.1.0)|This function sends a notification to Target edge when an experience is rendered without using `adobe.target.applyOffer()` or `adobe.target.applyOffers()`.<br />**Note**: This function has been introduced in at.js 2.1.0 and will be available for any versions above 2.1.0.|
