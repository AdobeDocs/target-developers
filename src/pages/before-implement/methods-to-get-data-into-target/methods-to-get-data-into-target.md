---
keywords:
- implement
- implementing
- setting up
- setup
- page parameter
- tomcat
- url encoded
- in-page profile attribute
- mbox parameter
- in-page profile attributes
- script profile attribute
- bulk profile update API
- single file update API
- customer attributes
- data providers
- dataprovider
- data provider
description: Get data into Target (page parameters, profile attributes, script profile attributes, data providers, single and bulk profile update APIs, Customer Attributes).
title: How Do I Get Data into Target?
feature: Implementation
role: Developer
exl-id: b42eb846-d423-4545-a8fe-0b8048ab689e
---
# Methods overview

Information about the different methods you can use to get data into Adobe Target.

Available methods include:

|Method|Details|
| --- | --- |
|[Page parameters](page-parameters.md)<br />(Also called "mbox parameters")|Page parameters are name/value pairs passed in directly through page code that are not stored in the visitor's profile for future use.<br />Page parameters are useful to send page data to Target that does not need to be stored with the visitor's profile for future targeting use. These values are instead used to describe the page or the action the user took on the specific page.|
|[In-page profile attributes](in-page-profile-attributes.md)<br />(Also called "in-mbox profile attributes)|In-page profile attributes are name/value pairs passed directly through page code that are stored in the visitor's profile for future use.<br />In-page profile attributes allow user-specific data to be stored in Target's profile for later targeting and segmentation.|
|[Script profile attributes](script-profile-attributes.md)|Script profile attributes are name/value pairs defined in the Target solution. The value is determined from executing a JavaScript snippet on Target's server per server call.<br />Users write small code snippets that execute per mbox call, and before a visitor is evaluated for audience and activity membership.|
|[Data providers](data-providers.md)|Data providers let you easily pass data from third parties to Target.|
|[Bulk profile update API](bulk-profile-update-api.md)|Via API, send a .csv file to Target with visitor profile updates for many visitors. Each visitor profile can be updated with multiple in-page profile attributes in one call.|
|[Single profile update API](single-profile-update-api.md)|Almost identical to the Bulk Profile Update API, but one visitor profile is updated at a time, in line in the API call instead of with a .csv file.|
|[Customer attributes](customer-attributes.md)|Customer attributes let you upload visitor profile data via FTP to the Experience Cloud. Once uploaded, use the data in Adobe Analytics and Adobe Target.|












