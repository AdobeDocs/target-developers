# Get Offers

## Description

`getOffers()` is used to execute a decision and retrieve an experience from Adobe Target.

## Method

### getOffers

The `TargetClient.getOffers` method signature is shown as follows.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

#### Request

```javascript
TargetDeliveryResponse TargetClient.getOffers(TargetDeliveryRequest request)
```

TargetDeliveryRequest is created using `TargetDeliveryRequest.builder`.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

#### Response

```javascript
TargetDeliveryRequestBuilder TargetDeliveryRequest.builder()
```

## Parameters

The `TargetDeliveryRequestBuilder` object has the following structure:

|Name|Type|Required|Description|
| --- | --- | --- | --- |
|context|Context|Yes|Specifies the context for the request|
|sessionId||String|No|Used for linking multiple Target requests|
|thirdPartyId|String|No|Your company’s identifier for the user that you can send with every call|
|cookies|List|No|List of cookies returned in previous Target request of same user.|
|customerIds|Map|No|Customer Ids in VisitorId-compatible format|
|execute|ExecuteRequest|No|PageLoad or mboxes request to execute. Will be evaluated on server side immediately|
|prefetch|PrefetchRequest|No|Views, PageLoad or mboxes request to prefetch. Returns with notification token to be returned on conversion.|
|notifications|List|No|Used to sent notifications regarding what prefetched content was displayed|
|requestId|String|No|The request ID that will be returned in the response. Generated automatically if not present.|
|impressionId|String|No|If present,  second and subsequent requests with the same id will not increment impressions to activities/metrics. Generated automatically if not present.|
|environmentId|Long|No|Valid client environment id. If not specified host will be determined base on the provided host.|
|property|Property|No|Specifies the at_property via the token field. It can be used to control the scope for the delivery.|
|trace|Trace|No|Enables trace for Delivery API.|
|qaMode|QAMode|No|Use this object to enable the QA mode in the request.|
|locationHint|String|No|Target edge cluster location hint. Used to target given edge cluster for this request.|
|visitor|Visitor|No|Used to provide custom Visitor API object.|
|id|VisitorId|No|Object that contains the identifiers for the visitor. Eg. tntId, thirdParyId, mcId, customerIds.|
|experienceCloud|ExperienceCloud|No|Specifies integrations with Audience Manager and Analytics. Automatically populated using cookies, if not provided.|
|tntId|String|No|Primary identifier in Target for a user. Fetched from targetCookies. Auto-generated if not provided.|
|mcId|String|No|Used to merge and share data between different Adobe solutions(ECID). Fetched from targetCookies. Auto-generated if not provided.|
|trackingServer|String|No|The Adobe Analytics Server in order for Adobe Target and Adobe Analytics to correctly stitch the data together.|
|trackingServerSecure|String|No|The Adobe Analytics Secure Server in order for Adobe Target and Adobe Analytics to correctly stitch the data together.|
|decisioningMethod|DecisioningMethod|No|Can be used to explicitly set ON_DEVICE or HYBRID decisioning method for on-device decisioning|

The values of each field should conform to *Target View Delivery API* request specification. To learn more about the *Target View Delivery API*, see [http://developers.adobetarget.com/api/#view-delivery-overview](http://developers.adobetarget.com/api/#view-delivery-overview)


## Response

The `TargetDeliveryResponse` returned by `TargetClient.getOffers(`) has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|request|TargetDeliveryRequest​|*Target View Delivery API* request|
|response|DeliveryResponse|*Target View Delivery API* response|
|cookies|List|List of session metadata for this user. Need to be passed in next target request for this user.|
|visitorState|Map|Visitor state to be set on client side to be used by Visitor API|
|responseStatus|ResponseStatus|An object representing the status of the response|

The `ResponseStatus` in the response contains the following fields:

|Name|Type|Description|
| --- | --- | --- |
|status|int|HTTP status returned from Target|
|message|String|Status message in case HTTP status is not 200|
|remoteMboxes|List of Strings|Used for on-device decisioning. Contains a list of mboxes that have remote activities that cannot be decided entirely on-device.|
|remoteViews|List of Strings|Used for on-device decisioning. Contains a list of views that have remote activities that cannot be decided entirely on-device.|

The `TargetCookie` object used for saving data for user session has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|name|String|Cookie name|
|value|String|Cookie value, the value will be converted to string|
|maxAge|Number|The maxAge option is a convenience for setting expires relative to the current time in seconds|

You don't have to worry about expiring the cookies. Target handles maxAge inside the SDK.

## Example

<CodeBlock slots="heading, code" repeat="2" languages="Java, Java" />

#### Request

```javascript
ClientConfig clientConfig = ClientConfig.builder()
        .client("acmeclient")
        .organizationId("1234567890@AdobeOrg")
        .build();

TargetClient targetJavaClient = TargetClient.create(clientConfig);

List<MboxRequest> mboxRequests = new ArrayList<>();
mboxRequests.add((MboxRequest) new MboxRequest().name("a1-serverside-ab").index(1));

TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
        .context(new Context().channel(ChannelType.WEB))
        .execute(new ExecuteRequest().setMboxes(mboxRequests))
        .build();
```

#### Response

```javascript
TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);
```