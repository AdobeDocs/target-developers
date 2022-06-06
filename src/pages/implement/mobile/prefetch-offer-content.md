---
keywords:
- offer
- prefetch
- iOS
- android
- sdk
- mobile
- mobile sdk
description: Use the Adobe Target prefetch feature in the iOS and Android Mobile SDKs to fetch offer content as few times as possible by caching the server responses.
title: Can I Prefetch Offer Content for Mobile Apps?
feature: Implement Mobile
role: Developer
exl-id: 83a96a41-cf27-4ed8-8169-277f3ef3f249
---
# Prefetch offer content

The Target prefetch feature uses the iOS and Android Mobile SDKs to fetch offer content as few times as possible by caching the server responses.

This process reduces the load time, prevents multiple network calls, and allows Target to be notified which mbox was visited by the mobile app user. All content is retrieved and cached during the prefetch call, and this content is retrieved from the cache for all future calls that contain cached content for the specified mbox name.

Consider the following limitations when using the prefetch method with the iOS and Android Mobile SDKs:

* Prefetch content does not persist across launches. The prefetch content is cached as long as the application lives or until the `clearPrefetchCache()` method is called.
* Prefetch functionality is not supported for Auto-Allocate and Auto-Target traffic allocation methods, for Automated Personalization or Recommendations activity types, or for [recommendations offers within an A/B or XT activity](https://experienceleague.adobe.com/docs/target/using/recommendations/recommendations-as-an-offer.html).

For more information, including prefetch methods, public classes, and code samples, see:

* **iOS:**  [Prefetch offer content in iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/target-ios/c-mob-target-prefetch-ios.html) in the *Mobile Services iOS SDK Help*. 
* **Android:**  [Prefetch offer content in Android](https://experienceleague.adobe.com/docs/mobile-services/android/target-android/c-mob-target-prefetch-android.html) in the *Mobile Services Android SDK Help*.
