# Send Notifications

## Description

`SendNotifications()` is used to send display or click notifications to Adobe Target for measurement and reporting.

<InlineAlert variant="info" slots="text"/>

When an `Execute` object with required params is within the request itself, the impression will be incremented automatically for qualifying activities.

SDK methods that will increment an impression automatically are:

* `GetOffers()`
* `GetAttributes()`

When a `Prefetch` object is passed within the request, the impression is not automatically incremented for the activities with mboxes within the `Prefetch` object. `SendNotifications()` must be used for prefetched experiences for incrementing impressions and conversions.

## Method

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### Create

```dotnet
TargetDeliveryResponse TargetClient.SendNotifications(TargetDeliveryRequest request)
```

## Example

First, let's build the Target Delivery API request for prefetching content for the `home` and `product1` mboxes.

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### \.NET

```dotnet
var mboxRequests = new List<MboxRequest>
    {
        new (index: 1, name: "home"),
        new (index: 2, name: "product1"),
    };

var targetDeliveryRequest = new TargetDeliveryRequest.Builder()
    .SetPrefetch(new PrefetchRequest(mboxes: mboxRequests))
    .Build();

// Next, we fetch the offers via Target .NET SDK GetOffers() API
var targetResponse = targetClient.GetOffers(targetDeliveryRequest);
```

A successful response will contain a Target Delivery API response object, which contains prefetched content for the requested mboxes. A sample `targetResponse.Response` object may appear as follows:

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### \.NET

```dotnet
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

Note the `mbox` name and `state` fields, as well as the `eventToken` field, in each of the Target content options. These should be provided in the `SendNotifications()` request, as soon as each content option is displayed. Let's suppose the `product1` mbox has been displayed on a non-browser device. The notifications request will appear as follows:

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### \.NET

```dotnet
var mboxNotifications = new List<Notification>
{
    new (id: "1", type: MetricType.Display, timestamp: DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
        mbox: new NotificationMbox("product1", "J+W1Fq18hxliDDJonTPfV0S+mzxapAO3d14M43EsM9f12A6QaqL+E3XKkRFlmq9U"),
        tokens: new List<string> { "t0FRvoWosOqHmYL5G18QCZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==" })
}; 

var mboxNotificationRequest = new TargetDeliveryRequest.Builder()
    .SetNotifications(mboxNotifications)
    .Build();
```

Notice we have included both the mbox state and the event token corresponding to the Target offer delivered in the prefetch response. Having built the notifications request, we can send it to Target via the `SendNotifications()` API method:

<CodeBlock slots="heading, code" repeat="1" languages="dotnet" />

### \.NET

```dotnet
var notificationResponse = targetClient.SendNotifications(mboxNotificationRequest);
```