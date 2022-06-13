---
keywords:
- adobe.target.applyOffers
- applyOffers
- applyoffers
- apply offers
- at.js
- functions
- function
description: Use the adobe.target.applyOffers() function for the Adobe Target at.js JavaScript library to apply multiple offers in the response. (at.js 2.x)
title: How Do I Use the adobe.target.applyOffers()  Function?
feature: at.js
role: Developer
exl-id: a6f4c755-e5a0-4228-90f3-0f9d3b092cd8
---
# adobe.target.applyOffers(options) - at.js 2.x

This function lets you apply more than one offer that was retrieved by `adobe.target.getOffers()`.

<InlineAlert variant="info" slots="text"/>

This function was introduced with at.js 2.x. This function is not available for at.js version 1.*x*.

|Key|Type|Required?|Description|
| --- | --- | --- | --- |
|selector|String|No|HTML element or CSS selector used to identify the HTML element where Target should place the offer content. If a selector is not provided, Target assumes that the HTML element to use is HTML HEAD.|
|Response|Object|Yes|Response object from `getOffers()`.<br />See Requests table below.|

## Response

<InlineAlert variant="info" slots="text"/>

Consult the [Delivery API documentation](../../../delivery-api/index.md) for information about the acceptable types for all fields listed below.

|Field Name|Description|
| --- | --- |
|response > prefetch > views > options > content|Note that the content of the "option" is not well-defined and depends directly on the option type/template structure.|
|response > prefetch > views > options > type|Option type. Reflects type of "content" field. Supported type is actions.|
|response > prefetch > views > state|An opaque view state token that should be forwarded with display notification for the view|
|response > prefetch  > views > options > responseTokens|Contains the map of `responseTokens` that have been collected when the current option was being processed.|
|response > prefetch  > views > analytics > payload|Analytics payload for client-side integration that should be sent to Analytics after the view has been applied.|
|response > prefetch  > views > trace|The object containing all trace data for the prefetch call per view.<br />The trace object will also include a version for the trace.<br />The trace object will also include details of the current view.|
|response > prefetch  > views > options > eventToken|Event logging is done per option. For every applied option the respective event token should to be added to the list of notification tokens. Note that a View is composed of multiple options. If all options have been applied and seen, all `eventTokens` need to be included in the notification.|
|response > prefetch  > views > name|The human-readable view name.|
|response > prefetch  > views > metrics|Reporting metrics that should be watched and then notify Target about. Currently, just click metric is supported. In case a click on the element happens, the appropriate `eventTokens` should be collected and a notification should be sent.|
|response > prefetch  > views > key|The key or fingerprint that identifies the view.|
|response > prefetch  > views > id|ID of the view.|
|response > notifications > id|Notification ID.|
|response > notifications > events > type|The type of the notification, click, or display.|
|response > notifications > events > trace|The trace for the notification event.|
|response > notifications > events > token|The token that was sent with the notification event.|
|response > notifications > events > timestamp|The timestamp that was sent with the notification event.|
|response > notifications > events > errorCode|If the notification failed, the code indicates the reason for the failure.|
|response > notifications > events|The events that were logged or failed to be logged for the current notification.|
|response > notifications|Indicates the logged or failed notifications.|
|response > execute > mboxes > mbox > trace|The object containing all trace data for the individual mbox request.|
|response > execute > mboxes > mbox > responseTokens|Contains map of `responseTokens` for specific mbox request execution.|
|response > execute > mboxes > mbox > option > content|Note that the content of the "option" is not well-defined and depends directly on the option type/template structure.|
|response > execute > mboxes > mbox > option > type|Option type. Reflects type of "content" field. Supported types are: html, redirect, JSON, and dynamic.|
|response > execute > mboxes > mbox > options|Response option.|
|response > execute > mboxes > mbox > metrics > eventToken|Token of click event.|
|response > execute > mboxes > mbox > metrics > type|"click"|
|response > execute > mboxes > mbox > metrics|Contains list of `clickThrough` metrics.|
|response > execute > mboxes > mbox > mbox|The name of the mbox.|
|response > execute > mboxes > mbox >index|Indicates that the response is for mbox with this index from the request.|
|response > execute > mboxes > mbox > analytics > payload|Analytics payload for client-side integration that should be sent to Analytics after the mbox has been applied. (See A4T-enabled Campaigns section.)|
|response > execute > mboxes|List of executed mboxes.|
|response > execute > pageLoad > options > content|Note that the content of the "option" is not well-defined and depends directly on the option type/template structure.|
|response > execute > pageLoad > options > type|Option type. Reflects type of "content" field. Supported types are: html, redirect, JSON, dynamic, and actions.|
|response > execute > pageLoad > options|Options that aren't grouped by views (target-global-mbox + options from activities with views not grouped by views).|
|response > execute > pageLoad > metrics|Click metrics that were not set to belong to a specific view.|
|response > execute > pageLoad > trace|The object containing all trace data for the pageLoad request.|
|response > execute > pageLoad > analytics > payload|Analytics payload for client-side integration that should be sent to Analytics after the page load content has been applied. (See A4T-enabled Campaigns section.)|

## Example applyOffers() call

```javascript
adobe.target.applyOffers({response:{
  "execute": {
    "pageLoad": {
      "options": [{
        "type": "html",
        "content": "page-load"
      },
      {
        "type": "actions",
        "content": [{
          "type": "setHtml",
          "content": "<h1>Container 1</h1>",
          "selector": "#container1",
          "cssSelector": "#container1"
        },
        {
          "type": "setHtml",
          "content": "<h3>Container 3</h3>",
          "selector": "#container3",
          "cssSelector": "#container3"
        }]
      }],
 
 
      "metrics": [{
        "type": "click",
        "selector": "#container1",
        "eventToken": "page-load-click-metric" 
      }]
    }
  }
}});
```

## Example calls of Promise chaining with `getOffers()` and `applyOffers()`, because these functions are Promise based

```javascript
adobe.target.getOffers({...})
.then(response => adobe.target.applyOffers({ response: response }))
.then(() => console.log("Success"))
.catch(error => console.log("Error", error));
```

For more examples on how to use getOffers(), please refer to the getOffers [documentation](adobe-target-getoffers-atjs-2.md)

### Page Load Request Example


```javascript
adobe.target.getOffers({
    request: {
        execute: {
            pageLoad: {}
        }
    }
}).
then(response => adobe.target.applyOffers({ response: response }))
.then(() => console.log("Success"))
.catch(error => console.log("Error", error));
```

