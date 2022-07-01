---
keywords:
- server side
- server-side
- api
- sdk
- node.js
- nodejs
- node js
- recommendations api
- api
- apis
description: Learn about the Adobe Target server-side Delivery APIs, SDKs, and Target Recommendations APIs.
title: Where Can I Learn About Target Server-Side Delivery APIs and SDKs?
feature: Implement Server-side
role: Developer
exl-id: cdee007f-f54d-4cf3-9575-6319da3434a5
---
# Server Side: implement Target

Information about Adobe Target server-side Delivery APIs, SDKs, and Target Recommendations APIs.

The following process occurs in a server-side implementation of Target:

1. A client device makes a request for an experience through your server.
1. Your server sends that request to Target.
1. Target sends the response back to your server.
1. Your server makes the decision on which experience to deliver to the client device for it to render.

The experience does not need to display in a browser. The experience can display in an email or kiosk, via a voice assistant, or through some other non-visual experience or non-browser-based device. Because your server sits between the client and Target, this type of implementation is also ideal if you need greater control and security or have complex backend processes that you want to run on your server.

<InlineAlert variant="info" slots="text"/>

A first-time visitor can be initialized only on the client-side. A first-time visitor *cannot* be initialized on the server-side. This is due to the ECID, which depends on the third-party demdex cookie and therefore needs to be initialized via Visitor API.js on an implementation where the browser is involved.

The following sections provide more information about the various APIs and the NodeJS SDK:

## Server Side Delivery APIs

Link: [Server Side Delivery APIs](../delivery-api/index.md)

`/rest/v1/delivery`

Through the Target Delivery API, you can:

* Deliver experiences across web, including SPAs, and mobile channels as well as non-browser based IoT devices, such as connected TVs, kiosks, or in-store digital screens.
* Deliver experiences from any server-side platform or application that can make HTTP/s calls.
* Deliver consistent and personalized experiences to a visitor regardless of which channel or devices the visitor used to engage with your business.
* Cache experiences for a visitor within a session on your server so that multiple API calls can be avoided, which achieves better performance.
* Seamlessly integrate with Adobe Experience Cloud products, such as Adobe Analytics, Adobe Audience Manager (AAM), and the Experience Cloud ID Service from the server side.

## Server Side SDKs

The Adobe Target server-side SDK documentation helps you implement Target on your servers in your language of choice.

* [Node.js](node-js/)
* [Java](java/)
* [.NET](net/)
* [Python](python/)

Through Adobe Target's server-side SDKs, you can:

* Execute and run **feature flagging**, **rollouts**, and **A/B experiments** at **near-zero latency**.
* Deliver experiences across **web**, including **SPAs**, and **mobile channels**, as well as non-browser based **Internet of Things (IoT) devices** such as a connected TV, kiosk, or in-store digital screen.
* Deliver **Machine Learning (ML) driven personalized experiences** to a user, no matter which channel or device the user has engaged with your business.
* **Seamlessly integrate with Adobe Experience Cloud** products such as **Adobe Analytics**, **Adobe Audience Manager**, and the **Experience Cloud ID Service** from the server side.

See the [Getting Started](sdk-guides/getting-started/) page to learn how to run a simple feature flagging use case via [on-device decisioning](sdk-guides/on-device-decisioning/).

Check out our [Sample Apps](sdk-guides/sample-apps/) to have fun and play around!

## Target Recommendations APIs

Link: [Target Recommendations APIs](https://developers.adobetarget.com/api/recommendations) and [Adobe Recommendations API Overview](../../before-administer/recs-api/index.md).

The Recommendations APIs let you programmatically interact with Target recommendations servers. These APIs can be integrated with a range of application stacks to perform functions that you would typically do via the Target user interface.
