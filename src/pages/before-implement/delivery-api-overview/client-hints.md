---
title: Adobe Target Delivery API Client Hints
description: Adobe Target Delivery API Client Hints
--- 

# Client Hints and the Target Delivery API

Client Hints must be sent to Target on the offers request.

Generally, it is recommended to send all available Client Hints to Target. For more information, see [User-agent and Client Hints](../client-side/atjs/user-agent-and-client-hints.md) in the [Client-side Implementation](../../implement/client-side/) section.

## Delivery API direct calls

### From the browser

In this case, the browser will send low-entropy Client Hints to Target automatically via request headers. But there are a couple browser-level limitations with this implementation. First - no Client Hints headers will be sent from the browser unless the request is being made over https. Second - Client Hints will not be sent on the first request to Target on the page. Client Hints headers will only be sent on the second request and all requests thereafter. This means that audience segmentation and personalization cannot be performed by Target on the first page visit. In order to get around both of these limitations, we strongly recommend using the User Agent Client Hints API in the browser to collect the Client Hints directly, and send them on the request payload.

### From a server

In this case the Client Hints must be manually forwarded from the browser to Target on the Delivery API request.

```
curl -X POST 'http://mboxedge28.tt.omtrdc.net/rest/v1/delivery?client=myClientCode&sessionId=abcdefghijkl00014' -d '{
  "context": {
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",
    "clientHints": {
      "Sec-CH-UA-Model": "iPhone",
      "Sec-CH-UA-Mobile": true,
      "Sec-CH-UA-Platform": "iOS",
      "Sec-CH-UA": "[ { \"brand\": \"Chromium\", \"version\": \"91\" }, { \"brand\": \" Not;A Brand\", \"version\": \"99\" } ]",
      "Sec-CH-UA-Full-Version-List": "[ { \"brand\": \"Chromium\", \"version\": \"91.1.1.1\" }, { \"brand\": \" Not;A Brand\", \"version\": \"99.1.1.1\" } ]",
      "Sec-CH-UA-Platform-Version": "10.0.0",
      "Sec-CH-UA-Arch": "x86",
      "Sec-CH-UA-Bitness": "64"
    }
  },
  "execute": {
    "mboxes": [{
      "name": "home",
      "index": 1
    }]
  }
}'
```

## Formatting

Client Hints headers Sec-CH-UA and Sec-CH-UA-Full-Version-List have a different format than the results from the Client Hints browser API (navigator.userAgentData.brands/navigator.userAgentData.getHighEntropyValues). Both of these formats are accepted by Delivery API. The Delivery API will normalize the values into the format used in the request headers, which is important to keep in mind if accessing Client Hints in profile scripts.
