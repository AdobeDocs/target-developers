---
keywords:
- implement
- implementing
- implementation
- adobe launch
- launch
- race
- redirect
- experience platform launch
- platform launch
- tags
- adobe platform
description: Learn how to implement the Adobe Target at.js library using Adobe Experience Platform, the preferred method to implement Target.
title: How Do I Implement Target using Adobe Experience Platform?
feature: Implement Server-side
role: Developer
exl-id: 7cc1d3ab-4a68-4454-95b0-04fa547a6d9e
---
# Implement Target using Adobe Experience Platform

Tags in Adobe Experience Platform are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage the analytics, marketing, and advertising tags necessary to power relevant customer experiences.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](https://experienceleague.adobe.com/docs/experience-platform/tags/term-updates.html?) for a consolidated reference of the terminology changes.

The following table lists the various sources where you can get more information:

| Resource | Details |
|--- |--- |
|[Add Adobe Target](https://experienceleague.adobe.com/docs/launch-learn/implementing-in-websites-with-launch/implement-solutions/target.html#implement-solutions)|This tutorial provides step-by-step instructions to implement Target in a website with tags in Adobe Experience Platform. Topics include adding the at.js JavaScript library, firing the global mbox, adding parameters, and integrating with other solutions. This article is part of a larger tutorial that shows you how to implement Adobe Experience Platform, and other Adobe Experience Cloud solutions.|
|[Quickstart guide](https://experienceleague.adobe.com/docs/experience-platform/tags/get-started/quick-start.html)|Information about deploying and managing the analytics, marketing, and advertising tags necessary to power relevant customer experiences.|
|[Adobe Target extension overview](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/adobe/target/overview.html)|Information about implementing Target using Adobe Experience Platform.|

## Advantages of implementing at.js using the Target extension

The following advantages apply only if you use tags in Adobe Experience Platform to implement at.js. For this reason, Adobe strongly suggests that you use tags in Adobe Experience Platform rather than a manual implementation of at.js.

* **Solves Adobe Analytics and Target race condition:** Because the Analytics call could be fired before the Target call, the Target call is not stitched to the Analytics call. This sequencing can lead to incorrect data. The Target extension ensures that the Analytics beacon call waits until the Target call completes, successfully or not. Using tags in Adobe Experience Platform solves the data inconsistency customers can experience when implementing manually.

<InlineAlert variant="info" slots="text"/>
  
Use the Send Beacon action in the Adobe Analytics extension so that the Analytics call waits for the Target call. If you directly call `s.t()` or `s.tl()` using custom code, Analytics calls do not wait until Target calls are complete.

* **Prevents incorrect redirect offer handling:** If you have Target and Analytics on the page, and there is a redirect offer executed by Target, you can experience a situation in which the Analytics tracker fires a request when it shouldn’t (because the user is being redirected to a different URL). If you implement Target and Analytics via tags in Adobe Experience Platform, you’ll not experience this issue. Using tags in Adobe Experience Platform, Target instructs Analytics to abort the Analytics beacon request.
