---
keywords:
- implement
- implementing
- setting up
- setup
- data providers
description: Get data into Target using data providers.
title: How Do I Get Data into Target Using Data Providers?
feature: Implementation
role: Developer
exl-id: 05fe9190-4d36-43e2-9fc7-c354a6821bfb
---
# Data providers

Data providers are a capability that allows you to easily pass data from third parties to Adobe Target.

Note: Data providers require at.js 1.3 or later.

## Format

The `window.targetGlobalSettings.dataProviders` setting is an array of data providers.

For more information about the structure for each data provider, see [Data Providers](../../implement/client-side/atjs/atjs-functions/targetglobalsettings.md#data-providers).

## Example use cases

Collect data from a third party, such as a weather service, a DMP, or even your own web service. You can then use this data to build audiences, target content, and enrich the visitor profile.

## Benefits of method

This setting lets customers gather data from third-party data providers, such as Demandbase, BlueKai, and custom services, and pass the data to Target as mbox parameters in the global mbox request.

It supports the collection of data from multiple providers via async and sync requests.

Using this approach makes it easy to manage flicker of default page content, while including independent timeouts for each provider to limit the impact on page performance

## Caveats

If the data providers added to `window.targetGlobalSettings.dataProviders` are async, they are executed in parallel. The Visitor API request is executed in parallel with functions added to `window.targetGlobalSettings.dataProviders` to allow a minimum wait time.

at.js does not try to cache the data. If the data provider fetches data only once, the data provider should make sure that data is cached and, when the provider function is invoked, serve the cache data for the second invocation.

## Code examples

Several examples can be found in [Data Providers](../../implement/client-side/atjs/atjs-functions/targetglobalsettings.md#data-providers).

## Links to relevant information

Documentation: [Data Providers](../../implement/client-side/atjs/atjs-functions/targetglobalsettings.md#data-providers)

## Training videos:

* [Using Data Providers in Adobe Target](https://experienceleague.adobe.com/docs/target-learn/tutorials/integrations/use-data-providers-to-integrate-third-party-data.html)
* [Implement Data Providers in Adobe Target](https://experienceleague.adobe.com/docs/target-learn/tutorials/integrations/implement-data-providers-to-integrate-third-party-data.html)
