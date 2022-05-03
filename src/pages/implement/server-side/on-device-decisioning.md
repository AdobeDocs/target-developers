---
keywords:
- server side
- server-side
- sdk
- sdks
- on-device
- decisioning
- on device
- ondevice
- zero latency
- latency
- near-zero
- node.js
description: Learn how to use on-device decisioning to cache your Target A/B and MVT activities on your server to perform in-memory decisioning at near-zero latency.
title: What is On-Device Decisioning?
feature: Implement Server-side
role: Developer
exl-id: ae782511-6f32-4123-be76-838584e05b39
---
# On-device decisioning

On-Device Decisioning provides the ability to cache your Adobe Target A/B Test and Experience Targeting (XT) activities on your server and perform in-memory decisioning at near-zero latency, without blocking network requests to the Adobe Target Edge Network.

For more information, see [Introduction to on-device decisioning](../../sdk-guides/).

## Webinar: Personalize and test at zero latency with on-device decisions from Adobe Target

More than ever, marketers, product owners and developers are being tasked with optimizing the overall customer experience on sites, in apps, and everywhere else they connect with their customers. Multiple tools with data silos and complicated implementations are inadequate.

In this recorded webinar, Adobe Target product experts discuss how moving critical experience optimization decisions on-device to execute locally with near-zero latency can open doors to exciting new use cases while improving site performance for your customers.

<Media slots="video"/>

<https://video.tv.adobe.com/v/328148>

## Best practices

Adobe recommends the following best practices when using on-device decisioning:

### Best practices when decisioning method is "on-device"

When using "on-device" as the decisioning method, the artifact is downloaded when the visitor loads the webpage for the first time. Any activity qualification that needs to happen on the first page load (no cache) happens only after the artifact is fully downloaded. There are certain best practices you can follow to ensure that activity qualifications happen fast for a new anonymous visitor.

* Deactivate "On-Device" capable activities that are not meant to be in the artifact.
* If you have Target Premium, you can use [properties/workspaces](https://experienceleague.corp.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html) to create different artifacts files for different workspaces.
* If your artifact files becomes very large due to legitimate reasons, you can use the "hybrid" decisioning method. This method allows you to download the artifact in parallel and all Target API calls go over the wire until the artifact has downloaded. Read the best [practices section on "Hybrid" decisioning mode](#best-practices-hybrid) below to learn more about this approach.
* If you have a Single Page Application (SPA), Adobe recommends that you load and initialize at.js before loading your application's main JavaScript file during first page load. This approach initiates the artifact downloading much earlier, providing a faster experience rendering.

### Best practices when decisioning method is "hybrid"

When using "hybrid" as the decisioning method, the artifact is downloaded in parallel. Until the artifact is downloaded, any Target API calls go over the wire even if the "locations" are on-device capable. This behavior is the default for all `getOffers()` calls and provides the best performance in most situations. If you change the default behavior of `getOffers()` by setting the `decisioningMethod` to `on-device`, follow these best practices to avoid errors and ensure the best performance.

* If you decide to call `getOffers()` with `decisioningMethod` as `on-device` when the page loads for the first time, you must do so inside the "ARTIFACT_DOWNLOAD_SUCCEEDED" at.js event handler to avoid errors. If your artifact is very large, any "locations" using this approach are rendered only after the artifact is fully downloaded, which can delay experience rendering. Adobe recommends that you rarely use this approach. Follow the best practices to reduce artifact size under the ["On Device" best practices section](#best-practices-on-device) above when using this approach.

## Tutorial: On-device decisioning

Adobe Target on-device decisioning enables near-zero latency content delivery.

This 7-minute video:

* Describes on-device decisioning, including how it compares to other methods of Target implementation
* Demonstrates how to enable on-device decisioning in Target
* Examines a sample form-based composer activity that has been configured with JSON content
* Shows sample Node.JS SDK code containing key configuration required for on-device decisioning
* Demonstrates results in a browser

<Media slots="video"/>

<https://video.tv.adobe.com/v/329032>

For more videos and tutorials, see the [Adobe Target Tutorials](https://experienceleague.adobe.com/docs/target-learn/tutorials/overview.html) guide.

## Adobe Tech Blog - Part 1: Run Adobe Target NodeJS SDK for experimentation and personalization on edge platforms (Akamai Edge Workers)

[Click here to access the blog post](https://medium.com/adobetech/part-1-run-adobe-target-nodejs-sdk-for-experimentation-and-personalization-on-edge-platforms-4d8660964ed9).

## Adobe Tech Blog - Part 2: Run Adobe Target NodeJS SDK for experimentation and personalization on edge platforms (AWS Lambda@Edge)

[Click here to access the blog post](https://medium.com/adobetech/part-2-run-adobe-target-nodejs-sdk-for-experimentation-and-personalization-on-edge-platforms-aws-4d6bdac24563).