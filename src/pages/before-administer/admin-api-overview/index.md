---
title: Adobe Target Admin API Overview
description: Overview of the Adobe Target Admin API
---

# Target Admin API Overview

This article provides an overview of background information necessary to understand and use Adobe Target Admin APIs successfully. The following content assumes you understand how to [configure authentication](../configure-authentication.md) for Adobe Target Admin APIs.

<InlineAlert variant="info" slots="text"/>

If you wish to administer Target via the UI, see the [administration section of the *Adobe Target Business User Guide*](https://experienceleague.adobe.com/docs/target/using/administer/administrating-target.html?lang=en).

<InlineAlert variant="info" slots="text"/>

The Admin APIs and Profile APIs are often referred to collectively ("Admin and Profile APIs"), but may also be referred to separately ("Admin APIs" and "Profile APIs"). The Recommendations API is a specific implementation of a Target Admin API.

## Before You Begin

In all code examples provided for the [Admin APIs](../../administer/admin-api/index.md), replace {tenant} with your tenant value, `your-bearer-token` with the access token that you generate with your JWT and `your-api-key` with your API key from the [Adobe Developer Console](https://developer.adobe.com/console/home). For more information on tenants and JWTs, please see the article on how to [configure authentication](../configure-authentication.md) for Adobe Target Admin APIs.

## Versioning

All APIs have an associated version. It is important to provide the right version of the API you want to use.

If the request contains a payload (POST or PUT), the `Content-Type` header of the request is used to specify the version.

If the request does not contain a payload (GET, DELETE or OPTIONS), the `Accept` header is used to specify the version.

If a version is not provided, the call will default to V1 (application/vnd.adobe.target.v1+json).

<InlineAlert variant="info" slots="text"/>

If the correct version is not specified -- for example, if you use a V2 payload but fail to specify the Content-Type header -- then the API will respond with an unsupported error if the API is not backwards compatible.

Error Message for unsupported features

```
{
    "httpStatus": 406,
    "requestId": "8752b736-cf71-4d81-86c3-94be2b5ae648",
    "requestTime": "2018-02-02T21:39:06.405Z",
    "errors": [
        {
            "errorCode": "Unsupported.Feature",
            "message": "Unsupported features detected"
        }
    ]
}
```

Admin Postman Collection

Postman is an application that makes it easy to fire API calls. This [Target Admin API Postman Collection](https://developers.adobetarget.com/api/#admin-postman-collection) contains all Target Admin API calls that require authentication using Activities, Audiences, Offers, Reports, Mboxes, and Environments

## Response Codes

Here are the common response codes for the Target Admin APIs.

|Status|Meaning|Description|
| --- | --- | --- |
|200|[OK](https://www.rfc-editor.org/rfc/rfc7231#section-6.3.1)|OK||
|400|[Bad Request](https://www.rfc-editor.org/rfc/rfc7231#section-6.5.1)|Bad Request. Most probably the data provided in the request is invalid.||
|401|[Unauthorized](https://www.rfc-editor.org/rfc/rfc7235#section-3.1)|The user is not allowed to perform this operation.||
|403|[Forbidden](https://www.rfc-editor.org/rfc/rfc7231#section-6.5.3)|Access to this resource is forbidden.||
|404|[Not Found](https://www.rfc-editor.org/rfc/rfc7231#section-6.5.4)|The referenced resource was not found.||

## Activities

An activity enables you to test or personalize content for your users. Activities may be one of the following types:

* [A/B](https://experienceleague.adobe.com/docs/target/using/activities/abtest/test-ab.html)
* [Experience Targeting (XT)](https://experienceleague.adobe.com/docs/target/using/activities/experience-targeting/experience-target.html)
* [Recommendations](https://experienceleague.adobe.com/docs/target/using/activities/recommendations-activity.html)
* [Automated Personalization](https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html)
* [Multivariate Test (MVT)](https://experienceleague.adobe.com/docs/target/using/activities/multivariate-test/multivariate-testing.html)

## Batch Updates

Multiple Admin APIs can be executed as a single batch request.

### Execute Calls in Batch

`POST /{tenant}/target/batch`

Stack multiple API calls together and execute them in a single batch.

Batching allows you to pass instructions for several operations in a single HTTP request. You can also specify dependencies between related operations (described in a section below). TNT will process each of your independent operations (possibly in parallel) and will process your dependent operations sequentially. Once all operations have been completed, a consolidated response will be passed back and the HTTP connection will be closed.

The batch API takes in an array of logical HTTP requests represented as JSON arrays - each request has a method (corresponding to HTTP method GET/PUT/POST/DELETE etc.), a relativeUrl (the portion of the URL after admin/rest/), optional headers array (corresponding to HTTP headers) and an optional body (for POST and PUT requests). The Batch API returns an array of logical HTTP responses represented as JSON arrays - each response has a status code, an optional headers array and an optional body (which is a JSON encoded string). To make batched requests build a JSON object which describes each individual operation to perform. The number of maximum allowed operations are 256 (from 0 to 255).

Specifying dependencies between operations in the request By default, the operations specified in the batch API request are independent - they can be executed in arbitrary order on the server and an error in one operation does not affect execution of other operations.

Often, the operations in the request are dependent - for example, the output of one operation may be used in the input of the next operation. For example offer created in operationId=0 needs to be used in campaign creation operationId=1.

In order to link two batch operations together specify in the dependent operation the id of the required operation, for instance: “dependsOnOperationId” : 5. Also IDs of created resources via POST requests of batch operations can be used in dependent operations both in “relativeUrl” and “body”.

#### Permissions & Throttling

In order to execute batch API actions the underlying user has to have at least “editor” rights (for each individual operation in case additional rights are required than user has then the individual operation will fail). Usual throttling strategies are applied on batch API actions as if every operation has been performed individually.

Batch processing finishes when all operations have been completed, an operation could either be successful (2xx statusCode), failure (4xx, 5xx status code) or skipped because a dependency operation has failed or has been skipped.

#### Request Object Parameters

|Attribute|Description|Limits|Default|
| --- | --- | --- | --- |
|body|body for HTTP batch operation. will be ignored for all actions but POST and PUT. can refer to IDs from previous batch actions, for instance: “offerId”: “{operationIdResponse:0}”, “segmentId”: “{operationIdResponse:1}”|should be a valid JSON; in case referencing an operationIdResponse, the operationId response referred should be a valid ID and the method on that action should be POST|empty object {}||
|dependsOnOperationIds|list of constraint IDs that will assure that current operation will execute only if specified operations have completed successfully. Can be used to achieve chaining of operations.|maximum 255 operations are allowed; unique values are only allowed; should point to a valid operationId in the array; cyclical dependencies are not allowed|||
|headers|array of key-value headers to be sent with particular operation. In case authentication for batch API has been performed via Authorization header, it will be copied for individual operations as well.|max number of headers in array allowed is 50|Content-Type: application/json||
|headers->name|header name|should be unique among other header names. headers are case insensitive by rfc, otherwise the values will override each other.|||
|headers->value|header value|N/A|empty string||
|method|HTTP method to use. Available options: GET, POST, PUT, PATCH, DELETE|only GET, POST, PUT, PATCH, DELETE methods are allowed|||
|operationId|operation ID used to identify an operation among other operations for responses and referencing results.|unique among other operations; values from 0-255|||
|operations|list of operations to perform in a batch. order is not relevant.|maximum 256 operations are allowed|||
|relativeUrl|relative URL for admin rest API, the part after “/admin/rest/”. Can contain query string parameters like: “/v2/campaigns?limit=10&offset=10”. can refer to URLs with contain IDs from previous batch actions, for instance: “/v1/offers/{operationIdResponse:0}”. In case query parameters are sent they have to be URL encoded.|should start with / (be relative); only new valid JSON APIs are supported; in case of invalid relativeURL a 404 response for particular operation will be returned; in case referencing an operationIdResponse, the operationId response referred should be a valid ID and the method on that action should be POST|||

#### Sample Request Object

```
{
  "operations": [
    {
      "operationId": 1,
      "dependsOnOperationIds~": [0],
      "method": "POST",
      "relativeUrl": "/v1/offers",
      "headers~": [
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ],
      "body~": {
        "key": "value"
      }
    }
  ]
}
```

#### Response Object Parameters

|Parameter|Description|
| --- | --- |
|operationId|operation ID used to identify an operation among other operations, same ID as it has been sent in POST request.||
|skipped|boolen flag to mark if operation has been executed or skipped. Will be true in case that current operation depends on a operation which has failed (returned a statusCode value different than 2xx).||
|statusCode|returned then all depending operations will be skipped (not executed).||
|headers|array of key-value headers to be sent as a response for particular operation.||
|headers->name|header name||
|headers->value|header value||
|body|body for HTTP batch response operation||

#### Sample Response Object

```
{
  "results": [
    {
      "operationId": 1,
      "skipped~": false,
      "statusCode~": 200,
      "headers~": [
        {
          "name": "Content-Type",
          "value": "application/json; charset=UTF-8"
        }
      ],
      "body~": {
        "id": 5
      }
    }
  ]
}
```