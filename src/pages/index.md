---
title: Overview - Adobe Target
description: This is the overview page for Adobe Target APIs and SDKs
contributors:
  - https://github.com/icaraps
---

<Hero slots="heading, text"/> 

# Adobe Target APIs and SDKs

Adobe Target APIs and SDKs offer limitless ways to integrate your most important customer data into key business processes.

<Resources slots="heading, links"/>

## Resources

* [Getting Started](https://www.adobe.io/target/guide/)
* [Adobe Target GitHub Repo](https://github.com/AdobeDocs/target-developers)

## Overview

This documentation provides instructions for Adobe Target APIs and SDKs.

The Adobe Target APIs are a collection of APIs that power Adobe Target products like Adobe Recommendations. 
The APIs allow for the creation of data-rich user interfaces you can use to manipulate and integrate data.

Adobe Target APIs can be grouped according to type: Admin, Delivery, Reporting, and Profile APIs.
 
|API type|What it enables you to do|Download link|Other helpful links|
| --- | --- | --- |--- |
|Admin|Create, modify, and delete activities, audiences, offers, and other objects (including Recommendations entities, criteria, designs, and so on. The Recommendations APIs are a type of admin API.)|<UL><li>[Target Admin API Postman Collection](https://developers.adobetarget.com/api/#admin-postman-collection)</li><li>[Recommendations API Postman Collection](https://developers.adobetarget.com/api/recommendations/#section/Postman)</li></UL>|[Use Recommendations APIs](https://experienceleague.adobe.com/docs/target-learn/recommendations-api-tutorial/recs-api-overview.html) in *Adobe Target Tutorials*|
|Delivery|Retrieve optimized and personalized content from Target for delivery to an end user.|[Target Delivery API Postman Collection](https://developers.adobetarget.com/api/delivery-api/#section/Getting-Started/Postman-Collection)||
|Reporting|Export activity results and other reporting results.|Reporting APIs are included within the [Target Admin API Postman collection](https://developers.adobetarget.com/api/#admin-postman-collection).||
|Profile|Retrieve and modify user profiles stored in Adobe Target.|[Target Profile API Postman Collection](https://developers.adobetarget.com/api/#profiles)||

>[!NOTE]
>
>There are important distinctions between Target Admin APIs (including the Recommendations APIs) and Target Delivery APIs:
>
>* Admin APIs let you configure various aspects of Target that you could also configure in the Target UI. Admin APIs require authentication.
>
>* Delivery APIs let you retrieve content. Delivery APIs do not require authentication.
>
>To use Target Admin APIs, you first need to configure authentication using Adobe I/O. For more information, see [How to Configure Authentication](../guides/index.md).

## Discover 

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Configuration

[Getting Started](guides/)
    
Get started with the Adobe Target APIs.

<DiscoverBlock slots="heading, link, text"/> 

### API References

[Admin and Profile API](api/admin-api/) 

Use Adobe Target’s Admin and Profile APIs to manage activities, audiences, offers, properties, reports, mboxes, environments, and profiles.

<DiscoverBlock slots="link, text"/>

[Delivery API](api/delivery-api/)

Use Adobe Target's Delivery APIs to deliver experiences across web and mobile channels as well as non-browser based IoT devices such as a connected TV, kiosk, or in-store digital screen.

<DiscoverBlock slots="link, text"/>

[Migrating from at.js to AEP Web SDK](guides/migrating/)

For help migrating from at.js to AEP Web SDK.   

<DiscoverBlock width="100%" slots="heading, link, text"/>

## Contributing 

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions 
or deletions for this documentation, check out the source from [this GitHub repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull 
request with your contribution. For more information, refer to the [contributing page](support/contribute/).
