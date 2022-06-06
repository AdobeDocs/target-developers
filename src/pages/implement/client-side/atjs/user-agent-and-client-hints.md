---
keywords:
- at.js
- browser user agent
- user agent
- client hints
- user-agent
description: Learn how Adobe Target uses the user-agent and Client Hints to qualify visitors for segmentation and personalization.
title: User Agent and Client Hints
feature: at.js
role: Developer
exl-id: 22d29bfe-e022-44b2-913f-c8c32c65bc48
---
# User-agent and Client Hints

Adobe Target uses the user-agent to qualify visitors for segmentation and personalization.

<InlineAlert variant="info" slots="text"/>

The information in this article applies to [at.js version 2.9.0](target-atjs-versions.md) (or later).

Each time a web browser makes a request to a server, information about the browser and the environment where the browser runs are included in the header of the request. Since the early days of the Internet, this data has been aggregated in a single string called the user-agent. 

The following text is a sample user-agent of a Mac OS X-based computer using a Safari Browser:

```
Mozilla/5.0 (Linux; Android 12; SM-S908E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36 
```

From this user-agent, the server receiving the request can discern the following information about the browser and operating system: 

|Information|Details|
| --- | --- |
|Software name|Chrome|
|Software version|101| 
|Full software version|101.0.4951.41|
|Layout engine name|AppleWebKit|
|Layout engine version|537.36|
|Operating system|Android|
|Operating system version|Android 12 (Snow Cone)|
|Device|SM-S908E (Samsung Galaxy S22 Ultra)|

Over the years, the amount of browser and device information included in the user-agent string has grown. 

## User-agent use cases

User-agents have long been used to provide marketing and developer teams with important insights into how browsers, operating systems, and devices display site content, as well as how users interact with websites. User-agents are also used to block spam and filter bots that crawl sites for a variety of additional purposes. 

However, in recent years some site owners and marketing vendors have used the user-agent along with other information included in request headers to create digital fingerprints that can be used as a means of identifying users without their knowledge. Despite the important purpose the user-agent serves for site owners, browser developers have decided to make changes to how user-agents operate to limit potential privacy issues for site visitors.

Browser developers created User-Agent Client Hints as a solution to this challenge. Client Hints still allow sites to collect necessary browser, operating system, and device information, while also providing increased protection against covert tracking methods, such as fingerprinting.

## Client Hints

User-Agent Client Hints provide website owners the ability to access much of the same information available in the user-agent, but in a more privacy-preserving way. When modern browsers send a user-agent to a web server, the entire user-agent is sent on every request, regardless of whether it is required. Client Hints, on the other hand, enforce a model where the server must ask the browser for the additional information it wants to know about the client. Upon receiving this request, the browser can apply its own policies or user-configuration to determine what data is returned. Instead of exposing the entire user-agent by default on all requests, access is now managed in an explicit and auditable fashion.

User-Agent Client Hints have been available in Chrome since version 89. Recent versions of Chromium-based browsers, such as Microsoft Edge, Opera, Brave, Chrome Android, Opera Android, and Samsung Internet, also support the Client Hints API. 

Client Hints contained in the headers of the first request made by the browser to a web server contain the browser brand, major version of the browser, and an indicator of whether the client is a mobile device. Each piece of data has its own header value, rather than being grouped into a single user-agent string.

For example, here are some Client Hints:

```
Sec-CH-UA: "Chromium";v="101", "Google Chrome";v="101", " Not;A Brand";v="99" 
Sec-CH-UA-Mobile: ?0 
Sec-CH-UA-Platform: "macOS"
```

...whereas this is the user-agent for the same browser:

```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 
```

Although the information is similar, the first request to the server contains Client Hints that contain only a subset of what is available in the user-agent string. Missing from the request is the OS architecture, full OS version, layout engine name, layout engine version, and the full browser version. However, on subsequent requests, the Client Hints API does allow for web servers to ask for additional, high entropy details about the device. When these high entropy values are requested, depending on browser policy or user settings, the browser response can include that information. 

The following example is a JSON object that is returned by the Client Hints API when high entropy values are requested:

```
{ 

    "architecture":"x86", 
    "bitness":"64", 
    "brands":[ 
        { 
            "brand":" Not A;Brand", 
            "version":"99" 
        }, 
        { 
            "brand":"Chromium", 
            "version":"100" 
        }, 
        { 
            "brand":"Google Chrome", 
            "version":"100" 
        } 
    ], 
    "fullVersionList":[ 
        { 
            "brand":" Not A;Brand", 
            "version":"99.0.0.0" 
        }, 
        { 
            "brand":"Chromium", 
            "version":"100.0.4896.127" 
        }, 
        { 
            "brand":"Google Chrome", 
            "version":"100.0.4896.127" 
        } 
    ], 
    "mobile":false, 
    "model":"", 
    "platformVersion":"12.2.1" 
} 
```

The high entropy values include several additional pieces of information that are not available in the default Client Hints information. The following table contains details of what data is available in the default request vs. the high entropy User-Agent Client Hints information.

|HTTP header|JavaScript|User-agent|Client hint|High entropy client hint|
| --- | --- | --- | --- | --- |
|Sec-CH-UA|brands|Yes|Yes|No| 
|Sec-CH-UA-Platform|platform|Yes|Yes|No|
|Sec-CH-UA-Mobile|mobile|Yes|Yes|No| 
|Sec-CH-UA-Platform-Version|platformVersion|Yes|No|Yes| 
|Sec-CH-UA-Arch|architecture|Yes|No|Yes| 
|Sec-CH-UA-Model|model|Yes|No|Yes| 
|Sec-CH-UA-Bitness|Bitness|Yes|No|Yes| 
|Sec-CH-UA-Full-Version-List|fullVersionList|Yes|No|Yes| 

## Migration to Client Hints 

Currently, Chromium-based browsers continue to send the user-agent along with Client Hints in the headers of requests made to web servers. However, starting in April 2022 and continuing through February 2023, the amount of data contained in the user-agent string will be reduced. Other browsers, such as Safari and Firefox, will continue to leverage the user-agent string; however, they too will be reducing the amount of information contained therein.

## Target use cases that require Client Hints

The following use cases in Target require Client Hints:

### Audience attributes

If you use Target audiences and use any of the following audience attributes, Target requires Client Hints to perform the correct segmentation: 

* Browser 
* Operating System 
* Mobile

### Profile scripts

If you use profile scripts and reference the `user.browser` attribute (which refers to user-agent), you might need to update the profile script to also check one or more Client Hints. You can access any of the Client Hints using the function `user.clientHint('sec-ch-ua-xxxxx')`. The Client Hint header name must be all lower-case.  

The following example shows how to properly detect a Windows OS in a profile script:

```
"return (((user.browser != null) && (user.browser.indexOf(\"Windows\") > -1)) || " + 
      "((user.clientHint('sec-ch-ua-platform') != null) && 
(user.clientHint('sec-ch-ua-platform') === 'Windows')));" 
```

Here is a table of Client Hints and their corresponding profile script usage semantics.

|Client Hint header|Entropy|Audience Attribute|Profile Script Usage|
| --- | --- | --- | --- |
|[Sec-CH-UA](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA)|Low|Browser|`user.clientHint('sec-ch-ua')`|
|[Sec-CH-UA-Arch](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch)|High|Exposed to users via profile scripts|`user.clientHint('sec-ch-ua-arch')`|
|[Sec-CH-UA-Bitness](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness)|High|Exposed to users via profile scripts|`user.clientHint('sec-ch-ua-bitness')`|
|[Sec-CH-UA-Full-Version-List](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List)|High|Browser|`user.clientHint('sec-ch-ua-full-version-list')`|
|[Sec-CH-UA-Mobile](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile)|Low|Mobile|`user.clientHint('sec-ch-ua-mobile')`|
|[Sec-CH-UA-Model](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model)|High|Mobile|`user.clientHint('sec-ch-ua-model')`|
|[Sec-CH-UA-Platform](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform)|Low|Operating system|`user.clientHint('sec-ch-ua-platform')`|
|[Sec-CH-UA-Platform-Version](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version)|High|Exposed to users via profile scripts|`user.clientHint('sec-ch-ua-platform-version')`|

## How to pass Client Hints to Adobe Target

The following sections contain more information about how to pass Client Hints, depending on your Target implementation.

### at.js version 2.9.0 (or later)

Starting with at.js 2.9.0, User Agent Client Hints will be collected automatically from the browser and sent to Target when `getOffer/getOffers()` is called. By default, at.js collects only "Low Entropy" Client Hints. If performing audience segmentation or using profile scripts based on data categorized as "High Entropy" from the preceding sections, you need to configure at.js to collect "High Entropy" Client Hints from the browser via `targetGlobalSettings`. 

```
window.targetGlobalSettings = { allowHighEntropyClientHints: true };
```

### Server-side SDKs

For more information on how to pass Client Hints via server-side SDKs, see [Client Hints](../../server-side/sdk-guides/core-principles/audience-targeting.md#client-hints) under Server-side Implementation documentation.