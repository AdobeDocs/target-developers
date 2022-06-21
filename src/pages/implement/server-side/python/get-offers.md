# Get Offers

## Description

`get_offers()` is used to execute a decision and retrieve an experience from Adobe Target.


## Method

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### getOffers

```python
target_client_instance.get_offers(options)
```

## Parameters

The `options` dict has the following structure:

|Name|Type|Required|Default|Description|
| --- | --- | --- | --- | --- |
|request|DeliveryRequest|Yes|None|Conforms to the [Target Delivery API](/src/pages/implement/delivery-api/index.md) request|
|target_cookie|str|no|None|Target cookie|
|target_location_hint|str|no|None|Target location hint|
|consumer_id|str|no|None|When stitching multiple calls, different consumer IDs should be provided|
|customer_ids|list[CustomerId]|no|None|A list of Customer Ids in VisitorId-compatible format|
|session_id|str|no|None|Used for linking multiple requests|
|callback|callable|no|None|If handling request asynchronously, the callback is invoked when response is ready|
|err_callback|callable|no|None|If handling request asynchronously, error callback is invoked when exception is raised|

## Returns

Returns a `TargetDeliveryResponse` if called synchronously (default), or an `AsyncResult` if called with a callback. `TargetDeliveryResponse` has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|response|DeliveryResponse|Conforms to the [Target Delivery API](/src/pages/implement/delivery-api/index.md) response|
|target_cookie|dict|Target cookie|
|target_location_hint_cookie|dict|Target location hint cookie|
|analytics_details|list[AnalyticsResponse]|Analytics payload, in case of client side Analytics usage|
|trace|list[dict]|Aggregated trace data for all request mboxes/views|
|response_tokens|list[dict]|A list of ​[Response Tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html)|
|meta|dict|Additional decisioning metadata for use with on-device-decisioning|

`target_cookie` and `target_location_hint_cookie` objects used for passing data back to the browser have the following structure:

|Name|Type|Description|
| --- | --- | --- |
|name|str|Cookie name|
|value|any|Cookie value, the value will be converted to string|
|max_age|int|The `max_age option` is a convenience for setting expires relative to the current time in seconds|

The `meta` object used for indicating the status of the target response has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|decisioning_method|str|Which decisioning method was used: on-device or server-side|
|remote_mboxes|list[str]|When decisioning Method is `on-device`, an array of mbox names that could not be fully decided on-device is given. In other words, a [Target Delivery API](/src/pages/implement/delivery-api/index.md) request is needed.
|remote_views|list[str]|When decisioning Method is on-device, an array of view names that could not be fully decided on-device is given. In other words, a [Target Delivery API](/src/pages/implement/delivery-api/index.md) request is needed.|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### Python

```python
def client_ready_callback():
    context = Context(channel=ChannelType.WEB)
    mboxes = [MboxRequest(name="a1-serverside-ab", index=1)]
    execute = ExecuteRequest(mboxes=mboxes)
    delivery_request = DeliveryRequest(context=context, execute=execute)

    get_offers_options = {
      "request": delivery_request
    }

    target_delivery_response = target_client.get_offers(get_offers_options)


client_options = {
    "client": "acmeclient",
    "organization_id": "1234567890@AdobeOrg",
    "events": {
        "client_ready": client_ready_callback
    }
}
target_client = TargetClient.create(client_options)
```