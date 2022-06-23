---
keywords:
- api
- adobe i/o
- classic
- adobe developer console
description: Learn how to transition from the Adobe Target Classic APIs to the Target APIs on the Adobe Developer Console.
title: How Do I Transition From Target Classic APIs to Target APIs on the Adobe Developer Console?
feature: Implement Server-side
role: Developer
exl-id: 4b4274a9-b91a-4a79-9b40-8b1909a2d1d1
---
# Transition from Target Classic APIs to Target APIs on the Adobe Developer Console

Information to help you transition from the Target Classic APIs to the Target APIs on the [Adobe Developer Console](https://developer.adobe.com/console/home).

With the decommissioning of Adobe Target Classic, the APIs connected to your Target Classic account have also been made unavailable. This document will help you transition your Target Classic API-based integrations to the Target APIs powered by the [Adobe Developer Console](https://developer.adobe.com/console/home).

For more information about Target APIs, see [Target APIs](/src/pages/before-administer/index.md). For more information about Target SDKs, see [Target Server-side Implementation](/src/pages/implement/server-side/index.md)

## Terminology

| Term | Description |
|--- |--- |
|Classic API|APIs that are linked to your Target Classic account. These API calls are based on a username and password-based authentication and use the hostname `testandtarget.omniture.com`. If your API calls contain a user name and password in the request URL, you must transition to the Adobe Developer Console APIs.|
|[Adobe Developer Console](https://developer.adobe.com/console/home)|The Adobe Developer Console is the gateway for Target APIs. These APIs are connected to your Target Standard/Premium account. The Target APIs on the Adobe Developer Console use a [JWT-based authentication](../../before-administer/configure-authentication.md), which is the industry standard for secure enterprise APIs.|

## Timeline

The following APIs were decommissioned when Target Classic was decommissioned:

| Date | Details |
|--- |--- |
|October 17, 2017|All API methods that perform a write operation (`saveCampaign`, `copyCampaign`, `saveHTMLOfferContent`, and `setCampaignState`) were decommissioned.<br />This is the same date when all Target Classic user accounts were set to read-only status.|
|November 14, 2017|The remaining APIs were decommissioned. This is the date when the Target Classic user interface was decommissioned|

Recommendations Classic APIs were not impacted by this timeline.

## Equivalent Methods

The following table lists the equivalent Adobe Developer Console API methods for the Classic API methods. The Adobe Developer Console APIs return JSON, whereas the Classic APIs return XML.

The Adobe Developer Console API methods are linked to the corresponding section in the API documentation site. An example is provided for each API method. You can also use the Target Admin API Postman Collection that contains sample API calls for all the Adobe API methods on the Adobe Developer Console.

| Grouping | Classic API Method | Adobe Developer Console API Method | Notes |
|--- |--- |--- |--- |
|Campaign/Activity|Campaign Create|[Create AB Activity](https://developers.adobetarget.com/api/#create-ab-activity)<br />[Create XT Activity](https://developers.adobetarget.com/api/#create-xt-activity)|The new APIs provide separate create methods for AB and XT|
||Campaign Update|[Update AB Activity](https://developers.adobetarget.com/api/#update-ab-activity)<br />[Update XT Activity](https://developers.adobetarget.com/api/#update-xt-activity)||
||Copy Campaign|N/A|Use the Activity Create APIs|
||Campaign List|[List Activities](https://developers.adobetarget.com/api/#list-activities)||
||Campaign State|[Update Activity State](https://developers.adobetarget.com/api/#update-activity-state)||
||Campaign View|[Get AB Activity by ID](https://developers.adobetarget.com/api/#get-ab-activity-by-id)<br />[Get XT Activity by ID](https://developers.adobetarget.com/api/#get-xt-activity-by-id)||
||Third-Party Campaign ID|N/A|If you are using a thirdpartyID, the relevant Activity methods can be used|
|Offers|Offer Create|[Create Offer](https://developers.adobetarget.com/api/#create-offer)||
||Offer Get|[Get Offer by ID](https://developers.adobetarget.com/api/#get-offer-by-id)||
||Offer List|[List Offers](https://developers.adobetarget.com/api/#list-offers)||
||Folder List|N/A|Folders aren’t supported in Target Standard/Premium|
|Reporting|Campaign Performance Report|[Get AB Performance Report](https://developers.adobetarget.com/api/#get-ab-performance-report)<br />[Get XT Performance Report](https://developers.adobetarget.com/api/#get-xt-performance-report)||
||Audit Report|[Get Audit Report](https://developers.adobetarget.com/api/#get-audit-report)||
||1-1 Content Report|[Get AP Performance Report](https://developers.adobetarget.com/api/#get-ap-activity-performance-report)||
|Account Settings|Get Host Groups|[List Environments](https://developers.adobetarget.com/api/#list-environments)||

## Exceptions

If you require an exception, please contact your Customer Success Manager.

## Help

Please contact Adobe Target Client Care (tt-support@adobe.com) if you have any questions or need help transitioning from the Classic APIs to the Target APIs on the Adobe Developer Console.
