---
keywords:
- content security policy
- csp
- at.js
- whitelist
- allowlist
- flicker
- pre-hide
- pre-hiding
- prehiding
description: Learn about the Content Security Policy (CSP) directives you should add when using Adobe Target.
title: How Does Target Handle Content Security Policies (CSP)?
feature: Privacy & Security
role: Developer
exl-id: 31457b16-ed21-4540-8d0c-abfb49d1fbe9
---
# Content Security Policy (CSP) directives

If you are using [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) (CSP) for your Adobe Target implementation, you should add the following CSP directives when using [at.js 2.1 or later](../../implement/client-side/atjs/target-atjs-versions.md):

* `connect-src` with `*.tt.omtrdc.net` allowlisted. Necessary to allow the network request to the Target edge.
* `style-src unsafe-inline`. Required for pre-hiding and flicker control.
* `script-src unsafe-inline`.  Required to allow JavaScript execution that might be part of an HTML offer.

## Frequently Asked Questions (FAQs)

Consult the following FAQs about security policies:

### Do Cross Origin Resource Sharing (CORS) and Flash Cross-domain policies present security issues?

The recommended way of implementing the CORS policy is to permit access to only trusted origins that require it via an allowlist of trusted domains. The same can be said for the Flash Cross-domain policy. Some Adobe Target customers are concerned about the use of wildcard characters for domains in Target. The concern is that If a user is logged in to an application, and visits a domain allowed by the policy, any malicious content running on that domain can potentially retrieve sensitive content from the application and carry out actions within the security context of the logged in user. This is commonly referred to as Cross-Site Request Forgery (CSRF).

In an Adobe Target implementation, however, these policies should not represent a security issue.

“adobe.tt.omtrdc.net” is an Adobe-owned domain. Adobe Target is a testing and personalization tool and it is expected that Target can receive and process requests from anywhere without requiring any authentication. These requests contain key/value pairs that are used for A/B testing, recommendations, or content personalization.

Adobe does not store Personally Identifiable Information (PII) or other sensitive information on Adobe Target edge servers, to which “adobe.tt.omtrdc.net” points.

It is expected that Target can be accessed from any domain via JavaScript calls. The only way to allow this access is by leveraging “Access-Control-Allow-Origin” with a wildcard.
