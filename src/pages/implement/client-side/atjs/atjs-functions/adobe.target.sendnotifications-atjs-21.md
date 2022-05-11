---
keywords:
- adobe.target.sendNotifications
- sendNotifications
- sendnotifications
- send notifications
- notifications
- at.js
- functions
- function
description: Use adobe.target.sendNotifications() for at.js to send notifications to the Target edge when an experience is rendered not using applyOffer(s). (at.js.2.1 +)
title: How Do I Use the adobe.target.sendNotifications() Function?
feature: at.js
role: Developer
exl-id: 71b7167d-729c-4d43-8f54-f43619e14f32
---
# adobe.target.sendNotifications(options)

This function sends a notification to Target edge when an experience is rendered without using `adobe.target.applyOffer()` or `adobe.target.applyOffers()`.

<InlineAlert variant="info" slots="text"/>

This function has been introduced in at.js 2.1.0 and will be available for any versions above 2.1.0.

|Key|Type|Required?|Description|
| --- | --- | --- | --- |
|consumerId|String|No|Default value is client's global mbox if not provided. This key is used to generate the supplemental data ID used for A4T integration.|
|Request|Object|Yes|See Requests table below.|
|timeout|Number|No|Request timeout. If not specified the default at.js timeout is used.|

## Request

|Field Name|Type|Required?|Limitation|Description|
| --- | --- | --- | --- | --- |
|Request > notifications|Array of Objects|Yes||Notifications for the displayed content, clicked selectors, and/or visited views or mboxes.|
|Request > notifications > address|Object|No|||
|Request > notifications > address > url| String|No||URL from which the notification was fired.|
|Request > notifications > address > referringUrl|String|No||The referral URL from which the notification was fired.|
|Request > notifications > parameters|String|No|The following names are not allowed for parameters:<ul><li>orderId</li><li>orderTotal</li><li>productPurchasedIds</li></ul>Consider the following:<ul><li>Max 50 parameters limit.</li><li>Parameter name should not be blank.</li><li>Parameter name max length 128.</li><li>Parameter name should not start with "profile."</li><li>Parameter value length max 5000.</li></ul>||
|Request > notifications > profileParameters|String|No|The following names are not allowed for parameters:<ul><li>orderId</li><li>orderTotal</li><li>productPurchasedIds</li></ul>Consider the following:<ul><li>Max 50 parameters limit.</li><li>Parameter name should not be blank.</li><li>Parameter name max length 128.</li><li>Parameter name should not start with "profile."</li><li>Parameter value length max 5000.</li></ul>||
|Request > notifications > order|Object|No||Object that describes the order details.|
|Request > notifications > order > id|String|No|`<=` 250 characters.|Order ID.|
|Request > notifications > order > total|String|No|`>=` 0|Order Total.|
|Request > notifications > order > purchasedProductIds|Array of String|No|<ul><li>No blank values allowed.</li><li>Each product Id max length 50.</li><li>Product IDs, separated by commas and concatenated, total length should not exceed 250.</li></ul>|Order Product IDs.|
|Request > notifications > product|Object|No|||
|Request > notifications > product > id|String|No|`<=` 128 characters; cannot be blank.|Product ID.|
|Request > notifications > product > categoryId|String|No|`<=` 128 characters; cannot be blank.|Category ID.|
|Request > notifications > id|String|Yes|`<=` 200 characters.|Notification ID will be returned in response and will indicate that the notification was processed successfully.|
|Request > notifications > impressionId|String|No|`<= 128` characters.|Impression ID is used to stitch (link) the current notification with a previous notification or execute request. In case both of them match, the second and other subsequent requests will not generate a new impression to the activity or experience.|
|Request > notifications > type|String|Yes|“click” or “display” is supported.|Notification type.|
|Request > notifications > timestamp|Number`<int64>`|Yes||Timestamp of the notification in milliseconds elapsed since UNIX epoch.|
|Request > notifications > tokens|Array of String|Yes||A list of tokens for displayed content or clicked selectors, based on the type of notification.|
|Request > notifications > mbox|Object|No||Notifications for the mbox.|
|Request > notifications > mbox > name|String|No|No blank values allowed.<br />Allowed chars: See note following this table.|mbox name.|
|Request > notifications > mbox > state|String|No||mbox state token.|
|Request > notifications > view |Object|No|||
|Request > notifications > view > id|Integer `<int64>`|No||View id. The id that was assigned to the view when the view was created via the view API.|
|Request > notifications > view > name|String|No|`<= 128` characters.|Name of view.|
|Request > notifications > view > key|String|No|`<=` 512 characters.|View key. The key that was set with the view via the API.|
|Request > notifications > view > state|String|No||View state token.|

**Note**: The following characters are *not* allowed for `Request > notifications > mbox > name`:

```
- '-, ./=`:;&!@#$%^&*()+|?~[]{}'
```

## sendNotifications() call after rendering prefetched mboxes

```javascript
function createTokens(options) {
  return options.map(e => e.eventToken);
}

function createNotification(mbox, type, tokens) {
  const id = 11111; // here we should use a random ID like UUID
  const timestamp = Date.now();
  const { name, state, parameters, profileParameters, order, product } = mbox;
  const result = {
    id,
    type,
    timestamp,
    parameters,
    profileParameters,
    order,
    product
  };

  result.mbox = { name, state };
  result.tokens = tokens;

  return result;
}

adobe.target.getOffers({
  request: {
    prefetch: {
      mboxes: [
        {
          index: 0,
          name: "a1-serverside-ab"
        }
      ]
    }
  }
})
.then(response => {
  const mboxes = response.prefetch.mboxes;
  const notifications = mboxes.map(mbox => {
    const type = "display";
    const tokens = createTokens(mbox.options);

    return createNotification(mbox, type, tokens);
  });
  
  adobe.target.sendNotifications({
    request: { notifications }
  });
})
```

<InlineAlert variant="info" slots="text"/>

If you are using Adobe Analytics, `getOffers()` with prefetch only and `sendNotifications()`, the Analytics request must be fired after `sendNotifications()` is executed. The purpose of this is to ensure that the SDID generated by `sendNotifications()` will match the SDID sent to Analytics and Target.
