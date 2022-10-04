---
title: Adobe Target Delivery API Getting Started
description: Adobe Target Delivery API Getting Started
keywords:
- delivery api
--- 

# Getting Started

A Target Delivery API call looks like this:

```
curl -X POST \
  'https://`clientCode`.tt.omtrdc.net/rest/v1/delivery?client=`clientCode`&sessionId=d359234570e04f14e1faeeba02d6ab9914e' \
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
            "name" : "homepage",
            "index" : 1
          }
        ]
      }
    }'
```

The `clientCode` can be retrieved from the Target UI by navigating to **Adninistration** > **Implementation**.

Before making a Target Delivery API call, follow these steps to ensure a response contains the relevant experience to show end users:

1. Create a Target Activity (A/B, XT, AP or Recommendations) using the [Form-Based Composer](https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html?lang=en) or the [Visual Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html).
1. Use the Delivery API to get a response for the mboxes used in the Target Activity created in step 2.
1. Present the experience to the visitor.

## Postman Collection

Postman is an application that makes it easy to fire API calls. [This Postman collection](https://run.pstmn.io/button.svg) contains sample Delivery API calls. 