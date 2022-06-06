---
keywords:
- Implementation
- at.js non javascript
- adbox
- redirector
- mbox
description: Learn how to implement Adobe Target in non-JavaScript scenarios, such as using an AdBox or Redirector.
title: How Do I Implement Target for Email?
feature: Implement Email
role: Developer
exl-id: 3287cf3d-3ed4-471f-aa06-25bb12e23ead
---
# Email: implement Target

Information about implementing Target in non-JavaScript scenarios, such as using an AdBox or Redirector.

You can track visits to ads and other offsite content. You can also identify the same user on and off your site and deliver a consistent experience throughout their web experience. Using a single URL, the AdBox allows testing without JavaScript or at.js.

An AdBox is useful for sites that do not have at.js, such as affiliates. If your activity needs dynamic creative (for example, you need to show a product in the ad that was abandoned in the cart), you cannot use an AdBox.

AdBox ads and Redirector can be used with any kind of activity. The following table compares Adbox and Redirector, and when to use each:

| | Purpose | When To Use | URL Structure | Offer Type | Offer Content |
|--- |--- |--- |--- |--- |--- |
|AdBox|Returns different images to the ad|To change the content of an ad|`clientcode​.tt.​omtrdc​.net/​m2​/​clientcode/ubox/​image?`|redirect offer|URL for an image|
|Redirector|Redirects a visitor to a different web page|To change the landing page of an ad|`clientcode​.tt.omtrdc.net/​m2/clientcode​/ubox/page?`|redirect offer|URL for a page|

## Security best practices

Note that with Redirector, you can be exposed to a risk of an Open Redirect Vulnerability. To avoid the unauthorized use of Redirector links by third parties, we recommend you use "authorized hosts" to allowlist the default redirect URL domains. Target uses hosts to allowlist domains to which you want to allow redirects. For more information, see [Create Allowlists that specify hosts that are authorized to send mbox calls to Target](https://experienceleague.adobe.com/docs/target/using/administer/hosts.html#allowlist) in *Hosts*.

## Constraints

* There is no client-side timeout as with standard mboxes. If Target is completely down, visitors to the ad will not see content, not even default. 
* 3rd-party cookies are used to track the visits. If the PCIds are different, by default the visitor's 3rd party is merged with any existing 1st-party profiles. 
* To use 1st-party cookies on the AdBox itself, you will need to pass the mBox session in the URL. Talk to your account representative to do this. 
* To use 1st-party cookies to track ad clicks, pass the mbox session in the URL. Talk to your account representative to do this. 
* To use more than one AdBox on the same page, you must pass the Mbox session in the URL. Talk to your account representative to do this. You might have one AdBox and one Redirector link on the same page (because the Redirector is actually on a second page).
