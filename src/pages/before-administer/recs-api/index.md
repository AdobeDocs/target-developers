---
title: What is the Adobe Recommendations API?
description: This guide walks developers through hands-on practice using the Adobe Target Recommendations APIs to configure and manage Recommendations catalogs and custom criteria, as well as using the Delivery API to retrieve recommendations content.
role: Developer
level: Intermediate
topic: Personalization, Administration, Integrations, Development
feature: APIs/SDKs, Recommendations, Administration & Configuration, Overview
kt: 3815
thumbnail:
author: Judy Kim
exl-id: 10f80056-fb71-4362-86bc-d161f596cb91
---
# Adobe Recommendations API Overview

APIs relevant for Recommendations include [Admin APIs](../../before-administer/) that allow you to:

* Manage your catalog of recommendable products or content
* Manage your Recommendations algorithms and activities

Using the Target [Delivery API](../../implement/delivery-api/) with Recommendations, you can also:

* Retrieve recommendations in JSON, HTML, or XML objects so they can be displayed in web, mobile, email, Internet of Things (IOT), and other channels.

## Description

This guide regarding the Recommendations APIs walk developers through hands-on practice using the Recommendations APIs to configure and manage Recommendations catalogs and custom criteria, as well as using the Delivery API to retrieve recommendations content. By the end, you will be able to:

* Configure and manage entities using the Recommendations API
* Configure and manage custom criteria using the Recommendations API
* Understand how to use Recommendations with the Delivery API to use recommendations results in non-HTML devices

## Audience

This guide is intended for developers new to Target APIs or Recommendations APIs.

## Pre-requisites

The Target admin APIs require [Adobe authentication setup](../configure-authentication.md). Make sure you have this configured prior to using the Recommendations API.

## Resources

Note the following resources, which are necessary to understand this guide and follow it successfully:

|Resource|Details|
| --- | --- |
|Postman|Get the [Postman app](https://www.postman.com/downloads/) for your operating system. Postman basic is free with account creation. While not required in order to use Adobe Target APIs in general, Postman makes API workflows easier, and Adobe Target provides several Postman collections to help execute its APIs and learn how they operate. The rest of this guide assumes working knowledge of Postman. For assistance, please reference the [Postman documentation](https://learning.getpostman.com/).  |
|References|Familiarity with the following resources is assumed throughout the rest of this guide:<UL><li>[Adobe I/O Github](https://github.com/adobeio)</li><li>[Target Admin and Profile API documentation](../../administer/admin-api/index.md)</li><li>[Recommendations API documentation](https://developers.adobetarget.com/api/recommendations/)</li></UL>|

