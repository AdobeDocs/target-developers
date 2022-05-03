---
keywords:
- registerExtension
- registerextension
- register extension
- at.js
- functions
- function
- clientCode
- serverDomain
- globalMboxName
- globalMboxAutoCreate
- timeout
description: Use the registerExtension() function for the Adobe Target at.js JavaScript library to register a specific extension. (at.js 1.x)
title: How Do I Use the registerExtension() Function?
feature: at.js
role: Developer
exl-id: 7f0898b4-ddd5-425c-99dc-94f9b30f8ba7
---
# registerExtension() - at.js 1.x

Provides a standard way to register a specific extension.

<InlineAlert variant="info" slots="text"/>

This function is available for at.js versions 1.*x* only. This function was deprecated with the release of at.js 2.x. This function returns default content if used with at.js 2.x.

The options parameter is mandatory and has the following structure:

| Key | Type | Required | Description |
|--- |--- |--- |--- |
|name|String|Yes|Extension name.|
|modules|Array[String]|Yes|An array of strings representing requested module names.|
|register|Function|Yes|A function used to initialize and build the extension. This function receives arguments based on modules array.|

Notes:

* If one of the parameters is not provided, an exception is thrown. 
* If the modules array is empty, an exception is thrown.

For more information and examples of how to use `registerExtension`, see the [Adobe Experience Cloud Target atjs Extensions](https://github.com/Adobe-Marketing-Cloud/target-atjs-extensions) page on GitHub.

## Settings Module Methods

| Key | Type | Description |
|--- |--- |--- |
|clientCode|String|Client code|
|serverDomain|String|Edge server domain|
|globalMboxName|String|Target global mbox name|
|globalMboxAutoCreate|Boolean|Indicates if auto-create is enabled or not|
|timeout|Number|Request timeout|

## Logger Module Methods

| Key | Type | Description |
|--- |--- |--- |
|log|Function|Logs the variable list of arguments to the browser console, if it exists. It is activated only when `mboxDebug=true` is passed to the URL.|
|error|Function|Logs the variable list of arguments to the browser console. It is activated only when there are serious errors, such as network timeout, HTML node not found, etc.|
