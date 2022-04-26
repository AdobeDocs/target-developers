---
keywords: Browsers;Prerequisites;Requirements;internet explorer;chrome;firefox;safari;android;surface
description: Learn which internet browsers Adobe Target supports for its interface and for content delivery.
title: What Browsers Does Target Support?
feature: Implementation
role: Developer
exl-id: 8a366c79-d944-4d44-be5a-7c4f65385beb
---
# Supported browsers

The Adobe Target application and content delivery has been tested across a wide range of browsers and devices.

For more important information about TLS, see [TLS (Transport Layer Security) Encryption Changes](/help/c-implementing-target/c-considerations-before-you-implement-target/tls-transport-layer-security-encryption.md#concept_CC1001E9D3AE4BABAF90B8311B0A6451).

## Target Standard/Premium interface {#section_1B73CA4B7BBC460BB7009DF00A2AFC4D}

The Target interface supports the following browsers and devices:

| Device Type | Browser Version |
|--- |--- |
|Windows|<ul><li>Microsoft Edge</li><li>Google Chrome (latest, latest minus 1)</li><li>Mozilla Firefox (latest, latest minus 1)</li></ul>|
|Mac|<ul><li>Firefox (latest, latest minus 1)</li><li>Chrome (latest, latest minus 1)</li></ul>|

## Content delivery {#section_1045A946056441268D40025529918D3D}

Content delivery has been tested across the following browsers and devices:

| Device Type | Browser Version |
|--- |--- |
|Windows|<ul><li>Microsoft Internet Explorer 9 and 10. Tested in emulation mode.<br />**Note**: Content delivery on IE 9 is no longer supported with at.js 1.3.0 (and later). Content delivery on IE 10, 11, and all older versions is no longer supported with at.js 2.5.0 (and later).</li><li>Internet Explorer 11<br />**Note**: Content delivery on IE 10, 11, and all older versions is no longer supported with at.js 2.5.0 (and later).</li><li>Microsoft Edge</li><li>Chrome (latest, latest minus 1)</li><li>Firefox (latest, latest minus 1)</li></ul>|
|Mac|<ul><li>Apple Safari (Latest)<br />**Note**: For more information about how Safari handles first- and third-party cookies, see [Target Cookie](/help/c-implementing-target/c-implementing-target-for-client-side-web/t-mbox-download/cookie-behavior.md).</li><li>Firefox (latest, latest minus 1)</li><li>Chrome (latest, latest minus 1)</li></ul>|
|Mobile/Tablet|<ul><li>Apple iOS (latest)</li><li>Android devices and tablets (Android 4 and later)</li><li>Microsoft Surface (Windows 8.1)</li></ul>|

Note the following:

* For at.js implementations, Target displays default content in earlier versions of Internet Explorer and possibly in earlier versions of the above-listed browsers.
* Internet Explorer treats all unknown elements (such as custom elements) as the same element type. As a result, delivery does not work with custom elements.
* Target displays default content in browsers not listed above and in browsers using [quirks mode](https://en.wikipedia.org/wiki/Quirks_mode). at.js requires a doctype that renders in standard mode, for example: `<!DOCTYPE html>` .
* Adobe Delivery infrastructure is being secured to NOT support TLS 1.0 devices and browsers after September 12, 2018. See [TLS (Transport Layer Security) Encryption Changes](/help/c-implementing-target/c-considerations-before-you-implement-target/tls-transport-layer-security-encryption.md#concept_CC1001E9D3AE4BABAF90B8311B0A6451) to understand the overall impact of this change.
