# Experience Cloud ID (ECID) Service

## Experience Cloud ID (ECID) Integration

Although using the Target SDKs for fetching content from Target can be powerful, the added value of using the Experience Cloud ID (ECID) for user tracking extends beyond Adobe Target. The ECID enables you to leverage Adobe Experience Cloud products and features, such as A4T reporting and Adobe Audience Manager (AAM) segments.

The ECID is generated and maintained by `visitor.js`, which maintains its own state. The `visitor.js` file creates a cookie named `AMCV_{organizationId}`, which is used by Target SDKs for ECID integration. When the Target response is returned, you need to update the Visitor instance on the client side with `thevisitorState` returned by the Target SDKs.

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID (Visitor API) Integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <pre>Sample content</pre>
</body>
</html>
```

### Node.js

```
const express = require("express");
const cookieParser = require("cookie-parser");
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};
const TEMPLATE = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID (Visitor API) Integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <pre>${content}</pre>
</body>
</html>
`;

const app = express();
const targetClient = TargetClient.create(CONFIG);

app.use(cookieParser());
// We assume that VisitorAPI.js is stored in "public" folder
app.use(express.static(__dirname + "/public"));

function saveCookie(res, cookie) {
  if (!cookie) {
    return;
  }

  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});
}

const getResponseHeaders = () => ({
  "Content-Type": "text/html",
  "Expires": new Date().toUTCString()
});

function sendSuccessResponse(res, response) {
  res.set(getResponseHeaders());

  const result = TEMPLATE
  .replace("${organizationId}", CONFIG.organizationId)
  .replace("${visitorState}", JSON.stringify(response.visitorState))
  .replace("${content}", response);

  saveCookie(res, response.targetCookie);

  res.status(200).send(result);
}

function sendErrorResponse(res, error) {
  res.set(getResponseHeaders());
  res.status(500).send(error);
}

app.get("/abtest", async (req, res) => {
  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];
  const targetCookie = req.cookies[TargetClient.TargetCookieName];
  const request = {
      execute: {
        mboxes: [{
          address: { url: req.headers.host + req.originalUrl },
          name: "a1-serverside-ab"
        }]
      }};
```

### Java

```
  console.log("Request", request);

  try {
      const response = await targetClient.getOffers({ request, visitorCookie, targetCookie });
      sendSuccessResponse(res, response);
    } catch (error) {
      sendErrorResponse(res, error);
    }
});

app.listen(3000, function () {
  console.log("Listening on port 3000 and watching!");
});
@Controller
public class TargetControllerSample {

  @Autowired
  private TargetClient targetClient;

  @GetMapping("/")
  public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {
    Context context = getContext(request);
    TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
        .context(context)
        .prefetch(getPrefetchRequest())
        .cookies(getTargetCookies(request.getCookies()))
        .build();

    TargetDeliveryResponse targetResponse = targetClient.getOffers(targetDeliveryRequest);
    model.addAttribute("visitorState", targetResponse.getVisitorState());
    model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");
    setCookies(targetResponse.getCookies(), response);
    return "targetMcid";
  }
}
```

## ECID with Customer ID Integration

In order to track visitor user accounts and login status details, `customerIds` may be passed via Target SDKs.

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID (Visitor API) Integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <pre>Sample content</pre>
</body>
</html>
```

### Node.js

```
const express = require("express");
const cookieParser = require("cookie-parser");
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};
const TEMPLATE = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID (Visitor API) with Customer IDs Integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <pre>${content}</pre>
</body>
</html>
`;

const app = express();
const targetClient = TargetClient.create(CONFIG);

app.use(cookieParser());
// We assume that VisitorAPI.js is stored in "public" folder
app.use(express.static(__dirname + "/public"));

function saveCookie(res, cookie) {
  if (!cookie) {
    return;
  }

  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});
}

const getResponseHeaders = () => ({
  "Content-Type": "text/html",
  "Expires": new Date().toUTCString()
});

function sendSuccessResponse(res, response) {
  res.set(getResponseHeaders());

  const result = TEMPLATE
  .replace("${organizationId}", CONFIG.organizationId)
  .replace("${visitorState}", JSON.stringify(response.visitorState))
  .replace("${content}", response);

  saveCookie(res, response.targetCookie);

  res.status(200).send(result);
}

function sendErrorResponse(res, error) {
  res.set(getResponseHeaders());
  res.status(500).send(error);
}

app.get("/abtest", async (req, res) => {
  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];
  const targetCookie = req.cookies[TargetClient.TargetCookieName];
  const customerIds = {
      "userid": {
        "id": "67312378756723456",
        "authState": TargetClient.AuthState.AUTHENTICATED
      }
    };
  const request = {
    execute: {
      mboxes: [{
        address: { url: req.headers.host + req.originalUrl },
        name: "a1-serverside-ab"
      }]
    }};

  try {
    const response = await targetClient.getOffers({ request, visitorCookie, targetCookie, customerIds });
    sendSuccessResponse(res, response);
  } catch (error) {
    sendErrorResponse(res, error);
  }
});

app.listen(3000, function () {
  console.log("Listening on port 3000 and watching!");
});
```

### Java

```
@Controller
public class TargetControllerSample {

  @Autowired
  private TargetClient targetJavaClient;

  @GetMapping("/targetMcid")
  public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {
    Context context = getContext(request);
    Map<String, CustomerState> customerIds = new HashMap<>();
    customerIds.put("userid", CustomerState.authenticated("67312378756723456"));
    customerIds.put("puuid", CustomerState.unknown("550e8400-e29b-41d4-a716-446655440000"));
    TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
       .context(context)
       .prefetch(getPrefetchRequest())
       .cookies(getTargetCookies(request.getCookies()))
       .customerIds(customerIds)
       .build();

    TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);
    model.addAttribute("visitorState", targetResponse.getVisitorState());
    model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");
    setCookies(targetResponse.getCookies(), response);
    return "targetMcid";
  }
}
```

## ECID and Analytics Integration

To get the most out of the Target SDKs, and to use the powerful analytics capabilities provided by Adobe Analytics, you can use integrations across ECID, Analytics, and Target.

Using integrations across ECID, Analytics, and Target lets you:

* Use segments from Adobe Audience Manager (AAM)
* Customize the user experience based on the content retrieved from Target
* Ensure that all events and success metrics are collected in Analytics
* Use Analytics' powerful queries and benefit from its awesome report visualizations

Integrations across ECID, Analytics, and Target do not require any special handling for analytics on the server side. Instead, once you have the ECID integrated, add `AppMeasurement.js` (Analytics library) on the client side. Analytics then uses the Visitor instance to synchronize with Target.

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID and Analytics integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <p>Sample content</p>
  <script src="AppMeasurement.js"></script>
  <script>var s_code=s.t();if(s_code)document.write(s_code);</script>
</body>
</html>
```

### Node.js

```
const express = require("express");
const cookieParser = require("cookie-parser");
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};
const TEMPLATE = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ECID and Analytics integration Sample</title>
  <script src="VisitorAPI.js"></script>
  <script>
    Visitor.getInstance("${organizationId}", {serverState: ${visitorState}});
  </script>
</head>
<body>
  <p>${content}</p>
  <script src="AppMeasurement.js"></script>
  <script>var s_code=s.t();if(s_code)document.write(s_code);</script>
</body>
</html>
`;

const app = express();
const targetClient = TargetClient.create(CONFIG);

app.use(cookieParser());
// We assume that VisitorAPI.js and AppMeasurement.js are stored in "public" directory
app.use(express.static(__dirname + "/public"));

function saveCookie(res, cookie) {
  if (!cookie) {
    return;
  }

  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});
}

const getResponseHeaders = () => ({
  "Content-Type": "text/html",
  "Expires": new Date().toUTCString()
});

function sendSuccessResponse(res, response) {
  res.set(getResponseHeaders());

  const result = TEMPLATE
  .replace("${organizationId}", CONFIG.organizationId)
  .replace("${visitorState}", JSON.stringify(response.visitorState))
  .replace("${content}", response);

  saveCookie(res, response.targetCookie);

  res.status(200).send(result);
}

function sendErrorResponse(res, error) {
  res.set(getResponseHeaders());

  res.status(500).send(error);
}

app.get("/abtest", async (req, res) => {
  const visitorCookie = req.cookies[TargetClient.getVisitorCookieName(CONFIG.organizationId)];
  const targetCookie = req.cookies[TargetClient.TargetCookieName];
  const request = {
      execute: {
        mboxes: [{
          address: { url: req.headers.host + req.originalUrl },
          name: "a1-serverside-ab"
        }]
      }};

    try {
      const response = await targetClient.getOffers({ request, visitorCookie, targetCookie });
      sendSuccessResponse(res, response);
    } catch (error) {
      sendErrorResponse(res, error);
    }
});

app.listen(3000, function () {
  console.log("Listening on port 3000 and watching!");
});
```

### Java

```
@Controller
public class TargetControllerSample {

    @Autowired
    private TargetClient targetJavaClient;

    @GetMapping("/targetAnalytics")
    public String targetMcid(Model model, HttpServletRequest request, HttpServletResponse response) {
        Context context = getContext(request);
        Map<String, CustomerState> customerIds = new HashMap<>();
        customerIds.put("userid", CustomerState.authenticated("67312378756723456"));
        customerIds.put("puuid", CustomerState.unknown("550e8400-e29b-41d4-a716-446655440000"));
        TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
                .context(context)
                .prefetch(getPrefetchRequest())
                .cookies(getTargetCookies(request.getCookies()))
                .customerIds(customerIds)
                .trackingServer("imsbrims.sc.omtrds.net")
                .build();

        TargetDeliveryResponse targetResponse = targetJavaClient.getOffers(targetDeliveryRequest);
        model.addAttribute("visitorState", targetResponse.getVisitorState());
        model.addAttribute("organizationId", "0DD934B85278256B0A490D44@AdobeOrg");
        setCookies(targetResponse.getCookies(), response);
        return "targetAnalytics";
    }
```