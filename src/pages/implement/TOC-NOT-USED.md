---
user-guide-title: Adobe Target Implementation Guide
breadcrumb-title: Target Implementation Guide
user-guide-description: Learn how to tailor and personalize your customers' experience to maximize revenue on your web and mobile sites, apps, social media, and other digital channels.
feature-set: Target
---

# Adobe Target Implementation Guide {#implement}

+ [Implement Target overview](implementing-target.md)
+ Before you implement {#before-implement}
   + [Before you implement](c-considerations-before-you-implement-target/considerations-before-you-implement-target.md)
   + [Prepare to implement Target](c-considerations-before-you-implement-target/prepare-to-implement-target.md)
   + Privacy and security {#privacy}
      + [Privacy overview](c-considerations-before-you-implement-target/privacy/privacy.md)
      + [Privacy and data protection regulations](c-considerations-before-you-implement-target/privacy/cmp-privacy-and-general-data-protection-regulation.md)
      + [Target cookies](c-implementing-target-for-client-side-web/t-mbox-download/cookie-behavior.md)
      + [Delete the Target cookie](c-considerations-before-you-implement-target/privacy/cookie-deleting.md)
      + [Google Chrome SameSite cookie policies](c-considerations-before-you-implement-target/privacy/google-chrome-samesite-cookie-policies.md)
      + [Apple Intelligent Tracking Prevention (ITP) 2.x](/help/c-implementing-target/c-considerations-before-you-implement-target/privacy/apple-itp-2x.md)
      + [Content Security Policy (CSP) directives](/help/c-implementing-target/c-considerations-before-you-implement-target/privacy/content-security-policy.md)
      + [Allowlist Target edge nodes](/help/c-implementing-target/c-considerations-before-you-implement-target/allowlist-edges.md)
   + Methods to get data into Target {#methods}
      + [Methods overview](c-considerations-before-you-implement-target/methods-to-get-data-into-target/methods-to-get-data-into-target.md)
      + [Page parameters](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/page-parameters.md)
      + [In-page profile attributes](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/in-page-profile-attributes.md)
      + [Script profile attributes](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/script-profile-attributes.md)
      + [Data providers](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/data-providers.md)
      + [Bulk profile update API](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/bulk-profile-update-api.md)
      + [Single profile update API](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/single-profile-update-api.md)
      + [Customer attributes](/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/customer-attributes.md)
      + [Profile API settings](c-considerations-before-you-implement-target/methods-to-get-data-into-target/profile-api-settings.md)
   + [Target security overview](c-considerations-before-you-implement-target/target-security-overview.md)
   + [Supported browsers](c-considerations-before-you-implement-target/supported-browsers.md)
   + [TLS (Transport Layer Security) encryption changes](c-considerations-before-you-implement-target/tls-transport-layer-security-encryption.md)
   + [CNAME and Adobe Target](c-considerations-before-you-implement-target/implement-cname-support-in-target.md)
+ Client-side web: implement Target {#client-side}
   + [Overview: implement Target for client-side web](/help/c-implementing-target/c-implementing-target-for-client-side-web/implement-target-for-client-side-web.md)
   + Adobe Experience Platform Web SDK implementation {#aep-implementation}
      + [AEP Web SDK overview](/help/c-implementing-target/c-implementing-target-for-client-side-web/aep-web-sdk.md)
   + at.js implementation {#at-js-implementation}
      + On-device decisioning {#on-device-decisioning}
         + [On-device decisioning overview](/help/c-implementing-target/c-implementing-target-for-client-side-web/on-device-decisioning/on-device-decisioning.md)
         + [Supported features](/help/c-implementing-target/c-implementing-target-for-client-side-web/on-device-decisioning/supported-features.md)
         + [Rule artifact](/help/c-implementing-target/c-implementing-target-for-client-side-web/on-device-decisioning/rule-artifact.md)
         + [Troubleshooting](/help/c-implementing-target/c-implementing-target-for-client-side-web/on-device-decisioning/troubleshooting-on-device-decisioning.md)
      + How at.js works {#at-js}
         + [How at.js works overview](c-implementing-target-for-client-side-web/c-how-atjs-works/how-atjs-works.md)
         + [How at.js manages flicker](c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md)
        + [at.js integrations](c-implementing-target-for-client-side-web/c-how-atjs-works/target-atjs-integrations.md)
      + How to deploy at.js {#deploy-at-js}
         + [How to deploy at.js](c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/how-to-deployatjs.md)
         + [Implement Target using Adobe Experience Platform](c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md)
         + [Implement Target without a tag manager](c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/implementing-target-without-a-tag-manager.md)
         + [Implement Target using Dynamic Tag Manager (DTM)](c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/implementing-target-using-dynamic-tag-management.md)
         + [Implement Target for Single Page Applications (SPAs)](c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/target-atjs-single-page-application.md)
      + at.js functions {#functions-overview}
         + [at.js functions overview](c-implementing-target-for-client-side-web/cmp-atjs-functions.md)
         + [adobe.target.getOffer()](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-getoffer.md)
         + [adobe.target.getOffers() - at.js 2.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-getoffers-atjs-2.md)
         + [adobe.target.applyOffer()](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-applyoffer.md)
         + [adobe.target.applyOffers() - at.js 2.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-applyoffers-atjs-2.md)
         + [adobe.target.triggerView() - at.js 2.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-triggerview-atjs-2.md)
         + [adobe.target.trackEvent()](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe-target-trackevent.md)
         + [mboxCreate() - at.js 1.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/mboxcreate-atjs.md)
         + [targetGlobalSettings()](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md)
         + [mboxDefine() and mboxUpdate() - at.js 1.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/mboxdefine-mboxupdate-atjs-1x.md)
         + [targetPageParams()](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetpageparams.md)
         + [targetPageParamsAll()](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetpageparamsall.md)
         + [registerExtension() - at.js 1.x](/help/c-implementing-target/c-implementing-target-for-client-side-web/registerextension-atjs-1x.md)
         + [sendNotifications() - at.js 2.1](/help/c-implementing-target/c-implementing-target-for-client-side-web/adobe.target.sendnotifications-atjs-21.md)
         + [at.js custom events](/help/c-implementing-target/c-implementing-target-for-client-side-web/atjs-custom-events.md)
         + [Debug at.js using the Adobe Experience Cloud Debugger](c-implementing-target-for-client-side-web/c-target-debugging-atjs/target-debugging-atjs.md)
         + [Use cloud-based instances with Target](c-implementing-target-for-client-side-web/c-target-debugging-atjs/targeting-using-cloud-based-instances.md)
      + at.js frequently asked questions {#faq-at-js}
         + [at.js FAQs](c-implementing-target-for-client-side-web/c-target-atjs-faq/target-atjs-faq.md)
      + [at.js version details](c-implementing-target-for-client-side-web/target-atjs-versions.md)
      + [Upgrading from at.js 1.x to at.js 2.x](c-implementing-target-for-client-side-web/upgrading-from-atjs-1x-to-atjs-20.md)
      + [at.js cookies](c-implementing-target-for-client-side-web/atjs/atjs-cookies.md)
   + Understand the Global mbox {#global-mbox}
      + [Understand the global mbox overview](c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/understanding-global-mbox.md)
      + [Customize a global mbox](c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/customize-global-mbox.md)
      + [Use a global mbox from a legacy implementation](c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/mbox-global-target-standard.md)
      + [Pass parameters to a global mbox](c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/pass-parameters-to-global-mbox.md)
      + [Global mbox frequently asked questions](c-implementing-target-for-client-side-web/c-target-atjs-faq/global-mbox-frequently-asked-questions.md)
+ Target for mobile apps {#mobile-apps}
   + [Target for mobile apps overview](c-target-mobile-app/target-mobile-app.md)
   + [How Target works in mobile apps](c-target-mobile-app/mobile-how-target-works-mobile-apps.md)
   + [Enable Target in the SDK](c-target-mobile-app/mobile-enable-target-in-sdk.md)
   + [iOS - create a Target location and success metric](c-target-mobile-app/mobile-create-location-and-metric.md)
   + [iOS - send custom user data](c-target-mobile-app/mobile-custom-user-data.md)
   + [Target mobile preview](c-target-mobile-app/target-mobile-preview.md)
   + [Prefetch offer content](c-target-mobile-app/prefetch-offer-content.md)
   + [Target for mobile apps FAQ](c-target-mobile-app/target-for-mobile-apps-faq.md)
   + [Use Location Service](c-target-mobile-app/use-location-service.md)
+ Server Side: implement Target {#server-side}
   + [Server Side: implement Target overview](c-api-and-sdk-overview/api-and-sdk-overview.md)
   + [Transition from Target legacy APIs to Adobe I/O](c-api-and-sdk-overview/target-api-documentation.md)
   + [On-device decisioning](/help/c-implementing-target/c-api-and-sdk-overview/on-device-decisioning.md)
+ [Hybrid implementation](/help/c-implementing-target/hybrid-implementation.md)
+ Email: implement Target {#implement-email}
   + [Email: implement Target overview](c-non-javascript-based-implementation/non-javascript-based-implementation.md)
   + [Create an Adbox for an image](c-non-javascript-based-implementation/testing-content-with-the-adbox.md)
   + [Test an email image Adbox](c-non-javascript-based-implementation/testing-email-image-adbox.md)
   + [Work with redirectors](c-non-javascript-based-implementation/working-with-redirectors.md)
