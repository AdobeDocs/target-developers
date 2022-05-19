---
keywords:
- global mbox
- target classic
- use global mbox from target classic
description: Learn how to use a legacy global mbox for your Adobe Target activities if you have already created a global mbox on your pages for your legacy implementations.
title: Can I Use a Global mbox from a Legacy Implementation?
feature: at.js
role: Developer
exl-id: 1eb6836b-6b3c-4494-af67-cd72a4f357e2
---
# Use a Global mbox from a legacy implementation

By default, Target creates a global mbox called target-global-mbox, which is used to run activities created in Target. However, if you have already created a global mbox on your pages for your legacy implementations, you can use that mbox for your Target activities.

<InlineAlert variant="info" slots="text"/>

You can have only one global mbox per account.

To use your existing global mbox for both Target and your legacy implementation, you must set a few parameters. 

1. Go to Target, then click **Administration** > **Implementation**.

   By default, **Page load enabled (Auto-create global mbox** is enabled, and the custom global mbox is named `target-global-mbox`.

2. If you want to use an existing mbox, disable **Page load enabled (Auto-create global mbox**, and specify the name of a previously created global mbox in the **Global Mbox** field.

   The Global Mbox drop-down lists all mboxes in your account. If you want to use an mbox that does not yet exist, create the mbox.

3. Click **Save**.

   The settings for your account are updated.

4. Download the new at.js file and reference it on your site.

   All existing activities update to use the specified global mbox, including activities that have previously been created and implemented.

## Troubleshooting global mbox implementation

The following FAQs can be used to troubleshoot your global mbox implementation:

### Why is the global mbox not loading, or why is there latency in loading the global mbox when the page loads?

Make sure the at.js reference is the first JavaScript call on the page. For other solutions to this problem, see [Global mbox Frequently Asked Questions](/src/pages/implement/client-side/atjs/global-mbox/global-mbox-faq.md).
