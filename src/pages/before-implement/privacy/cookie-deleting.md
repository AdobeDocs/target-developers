---
keywords:
- cookie
- cookies
- delete cookie
- delete target cookie
- google chrome
- chrome
- mozilla firefox
- firefox
- microsoft edge
- safari
description: Learn how to delete your Target browser cookies so that you can validate your experiences.
title: How Do I Delete the Target Cookie?
feature: Privacy & Security
role: Developer
exl-id: f2bc079e-593a-4689-a7cd-dfc6f86f6bb4
---
# Delete the Target cookie

You can delete your Adobe Target browser cookie (mbox) so that you can validate all of your experiences during testing.

If there is no Target cookie (mbox), you are considered a new visitor and shown a new experience. There are several ways to delete your mbox without deleting all of your browser cookies.

<InlineAlert variant="info" slots="text"/>

The following instructions are correct for the browsers and versions listed. Search the internet for instructions for your specific browser or version.

## Delete the Target cookie from Google Chrome

Version 84.0.4147.105

1. Click the **Chrome** menu > **Preferences**.
1. Click the **Privacy and Security** tab.
1. Click **Cookies and other site data**.
1. Click **See all cookies and site data**.
1. Expand the `adobe.com` section, select the **mbox** cookie, then click the delete icon (X).

## Delete the Target cookie from Mozilla Firefox

Version 79.0

### Delete all cookies associated with `adobe.com`

1. Click the **Firefox** menu > **Preferences**.
1. Click the **Privacy and Security** tab. 
1. Under **Cookies and Site Data**, click **Manage Data**.
1. Select the `adobe.com` site, then click **Remove Selected**.

<InlineAlert variant="warning" slots="text"/>

This deletes all cookies associated with the `adobe.com` site. If you want to delete an individual cookie for a site, follow the instructions below.

### Delete an individual cookie (mbox)

1. In Firefox, click **Tools** > **Web Developer** > **Storage Inspector**.
1. Click the **Advanced** tab.
1. Navigate to the webpage that holds the cookie you want to delete.
1. Expand the **Cookies** section, then click `https://experience.adobe.com`.
1. Right-click the **mbox** cookie, then click **Delete**.

## Delete the Target cookie from Microsoft Edge

Version 84.0.522.52

1. Click the **Microsoft Edge** menu > **Preferences**.
1. Click the **Site Permissions** tab.
1. Click **Cookies and site data**.
1. Click **See all cookies and site data**.
1. Expand the `adobe.com` section, select the **mbox** cookie, then click the delete icon (X).

## Delete the Target cookie from Apple Safari

Version 13.1.2

### Delete all cookies associated with `adobe.com`

1. Click the **Safari** menu > **Preferences**.
1. Click the **Privacy** tab.
1. Click **Manage Website Data**.
1. Select the sites for the cookies you want to delete, then click **Remove**.

<InlineAlert variant="warning" slots="text"/>

This deletes all cookies associated with the `adobe.com` site. If you want to delete an individual cookie for a site, follow the instructions below.

### Delete an individual cookie (mbox)

1. Click the **Safari** menu > **Preferences**.
1. Click the **Advanced** tab.
1. Select the **Show Develop menu in menu bar** option.
1. Navigate to the webpage that holds the cookie you want to delete.
1. Click the **Develop** menu > **Show Web Inspector**.
1. Click the **Storage** tab.
1. Expand the **Cookies** section, then click `www.adobe.com`.
1. Right-click the **mbox** cookie, then click **Delete**.
