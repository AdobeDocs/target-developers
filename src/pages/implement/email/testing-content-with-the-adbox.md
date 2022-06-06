---
keywords:
- Implementation
- non javascript
- mbox
- adbox
description: Use an AdBox to deliver images in an off-site implementation using Adobe Target. An AdBox is like an mbox, but controlled by a URL instead of JavaScript.
title: How Do I Create an Adbox for an Image?
feature: Implement Email
role: Developer
exl-id: c66cfbc2-633a-46f2-8d9f-dbd18f7e880e
---
# Create an Adbox for an image

Use an AdBox to deliver images in an off-site implementation using Adobe Target.

An AdBox is like an mbox, but it is controlled by a URL rather than JavaScript. AdBoxes are created with a special AdBox URL that loads an "ad" mbox (or AdBox) into your Adobe account. Use this AdBox in place of the mbox in your activities. Use the AdBox URL instead of a direct image reference in email or other non-JavaScript implementations.

For help selecting the right setup see [Non-JavaScript-Based Implementations](/src/pages/implement/email/). 

1. Create the AdBox URL:

   ```
   https://myClientCode.tt.omtrdc.net/m2/myClientCode/ubox/
   image?mbox=emailHeroImage123_320x200&
   mboxDefault=http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fimg%2Flogo%2Egif
   ```

   * Where `myClientCode` is your company's client code. Your company's client code is all lower case and has no special characters.
   
     Your client code is available at the top of the **Administation > Implementation** page of the Target interface.
   
   * Where `image` is the call type. In this case it is an image.
   
   * Where `emailHeroImage123_320x200` is the name of the AdBox.

   * Where `http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fimg%2Flogo%2Egif` is the mbox's default content. This must be an image.
   
     This must be URL encoded and must be an absolute reference. You can use the [HTML URL Encoding Reference](https://www.w3schools.com/tags/ref_urlencode.asp) to quickly encode your URLs.

2. Create [Redirect Offers](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html) for each alternative image.

<InlineAlert variant="info" slots="text"/>

AdBoxes must be loaded with a Redirect Offer or the default content offer. Other offers types will not work. Because the AdBox is a URL, it can only display the URLs it receives, so only the Redirect Offer works.

3. Create the activity.

   See [Non-JavaScript-Based Implementations](/src/pages/implement/email/index.md) for the right set up to meet your goals. 
   
4. Complete QA on the activity.

   As best practice, create a dummy page and verify that all experiences, default content, and reports act as expected on all browser types, for all of your environments. 

5. Launch the activity.
