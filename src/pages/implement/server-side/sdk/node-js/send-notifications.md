# Send Notifications

## Description

`sendNotifications()` is used to send display or click notifications to Adobe Target for measurement and reporting.

<InlineAlert variant="info" slots="text"/>

When an `execute` object with required params is within the request itself, the impression will be incremented automatically for qualifying activities.

SDK methods that will increment an impression automatically are:

* `getOffers()`
* `getAttributes()`

When a `prefetch` object is passed within the request, the impression is not automatically incremented for the activities with mboxes within the `prefetch` object. `sendNotifications()` must be used for prefetched experiences for incrementing impressions and conversions.

## Method

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### create

```js
TargetClient.sendNotifications(options: Object): Promise
```

### Parameters

`options` has the following structure:

|Name|Type|Required|Default|
| --- | --- | --- | --- |
|request|Object|Yes|None|

## Example

First, let's build the Target Delivery API request for prefetching content for the `home` and `product1` mboxes.

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const prefetchMboxesRequest = {
  prefetch: {
    mboxes: [
      { name: "home" },
      { name: "product1" }
    ]
  }
};
// Next, we fetch the offers via Target Node.js SDK getOffers() API
const targetResponse = await targetClient.getOffers({ request: prefetchMboxesRequest });
```

A successful response will contain a Target Delivery API response object, which contains prefetched content for the requested mboxes. A sample `targetResponse.response` object may appear as follows:

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
{
  "status": 200,
  "requestId": "e8ac2dbf5f7d4a9f9280f6071f24a01e",
  "id": {
    "tntId": "08210e2d751a44779b8313e2d2692b96.21_27"
  },
  "client": "adobetargetmobile",
  "edgeHost": "mboxedge21.tt.omtrdc.net",
  "prefetch": {
    "mboxes": [
      {
        "index": 0,
        "name": "home",
        "options": [
          {
            "type": "html",
            "content": "HOME OFFER",
            "eventToken": "t0FRvoWosOqHmYL5G18QCZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
            "responseTokens": {
              "profile.memberlevel": "0",
              "geo.city": "dublin",
              "activity.id": "302740",
              "experience.name": "Experience B",
              "geo.country": "ireland"
            }
          }
        ],
        "state": "J+W1Fq18hxliDDJonTPfV0S+mzxapAO3d14M43EsM9f12A6QaqL+E3XKkRFlmq9U"
      },
      {
        "index": 1,
        "name": "product1",
        "options": [
          {
            "type": "html",
            "content": "TEST OFFER 1",
            "eventToken": "t0FRvoWosOqHmYL5G18QCZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
            "responseTokens": {
              "profile.memberlevel": "0",
              "geo.city": "dublin",
              "activity.id": "302740",
              "experience.name": "Experience B",
              "geo.country": "ireland"
            }
          }
        ],
        "state": "J+W1Fq18hxliDDJonTPfV0S+mzxapAO3d14M43EsM9f12A6QaqL+E3XKkRFlmq9U"
      }
    ]
  }
}
```

Note the mbox `name` and `state` fields, as well as the `eventToken` field, in each of the Target content options. These should be provided in the `sendNotifications()` request, as soon as each content option is displayed. Let's suppose the `product1` mbox has been displayed on a non-browser device. The notifications request will appear as follows:

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const mboxNotificationRequest = {
  notifications: [{
    id: "1",
    timestamp: Date.now(),
    type: "display",
    mbox: {
      name: "product1",
      state: "J+W1Fq18hxliDDJonTPfV0S+mzxapAO3d14M43EsM9f12A6QaqL+E3XKkRFlmq9U"
    },
    tokens: [ "t0FRvoWosOqHmYL5G18QCZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==" ]
  }]
};
```

Notice that we've included both the mbox state and the event token corresponding to the Target offer delivered in the prefetch response. Having built the notifications request, we can send it to Target via the `sendNotifications()` API method:

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const notificationResponse = await targetClient.sendNotifications({ request: mboxNotificationRequest });
```