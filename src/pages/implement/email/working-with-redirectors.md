---
keywords:
- Implementation
- mbox.js non javascript
- redirector
- costs per click
- revenue per click
description: Learn how to use Redirectors in email implementations, similarly to how you use an mbox in your Adobe Target activities.
title: How Do I Work with Redirectors?
feature: Implement Email
role: Developer
exl-id: 1e7b99e4-857b-4d0f-afbd-2c5ce6bf0557
---
# Work with redirectors

Use a Redirector similarly to how you use an mbox in your tests.

Redirectors are created with a special Redirector URL that loads a Redirector mbox (Redirector) into your account. Use this Redirector similarly to how you use an mbox in your tests. Submit the Redirector URL to your Ad Network as the ad's destination link.

Use the Redirector to do the following:

* Track clicks from your display ads to your site 
* Create a single centralized report to track clicks to display ads on multiple ad networks 
* Vary display ad destinations

  For example the same banner lands on your home page, category page and product page. 

* Find which landing page leads to the most conversions

For help deciding the right setup see [Non-JavaScript-Based Implementations](/src/pages/implement/email/index.md). 

## Create a redirector

Before you can use a redirector, you must create it.

1. Determine the ad's destination variations, including the default destination.
2. Create the Redirector URL.

   ```
   https://<your_testandtarget_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox
   /​page?mbox=redirectorlink_456
   &mboxDefault=http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fusualdestination%2Ehtm
   ```

   * Where `yourclientcode` is your company's client code. Your company's client code is all lower case and has no special characters.

     Your client code is available at the top of the **Administration > Implementation** page of the Target interface.

   * `redirectorlink_456` is the name of the Redirector mbox that appears in your account to use in campaigns and tests.

      Redirectors function differently from other mboxes, but appear just as any other mbox in your account. Name the redirector so it is easily distinguished them from the standard type mboxes in your account.  As best practice, begin the mbox name with 'redirectorlink'.

   * Where `http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fusualdestination%2Ehtm` is the default destination.

     This must be URL encoded and must be an absolute reference. You can use the [HTML URL Encoding Reference](https://www.w3schools.com/tags/ref_urlencode.asp) to quickly encodes your URLs.

<InlineAlert variant="warning" slots="text"/>

Note that with Redirector you can be exposed to a risk of an Open Redirect Vulnerability. To avoid the unauthorized use of Redirector links by third parties, Adobe recommends you use "authorized hosts" to allowlist the default redirect URL domains. Target uses hosts to allowlist domains to which you want to allow redirects. For more information, see [Create Allowlists that specify hosts that are authorized to send mbox calls to Target](https://experienceleague.adobe.com/docs/target/using/administer/hosts.html#allowlist) in *Hosts*.

3. Validate the Redirector.
   1. *Security best practice*: Ensure that the domain used in the Redirector is allowlisted, as indicated above. If you use a domain that is not allowlisted, Adobe will block any calls to that domain to prevent malicious actors from using the Redirector to redirect to potentially malicious domains.
   2. Insert the Redirector URL into a browser and refresh.
   3. Log in to your account, refresh your mbox list and verify the new Redirector is listed as an mbox.
4. If you will test different destinations for one ad, create [Redirect Offers](https://experienceleague.adobe.com/docs/target/using/experiences/vec/redirect-offer.html) for each version.
5. Create the campaign.

   See [Non-JavaScript-Based Implementations](/src/pages/implement/email/index.md) for the right setup to meet your goals. 
6. Complete QA on the campaign.

   Create a dummy page with an `<a href>` containing the Redirector URL. Example:

   ```
   <a href=https://<your_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox/​page?mbox=
   
   redirectorlink_456&mboxDefault=http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2F​usualdestination%2Ehtm>
   ```

7. Verify that all experiences, default content, and reports act as expected on all browser types, for all of your environments.

<InlineAlert variant="info" slots="text"/>

Redirectors are not supported by Offer Preview or Browse for mbox. Preview experiences directly in a browser. Also, `mboxDebug` does not work with Redirectors.

8. Submit the full Redirector URL to your Display Ad Network as the ad destination.

## Use a redirector to pass Costs per Click and Revenue Per Click

Information about using a redirector to pas costs per click and revenue per click.

### Passing Costs per Click

Use a redirector to pass the costs per click.

<InlineAlert variant="info" slots="text"/>

Best practice is to determine the cost value using the **Score per visit** engagement metric.

Add `&mboxPageValue=-value` to the URL. Note the negative value.

Example: For a .10 cents cost per click:

```
https://<your_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox/​page?mbox=redirectorlink_456
&mboxPageValue=-0.1&mboxDefault=​https://www.yourcompany.com/usualdestination.htm
```

### Passing Revenue per Click

Use a redirector to pass the revenue per click.

<InlineAlert variant="info" slots="text"/>

Best practice is to determine the revenue value using the **Score per visit** engagement metric.

Add `&mboxPageValue=value` to the URL.

Example: For a .10 cents revenue per click.

```
https://<​your_clientcode>​​​​.tt​​.omtrdc​.net/​​m2/​yourclientcode/​ubox/​​​page?mbox=redirectorlink_456
&mboxPageValue=0.1​&mbox​Default=​​http%3A%2F%2Fwww%2E​yourcompany%2Ecom​%2Fusualdestination%2Ehtm
```
