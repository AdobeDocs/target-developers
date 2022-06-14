---
keywords:
- implement
- implementing
- setting up
- setup
- page parameters
description: Get data into Target using page parameters.
title: How Do I Get Data into Target Using Page Parameters?
feature: Implementation
role: Developer
exl-id: a285eadc-b71e-49a8-9071-397ada283baf
---
# Page parameters

Page parameters (also called "mbox parameters") are name/value pairs passed in directly through page code that are not stored in the visitor's profile for future use.

Page parameters are useful to send page data to Target that does not need to be stored with the visitor's profile for future targeting use. These values are instead used to describe the page or the action the user took on the specific page.

## Format

Page parameters are passed into Target via a server call as a string name/value pair. Parameter names and values are customizable (although there are some "reserved names" for specific uses).

### Examples

* `page=productPage`

* `categoryId=homeLoans`

## Example use cases

* **Product pages**: Send information about the specific product viewed (this method is how Recommendations works)
* **Order details**: Send order ID, orderTotal, and so forth, for order collection
* **Category affinity**: Send category-viewed information to Target to build knowledge of the user's affinity to particular site categories
* **3rd-party data**: Send information from 3rd-party data sources, such as weather targeting providers, account data (for example, DemandBase), demographic data (for example Experian), and more.

## Benefits of method

Data gets sent to Target in real time, and can be used on the same server call the data on which it comes in.

## Caveats

* Requires page code update (directly or via a tag management system).
* If the data must be used for targeting on a subsequent page/server call, it must be translated to a profile script.
* Query strings can contain only characters as per the [Internet Engineering Task Force (IETF) standard](https://www.ietf.org/rfc/rfc3986.txt) .

  In addition to those characters mentioned on the IETF site, Target allows the following characters in query strings:

  ```< > # % " { } | \ ^ [ ] ` ```
  
  Everything else must be url-encoded. The standard specifies the following format ( [https://www.ietf.org/rfc/rfc1738.txt](https://www.ietf.org/rfc/rfc1738.txt) ), as illustrated below:

  ![alt image](assets/ietf1.png)

  Or, the full list for simplicity:

  ![alt image](assets/ietf2.png)

## Code examples

targetPageParamsAll (appends the parameters to all mbox calls on the page):

`function targetPageParamsAll() { return "param1=value1&param2=value2&p3=hello%20world";`

targetPageParams (appends the parameters to the global mbox on the page):

`function targetPageParams() { return "param1=value1&param2=value2&p3=hello%20world";`

## Links to relevant information

Recommendations: [Implementation According to Page Type](https://experienceleague.adobe.com/docs/target/using/recommendations/plan-implement.html)

Order confirmation: [Track Conversions](../../implement/client-side/atjs/how-to-deployatjs/implement-target-without-a-tag-manager.md#track-conversions)

Category affinity: [Category Affinity](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/category-affinity.html)
