# SDK Events

## Description

When [initializing the SDK](../initialize-sdk.md), the `options["events"]` dict is an optional object with event name keys and callback function values. It can be used to subscribe to various events that occur within the SDK. For instance, the `client_ready` event may be used with a callback function that will be invoked when the SDK is ready for method calls.

When the `callback` function is called, an event object is passed in. Each event has a `type` corresponding to the event name, and some events include additional properties with pertinent information.

## Events

|Event Name (type)|Description|Additional Event Properties|
| --- | --- | --- |
|client_ready|Emitted when the artifact has downloaded and the SDK is ready for get_offers calls. Recommended when using |on-device decisioning method.|None|
|artifact_download_succeeded|Emitted each time a new artifact is downloaded.|artifact_payload, artifact_location|
|artifact_download_failed|Emitted each time an artifact fails to download.|artifact_location, error|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### Python

```python
def client_ready_callback():
    # make get_offers requests

def artifact_download_succeeded(event):
    print("The artifact was successfully downloaded from {}".format(event.artifact_location))
    # optionally do something with event.artifact_payload, like persist it

def artifact_download_failed(event):
    print("The artifact failed to download from {} with the following error: {}"
          .format(event.artifact_location, str(event.error)))

client_options = {
    "client": "acmeclient",
    "organization_id": "1234567890@AdobeOrg",
    "events": {
        "client_ready": client_ready_callback,
        "artifact_download_succeeded": artifact_download_succeeded,
        "artifact_download_failed": artifact_download_failed
    }
}
target_client = target_client.create(client_options)
```