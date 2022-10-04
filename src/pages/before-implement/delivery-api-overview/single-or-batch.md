---
title: Adobe Target Delivery API Single or Batch Delivery
description: Adobe Target Delivery API Single or Batch Delivery
keywords:
- delivery api
--- 

# Single or Batch Delivery

The Adobe Target Delivery API supports a single or batch delivery call. One can make a server request for content for single or multiple mboxes.

Weigh performance costs when deciding to make a single call versus a batched call. If you know all the content that needs to be shown for a user, the best practice is to retrieve content for all mboxes with a single batch delivery call, in order to avoid making multiple single delivery calls.

## Single Delivery Call

You can retrieve an experience to display to the user for one mbox via the Adobe Target Delivery API. Note that if you are making a single delivery call, you would need to initiate another server call to retrieve additional content for an mbox for a user. This can become very costly over time, so please make sure to evaluate your approach when using the single Delivery API call.

```
curl -X POST \
'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=7abf6304b2714215b1fd39a870f01afc#1555632114' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-d '
{
  "id": {
    "tntId": "abcdefghijkl00023.1_1"
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

In the single delivery call example above, the experience is retrieved to display to the user with `tntId`: `abcdefghijkl00023.1_1` for an `mbox`:`SummerOffer` on the web channel. This single delivery call will generate the following response:

```
{
  "status": 200,
  "requestId": "25e0cc42-3d7b-456a-8b49-af60c1fb23d9",
  "client": "demo",
  "id": {
      "tntId": "abcdefghijkl00023.1_1"
  },
  "edgeHost": "mboxedge28.tt.omtrdc.net",
  "execute": {
      "mboxes": [
          {
              "index": 1,
              "name": "SummerOffer",
              "options": [
                  {
                      "content": "<p><b>Enjoy this 15% discount on your next purchase</b></p>",
                      "type": "html",
                  }
              ]
          }
      ]
    }
}
```

In the response, note the `content` field contains the HTML that describes the experience to be shown to the user for the web that corresponds to the SummerOffer mbox.

### Execute Page Load

If there are experiences that should be shown when a page load happens in the web channel, such as AB testing the fonts located in the footer or header, you can specify `pageLoad` in the `execute` field to retrieve all modifications that should be applied.

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359570e04f14e1faeeba02d6ab9914e' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
  "id": {
    "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"
  },
  "context": {
    "channel": "web",
    "window": {
      "width": 1819,
      "height": 842
    },
    "browser": {
      "host": "target.enablementadobe.com"
    },
    "address": {
      "url": "https://target.enablementadobe.com/react/demo/#/"
    }
  },
  "execute": {
    "pageLoad": {}
  }
}'
```

The sample call above retrieves any experiences to show a user when the page `https://target.enablementadobe.com/react/demo/#/` loads.

```
{
      "status": 200,
      "requestId": "355ebc47-edb6-481f-aeae-ae55d71afaca",
      "client": "demo",
      "id": {
          "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"
      },
      "edgeHost": "mboxedge28.tt.omtrdc.net",
      "execute": {
          "pageLoad": {
              "options": [
                  {
                      "content": [
                          {
                              "type": "setHtml",
                              "selector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(1) > NAV.nav:eq(0) > DIV.container:eq(0) > DIV.nav-right:eq(0) > A.nav-item:eq(0)",
                              "cssSelector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(1) > NAV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(2) > A:nth-of-type(1)",
                              "content": "Modified Home"
                          }
                      ],
                      "type": "actions"
                  }
              ],
              "metrics": [
                  {
                      "type": "click",
                      "selector": "#app > DIV:nth-of-type(1) > DIV:nth-of-type(2) > SECTION.section:eq(0) > DIV.container:eq(0) > FORM.col-md-4:eq(0) > DIV.form-group:eq(0) > BUTTON.btn:eq(0)",
                      "eventToken": "QPaLjCeI9qKCBUylkRQKBg=="
                  }
              ]
          }
      }
  }
```

In the `content` field, the modification that needs to be applied on a page load can be retrieved. In the example above, note that a link on the header needs to be named *Modified Home*.

## Batched Delivery Call

Instead of making multiple delivery calls with a single mbox in each call, making one delivery call with a batch of mboxes can reduce unnecessary server calls. Invoking a server call should be minimized as much as possible in order to be highly performant.

```
curl -X POST \
'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=7abf6304b2714215b1fd39a870f01afc#1555632114' \
-H 'Content-Type: application/json' \
-H 'cache-control: no-cache' \
-d '
{
  "id": {
    "tntId": "abcdefghijkl00023.1_1"
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
      },
      {
        "name" : "SummerShoesOffer",
        "index" : 2
      },
      {
        "name" : "SummerDressOffer",
        "index" : 3
      }      
    ]
  }
}'
```

In the batched delivery call example above, experiences are retrieved to display for the user with `tntId`: `abcdefghijkl00023.1_1` for multiple `mbox`:`SummerOffer`, `SummerShoesOffer`, and `SummerDressOffer`. Since we know that we need to show an experience for multiple mboxes for this user, we can batch these requests and make one server call instead of three individual delivery calls.

```
{
  "status": 200,
  "requestId": "fe15286f-effb-434f-85d8-c3db804075ce",
  "client": "demo",
  "id": {
      "tntId": "abcdefghijkl00023.28_120"
  },
  "edgeHost": "mboxedge28.tt.omtrdc.net",
  "execute": {
      "mboxes": [
          {
              "index": 1,
              "name": "SummerOffer",
              "options": [
                  {
                      "content": "<p><b>Enjoy this 15% discount on your next purchase</b></p>",
                      "type": "html",

                  }
              ]
          },
          {
              "index": 2,
              "name": "SummerShoesOffer",
              "options": [
                  {
                      "content": "<p><b>Enjoy this 15% discount on your next shoe purchase</b></p>",
                      "type": "html",
                  }
              ]
          },
          {
              "index": 3,
              "name": "SummerDressOffer",
              "options": [
                  {
                      "content": "<p><b>Enjoy this 15% discount on your next dress purchase</b></p>",
                      "type": "html",
                  }
              ]
          }
      ]
  }
}
```

In the response above, you can see that within the `content` field of each mbox, the HTML representation of the experience to show to the user for each mbox is retrievable.