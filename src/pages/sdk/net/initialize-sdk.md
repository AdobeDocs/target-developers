# Initialize SDK

## Description

Use the `Create` method in order to initialize the .NET SDK and instantiate the Target Client to make calls to Adobe Target for experiments and personalized experiences.

When using .NET Dependency Injection, just add the SDK at service configuration step by calling `services.AddTargetLibrary()`;, then inject `ITargetClient targetClient` in your app's constructor.

After this, use the `Initialize` method of the SDK to configure the SDK, thus completing the initialization step.

## Method

`TargetClient` is created using `TargetClient.Create`.

<CodeBlock slots="heading, code" repeat="1" languages="csharp" />

## C\#

```csharp
TargetClient TargetClient.Create(TargetClientConfig clientConfig)
```

`ClientConfig` is created using ClientConfig.Builder.

<CodeBlock slots="heading, code" repeat="1" languages="csharp" />

## C\#

```csharp
TargetClientConfig.Builder TargetClientConfig.Builder()
```

## Parameters

`TargetClientConfig.Builder` has the following structure:

|Name|Type|Required|Default|Description|
| --- | --- | --- | --- | --- |
|Client|string|Yes|None|Target Client Id|
|OrganizationId|string|Yes|None|Experience Cloud Organization ID|
|Timeout|int|No|10000|Timeout for all requests in milliseconds|
|Proxy||WebProxy|No|null|Proxy for all Target requests|
|RetryPolicy|Policy|No|null|Retry Policy for all Target requests|
|AsyncRetryPolicy|AsyncPolicy|No|null|Async Retry Policy for all Target requests|
|Logger|ILogger|No|null|Used for debug logging of Target requests and responses|
|ServerDomain|string|No|`client.tt.omtrdc.net`|Overrides default hostname|
|Secure|bool|No|true|Unset to enforce HTTP scheme|
|DefaultPropertyToken|string|No|null|Sets the default property token for every `getOffers` call|
|TelemetryEnabled|bool|No|true|Send telemetry data for improving SDK usage experience|
|DecisioningMethod|DecisioningMethod enum|No|ServerSide|Must be set to OnDevice or Hybrid to enable on-device decisioning|
|OnDeviceDecisioningReady|Action|No|null|Delegate for on-device decisioning Ready event (called once when on-device decisioning is ready)|
|ArtifactDownloadSucceeded|Action|No|null|Delegate for on-device decisioning artifact download success (called on each successful artifact download)|
|ArtifactDownloadFailed|Action|No|null|Delegate for on-device decisioning artifact download failure (called on each failed artifact download)|
|OnDeviceEnvironment|string|No|production|Can be used to specify a different on-device environment such as staging|
|OnDeviceConfigHostname|string|No|`assets.adobetarget.com`|Can be used to specify a different host to use to download the on-device decisioning artifact file|
|OnDeviceDecisioningPollingIntSecs|int|No|300 (5 min)|Number of seconds between fetches of the on-device decisioning artifact file|
|OnDeviceArtifactPayload|string|No|null|Provides on-device decisioning with a local artifact payload to allow immediate execution|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="csharp" />

## C\#

```csharp
var targetClientConfig = new TargetClientConfig.Builder("acmeclient", "ABCDEF012345677890ABCDEF0@AdobeOrg")
    .Build();

targetClient = TargetClient.Create(targetClientConfig);

// make calls to Adobe Target
```