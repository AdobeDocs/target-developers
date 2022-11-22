# Initialize SDK

## Description

Use the `create` method in order to initialize the Node.js SDK and instantiate the Target Client to make calls to Adobe Target for experiments and personalized experiences.

## Method

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### create

```js
TargetClient.create(options: Object): TargetClient
```

## Parameters

`options` has the following structure:

|Name|Type|Required|Default|Description|
| --- | --- | --- | --- | --- |
|client|String|Yes|None|Adobe Target Client ID|
|organizationId|String|Yes|None|Experience Cloud Organization ID|
|timeout|Number|No|3000|Timeout in milliseconds|
|serverDomain|String|No|*client*.tt.omtrdc.net|Overrides default hostname|
|secure|Boolean|No|true|Unset to enforce HTTP scheme|
|logger|Object|No|NOOP logger|Replaces the default NOOP logger|
|targetLocationHint|String|No|None|Target location hint|
|fetchApi|Function|No|global.fetch or window.fetch|[fetch](https://fetch.spec.whatwg.org/) is used by the SDK for http requests. By default node-fetch or the browser implementation of fetch is used. But an alternative implementation can be provided using `fetchApi`|
|propertyToken|String|No|None|**Target Property Token**. If specified here, all `getOffers` calls will use this value. **For on-device decisioning**, the SDK will only download the artifact that contains the qualified activities for the property token set in `propertyToken`|
|decisioningMethod|String|No|server-side|Determines which decisioning method to use ([on-device](../../sdk-guides/on-device-decisioning/index.md), server-side, hybrid)|
|pollingInterval|Number|No|300000 (5 minutes)|Polling interval for the [on-device decisioning rule artifact](../../sdk-guides/on-device-decisioning/rule-artifact/index.md) (in milliseconds)
|artifactLocation|String|No|None|A fully qualified url to the [on-device decisioning rule artifact](../../sdk-guides/on-device-decisioning/rule-artifact/index.md). Overrides internally determined location.|
|artifactPayload|Object|No|None|The JSON payload of the [on-device decisioning rule artifact](../../sdk-guides/on-device-decisioning/rule-artifact/index.md). If specified, it is used instead of requesting one from a URL.|
|[events](../sdk-events.md)|Object<String,Function>|No|None|An optional object with event name keys and callback function values|
|telemetryEnabled|Boolean|No|true|When enabled, Adobe will collect SDK feature usage and performance telemetry data. Personal data is not collected.|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const CONFIG = {
    client: "acmeclient",
    organizationId: "1234567890@AdobeOrg",
    events: {clientReady: targetClientReady }
};

const targetClient = TargetClient.create(CONFIG);

function targetClientReady() {
    // make calls to Adobe Target
}
```