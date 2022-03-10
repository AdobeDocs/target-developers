---
title: Adobe Target API Overview
description: Overview of the different Adobe Target APIs, including delivery api, reporting api, admin api, profile api, recommendations api, and links to postman collections.
---

# API Overview

The Adobe Target APIs are a collection of APIs that power Adobe Target products like Adobe Recommendations. The APIs allow for the creation of data-rich user interfaces you can use to manipulate and integrate data.

Adobe Target APIs can be grouped according to type: Admin, Delivery, Reporting, and Profile APIs.
 
|API type|What it enables you to do|Download link|Other helpful links|
| --- | --- | --- |--- |
|Admin|Create, modify, and delete activities, audiences, offers, and other objects (including Recommendations entities, criteria, designs, and so on. The Recommendations APIs are a type of admin API.)|<UL><li>[Target Admin API Postman Collection](https://developers.adobetarget.com/api/#admin-postman-collection)</li><li>[Recommendations API Postman Collection](https://developers.adobetarget.com/api/recommendations/#section/Postman)</li></UL>|[Use Recommendations APIs](../guides/recs-api/index.html) |
|Delivery|Retrieve optimized and personalized content from Target for delivery to an end user.|[Target Delivery API Postman Collection](https://developer.adobe.com/target/api/delivery-api/#section/Getting-Started/Postman-Collection)||
|Reporting|Export activity results and other reporting results.|Reporting APIs are included within the [Target Admin API Postman collection](https://developers.adobetarget.com/api/#admin-postman-collection).||
|Profile|Retrieve and modify user profiles stored in Adobe Target.|[Target Profile API Postman Collection](https://developers.adobetarget.com/api/#profiles)||

## API Differences

There are important distinctions between Target Admin APIs (including the Recommendations APIs) and Target Delivery APIs:

* Admin APIs let you configure various aspects of Target that you could also configure in the Target UI. Admin APIs require authentication.

* Delivery APIs let you retrieve content. Delivery APIs do not require authentication.

To use Target Admin APIs, you first need to configure authentication using Adobe I/O. For more information, see [How to Configure Authentication](../guides/configure-authentication.html).