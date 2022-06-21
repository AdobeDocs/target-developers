---
keywords:
- implement
- implementing
- setting up
- setup
- bulk profile update
description: Get data into Target using the bulk profile update API.
title: How Do I Get Data into Target Using the Bulk Profile Update API?
feature: Implementation
role: Developer
exl-id: 068658fc-7082-425a-87c1-dd0de03cdc71
---
# Bulk profile update API

Via API, send a .csv file to Adobe Target with visitor profile updates for many visitors. Each visitor profile can be updated with multiple in-page profile attributes in one call.

This option is similar to Customer Attributes with a few differences:

* Customer Attributes use an FTP upload while the Target Bulk Profile Update API uses an HTTP POST API.
* Customer Attributes data can be shared with Analytics. Bulk Profile Update is useable only in Target.
* Customer Attributes support creating a profile for a user Target has not yet seen. The Bulk Profile Update API updates existing Target profiles only.
* Customer Attributes require the use of the Experience Cloud ID (ECID) and the use of a source ID, such as the CRM ID or the Loyalty ID.
* The Bulk Profile Update API requires either the TNT ID or the `mbox3rdPartyId`.
* You cannot send the following characters in `mbox3rdPartyID`: plus sign (+) and forward slash (/).

## Format

The .csv file must refer to each visitor via his or her Target PCID or `mbox3rdPartyId`. The Experience Cloud ID (ECID) is not supported. All profile attributes/values are created and updated via the API. Format details are available in the API documentation.

## Example use cases

Your CRM or other internal system stores valuable data about your visitors that you want to consistently update into Target, without exposing the profile data in your page implementation.

## Benefits of method

No limit on the number of profile attributes.

Profile attributes sent via the site can be updated via the API and vice versa.

## Caveats

The size of the batch file must be less than 50 MB. In addition, the total number of rows should not exceed 500,000 rows per upload.

There is no limit on the number or rows you can upload over a period of 24 hours in subsequent batches. However, the ingestion process might be throttled during business hours to ensure that other processes run efficiently.

Consecutive [V2 batch update calls](https://developers.adobetarget.com/api/#updating-profiles) without mbox calls in between for the same thirdPartyIds override the properties updated in the first batch update call.

## Code examples

See [Updating Profiles](https://developers.adobetarget.com/api/#updating-profiles).

### Links to relevant information

[Updating Profiles](https://developers.adobetarget.com/api/#updating-profiles)