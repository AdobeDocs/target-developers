---
keywords: cloud instances;public suffix list;public suffix;cookie;first-party cookie;1st-party cookie;azurewebsites.net;cloudapp.net;amazonaws.com;cloudfront.net;herokuapp.com;firebaseapp.com;targetGlobalSettings;cookieDomain
description: Explore issues (with solutions) customers face when using cloud-based instances to test Adobe [!DNL Target] or for proof-of-concept purposes.
title: Can I Use [!DNL Target] with Cloud-based Instances?
feature: at.js
role: Developer
exl-id: 220371a9-ba57-4e67-b82f-8fec6f9d2833
---
# Use cloud-based instances with Target

Information about issues customers face when using cloud-based instances to test [!DNL Adobe Target].

Target customers sometimes use cloud-based instances with [!DNL Target] for testing or simple proof-of-concept purposes. These instances might include the following domains: 

`azurewebsites.net`, `cloudapp.net`, `amazonaws.com`, `cloudfront.net`, `herokuapp.com`, or `firebaseapp.com`

These domains, and many others, are part of the [Public Suffix List](https://publicsuffix.org/list/public_suffix_list.dat).

**Issue:** Modern browsers won't save cookies if you are using these domains.

The [!DNL at.js] JavaScript library uses cookies to track users to ensure that [!DNL Target] always presents a consistent experience. If the [!DNL Target] JavaScript library can't save cookies, [!DNL Target] requests are disabled.

**Solution:** As best practice, if you intend to use cloud-based instances with domains included on the Public Suffix List, make sure that you customize the `cookieDomain` setting. For more information, see [targetGlobalSettings()](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md).
