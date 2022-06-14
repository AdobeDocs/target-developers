---
keywords:
- adobe.target.trackEvent
- trackEvent
- trackevent
- track event
- at.js
- functions
- function
- preventDefault
- preventdefault
- prevent default
description: Use the adobe.target.trackEvent() function for the Adobe Target at.js JavaScript library to fire a request to report user actions, such as clicks and conversions on your site.
title: How Do I Use the adobe.target.trackEvent() Function?
feature: at.js
role: Developer
exl-id: 36005236-ce18-4845-b4fb-e52056018bc7
---
# adobe.target.trackEvent(options)

This function fires a request to report user actions, such as clicks and conversions. It does not deliver activities in the response.

These event-tracking mbox calls can then be used to define metrics in activities. For more information, see [Success Metrics](https://experienceleague.adobe.com/docs/target/using/activities/success-metrics/success-metrics.html) and [Track Conversions](../how-to-deployatjs/implement-target-without-a-tag-manager.md#track-conversions).

Here are the API details:

| Key | Type | Required | Description |
|--- |--- |--- |--- |
|mbox|String|Yes|Mbox name<br />**Note**: If a trackEvent() call is fired with an mbox name that has already fired on the page, the SDID of trackEvent() is reset and will be different than the Target calls on the page. However, firing a trackEvent() call with a different mbox name keeps the trackEvent() call's SDID consistent with the Page Load Request/triggerView() calls on the page.|
|selector|String|No|CSS selectors used to find the HTML elements. The event listeners will be attached to found elements.|
|type|String|No|Represents a registered event type. It can be both HTML known events like: click, mousedown ,etc., as well as custom HTML events.|
|preventDefault|Boolean|No|Indicates whether to use `event.preventDefault()` in the event listener callback. Defaults to false.<br />**Note**: Only `form[submit]` and `a[click]` are supported. Other scenarios are not supported due to complexity and huge amount of scenarios to support.|
|params|Object|No|Mbox parameters. An object of key-value pairs that has the following structure:<br />`{ "param1": "value1", "param2": "value2"}`|
|timeout|Number|No|Timeout in milliseconds.<br />If not specified, default value is used:<br />`...timeoutInSeconds: 0.15...}`|
|success|Function|No|A callback function used to signal that event has been reported.|
|error|Function|No|A callback function used to signal that event could not be reported.|

## Example

```javascript
<a href="https://asite.com">click me!</a> 
```

plus javaScript code to assign `trackEvent`:

```javascript
<script> 
$('a').click(function(event){ 
  adobe.target.trackEvent({'mbox':'homePageHero'}) 
}); 
</script> 
```

Or:

```javascript
adobe.target.trackEvent({ 
    "mbox": "clicked-cta", 
    "params": { 
        "param1": "value1" 
    } 
});
```

<InlineAlert variant="warning" slots="text"/>

If the mandatory fields are not set, no request is executed, and an error is thrown.
