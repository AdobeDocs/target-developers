---
title: Adobe Target Delivery API User Permissions
description: Adobe Target Delivery API User Permissions
keywords:
- delivery api
--- 

# User Permissions (Premium)

We allow customers to manage permissions for their users when using Adobe Target. In order to make a successful Adobe Target Delivery API call, a token with the right permissions must be passed within the API call. In order to learn more about user permissioning and how to retrieve the token visit [this documentation](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/properties-overview.html).

```
curl -X POST \
  'https://demo.tt.omtrdc.net/rest/v1/delivery?client=demo&sessionId=d359234570e04f14e1faeeba02d6ab9914e' \
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

Once you have the corresponding token, pass it into `property` -> `token` for every API call that is made. If the `property` -> `token` is not passed within every API call, you will not get any `content` back from Adobe Target.

```
{
    "status": 200,
    "requestId": "07ce783d-58b9-461c-9f4c-6873aeb00c01",
    "client": "demo",
    "id": {
        "tntId": "d359234570e04f14e1faeeba02d6ab9914e.28_7"
    },
    "edgeHost": "mboxedge28.tt.omtrdc.net",
    "execute": {
        "mboxes": [
            {
                "index": 1,
                "name": "homepage"
            }
        ]
    }
}
```

As you can see above, without passing the `property` -> `token`, you will not get any content back. If you expect content from your API call but are not retrieving any from the response, it is most likely because either the  `property` -> `token` is not provided, or it is being passed without the correct permissions.
