---
keywords: api;adobe i/o
description: Learn how to transition from the Adobe Target Classic legacy APIs to the new APIs on Adobe I/O.
title: How Do I Transition From Legacy APIs to Adobe I/O?
feature: Implement Server-side
role: Developer
exl-id: 4b4274a9-b91a-4a79-9b40-8b1909a2d1d1
---
# Transition from Target legacy APIs to Adobe I/O

Information to help you use transition from the Target legacy APIs to the new APIs on Adobe I/O.

With the decommissioning of Adobe Target Classic, the APIs that are connected to your Target Classic account have also been made unavailable. This document will help you transition your legacy API-based integrations to the Target APIs powered by Adobe I/O.

For more information about the Target API documentation, see [Target APIs and NodeJS SDK](/help/c-implementing-target/c-api-and-sdk-overview/api-and-sdk-overview.md#concept_5718EC1FF2ED4436935D0BCCD7AA29A6).

## Terminology {#section_D8286EDAE3B24D208DA432AEF2E88FD9}

| Term | Description |
|--- |--- |
|Legacy API|APIs that are linked to your Target Classic account. These API calls are based on a username and password-based authentication and use the hostname `testandtarget.omniture.com`. If your API calls contain a user name and password in the request URL, you must transition to Adobe I/O APIs.|
|Adobe I/O|Adobe I/O is the new gateway for Target APIs. These APIs are connected to your Target Standard/Premium account. The Target APIs on Adobe I/O use a JWT-based authentication, which is the industry standard for secure enterprise APIs.|

## Timeline {#section_A478EBF637554A2DB5A31661955121ED}

The legacy APIs will be decommissioned when you Target Classic is decommissioned:

| Date | Details |
|--- |--- |
|October 17, 2017|All API methods that perform a write operation (`saveCampaign`, `copyCampaign`, `saveHTMLOfferContent`, and `setCampaignState`) were decommissioned.<br>This is the same date when all Target Classic user accounts were set to read-only status.|
|November 14, 2017|The remaining APIs were decommissioned. This is the date when the Target Classic user interface was decommissioned|

Recommendations Classic APIs won’t be impacted by this time line.

## Equivalent Methods {#section_DDB42CCC172545B09CB728D794CC466B}

The following table lists the equivalent new Target API methods for the legacy API methods. The new APIs return JSON when compared to the XML response provided by the legacy APIs.

The new API methods are linked to the corresponding section in the API documentation site. An example is provided for each API method. You can also use the Admin Postman Collection that contains sample API calls for all the new Adobe API methods on Adobe I/O.

| Grouping | Legacy API Method | New API Method | Notes |
|--- |--- |--- |--- |
|Campaign/Activity|Campaign Create|[Create AB Activity](https://developers.adobetarget.com/api/#create-ab-activity)<br>[Create XT Activity](https://developers.adobetarget.com/api/#create-xt-activity)|The new APIs provide separate create methods for AB and XT|
||Campaign Update|[Update AB Activity](https://developers.adobetarget.com/api/#update-ab-activity)<br>[Update XT Activity](https://developers.adobetarget.com/api/#update-xt-activity)||
||Copy Campaign|N/A|Use the Activity Create APIs|
||Campaign List|[List Activities](https://developers.adobetarget.com/api/#list-activities)||
||Campaign State|[Update Activity State](https://developers.adobetarget.com/api/#update-activity-state)||
||Campaign View|[Get AB Activity by ID](https://developers.adobetarget.com/api/#get-ab-activity-by-id)<br>[Get XT Activity by ID](https://developers.adobetarget.com/api/#get-xt-activity-by-id)||
||Third-Party Campaign ID|N/A|If you are using a thirdpartyID, the relevant Activity methods can be used|
|Offers|Offer Create|[Create Offer](https://developers.adobetarget.com/api/#create-offer)||
||Offer Get|[Get Offer by ID](https://developers.adobetarget.com/api/#get-offer-by-id)||
||Offer List|[List Offers](https://developers.adobetarget.com/api/#list-offers)||
||Folder List|N/A|Folders aren’t supported in Target Standard/Premium|
|Reporting|Campaign Performance Report|[Get AB Performance Report](https://developers.adobetarget.com/api/#get-ab-performance-report)<br>[Get XT Performance Report](https://developers.adobetarget.com/api/#get-xt-performance-report)||
||Audit Report|[Get Audit Report](https://developers.adobetarget.com/api/#get-audit-report)||
||1-1 Content Report|[Get AP Performance Report](https://developers.adobetarget.com/api/#get-ap-activity-performance-report)||
|Account Settings|Get Host Groups|[List Environments](https://developers.adobetarget.com/api/#list-environments)||

## Exceptions {#section_09CF9A0E289149279783B4801D1B6D4C}

If you require an exception, please contact your Customer Success Manager.

## Help {#section_591F850E2B7A4342B1C233693425415C}

Please contact Adobe Target Client Care (tt-support@adobe.com) if you have any questions or need help transitioning to the new Target APIs on Adobe I/O.
