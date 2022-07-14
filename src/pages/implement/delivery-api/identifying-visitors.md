---
title: Adobe Target Delivery API Identifying Visitors
description: Adobe Target Delivery API Identifying Visitors
keywords:
- delivery api
--- 

# Identifying Visitors

There are multiple ways in which a visitor can be identified within Target.

Target uses three identifiers:

|Field Name|Description|
| --- | --- |
|`tntId`|The `tntId` is the primary identifier in Target for a user. You can supply this ID or Target will auto-generate it if the request doesn’t contain one.|
|`thirdPartyId`|The `thirdPartyId` is your company’s identifier for the user that you can send with every call. When a user logs in to a company's site, the company typically creates an ID that is tied to the visitor's account, loyalty card, membership number, or other applicable identifiers for that company.|
|`marketingCloudVisitorId`|The `marketingCloudVisitorId` is used to merge and share data between different Adobe solutions. The `marketingCloudVisitorId` is required for integrations with Adobe Analytics and Adobe Audience Manager.|
|`customerIds`|Along with the Experience Cloud Visitor ID, additional [customer IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html) and an authenticated status for each visitor can be utilized.|

## Target ID

The Target ID or `tntId` can be seen as a device ID. This `tntId` is generated automatically by Adobe Target if it isn't provided in the request. Thereafter, subsequent requests need to include this `tntId` in order for the right content to be delivered to a device used by the user.

```http
curl -X POST \
'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-d '{
  "context": {
    "channel": "web",
    "browser" : {
      "host" : "demo"
    },
    "address" : {
      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"
    },
    "screen" : {
      "width" : 1200,
      "height": 1400
    }
  },
    "execute": {
    "mboxes" : [
      {
        "name" : "SummerOffer",
        "index" : 1
      }
    ]
  }
}'
```

The example call above demonstrates that a `tntId` does not need to be passed in. In this scenario, Adobe Target will generate a `tntId` and provide it in the response, as shown here:

```URI
{
  "status": 200,
  "requestId": "5b586f83-890c-46ae-93a2-610b1caa43ef",
  "client": "demo",
  "id": {
      "tntId": "10abf6304b2714215b1fd39a870f01afc.28_20"
  },
  "edgeHost": "mboxedge28.tt.omtrdc.net",
  ...
}
```

The generated `tntId` is `10abf6304b2714215b1fd39a870f01afc.28_20`. Please note this `tntId` needs to be used when calling the Adobe Target Delivery API for the same user across sessions.

## Marketing Cloud Visitor ID

The `marketingCloudVisitorId` is a universal and persistent ID that identifies your visitors across all solutions in the Experience Cloud. When your organization implements the ID service, this ID lets you identify the same site visitor and their data in different Experience Cloud solutions like Adobe Target, Adobe Analytics or Adobe Audience Manager. Please note that the `marketingCloudVisitorId` is required when leveraging and integrating with Analytics and Audience Manager.

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
  "id": {
    "marketingCloudVisitorId": "10527837386392355901041112038610706884"
  },
  "context": {
    "channel": "web",
    "browser" : {
      "host" : "demo"
    },
    "address" : {
      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"
    },
    "screen" : {
      "width" : 1200,
      "height": 1400
    }
  },
    "execute": {
    "mboxes" : [
      {
        "name" : "SummerOffer",
        "index" : 1
      }
    ]
  }
}'
```

The above example call demonstrates how a `marketingCloudVisitorId` that was retrieved from the Experience Cloud ID Service is passed to Adobe Target. In this scenario, Adobe Target will generate a `tntId` since it was not passed in to the original call which will be mapped to the provided `marketingCloudVisitorId` as seen in the response below.

## Third Party ID

If your organization uses an ID to identify your visitor, you can use `thirdPartyID` to deliver content. However, you must provide the `thirdPartyID` for every Adobe Target Delivery API call you make.

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
  "id": {
    "thirdPartyId": "B234A029348"
  },
  "context": {
    "channel": "web",
    "browser" : {
      "host" : "demo"
    },
    "address" : {
      "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"
    },
    "screen" : {
      "width" : 1200,
      "height": 1400
    }
  },
    "execute": {
    "mboxes" : [
      {
        "name" : "SummerOffer",
        "index" : 1
      }
    ]
  }
}'
```

The example call above shows a `thirdPartyId`, which is a persistent ID that your business utilizes to identify an end user regardless of whether they are interacting with your business from web, mobile, or IoT channels. In other words, the `thirdPartyId` will reference user profile data that can be utilized across channels. In this scenario, Adobe Target will generate a `tntId`, since it was not passed in to the original call, which will be mapped to the provided `thirdPartyId` as seen in the response below.

```
{
    "status": 200,
    "requestId": "55de9886-bd14-4dee-819c-7d1633b79b90",
    "client": "demo",
    "id": {
        "tntId": "10abf6304b2714215b1fd39a870f01afc.28_20",
        "thirdPartyId": "B234A029348"
    },
    "edgeHost": "mboxedge28.tt.omtrdc.net",
    ...
}
```

## Customer ID

[Customer IDs](https://experienceleague.adobe.com/docs/id-service/using/reference/authenticated-state.html) can be added and associated with an Experience Cloud Visitor ID. Whenever sending `customerIds` the `marketingCloudVisitorId` must also be provided. Furthermore, an authentication status can be provided along with each `customerId` for each visitor. The following authentication status can be taken into consideration:

|Authentication Status|User Status|
| --- | --- |
|`unknown`|Unknown or never authenticated. This state can be used for scenarios like a visitor that has landed on your site by clicking on a display advert.|
|`authenticated`|The user is currently authenticated with an active session on your website or app.|
|`logged_out`|The user was authenticated but actively logged out. The user intended and meant to disconnect from the authenticated state. The user no longer wants to be treated as authenticated.|

Please note that only when the customer id is in `authenticated` state will Target reference the user profile data that is stored and linked to the customer id. If the customer id is in `unknown` or `logged_out` state, the customer id will be ignored, and any user profile data that may be associated with it will not be leveraged for audience targeting.

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e044f14e1faeeba02d6ab23439914e' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
      "context": {
        "channel": "web",
        "browser" : {
          "host" : "demo"
        },
        "address" : {
          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"
        },
        "screen" : {
          "width" : 1200,
          "height": 1400
        }
      },
      "id": {
        "marketingCloudVisitorId" : "2304820394812039",
        "customerIds": [{
          "id": "134325423",
          "integrationCode" : "crm_data",
          "authenticatedState" : "authenticated"
        }]
      },
      "property" : {
        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"
      },
        "execute": {
        "mboxes" : [
          {
            "name" : "homepage",
            "index" : 1
          }
        ]
      }
    }'
```

The example call above demonstrates how to send a `customerId` with an `authenticatedState`. When sending a `customerId`, the `integrationCode`, `id`, and `authenticatedState` as well as the `marketingCloudVisitorId` are required. The `integrationCode` is the alias of the [customer attributes file](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/working-with-customer-attributes.html) you provided through CRS.

## Merged Profile

You can combine `tntId`, `t`hirdPartyID`, and `marketingCloudVisitorId` in the same request. In this scenario, Adobe Target will maintain the mapping of all these IDs and pin it to a visitor. Learn how profiles are [merged and synced in real time](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/3rd-party-id.html) using the different identifiers.

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e044f14e1faeeba02d6ab23439914e' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
      "context": {
        "channel": "web",
        "browser" : {
          "host" : "demo"
        },
        "address" : {
          "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"
        },
        "screen" : {
          "width" : 1200,
          "height": 1400
        }
      },
      "id": {
        "marketingCloudVisitorId" : "2304820394812039",
        "tntId": "d359234570e044f14e1faeeba02d6ab23439914e.28_78",
        "thirdPartyId":"23423432"
      },
      "property" : {
        "token": "08b62abd-c3e7-dfb2-da93-96b3aa724d81"
      },
      "experienceCloud": {
        "analytics": {
          "supplementalDataId" : "23423498732598234",
          "trackingServer": "ags041.sc.omtrdc.net",
          "logging": "server_side"
        }
      },
        "execute": {
        "mboxes" : [
          {
            "name" : "homepage",
            "index" : 1
          }
        ]
      }
    }'
```

The example call above demonstrates how you can combine `tntId`, `thirdPartyID`, and `marketingCloudVisitorId` in the same request. All three IDs are also returned in the response.