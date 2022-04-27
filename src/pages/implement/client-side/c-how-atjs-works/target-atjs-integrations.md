---
keywords:
- at.js integration
- supported integrations
- unsupported integrations
- third party integrations
description: See the integrations supported (and not supported) by Adobe Target at.js, including Analytics for Target (A4T), the Experience Cloud ID Service, and more.
title: What Integrations Does at.js Support?
feature: at.js
role: Developer
exl-id: 148c744d-2a2b-40f8-964b-c51283ae7d1c
---
# at.js integrations

Information about common integrations with Target and their support status with at.js.

If you have a compelling need for an integration that is not supported or mentioned here, please contact your account representative or consultant.

## Supported Integrations {#section_3B44A970D3FB42D1973701452C868B55}

| Integration | Details |
|--- |--- |
|Analytics for Target (A4T)|See [Adobe Analytics as the Reporting Source for Adobe Target (A4T)](/help/main/c-integrating-target-with-mac/a4t/a4t.md#concept_7540C8C04259434AB6EE33B09F47A1DE).|
|Profiles & Audiences (P&A)|See [Audiences](https://experienceleague.adobe.com/docs/core-services/interface/audiences/audience-library.html) in the *Core Services User Guide*.|
|Experience Cloud ID Service|See the [Adobe Experience Cloud ID Service documentation](https://experienceleague.adobe.com/docs/id-service/using/home.html).|
|Tags in Adobe Experience Platform|Tags in Adobe Experience Platform are the next generation of tag management capabilities from Adobe. Tags give customers a simple way to deploy and manage the analytics, marketing, and advertising tags necessary to power relevant customer experiences. See [Implement Target using Adobe Experience Platform](/help/c-implementing-target/c-implementing-target-for-client-side-web/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md#topic_5234DDAEB0834333BD6BA1B05892FC25).|
|Adobe Experience Manager (AEM) Cloud Service|The AEM Cloud Service enables the creation of A/B tests and Experience Targeting activities within the AEM workflow. Supports at.js with Adobe Experience Manager 6.2 with FP-11577 (or later) . For more information, see [Integrating with Adobe Target](https://helpx.adobe.com/experience-manager/6-2/sites/administering/using/target.html) and select your AEM version.|
|AEM Experience Fragments|Experience fragments created in AEM in Target activities let you combine the ease-of-use and power of AEM with powerful Automated Intelligence (AI) and Machine Learning (ML) capabilities in Target to test and personalize experiences at scale.  AEM brings together all of your content and assets in a central location to fuel your personalization strategy. AEM lets you easily create content for desktops, tablets, and mobile devices in one location without writing code. There’s no need to create pages for every device—AEM automatically adjusts each experience using your content.  See [AEM experience fragments](/help/main/c-experiences/c-manage-content/aem-experience-fragments.md#topic_1E1E4EA01F074349B2CF8785387B5FE8).|

## Unsupported Integrations {#section_8EFCAED418DC42E0B07F95924819EAC2}

| Integration | Details |
|--- |--- |
|Legacy Target to SiteCatalyst Integration|This was the integration that sent campaign and recipe ids to SiteCatalyst via the page call so you could do reporting in the SiteCatalyst UI. This functionality is replaced by A4T.|
|Legacy Target to SiteCatalyst Integration|This was the integration that made mbox calls named `"SiteCatalyst: Event"` and `"SiteCatalyst: Purchase"` so you could build success metrics and user profiles based on evars and props. This functionality is replaced by A4T and P&A.|
|Legacy Audience Manager (AAM) to Target Integration|This was the integration that made a front-end API call to retrieve AAM segments and then sent them as mbox parameters on every mbox call on the page.|

## Third-Party Integrations {#section_EE599839CCAD49DD97640E5EDAD9082E}

| Integration | Details |
|--- |--- |
|Other Tag Managers|at.js should work with non-Adobe tag management platforms, but be careful using custom integration features that other vendors have developed. Their integrations might be dependent on internal  mbox.js functions that no longer exist in  at.js.|
|Third-party data providers (e.g. Demandbase, Bluekai, weather APIs)|Many third-party data providers used to supplement Target's user profiling can be integrated using the at.js [Data Providers](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md#data-providers) feature.|
