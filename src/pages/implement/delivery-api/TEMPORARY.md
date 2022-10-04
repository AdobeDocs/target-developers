---
title: Adobe Target Delivery API Introduction
description: Adobe Target Delivery API Introduction
keywords:
- delivery api
--- 

# Introduction

Welcome to the documentation for the Adobe Target Delivery API!

The Adobe Target Delivery API is based on REST. This documentation describes the resources that make up the Adobe Target Delivery API. HTTP methods are utilized to execute operations on those resources.

Through Adobe Target's Delivery API, you can:

* Deliver experiences across web, including SPAs, and mobile channels as well as non-browser based IoT devices such as a connected TV, kiosk, or in-store digital screen.
* Deliver experiences from any server side platform or application that can make HTTP/s calls.
* Deliver consistent and personalized experiences to a user no matter which channel or devices the user has engaged with your business.
* Cache experiences for a user within a session in your server so that multiple API calls can be avoided and as a result achieve better performance.
* Seamlessly integrate with Adobe Experience Cloud products such as Adobe Analytics, Adobe Audience Manager, and the Experience Cloud ID Service from the server side.

<InlineAlert variant="info" slots="text" />

You can still access the [legacy /v1/mbox and /v2/batchmbox API documentation](https://developers.adobetarget.com/api/legacy-api/index.html). However, features will be developed in the Delivery API (as documented here) that will not be backported to the legacy APIs.

---
title: Adobe Target Delivery API and SDKs
description: Adobe Target Delivery API and SDKs
keywords:
- delivery api
--- 

# SDKs

Adobe Target offers SDKs to interact with the Target Delivery API and help ease the Adobe Target integration with other Experience Cloud solutions such as Adobe Analytics and Adobe Audience Manager by helping you follow best practices in managing sessions and cookies. Therefore, it is highly recommended to leverage a SDK to mask away these complexities and prevent incorrect utilization of the API.

## Node.js SDK

The [Node.js SDK](https://github.com/adobe/target-nodejs-sdk) is open sourced and maintained within Github, where you can find the documentation and usage instructions.

Read the [changelog](https://github.com/adobe/target-nodejs-sdk/blob/main/CHANGELOG.md) for the Node.js SDK.

## Java SDK

The [Java SDK](https://github.com/adobe/target-java-sdk) is open sourced and maintained within Github, where you can find the documentation and usage instructions.

Read the [changelog](https://github.com/adobe/target-java-sdk/blob/main/CHANGELOG.md) for the Java SDK.

<!--- Judy: remove or modify this page? adequately covered elsewhere? --->

