# SDK Events

## Description

When [initializing the SDK](../initialize-sdk.md), an optional `OnDeviceDecisioningReady` delegate can be provided on the `TargetClientConfig` object, which will be invoked when the SDK is ready for on-device method calls.
There are also a couple other delegates available for handling the on-device decisioning artifact download.

## Events

The following delegates can be configured for certain events:

|Name|Arguments|Description|
| --- | --- | --- |
|OnDeviceDecisioningReady|None|Called only once the first time the client is ready for on-device decisioning|
|ArtifactDownloadSucceeded|string contents of artifact file|Called every time an on-device decisioning artifact is downloaded|
|ArtifactDownloadFailed|Exception|Called every time there is a failure to download an on-device decisioning artifact|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### \.NET

```dotnet
var clientConfig = new TargetClientConfig.Builder("acmeclient", "1234567890@AdobeOrg")
    .SetDecisioningMethod(DecisioningMethod.OnDevice)
    .SetOnDeviceDecisioningReady(DecisioningReady)
    .SetArtifactDownloadSucceeded(artifact => Console.WriteLine("The artifact was successfully downloaded. Contents: " + artifact))
    .SetArtifactDownloadFailed(exception => Console.WriteLine("The artifact failed to download. Exception: " + exception.Message))
    .Build();

var targetClient = TargetClient.Create(clientConfig);

// ...

static void DecisioningReady()
{
    var mboxRequests = new List<MboxRequest> { new (index: 1, name: "a1-serverside-ab") };

    var targetDeliveryRequest = new TargetDeliveryRequest.Builder()
        .SetExecute(new ExecuteRequest(mboxes: mboxRequests))
        .Build();

    var targetResponse = targetClient.GetOffers(targetDeliveryRequest);
}
```