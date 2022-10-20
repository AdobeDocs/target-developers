"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[7842],{98617:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var i=t(87462),o=t(63366),r=(t(15007),t(64983)),a=t(91515),d=["components"],s={},c={_frontmatter:s},m=a.Z;function p(e){var n=e.components,t=(0,o.Z)(e,d);return(0,r.mdx)(m,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"notifications"},"Notifications"),(0,r.mdx)("p",null,"Notifications should be fired when a prefetched mbox or view has been visited or rendered to the end user."),(0,r.mdx)("p",null,"In order for notifications to be fired off for the right mbox or view, be sure to keep track of the corresponding ",(0,r.mdx)("inlineCode",{parentName:"p"},"eventToken")," for each mbox or view. Notifications with the correct ",(0,r.mdx)("inlineCode",{parentName:"p"},"eventToken")," for the corresponding mboxes or views are required to be fired in order for reporting to be reflected correctly."),(0,r.mdx)("h2",{id:"notifications-for-prefetched-mboxes"},"Notifications for Prefetched Mboxes"),(0,r.mdx)("p",null,"One or multiple notifications can be sent via a single delivery call. Determine whether the metric that needs to be tracked is either a ",(0,r.mdx)("inlineCode",{parentName:"p"},"click")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"display")," for each mbox so that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"type")," of the notification can be reflected correctly. Also, pass in an ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," for each notification so that one can determine whether a notification was sent correctly thru the Adobe Target Delivery API. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"timestamp")," is also important to be forwarded to Adobe Target to indicate when the ",(0,r.mdx)("inlineCode",{parentName:"p"},"click")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"display")," occurred for a given mbox for reporting purposes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n\'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=10abf6304b2714215b1fd39a870f01afc#1555632114\' \\\n-H \'Content-Type: application/json\' \\\n-H \'cache-control: no-cache\' \\\n-d \'{\n    "id": {\n      "tntId": "abcdefghijkl00023.1_1"\n    },\n    "context": {\n      "channel": "web",\n      "browser" : {\n        "host" : "demo"\n      },\n      "address" : {\n        "url" : "http://demo.dev.tt-demo.com/demo/store/index.html"\n      },\n      "screen" : {\n        "width" : 1200,\n        "height": 1400\n      }\n    },\n      "notifications": [\n      {\n      "id" : "SummerOfferNotification",\n        "timestamp" : 1555705311051,\n        "type" : "display",\n        "mbox" : {\n          "name" :"SummerOffer"   \n        },\n        "tokens" : [\n          "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q"\n        ]\n      },\n    {\n      "id" : "SummerShoesOfferNotification",\n        "timestamp" : 1555705311051,\n        "type" : "display",\n        "mbox" : {\n          "name" :"SummerShoesOffer"   \n        },\n        "tokens" : [\n          "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q"\n        ]\n      },\n    {\n      "id" : "SummerDressOfferNotification",\n        "timestamp" : 1555705311051,\n        "type" : "display",\n        "mbox" : {\n          "name" :"SummerDressOffer"   \n        },\n        "tokens" : [\n          "GcvBXDhdJFNR9E9r1tgjfmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q"\n        ]\n    } \n    ]\n  }\'\n')),(0,r.mdx)("p",null,"The example call above will result in a response that indicates the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," request was successfully processed."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n  "status": 200,\n  "requestId": "36014eed-4772-4c48-a9e2-e532762b6a85",\n  "client": "demo",\n  "id": {\n      "tntId": "abcdefghijkl00023.28_20"\n  },\n  "edgeHost": "mboxedge28.tt.omtrdc.net",\n  "notifications": [\n      {\n          "id": "SummerOfferNotification"\n      },\n      {\n          "id": "SummerDressOfferNotification"\n      },\n      {\n          "id": "SummerShoesOfferNotification"\n      }\n  ]\n}\n')),(0,r.mdx)("p",null,"If all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," sent to Adobe Target are correctly processed, they will appear in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," array in the response. However, if a ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," is missing, that particular ",(0,r.mdx)("inlineCode",{parentName:"p"},"notification")," did not go through. In this scenario, a retry logic could be put into place until a successful ",(0,r.mdx)("inlineCode",{parentName:"p"},"notification")," response is retrieved. Ensure the retry logic has a timeout specified so the API call does not block and cause performance delays."),(0,r.mdx)("h2",{id:"notifications-for-prefetched-views"},"Notifications for Prefetched Views"),(0,r.mdx)("p",null,"One or multiple notifications can be sent via a single delivery call. Determine whether the metric that needs to be tracked is either a ",(0,r.mdx)("inlineCode",{parentName:"p"},"click")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"display")," for each mbox so that the type of the notification can be reflected correctly. Also, pass in an ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," for each notification so that one can determine whether a notification was sent correctly thru the Adobe Target Delivery API. The timestamp is also important to be forwarded to Adobe Target to indicate when the ",(0,r.mdx)("inlineCode",{parentName:"p"},"click")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"display")," occurred for a given view for reporting purposes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359570e04f14e1faeeba02d6ab9914e\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n  "id": {\n    "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"\n  },\n  "context": {\n    "channel": "web",\n    "browser": {\n      "host": "target.enablementadobe.com"\n    },\n    "address": {\n      "url": "https://target.enablementadobe.com/react/demo/#/"\n    }\n  },\n  "notifications": [{\n      "id": "228",\n      "type": "display",\n      "timestamp": 1556226121884,\n      "tokens": ["N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="],\n      "view": {\n        "name": "checkout-express",\n      }\n    },\n    {\n      "id": "5",\n      "type": "display",\n      "timestamp": 1556226121884,\n      "tokens": ["N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="],\n      "view": {\n        "name": "home",\n      }\n    },\n    {\n      "id": "6",\n      "type": "display",\n      "timestamp": 1556226121884,\n      "tokens": ["N3C13I0M2PH8iaKtONJlFJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="],\n      "view": {\n        "name": "products",\n      }\n    }\n  ]\n}\'\n')),(0,r.mdx)("p",null,"The example call above will result in a response that indicates the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," request was successfully processed."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "status": 200,\n    "requestId": "85cc7394-c19a-4398-9b8b-bbee1e4c4579",\n    "client": "demo",\n    "id": {\n        "tntId": "84e8d0e211054f18af365d65f45e902b.28_131"\n    },\n    "edgeHost": "mboxedge28.tt.omtrdc.net",\n    "notifications": [\n        {\n            "id": "5"\n        },\n        {\n            "id": "6"\n        },\n        {\n            "id": "228"\n        }\n    ]\n}\n')),(0,r.mdx)("p",null,"If all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," sent to Adobe Target are correctly processed, they will appear in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," array in the response. However, if a ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," is missing, that particular notification did not go through. In this scenario, a retry logic could be put into place until a successful notification response is retrieved. Ensure the retry logic has a timeout specified so the API call does not block and cause performance delays."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-delivery-api-overview-notifications-md-51c82a95475e46868602.js.map