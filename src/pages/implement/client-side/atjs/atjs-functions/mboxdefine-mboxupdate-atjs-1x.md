---
keywords:
- mboxDefine
- mboxdefine
- mbox define
- mboxUpdate
- mboxupdate
- mbox update
- at.js
- functions
- function
description: Use the mboxDefine() and mboxUpdate() functions for the Adobe Target at.js JavaScript library to define or update an mbox. (at.js 1.x)
title: How Do I Use the mboxDefine() And mboxUpdate() Functions?
feature: at.js
role: Developer
exl-id: 48261be0-c4d0-4961-9712-ef7e0d2cb1c0
---
# mboxDefine() and mboxUpdate() - at.js 1.x

Define and update an mbox in Adobe Target.

<InlineAlert variant="info" slots="text"/>

These functions are available for at.js versions 1.*x* only. These functions were deprecated with the release of at.js 2.x. These functions return default content if used with at.js 2.x.

`mboxDefine()` and `mboxCreate()` are tied to HTML DIV elements where the offer should be displayed. These HTML DIV elements should have the `mboxDefault` class. If the HTML elements won't have this class attached, you could see some noticeable flicker.

## mboxDefine

Creates an internal mapping between a nodeId and an mbox name, but does not execute the request. Used in conjunction with `mboxUpdate()`. Built into at.js mostly to ease the transition from mbox.js (now deprecated) to at.js.

## mboxUpdate

Executes the request and applies the offer to the element identified by the `nodeId` in the `mboxDefine()`. Can also be used to update an mbox initiated by `mboxCreate`. Built into at.js mostly to ease the transition from mbox.js (now deprecated) to at.js. `mboxDefine()`/ `mboxUpdate()` could be replaced by [adobe.target.getOffer()](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-getoffer.md) and [adobe.target.applyOffer()](/src/pages/implement/client-side/atjs/atjs-functions/adobe-target-applyoffer.md) using the selector option.

## Example

```javascript
<div id="someId" class="mboxDefault"></div> 
<script> 
 mboxDefine('someId','mboxName','param1=value1','param2=value2'); 
 mboxUpdate('mboxName','param3=value3','param4=value4'); 
</script>
```
