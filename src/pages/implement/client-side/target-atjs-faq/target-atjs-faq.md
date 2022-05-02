---
keywords:
- at.js faq
- at.js frequently asked questions
- faq
- flicker
- loader
- page loader
- cross domain
- file size
- filesize
- x-domain
- at.js and mbox.js
- x only
- cross domain
- safari
- single page app
- missing selectors
- selectors
- single page application
- tt.omtrdc.net
- spa
- Adobe Experience Manager
- AEM
- ip address
- httponly
- HttpOnly
- secure
- ip
- cookie domain
description: Read answers to frequently asked questions about the Adobe Target at.js JavaScript library.
title: What Are Common Questions and Answers About at.js?
feature: at.js
role: Developer
exl-id: 937f880a-1842-4655-be44-0a5614c2dbcc
---
# at.js Frequently Asked Questions

Answers to frequently asked questions about the Adobe Target at.js JavaScript library.

## What are the advantages of using at.js versus mbox.js? {#section_FE30D01A577C46ACB0F787B85F5E0F6B}

The at.js library replaces mbox.js. The mbox.js library is no longer supported. However, for most people, at.js provides advantages over mbox.js.

Among other benefits, at.js improves page-load times for web implementations, improves security, and provides better implementation options for single-page applications.

The following diagram illustrates page-load performance using mbox.js versus at.js.

![alt image](assets/atjs_vesus_mboxjs.png)

As illustrated above, using mbox.js, page content did not begin to load until after the Target call is complete. Using at.js, page content begins loading when the Target call is initiated and does not wait until the call is complete.

## What is the impact of at.js and mbox.js on page-load time? {#page-load}

Many customers and consultants want to know the impact of at.js and mbox.js on page-load time, especially in the context of new vs returning users. Unfortunately, it's hard to measure and give concrete numbers regarding how at.js or mbox.js influence page-load time due to each customer's implementation.

However, if the Visitor API is present on the page, Target can better understand how at.js and mbox.js influence page-load time.

<InlineAlert variant="info" slots="text"/>

The Visitor API and at.js or mbox.js have an impact on page-load time only when you are using the global mbox (because of the body-hiding technique). Regional mboxes are not impacted by Visitor API integration.

The following sections describe the sequence of actions for new and returning visitors:

### New visitors

1. The Visitor API is loaded, parsed, and executed.
1. at.js / mbox.js is loaded, parsed, and executed.
1. If global mbox auto-create is enabled, the Target JavaScript library:

   * Instantiates the Visitor object.
   * The Target library tries to retrieve Experience Cloud Visitor ID data.
   * Because this visitor is a new, the Visitor API fires a cross-domain request to demdex.net.
   * After Experience Cloud Visitor ID data is retrieved, a request to Target is fired.

### Returning Visitors

1. The Visitor API is loaded, parsed, and executed.
1. at.js / mbox.js is loaded, parsed, and executed.
1. If global mbox auto-create is enabled, the Target JavaScript library:

   * Instantiates the Visitor object.
   * The Target library tries to retrieve Experience Cloud Visitor ID data.
   * The Visitor API retrieves data from cookies.
   * After Experience Cloud Visitor ID data is retrieved, a request to Target is fired.

<InlineAlert variant="info" slots="text"/>

For new visitors, when the Visitor API is present, Target has to go over the wire multiple times to make sure that Target requests contain Experience Cloud Visitor ID data. For returning visitors, Target goes over the wire only to Target to retrieve the personalized content. 

## Why does it seem like I see slower response times after upgrading from a previous version of at.js to version 1.0.0? {#section_DFBA5854FFD142B49AD87BFAA09896B0}

at.js version 1.0.0 and later fires all the requests in parallel. Previous versions execute the requests sequentially, meaning the requests are put in a queue and Target waits for first request to complete before moving on to the next request.

The way previous versions of at.js execute requests is susceptible to the so-called "head of line blocking." In at.js 1.0.0 and later, Target switched to parallel request execution.

If you check the network tab waterfall for at.js 0.9.1, for example, you'll see that next Target request doesn't start until the previous one has finished. This sequence is not the case with at.js 1.0.0 and later where all the requests basically start at the same time.

From a response-time perspective, mathematically, this sequence can be summed like this

<ul class="simplelist"> 
 <li> at.js 0.9.1: Response time of all Target requests = sum of requests response time </li> 
 <li> at.js 1.0.0 and later: Response time of all Target requests = maximum of requests response time </li> 
</ul>

The at.js library version 1.0.0 completes the requests faster. In addition, at.js requests are asynchronous, so Target doesn't block page rendering. Even if requests take seconds to complete, you still see the rendered page, only some portions of the page are blanked out until Target gets a response from the Target edge.

## Can I load the Target library asynchronously? {#section_AB9A0CA30C5440C693413F1455841470}

The at.js 1.0.0 release makes it possible to load the Target library asynchronously.

To load at.js asynchronously:

* The recommended approach is via tags in Adobe Experience Platform. 
* You can also load at.js asynchronously by adding the async attribute to the script tag that loads at.js. Use something like this:

  ```
  <script src="<URL to at.js>" async></script>
  ```

* You can also load at.js asynchronously using this code:

  ```
  var script = document.createElement('script'); 
  script.async = true; 
  script.src = "<URL to at.js>"; 
  document.head.appendChild(script);
  ```

Loading at.js asynchronously is a great way to avoid blocking the browser from rendering; however, this technique can lead to flicker on the web page.

You can avoid flicker by using a pre-hiding snippet that hides the page (or specified portions) and then reveals it after at.js and the global request have loaded. The snippet must be added before loading at.js.

If you are deploying at.js through an asynchronous Adobe Experience Platform implementation, be sure to include the pre-hiding snippet directly on your pages, before the Implement Target using Adobe Experience Platform Embed code.

If you are deploying at.js through a synchronous DTM implementation, the pre-hiding snippet can be added through a Page Load rule triggered at the top of the page.

For more information, see [How at.js manages flicker](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md). 

## Is at.js compatible with the Adobe Experience Manager integration (Experience Manager)? {#section_6177AE10542344239753764C6165FDDC}

Adobe Experience Manager 6.2 with FP-11577 (or later) now supports at.js implementations with its Adobe Target Cloud Services integration.

## How can I prevent page-load flicker using at.js? {#section_4D78AAAE73C24E578C974743A3C65919}

Target provides several ways to prevent page-load flicker. For more information, see [Preventing Flicker with at.js](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md#concept_AA168574397D4474B993EEAB90865EBA).

## What is the file size of at.js? {#section_6A25C9A14C66441785A7635FEF5C4475}

The at.js file is approximately 109 KB when downloaded. However, because most servers automatically compress files to make file sizes smaller, at.js is approximately 34 KB when compressed (using GZIP or another method) on your server and loaded as users visit your website. The compression settings on the server where you installed at.js determine its actual compressed size.

## Why is at.js bigger than mbox.js? {#section_AA1C43897E46448FA3E26EEC10ED7E51}

at.js implementations use a single library ( at.js), while mbox.js implementations actually use two libraries ( mbox.js and target.js). So a fairer comparison is at.js versus mbox.js *and* `target.js`. Comparing the gzipped sizes of the two versions, at.js version 1.2 is 34 KB and mbox.js version 63 is 26.2 KB. ``

at.js is larger because it does a lot more DOM parsing compared to mbox.js. This is required because at.js gets "raw" data in the JSON response and has to make sense of it. mbox.js used `document.write()` and all the parsing was done by the browser.

Despite the larger file size, our testing indicates that pages load faster with at.js versus mbox.js. Also, at.js is superior from a security perspective because it doesn't load additional files dynamically or use `document.write`.

## Does at.js have jQuery in it? Can I remove this part of at.js because I already have jQuery on my website? {#section_E4604E46E7B34460B8DD6A78D9B476F9}

at.js currently uses parts of jQuery and thus you see the MIT license notification at the top of at.js. jQuery is not exposed and it doesn't interfere with the jQuery library you already have on your page, which might be a different version. Removal of the jQuery code within at.js is not supported.

## Does at.js support Safari and cross domain set to x-only? {#section_114EC271A6E045E1B2183B66F1B71285}

No, if cross domain is set to x-only and Safari has third-party cookies disabled, then both mbox.js and at.js sets a disabled cookie and no mbox requests are executed for that particular client's domain.

To support Safari visitors, a better X-Domain would be “disabled” (sets only a first-party cookie) or “enabled” (sets only a first-party cookie on Safari, while setting first- and third-party cookies on other browsers).

## Can I use the Target Visual Experience Composer (VEC) in my single-page applications? {#section_459C1BEABD4B4A1AADA6CF4EC7A70DFB}

Yes, you can use the VEC for your SPA if you use at.js 2.x. For more information, see [Single Page (SPA) Visual Experience Composer](https://experienceleague.corp.adobe.com/docs/target/using/experiences/spa-visual-experience-composer.html).

## Can I use the Adobe Experience Cloud Debugger with at.js implementations? {#section_FF3CF4C5FD2F4DB1BF1A6B39DA161637}

Yes. You can also use mboxTrace for debugging purposes or your browser's Developer Tools to inspect the Network requests, filtering to "mbox" to isolate mbox calls.

## Can I use special characters in mbox names with at.js? {#section_8E31D2E8A27642098934D7DACFB2A600}

Yes, same as with mbox.js.

## Why are my mboxes not firing on my web pages? {#section_4BA5DA424B734324AAB51E4588FA50F5}

Target customers sometimes use cloud-based instances with Target for testing or simple proof-of-concept purposes. These domains, and many others, are part of the [Public Suffix List](https://publicsuffix.org/list/public_suffix_list.dat).

Modern browsers do not save cookies if you are using these domains unless you customize the `cookieDomain` setting using targetGlobalSettings(). For more information, see [Using Cloud-Based Instances with Target](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-target-debugging-atjs/targeting-using-cloud-based-instances.md).

## Can IP addresses be used as the cookie domain when using at.js? {#section_8BEEC91A3410459D9E442840A3C88AF7}

Yes, if you are using [at.js version 1.2 or later](/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md#reference_DBB5EDB79EC44E558F9E08D4774A0F7A). Adobe strongly recommends that you keep current with the latest version, however.

<InlineAlert variant="info" slots="text"/>

The following examples are not necessary if you are using at.js version 1.2 or later.

Depending on how you use [targetGlobalSettings](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md), you might need to make additional modifications to the code after downloading at.js. For example, if you needed slightly different settings for your Target implementations on various websites and were unable to define these settings dynamically using custom JavaScript, make these customizations manually after downloading the file and before uploading to the respective website.

The following examples let you use the `targetGlobalSettings()` at.js function to insert a code snippet to support IP addresses:

This example is for a single IP address:

```
if (window.location.hostname === '123.456.78.9') { 
    window.targetGlobalSettings = window.targetGlobalSettings || {}; 
    window.targetGlobalSettings.cookieDomain = window.location.hostname; 
}
```

This example is for a range of IP addresses:

```
if (/^123\.456\.78\..*/g.test(window.location.hostname)) { 
    window.targetGlobalSettings = window.targetGlobalSettings || {}; 
    window.targetGlobalSettings.cookieDomain = window.location.hostname; 
}
```

## Why do I see warning messages, such as "actions with missing selectors"? {#section_C36BED5B16634361A1BA46FCB731489D}

These messages are not related to at.js functionality. The at.js library tries to report anything that can't be found in the DOM.

The following are possible root causes if you see this warning message:

* The page is being built dynamically and at.js cannot find the element.
* The page is being built slowly (due to a slow network) and at.js cannot find the selector in the DOM.
* The page structure that activity is running on has been changed. If you reopen the activity in the Visual Experience Composer (VEC), you should get a warning message. Update the activity so that all the necessary elements can be found. 
* The underlying page is part of a Single Page Application (SPA) or the page contains elements that appear farther down the page and the at.js "selector polling mechanism" cannot find those elements. Increasing the `selectorsPollingTimeout` might help. For more information, see [targetGlobalSettings()](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md). 
* Any click-tracking metric tries to add itself to every page, regardless of the URL on which the metric was set up. Although harmless, this situation makes many of these messages display.
  
  For best results, please download and use the latest version of at.js. For more information, see [at.js Version Details](/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md) and [Download at.js](/help/c-implementing-target/c-implementing-target-for-client-side-web/how-to-deployatjs/implementing-target-without-a-tag-manager.md).

## What is the domain tt.omtrdc.net that Target server calls go to? {#section_999C29940E8B4CAD8A957A6B1D440317}

tt.omtrdc.net is the domain name for Adobe's EDGE network, used to receive all server calls for Target.

## Why doesn't at.js always use HttpOnly and Secure cookie flags? {#section_74527E3B41B54B0A83F217C3E664ED1F}

HttpOnly can be set only via server-side code. Target cookies, such as mbox, are created and saved via JavaScript code, so Target can't use the HttpOnly cookie flag. Target does use set HttpOnly for third-party cookies set from the server side when cross-domain is enabled.

Secure can be set via JavaScript only when the page has been loaded via HTTPS. If the page initially loads via HTTP, JavaScript can't set this flag. In addition, if the Secure flag is used, the cookie is available only on HTTPS pages. For pages loaded via HTTPS, Target sets the Secure and SameSite=None attributes.

To ensure that Target can properly track users, and because the cookies are generated client-side, Target doesn't use either of these flags except in the situations mentioned above.

## How often does at.js fire a network request? {#section_57C5235DF7694AF093A845D73EABADFD}

Target executes all of its decisioning on the server side. This means that at.js fires a network request every time the page reloads or an at.js public API is invoked.

## In the best case scenario, can we expect that the user doesn't experience any visible effects on page load relating to hiding, replacing, and showing content? {#section_CB3C566AD61F417FAC0EC5AC706723EB}

at.js tries to avoid pre-hiding HTML BODY or other DOM elements for an extended period, but this depends on network conditions and activity setup. at.js provides [settings](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md) you can use to customize the BODY hiding CSS style, such that instead of blanking the entire HTML BODY, you can pre-hide only some parts of the page. The expectation is that those parts contain DOM elements that have to be "personalized."

## What is the sequence of events in an average scenario where a user qualifies for an activity? {#section_56E6F448E901403FB77DF02F44C44452}

The at.js request is an async `XMLHttpRequest`, so we execute the following steps:

1. The page loads. 
1. at.js pre-hides the HTML BODY. There is a setting to pre-hide a particular container instead of the HTML BODY. 
1. The at.js request fires. 
1. After the Target response is received, Target extracts the CSS selectors. 
1. Using CSS selectors, Target creates STYLE tags to pre-hide the DOM elements that will be customized. 
1. The HTML BODY pre-hiding STYLE is removed. 
1. Target starts polling for DOM elements. 
1. If a DOM element is found, Target applies DOM changes and the element pre-hiding STYLE is removed. 
1. If DOM elements are not found, a global timeout unhides the elements to avoid having a broken page.

## How often is the page's content fully loaded and visible when at.js finally unhides the element the activity is changing? {#section_01AFF476EFD046298A2E17FE3ED85075}

Considering the above scenario, how often is the page's content fully loaded and visible when at.js finally unhides the element the activity is changing? In other words, the page is fully visible except for the activity's content, which is then revealed slightly after the rest of the content.

at.js doesn't block the page from rendering. A user might notice some blank regions on the page that represent elements that are customized by Target. If the content to be applied doesn't contain many remote assets, such as SCRIPTs or IMGs, everything should render quickly.

## How would a fully cached page affect the above scenario? Would it be more likely for the activity's content to become visible noticeably after the rest of the page's content loads? {#section_CE76335A3E0B41CB8253DEE5E060FCDA}

If a page is cached on a CDN that is close to user's location, but not near the Target edge, that user might see some delays. Target edges are well distributed across the globe, so this is not an issue most of the time.

## Is it possible for a hero image to be displayed and then swapped out after a short delay? {#section_C25B07B25B854AAE8DEE1623D0FA62A3}

Considering the following scenario:

The Target timeout is five seconds. A user loads a page that has an activity to customize a hero image. at.js sends the request to determine if there is an activity to apply, but there is no initial response. Assume the user sees the regular content of the hero image, because no response was received from Target regarding whether there is an associated activity. After four seconds, Target does return a response with the activity contents.

At this stage, would it be possible for the alternative version to be shown? So after four seconds, the hero image could be swapped out and the user could notice this image swap?

Initially, the image hero DOM element is hidden. After a response from Target is received, at.js applies the DOM changes, such as replacing the IMG and displaying the customized hero image.

## What HTML doctype does at.js require?

at.js requires the HTML 5 doctype.

This syntax is:

`<!DOCTYPE html>`

The HTML 5 doctype ensures that the page loads in standard mode. When loading in quirks mode, some JS APIs that at.js depends on are disabled. Target disables at.js in quirks mode.
