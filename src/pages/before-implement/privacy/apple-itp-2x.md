---
keywords:
- apple
- ITP
- intelligent tracking prevention
- experience cloud id
- ecid
- itp
description: Learn about Adobe Target and the impact of the Apple Intelligent Tracking Prevention (ITP) initiative that seeks to protect Safari users' privacy.
title: How Does Target Handle Apple ITP Support?
feature: Privacy & Security
role: Developer
exl-id: 05a62be5-ccfb-4d5c-b511-35023b95e567
---
# Apple Intelligent Tracking Prevention (ITP) 2.x

Intelligent Tracking Prevention (ITP), is Apple’s initiative to protect Safari users’ privacy. The first release of ITP, which was in 2017, targeted the usage of third-party cookies. In fact, Apple blocked third-party cookies entirety, which in turn, caused a severe headache for ad tech and mar tech companies because third-party cookies are generally used for tracking visitors and collecting visitor data. Now, Apple is on the move to place limitations and restrictions on how first-party cookies are used within Safari.

These versions of ITP include the following restrictions:

|Version|Details|
| --- | --- |
[ITP 2.1](https://webkit.org/blog/8613/intelligent-tracking-prevention-2-1/)|Capped client-side cookies that are placed on the browser using the `document.cookie` API to a seven-day expiry.<br />Released February 21, 2019.|
|[ITP 2.2](https://webkit.org/blog/8828/intelligent-tracking-prevention-2-2/)|Drastically reduced the seven-day expiry cap to one day.<br />Released April 24, 2019.|
|[ITP 2.3](https://webkit.org/blog/9521/intelligent-tracking-prevention-2-3/)|Eliminated several workarounds, such as employing localStorage or using the JavaScript `Document.referrer property`.<br />Released September 23, 2019.<br />CNAME-cloaking defence feature to ITP released in Safari 14, macOS Big Sur, Catalina, Mojave, iOS 14, and iPadOS 14. All cookies created by a third-party CNAME-cloaked HTTP response will be set to expire in seven days.<br />Announced November 12, 2020.|

## What is the impact to me as an Adobe Target customer?

Target provides JavaScript libraries for you to deploy on your pages so that Target can deliver real-time personalization to your visitors. There are three Target JavaScript libraries at.js 1.x, at.js 2.x that place client-side Target cookies on your visitors' browsers via the `document.cookie` API. As a result, Target cookies are impacted by Apple’s ITP 2.1, 2.2, and 2.3 and will expire after seven days (with ITP 2.1) and after one day (with ITP 2.2 and ITP 2.3).

Apple ITP 2.x impacts Target in the following areas:

|Impact|Details|
| --- | --- |
|Potential increase of unique visitor counts|Due to the expiration window being set to seven days (with ITP 2.1) and one day (with ITP 2.2 and ITP 2.3), you might see an increase of unique visitors coming from Safari browsers. If your visitors revisit your domain after seven days (ITP 2.1) or one day (ITP 2.2 and ITP 2.3), Target is forced to place a new Target cookie on your domain in place of the expired cookie. The new Target cookie translates to a new unique visitor even though the user is the same.|
|Decreased lookback periods for Target activities|Visitor profiles for Target activities might have a decreased lookback period for decisioning. Target cookies are leveraged to identity a visitor and store user profile attributes for personalization. Given that Target cookies can be expired on Safari after seven days (ITP 2.1) or one day (ITP 2.2 and 2.3), the user profile data that was tied to the purged Target cookie cannot be used for decisioning.|
|Profile scripts based on 3rdPartyID|Due to the expiration window being set to seven days (with ITP 2.1) and one day (with ITP 2.2 and ITP 2.3), [profile scripts](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/profile-parameters.html) based on the 3rdPartyID cookie will stop functioning upon expiration.|
|QA/Preview URLs in iOS devices|Due to the expiration window being set to seven days (with ITP 2.1) and one day (with ITP 2.2 and ITP 2.3), [QA/Preview URLs](https://experienceleague.adobe.com/docs/target/using/activities/activity-qa/activity-qa.html) will stop functioning upon expiration because the URLs are based on the 3rdPartyID cookie.|

## Is my current implementation of Target impacted?

If you are using the Experience Cloud ID (ECID) library in addition to the Target JavaScript library, your implementation will be impacted in the ways listed in this article: [Safari ITP 2.1 Impact on Adobe Experience Cloud and Experience Platform Customers](https://medium.com/adobetech/safari-itp-2-1-impact-on-adobe-experience-cloud-customers-9439cecb55ac).
