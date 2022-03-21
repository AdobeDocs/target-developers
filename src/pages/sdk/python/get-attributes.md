# Get Attributes

## Description

`get_attributes()` is used to fetch experimentation and personalized experiences from Target and extract attribute values.


## Method

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### getAttributes

```python
target_client_instance.get_attributes(mbox_names, options)
```

## Parameters

|Name|Type|Required|Default|Description|
| --- | --- | --- | --- | --- |
|mbox_names|list[str]|Yes|None|A list of mbox names|
|options|dict|No|None|The same options as used for [Get Offers​](/get-offers.md)|

## AttributesProvider

The `AttributesProvider` returned by `target_client.get_attributes()` has the following methods:

|Method|Return Type|Description|
| --- | --- | --- |
|get_value(mbox_name, key)|any|Returns the value for a specified mbox name and attribute key|
|as_object(mbox_name)|dict|Returns a simple json object with key value pairs|
|get_response()|[TargetDeliveryResponse](https://github.com/adobe/target-python-sdk/blob/main/target_python_sdk/types/target_delivery_response.py)|Returns the response object normally returned by `get_offers`|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### Python

```python
def client_ready_callback():
    context = Context(channel=ChannelType.WEB)
    mboxes = [MboxRequest(name="a1-serverside-ab", index=1)]
    execute = ExecuteRequest(mboxes=mboxes)
    delivery_request = DeliveryRequest(context=context, execute=execute)

    get_attributes_options = {
      "request": delivery_request
    }

    attributes_provider = target_client.get_attributes(["demo-engineering-flags"], get_attributes_options)
    # returns just the value of searchProviderId from the demo-engineering-flags mbox offer
    search_provider_id = attributes_provider.get_value("demo-engineering-flags", "searchProviderId")

    # returns a simple dict object representing the demo-engineering-flags mbox offer
    engineering_flags = attributes_provider.as_object("demo-engineering-flags")
    """  the value of engineeringFlags looks like this
        {
            "cdnHostname": "cdn.cloud.corp.net",
            "searchProviderId": 143,
            "hasLegacyAccess": false
        }
    """

    asset_url = "http://{}/path/to/asset".format(engineering_flags.get("cdnHostname"))


client_options = {
    "client": "acmeclient",
    "organization_id": "1234567890@AdobeOrg",
    "events": {
        "client_ready": client_ready_callback
    }
}
target_client = TargetClient.create(client_options)
```