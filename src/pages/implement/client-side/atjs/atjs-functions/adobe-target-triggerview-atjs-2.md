---
keywords:
- adobe.target.triggerView
- triggerView
- triggerview
- trigger view
- at.js
- functions
- function
- viewName
- viewname
- view name
description: Use the adobe.target.triggerView() function for the Adobe Target at.js JavaScript library for use in Single Page Applications (SPAs). (at.js 2.x)
title: How Do I Use the adobe.target.triggerView() Function?
feature: at.js
role: Developer
exl-id: 619d5166-d1d9-49a6-9807-338544782e66
---
# adobe.target.triggerView (viewName, options) - at.js 2.x

This function can be called whenever a new page is loaded or when a component on a page is re-rendered. `adobe.target.triggerView()` should be implemented for single page applications (SPAs) in order to use the Visual Experience Composer (VEC) to create A/B Tests and Experience Targeting (XT) activities. If `adobe.target.triggerView()` is not implemented on the site, the VEC cannot be utilized for SPA. For more information, see [Single Page Application implementation](/src/pages/implement/client-side/atjs/how-to-deployatjs/target-atjs-single-page-application.md).

<InlineAlert variant="info" slots="text"/>

This function was introduced with at.js 2.x. This function is not available for at.js version 1.*x*.

|Parameter|Type|Required?|Description|
| --- | --- | --- | --- |
|viewName|String|Yes|Pass in any name as a string type that you want to represent your view. This view name appears in the Modifications panel of the VEC for marketers to create actions and run their A/B and XT activities.|
|options|Object|No||
|options > page|Boolean|No|**TRUE:** Default value of page is true. When page=true, notifications are sent to the Target backend for incrementing impression count.<br />A notification is always sent by default when a `triggerView` is called, except when options > page is set to false.<br />**FALSE:** When page=false, notifications are not sent for incrementing impression count. This should be used when you want to only re-render a component on a page with an offer.|

## Example: True

`triggerView()` call to send a notification to the Target backend for incrementing activity impressions and other metrics.

```javascript
adobe.target.triggerView("homeView")
```

## Example: False

`triggerView()` call to not have notifications sent to the Target backend for impression counting.

```javascript
adobe.target.triggerView("homeView", {page: false})
```
