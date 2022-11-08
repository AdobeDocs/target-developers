# User identification and bucketing

## User Identification

There are multiple ways in which a user can be identified within Adobe Target. Target uses the following identifiers:

|Field Name|Description|
| --- | --- |
|`tntID`|The `tntId` is the primary identifier in Target for a user. You can supply this ID, or Target will auto-generate it if the request doesn’t contain one.|
|`thirdPartyId`|The `thirdPartyId` is your company’s identifier for the user, which you can send with every call. When a user logs in to a company's site, the company typically creates an ID that is tied to the visitor's account, loyalty card, membership number, or other applicable identifiers for that company.|
|`marketingCloudVisitorId`|The `marketingCloudVisitorId` is used to merge and share data between different Adobe solutions. The marketingCloudVisitorId is required for integrations with Adobe Analytics and Adobe Audience Manager.|
|`customerIds`|Along with the Experience Cloud Visitor ID, additional [customer IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html) and an authenticated status for each visitor can also be utilized.|

## Target ID (tntID)

The Target ID, or `tntId`, can be considered a device ID. This `tntId` is generated automatically by Adobe Target if it is not provided in the request. Subsequent requests need to include this `tntId` in order for the right content to be delivered to a device used by the same user.

The following sample call demonstrates a situation in which a `tntId` is not passed to Target.

### Node.js SDK

```Javascript
const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
  request: {
    execute: {
      mboxes: [{
        name: "some-mbox"
      }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

### Java SDK

```Java
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

Context context = new Context().channel(ChannelType.WEB);
MboxRequest mbox = new MboxRequest()
  .name("some-mbox")
  .index(0);
ExecuteRequest executeRequest = new ExecuteRequest()
  .mboxes(Arrays.asList(mbox));

TargetDeliveryRequest request = TargetDeliveryRequest.builder()
  .context(context)
  .execute(executeRequest)
  .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
```

In the absence of a `tntId`, Adobe Target generates a `tntId` and provides it in the response, as follows.

```JSON
{
  "status": 200,
  "requestId": "5b586f83-890c-46ae-93a2-610b1caa43ef",
  "client": "acmeclient",
  "id": {
      "tntId": "10abf6304b2714215b1fd39a870f01afc.35_0"
  },
  "edgeHost": "mboxedge35.tt.omtrdc.net",
  ...
}
```

In this example, the generated `tntId` is `10abf6304b2714215b1fd39a870f01afc.35_0`. Please note this `tntId` needs to be used for the same user across sessions.

## Third Party ID (thirdPartyId)

If your organization uses an ID to identify your visitor, you can use `thirdPartyID` to deliver content. A `thirdPartyID` is a persistent ID that your business utilizes to identify an end user, regardless of whether they interact with your business from web, mobile, or IoT channels. In other words, the `thirdPartyId` references user profile data that can be utilized across channels. However, you must provide the `thirdPartyID` for every Adobe Target Delivery API call you make.

The following sample call demonstrates the use of a `thirdPartyId`.

### Node.js SDK

```Javascript
const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
  request: {
    id: {
      thirdPartyId: "B234A029348"
    },
    execute: {
      mboxes: [{
        name: "some-mbox"
      }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

### Java SDK

```Java
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

VisitorId id = new VisitorId()
  .thirdPartyId("B234A029348");
Context context = new Context().channel(ChannelType.WEB);
MboxRequest mbox = new MboxRequest()
  .name("some-mbox")
  .index(0);
ExecuteRequest executeRequest = new ExecuteRequest()
  .mboxes(Arrays.asList(mbox));

TargetDeliveryRequest request = TargetDeliveryRequest.builder()
  .context(context)
  .execute(executeRequest)
  .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
```

In this scenario, Adobe Target will generate a `tntId` since it was not passed into the original call, which will be mapped to the provided `thirdPartyId`.

## Marketing Cloud Visitor ID (marketingCloudVisitorId)

The `marketingCloudVisitorId` is a universal and persistent ID that identifies your visitors across all solutions in the Adobe Experience Cloud. When your organization implements the ID service, this ID lets you identify the same site visitor and their data in different Experience Cloud solutions, including Adobe Target, Adobe Analytics, and Adobe Audience Manager. Please note the `marketingCloudVisitorId` is required when integrating Target with Analytics and Audience Manager.

The following sample call demonstrates how a `marketingCloudVisitorId` that was retrieved from the Experience Cloud ID Service is passed to Target.

### Node.js SDK

```Javascript
const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
  request: {
    id: {
      marketingCloudVisitorId: "10527837386392355901041112038610706884"
    },
    execute: {
      mboxes: [{
        name: "some-mbox"
      }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

### Java SDK

```Java
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

VisitorId id = new VisitorId()
  .marketingCloudVisitorId("10527837386392355901041112038610706884");
Context context = new Context().channel(ChannelType.WEB);
MboxRequest mbox = new MboxRequest()
  .name("some-mbox")
  .index(0);
ExecuteRequest executeRequest = new ExecuteRequest()
  .mboxes(Arrays.asList(mbox));

TargetDeliveryRequest request = TargetDeliveryRequest.builder()
  .context(context)
  .execute(executeRequest)
  .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
```

In this scenario, Target will generate a `tntId` since it was not passed into the original call, which will be mapped to the provided `marketingCloudVisitorId`.

## Customer ID (customerIds)

[Customer IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html) can be added to, or associated with, an Experience Cloud Visitor ID. Whenever sending `customerIds`, the `marketingCloudVisitorId` must also be provided. Furthermore, an authentication status can be provided along with each `customerId` for each visitor. The following authentication statuses may be used:

|Authentication Status|User Status|
| --- | --- |
|`unknown`|Unknown or never authenticated. This state can be used for scenarios such as that in which a visitor lands on your site by clicking a display advert.|
|`authenticated`|The user is currently authenticated with an active session on your website or app.|
|`logged_out`|The user was authenticated but actively logged out. The user intended to disconnect from the authenticated state. The user no longer wants to be treated as authenticated.|

Please note that only when the `customerId` is in an authenticated state will Target reference the user profile data that is stored and linked to the customerId. If the `customerId` is in an unknown or `logged_out` state, it will be ignored, and any user profile data that may be associated with that `customerId` will not be leveraged for audience targeting.

### Node.js SDK

```Javascript
const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
  request: {
    id: {
      marketingCloudVisitorId : "10527837386392355901041112038610706884",
      customerIds: [{
        id: "134325423",
        integrationCode : "crm_data",
        authenticatedState : "authenticated"
      }]
    },
    execute: {
      mboxes: [{
        name: "some-mbox"
      }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

### Java SDK

```Java
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

CustomerId customerId = new CustomerId()
  .id("134325423")
  .integrationCode("crm_data")
  .authenticatedState(AuthenticatedState.AUTHENTICATED);
VisitorId id = new VisitorId()
  .marketingCloudVisitorId("10527837386392355901041112038610706884")
  .customerIds(Arrays.asList(customerId));
Context context = new Context().channel(ChannelType.WEB);
MboxRequest mbox = new MboxRequest()
  .name("some-mbox")
  .index(0);
ExecuteRequest executeRequest = new ExecuteRequest()
  .mboxes(Arrays.asList(mbox));

TargetDeliveryRequest request = TargetDeliveryRequest.builder()
  .context(context)
  .execute(executeRequest)
  .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
```

The example above demonstrates how to send a `customerId` with an `authenticatedState`. When sending a `customerId`, the `integrationCode`, `id`, and `authenticatedState` as well as the `marketingCloudVisitorId` are required. The `integrationCode` is the alias of the [customer attributes file](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/working-with-customer-attributes.html) you provided through CRS.

## Merged Profile

You can combine `tntId`, `thirdPartyID`, and `marketingCloudVisitorId` in the same request. In this scenario, Adobe Target will maintain the mapping of all these IDs and pin it to a visitor. Learn how profiles are [merged and synced in real time](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/3rd-party-id.html) using the different identifiers.

### Node JS SDK

```Javascript
const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
  request: {
    id: {
      tntId: "d359234570e044f14e1faeeba02d6ab23439914e.35_0",
      thirdPartyId: "B234A029348",
      marketingCloudVisitorId : "10527837386392355901041112038610706884"
    },
    execute: {
      mboxes: [{
        name: "some-mbox"
      }]
    }
  }
})
.then(console.log)
.catch(console.error);
```

### Java SDK

```Java
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

VisitorId id = new VisitorId()
  .tntId("d359234570e044f14e1faeeba02d6ab23439914e.35_0")
  .thirdPartyId("B234A029348")
  .marketingCloudVisitorId("10527837386392355901041112038610706884");
Context context = new Context().channel(ChannelType.WEB);
MboxRequest mbox = new MboxRequest()
  .name("some-mbox")
  .index(0);
ExecuteRequest executeRequest = new ExecuteRequest()
  .mboxes(Arrays.asList(mbox));

TargetDeliveryRequest request = TargetDeliveryRequest.builder()
  .context(context)
  .execute(executeRequest)
  .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
```

The example above demonstrates how you can combine `tntId`, `thirdPartyID`, and `marketingCloudVisitorId` in the same request.

## Bucketing

Your users are bucketed into seeing an experience depending on how you set up your Adobe Target activities. In Adobe Target, bucketing is:

* **Deterministic**: MurmurHash3 is used to ensure that your user is bucketed and sees the right variation every single time as long as the user ID is consistent.
* **Sticky**: Adobe Target stores the variation that your user sees in the user profile to ensure the variation is consistently shown to that user across sessions and channels. Variations and stickiness are guaranteed when using server-side decisioning. When on-device decisioning is used, stickiness is not guaranteed.

## End-to-end bucketing workflow

Before diving into the actual bucketing algorithm, it is important to highlight that similar steps are used both to select activities based on their traffic allocation percentage, as well as to select an experience within an activity.

### Activity selection steps

1. Generate a device ID, usually a UUID
1. Get the client code
1. Get the activity ID
1. Get the salt, which is usually some string like "activity"
1. Compute the hash using MurmurHash3
1. Get the absolute value of the hash
1. Divide the hash absolute value by 10000
1. Divide the remainder by 10000, which should produce a value between 0 and 1
1. Multiply the result by 100%
1. Compare activity traffic allocation percentage against the obtained percentage. If the traffic allocation percentage is lower, then the activity is selected. Otherwise, the activity is skipped.

### Experience selection steps

1. Generate a device ID, usually a UUID
1. Get the client code
1. Get the activity ID
1. Get the salt, which is usually some string like "experience"
1. Compute the hash using MurmurHash3
1. Get the absolute value of the hash
1. Divide the hash absolute value by 10000
1. Divide the remainder by 10000, which should produce a value between 0 and 1
1. Multiply the result by the total number of experiences within the activity
1. Round the result. This should produce the experience index.

### Example

Assume the following:

* Client C with client code `acmeclient`
* Activity A that has ID `1111` and three experiences `E1`, `E2`, `E3`
* Experiences have the following distribution: `E1` - 33%, `E2` - 33%, `E3` - 34%

The selection flow looks like this:

1. Device ID `702ff4d0-83b1-4e2e-a0a6-22cbe460eb15`
1. Client code `acmeclient`
1. Activity ID `1111`
1. Salt `experience`
1. Value to hash `acmeclient.1111.702ff4d0-83b1-4e2e-a0a6-22cbe460eb15.experience`, hash value `-919077116`
1. Absolute value of the hash `919077116`
1. Remainder after division by 10000, `7116`
1. Value after remainder is divided by 10000, `0.7116`
1. Result after multiplying the value against the total number of experiences `3 * 0.7116 = 2.1348`
1. The experience index is `2`, which means the third experience, since we are using `0` based indexing.
