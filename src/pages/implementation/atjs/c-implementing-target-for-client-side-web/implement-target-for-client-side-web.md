---
keywords: implement;implementation;at.js;adobe experience platform web sdk;aep web sdk
description: Learn how to implement Adobe [!DNL Target] for client-side web using the Adobe Experience Platform Web SDK  (AEP Web SDK) or the [!DNL Target] at.js JavaScript library.
title: How Do I Implement [!DNL Target] for Client-Side Web
feature: at.js
role: Developer
exl-id: 34c1e39b-acae-4547-b67f-584bcd59913f
---
# Overview: implement [!DNL Target] for client-side web

In a client-side implementation of [!DNL Adobe Target], [!DNL Target] delivers the experiences associated with an activity directly to the client browser. The browser decides which experience to display and displays it. With a client-side implementation, you can use a WYSIWYG editor, the [Visual Experience Composer](/help/c-experiences/c-visual-experience-composer/visual-experience-composer.md) (VEC), or a non-visual interface, the [Form-based Experience Composer](/help/c-experiences/form-experience-composer.md), to create your activity and personalization experiences.

To implement [!DNL Adobe Target] client-side, you must use one of the following JavaScript libraries:

* [Adobe Experience Platform Web SDK](/help/c-implementing-target/c-implementing-target-for-client-side-web/aep-web-sdk.md)
* [Target at.js JavaScript library](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/how-atjs-works.md)

>[!IMPORTANT]
>
>**mbox.js end-of-life**: As of March 31, 2021, [!DNL Adobe Target] no longer supports the  library. Post March 31, 2021, all calls made from mbox.js gracefully fail and impact your pages that have [!DNL Target] activities running by serving default content. Adobe recommends that all customers migrate to the most recent version of the new [!DNL Adobe Experience Platform Web SDK] or the at.js JavaScript library before this date to avoid any potential issues with your sites.
>
>* **Adobe Experience Platform Web SDK**: The [!UICONTROL Adobe Experience Platform Web SDK] lets you interact with the various services in the [!DNL Experience Cloud] (including [!DNL Target]) through the Adobe Experience Edge Network. If you choose to migrate to the [!DNL Adobe Experience Platform Web SDK], see [What is Adobe Experience Platform Web SDK](/help/c-implementing-target/c-implementing-target-for-client-side-web/aep-web-sdk.md) in the *Web SDK Guide*.
>
>* **at.js**: The at.js JavaScript library improves page load times for web implementations, improves security, and provides better implementation options for single page applications. If you choose to migrate to at.js, see [How At.js Works](/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/how-atjs-works.md) and [Adobe Target Skill Builder: Developer chat, migrate Adobe Target's mbox.js to at.js](https://seminars.adobeconnect.com/ptdo6mfo6qn6/?proto=true).

