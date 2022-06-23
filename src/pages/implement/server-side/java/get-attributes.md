# Get Attributes

## Description

`getAttributes()` is used to fetch experimentation and personalized experiences from Target and extract attribute values.

## Method

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### getAttributes

```javascript
Attributes TargetClient.getAttributes(TargetDeliveryRequest targetRequest, String ...mboxes)
```

## Parameters

|Name|Type|Required|Default|Description|
| --- | --- | --- | --- | --- |
|targetRequest|TargetDeliveryRequest|Yes|None|The same target request as used for [Get Offers​](get-offers.md)
|mboxNames|var-args array|No|None|A var-args array of mbox names|


## Result

An `Attributes` object is returned from `TargetClient.getAttributes()` which has the following methods:

|Name|Type|Description|
| --- | --- | --- |
|getBoolean(mboxName, key)|Boolean|Returns the value for a specified mbox name and attribute key|
|getString(mboxName, key)|String|Returns the value for a specified mbox name and attribute key|
|getInteger(mboxName, key)|Integer|Returns the value for a specified mbox name and attribute key|
|getDouble(mboxName, key)|Double|Returns the value for a specified mbox name and attribute key|
|toMboxMap(mboxName)|Map|Returns a simple Map with key value pairs|
|getResponse()|TargetDeliveryResponse|Returns the response object normally returned by getOffers|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

#### Java

```javascript
ClientConfig clientConfig = ClientConfig.builder()
        .client("acmeclient")
        .organizationId("1234567890@AdobeOrg")
        .build();

TargetClient targetJavaClient = TargetClient.create(clientConfig);

TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
        .context(new Context().channel(ChannelType.WEB))
        .build();

Attributes offerAttributes = targetJavaClient.getAttributes(targetDeliveryRequest, "demo-engineering-flags");

//returns just the value of searchProviderId from the mbox offer
String searchProviderId = offerAttributes.getString("demo-engineering-flags", "searchProviderId");

//returns a simple Map representing the mbox offer
Map<String, Object> engineeringFlags = offerAttributes.toMboxMap("demo-engineering-flags");

//  the value of engineeringFlags looks like this
//  {
//      "cdnHostname": "cdn.cloud.corp.net",
//      "searchProviderId": 143,
//      "hasLegacyAccess": false
//  }

String assetUrl = "http://" + engineeringFlags.cdnHostname + "/path/to/asset";
```