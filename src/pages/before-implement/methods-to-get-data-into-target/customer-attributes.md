---
keywords:
- implement
- implementing
- setting up
- setup
- customer attributes
description: Get data into Target using customer attributes.
title: How Do I Get Data into Target Using Customer Attributes?
feature: Implementation
role: Developer
exl-id: b6c4a286-7994-492d-bde9-346af7aa314f
---
# Customer attributes

Customer attributes let you upload visitor profile data via FTP to the Adobe Experience Cloud. Once uploaded, use the data in Adobe Analytics and Adobe Target.

Target Standard customers can apply five attributes, Target Premium customers can apply 200 attributes.

## Format

A .csv file with Experience Cloud IDs (ECIDs) and attribute name/value pairs is uploaded via FTP or manually in the Experience Cloud UI.

## Example use cases

Your CRM or other internal system stores valuable information you want to share with Adobe's Experience Cloud, including Target and Analytics.

## Benefits of method

Uploading customer data creates a profile entry for that visitor in Target, even if Target has yet to see the visitor.

Same data is automatically available in Target and Analytics.

FTP can be a simpler implementation method than API.

## Caveats

Target Standard customers can apply five attributes, Target Premium customers can apply 200 attributes

Can only update values via Customer Attributes, not on page.

Requires Experience Cloud ID (ECID) implementation.

## Code examples

Details can be found in [Create a customer attribute source and upload the data file](https://experienceleague.adobe.com/docs/core-services/interface/customer-attributes/t-crs-usecase.html).

### Links to relevant information

[Create a customer attribute source and upload the data file](https://experienceleague.adobe.com/docs/core-services/interface/customer-attributes/t-crs-usecase.html).
