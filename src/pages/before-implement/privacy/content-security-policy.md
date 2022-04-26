---
keywords: content security policy;csp;at.js;whitelist;allowlist;flicker;pre-hide;pre-hiding;prehiding
description: Learn about the Content Security Policy (CSP) directives you should add when using Adobe Target.
title: How Does Target Handle Content Security Policies (CSP)?
feature: Privacy & Security
role: Developer
exl-id: 31457b16-ed21-4540-8d0c-abfb49d1fbe9
---
# Content Security Policy (CSP) directives

If you are using [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) (CSP) for your Adobe Target implementation, you should add the following CSP directives when using [at.js 2.1 or later](/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md):

* `connect-src` with `*.tt.omtrdc.net` allowlisted. Necessary to allow the network request to the Target edge.
* `style-src unsafe-inline`. Required for pre-hiding and flicker control.
* `script-src unsafe-inline`.  Required to allow JavaScript execution that might be part of an HTML offer.
