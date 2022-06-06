---
keywords:
- implement
- implementing
- setting up
- setup
- script profile attributes
description: Get data into Target using script profile attributes.
title: How Do I Get Data into Target Using Script Profile Attributes?
feature: Implementation
role: Developer
exl-id: c323fb4c-f263-43d4-8523-9f42c2913542
---
# Script profile attributes

Script profile attributes are name/value pairs defined in the Adobe Target solution. The value is determined from executing a JavaScript snippet on Target's server per server call.

Users write small code snippets that execute per mbox call, and before a visitor is evaluated for audience and activity membership.

## Format

Script profile attributes are created in the Audiences section of Target. Any attribute name is valid, and the value is the result of a JavaScript function written by the Target user. The attribute name is automatically prefixed by " user. " in Target to distinguish them from in-page profile attributes.

The code snippet is written in the Rhino JS language and can reference tokens and other values.

## Example Use Cases

* **Cart Abandonment**: When the visitor reaches the shopping cart, set the profile script to 1. When the visitor converts, reset it to 0. If the value =1, then the visitor has an item in the cart.
* **Visit Count**: On every new visit, increment the count by 1 to keep track of how often a visitor returns to the site.

## Benefits of method

Requires no page code updates.

Executes before audience and activity membership decisions, so these profile script attributes can affect membership on a single server call.

Can be very robust. As many as 2,000 instructions can be executed per script.

## Caveats

Requires JavaScript knowledge.

The execution order of profile scripts cannot be guaranteed, so they cannot rely on each other.

Can be difficult to debug.

## Code examples

Profile scripts are quite flexible:

`user.purchase_recency: var dayInMillis = 3600 * 24 * 1000; if (mbox.name == 'orderThankyouPage') {  user.setLocal('lastPurchaseTime', new Date().getTime()); } var lastPurchaseTime = user.getLocal('lastPurchaseTime'); if (lastPurchaseTime) {  return ((new Date()).getTime()-lastPurchaseTime)/dayInMillis; }`

### Links to relevant information

[Profile Script Attributes](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/profile-parameters.html#concept_8C07AEAB0A144FECA8B4FEB091AED4D2)
