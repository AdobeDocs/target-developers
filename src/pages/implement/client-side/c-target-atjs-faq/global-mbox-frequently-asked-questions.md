---
keywords:
- troubleshooting
- frequently asked questions
- FAQ
- FAQs
- global
- global mbox
description: Read frequently asked questions (FAQs) and answers about Adobe Target global mboxes.
title: What Are Frequently Asked Questions About the Global mbox?
feature: at.js
role: Developer
exl-id: ec8399df-5222-44bd-9e61-dfce8fd1694d
---
# Global mbox Frequently Asked Questions

List of Frequently Asked Questions (FAQs) about global mboxes.

## Can I have more than one global mbox if my Target account is set across multiple domains? {#section_B7252BA6C3BB4EF4AE9E53F47FD58ABD}

Only one global mbox is supported across your account.

You can limit where your activities run by adding URL rules to your activities. For more information, see [Include the Same Experience on Similar Pages](/help/main/c-experiences/c-visual-experience-composer/temtest.md#task_2539D51A18044F82B0D9895636546781).

You could also pass a parameter on the page using [targetPageParams](/help/c-implementing-target/c-implementing-target-for-client-side-web/targetpageparams.md) and then select those parameters in the "configure URL" section in the Visual Experience Composer (VEC) or by adding the parameters as "refinements" in the Form-Based Experience Composer.

## How do I pass revenue data on a Target global mbox? {#section_17AEA933BADA4D169CCEDF5833C41306}

To collect revenue and order information on the target-global-mbox, "mbox parameters" must be sent to Target. These parameters are name/value pairs used to send more information to Target. Target automatically looks for these parameters (reserved names) to populate revenue data.

For the `orderConfirmPage`, you should pass in `orderTotal`, `orderId`, and `productPurchasedId`.

These parameters must be sent to the target-global-mbox via `targetPageParams()`. For more information, see [Passing Parameters to a Global mbox](/help/c-implementing-target/c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/pass-parameters-to-global-mbox.md#concept_33362A04146C4E3C8E7089B65F38B5E5).

You'll also want to add targeting to the conversion piece so that Target only counts conversions on the target-global-mbox when the order confirmation page has been viewed, as shown below:

![alt image](assets/revenue1.png)

The Site Pages section illustrated above contains the following selections: Current Page, URL, contains, orderconfirm.

![alt image](assets/revenue2.png)

The options in the above illustration include the following settings:

* **What do you want to measure with this activity:** Revenue 
* **Default View for Reporting:** Revenue Per Visitor (RPV) 
* **What action was taken by your audience to indicate your goal has been reached?** Viewed an mbox, target-global-mbox
