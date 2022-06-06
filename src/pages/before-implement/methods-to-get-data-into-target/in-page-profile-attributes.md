---
keywords:
- implement
- implementing
- setting up
- setup
- page parameter
description: Get data into Target using in-page profile attributes.
title: How Do I Get Data into Target Using In-Page Profile Attributes?
feature: Implementation
role: Developer
exl-id: c6000720-a862-4e9c-96a5-055963a79544
---
# In-page profile attributes

In-page profile attributes in Adobe Target (also called "in-mbox profile attributes") are name/value pairs passed directly through page code that are stored in the visitor's profile for future use.

In-page profile attributes allow user-specific data to be stored in Target's profile for later targeting and segmentation.

## Format

In-page profile attributes are passed into Target via a server call as a string name/value pair with the prefix "profile." before the Attribute name.

Attribute names and values are customizable (although there are some "reserved names" for specific uses).

### Examples

* `profile.membershipLevel=silver`
* `profile.visitCount=3`

## Example use cases

* **Login information**: Share non-PII (Personally Identifiable Information) data to Target based on the user's login. This data could be membership status, order history, or more.
* **Store info**: Track which store is this user's preferred location.
* **Previous interactions**: Track what the user has done on the site previously to inform future personalization.

## Benefits of method

Data gets sent to Target in real time, and can be used on the same server call on which the data comes in.

## Caveats

Requires page code updates (directly or via a tag management system).

Attributes and values are visible in server calls, so a visitor can see the values. If sharing information such as credit ranges or other potentially private information, this method might not be the best approach.

## Code examples

targetPageParamsAll (appends the attributes to all mbox calls on the page):

`function targetPageParamsAll() { return "profile.param1=value1&profile.param2=value2&profile.p3=hello%20world"; }`

targetPageParams (appends the attributes to the global mbox on the page):

`function targetPageParams() { return profile.param1=value1&profile.param2=value2&profile.p3=hello%20world"; }`

Attributes in mboxCreate code:

`<div class="mboxDefault"> default content to replace by offer </div> <script> mboxCreate('mboxName','profile.param1=value1','profile.param2=value2'); </script>`

## Links to relevant information

[Profile Attributes](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/profile-parameters.html)

[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)
