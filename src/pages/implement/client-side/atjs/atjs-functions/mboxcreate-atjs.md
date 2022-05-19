---
keywords:
- mboxCreate
- mboxcreate
- mbox create
- at.js
- functions
- function
description: Use the mboxCreate() function for the Adobe Target at.js JavaScript library to apply offers to the closest DIV with the mboxDefault class name. (at.js 1.x)
title: How Do I Use the mboxCreate() Function?
feature: at.js
role: Developer
exl-id: 821ad97a-345a-4e56-9be6-ab1c7d3a651d
---
# mboxCreate(mbox,params) - at.js 1.x 

Executes a request and applies the offer to the closest DIV with mboxDefault class name.

<InlineAlert variant="info" slots="text"/>

This function is available for at.js versions 1.*x* only. This function was deprecated with the release of at.js 2.x. This function returns default content if used with at.js 2.x.

This function is built into at.js mostly to ease the transition from mbox.js (now deprecated) to at.js. A newer alternative to `mboxCreate()` is `adobe.target.getOffer()`/ `adobe.target.applyOffer()` or the Angular directive.

## Example

```javascript
<div class="mboxDefault"> 
  default content to replace by offer 
</div> 
<script> 
  mboxCreate('mboxName','param1=value1','param2=value2'); 
</script>
```

## Notes

`mboxCreate()` now uses the "json" endpoint instead of the "standard" endpoint and fires asynchronously. Because of this:

* [Debugging](/src/pages/implement/client-side/target-debugging-atjs/target-debugging-atjs.md) is a little different. 
* Avoid offer code requiring synchronous, blocking calls.

  For example, offers that set JavaScript variables that are used by site code or other mboxes that come later on the page.
  
* Be sure to have a `<div class="mboxDefault"></div>`before invoking `mboxCreate()`, because at.js will not add one for you. 

* Empty, top-of-page `mboxCreate()` functions are not recommended as a global mbox.

  The auto-created global mbox in at.js is a better option because it fires from the `<head>` and can return content earlier.
