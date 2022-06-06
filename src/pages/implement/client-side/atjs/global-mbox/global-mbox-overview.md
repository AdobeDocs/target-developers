---
keywords:
- global mbox
- implement at.js
description: Learn about the global mbox in Adobe Target, a name used to refer to the single server call made at the top of each web page in your Target implementation.
title: What Is a Global mbox?
feature: at.js
role: Developer
exl-id: 84d15feb-f5df-4879-ae35-a7f455c1b20f
---
# Understand the Global mbox

Information about the global mbox, a name used to refer to the single server call made at the top of each web page in your Adobe Target implementation.

 By default, the global mbox is named `target-global-mbox`. It can be renamed for your account, if necessary.

There are several differences between a regular mbox (non-global mbox) and the global mbox, including:

| Regular mbox | Global mbox |
|--- |--- |
|A regular mbox typically wraps around content with a `<DIV>` tag.|The global mbox is "empty" and does not wrap around any content.|
|Content from only one activity can be delivered in a regular mbox.|Content from multiple activities can be delivered in one response to a global mbox.|

If multiple activities are delivered via the global mbox or via multiple regular mboxes, Target [determines the priority](https://experienceleague.adobe.com/docs/target/using/activities/priority.html) by which the activity (or activities) are delivered to a web page.

Additional page-level data can be sent to Target along with the global mbox by using the `targetPageParams` function. This is similar to the mbox parameter functionality. For more information, see [Passing Parameters to a Global mbox](/src/pages/implement/client-side/atjs/global-mbox/pass-parameters-to-global-mbox.md).
