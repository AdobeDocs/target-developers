---
keywords:
- flicker
- at.js
- implementation
- asynchronously
- asynchronous
- synchronously
- synchronous
description: Learn how at.js and Adobe Target prevent flicker (default content momentarily displays before being replaced by activity content) during page or app load.
title: How does at.js Manage Flicker?
feature: at.js
role: Developer
exl-id: f6c26973-e046-42ed-91db-95c8a4210a9d
---
# How at.js manages flicker

Information about how the Target at.js JavaScript library prevents flicker during page or app load.

Flicker happens when default content momentarily displays to visitors before it is replaced by the activity content. Flicker is undesirable because it can be confusing to visitors.

## Using an auto-created global mbox

If you enable the [Auto Create Global Mbox](/src/pages/implement/client-side/atjs/global-mbox/customize-global-mbox.md) setting when configuring at.js, at.js manages flicker by changing the opacity setting as the page loads. When at.js loads, it will change the opacity setting of the `<body>` element to "0", making the page initially invisible to visitors. After a response from Target is received—or if an error with the Target request is detected—at.js resets opacity to "1". This ensures that the visitor only sees the page after your activities' content has been applied.

If you enable the setting when configuring at.js, at.js will set HTML BODY style opacity to 0. After a response from Target is received, at.js resets HTML BODY opacity to 1.

Opacity set to 0 keeps the page content hidden to prevent flicker, but the browser still renders the page and loads all the necessary assets like CSS, images, etc.

If `opacity: 0` does not work in your implementation, you can also manage flicker by customizing `bodyHiddenStyle` and set it to `body {visibility:hidden !important}`. You can use either `body {opacity:0 !important}` or `body {visibility:hidden !important}`, whichever works best for your specific circumstance.

The following illustration shows the Hide Body and Show Body calls in both at.js 1.*x* and at.js 2.x.

**at.js 2.x**

![Target flow: at.js page load request](assets/atjs-20-flow-page-load-request.png)

**at.js 1.*x***

![alt image](assets/target-flow2.png)

For more information about the `bodyHiddenStyle` override, see [targetGlobalSettings()](/src/pages/implement/client-side/atjs/atjs-functions/targetglobalsettings.md).

## Managing flicker when loading at.js asynchronously

Loading at.js asynchronously is a great way to avoid blocking the browser from rendering; however, this technique can lead to flicker on the web page.

You can avoid flicker by using a pre-hiding snippet that will be visible after the relevant HTML elements are personalized by Target.

at.js can be loaded asynchronously, either directly embedded on the page or via a tag manager (for example Adobe Experience Platform Launch).

If at.js is embedded on the page, the snippet must be added before loading at.js. If you load at.js via a tag manager, which is also loaded asynchronously, you must add the snippet before loading the tag manager. If the tag manager is loaded syncronously, the script might be included within the tag manager before at.js.

The pre-hiding code snippet is as follows:

```
;(function(win, doc, style, timeout) {
  var STYLE_ID = 'at-body-style';

  function getParent() {
    return doc.getElementsByTagName('head')[0];
  }

  function addStyle(parent, id, def) {
    if (!parent) {
      return;
    }

    var style = doc.createElement('style');
    style.id = id;
    style.innerHTML = def;
    parent.appendChild(style);
  }

  function removeStyle(parent, id) {
    if (!parent) {
      return;
    }

    var style = doc.getElementById(id);

    if (!style) {
      return;
    }

    parent.removeChild(style);
  }

  addStyle(getParent(), STYLE_ID, style);
  setTimeout(function() {
    removeStyle(getParent(), STYLE_ID);
  }, timeout);
}(window, document, "body {opacity: 0 !important}", 3000));
```

By default the snippet pre-hides the whole HTML BODY. In some cases, you may only want to pre-hide certain HTML elements and not the entire page. You can achieve that by customizing the style parameter. It can be replaced with something that pre-hides only particular regions of the page.

For example, you have two regions identified by IDs container-1 and container-2, then the style can be replaced with the following:

```
#container-1, #container-2 {opacity: 0 !important}
```

Instead of the default:

```
body {opacity: 0 !important}
```

## Manage flicker in at.js 2.x for triggerView()

When using `triggerView()` to show targeted content in your SPA, flicker management is provided out of the box. This means that pre-hiding logic does not need to be added manually. Instead, at.js 2.x pre-hides the location where your view needs to be shown before applying the targeted content.

## Manage flicker with getOffer() and applyOffer()

Because both `getOffer()` and `applyOffer()` are low-level APIs, there is no built-in flicker control. You can pass a selector or HTML element as an option to `applyOffer()`, in this case `applyOffer()` adds the activity content to this particular element; however, you must make sure the element is properly pre-hidden before invoking `getOffer()` and `applyOffer()`.

```
document.documentElement.style.opacity = "0";
 
adobe.target.getOffer({
    mbox: 'target-global-mbox',
    success: function(offer) {
        adobe.target.applyOffer({
            mbox: 'target-global-mbox',
            offer: offer
        });
 
        document.documentElement.style.opacity = "1";
    },
    error: function() {
        document.documentElement.style.opacity = "1";        
    }
});
```

## Using a regional mbox with mboxCreate() in at.js 1.x (not supported in at.js 2.x)

If you use a regional mbox implementation, you can use `mboxCreate()` with your page provisioned similar to the following sample code:

```
<div class="mboxDefault">
Some default content
</div>
<script>
mboxCreate('some-mbox');
</script>
```

If your pages are properly provisioned, at.js manages flicker by appropriately switching the CSS "visibility" property of the element with the mboxDefault class.
