---
keywords:
- google
- samesite
- cookies
- chrome 80
- ietf
description: Discover how Adobe Target handles the SameSite IETF standard introduced with Google Chrome version 80 and what you need to do to comply with these policies.
title: How Does Target Handle Google's Samesite Cookie Policies?
feature: Privacy & Security
role: Developer
exl-id: 5abd2065-3692-4a6d-9ac9-6d416604c2d2
---
# Google Chrome SameSite cookie policies

Google will begin to impose new cookie policies by default for users beginning with Chrome 80, which is slated to be released in early 2020. This article explains all you need to know about the new SameSite cookie policies, how Adobe Target supports these policies, and how you can use Target to comply with Google Chrome’s new SameSite Cookie Policies.

Starting with Chrome 80, web developers must explicitly specify which cookies can work across websites. This is the first of many announcements that Google plans to make to improve privacy and security on the web. 

Given the fact that Facebook has been on the hot seat with regards to privacy and security, other major players such as Apple, and now Google, have been quick to capitalize on the opportunity to create new identities as privacy and security champions. Apple led the pack by first announcing changes to its cookie policies early this year through ITP 2.1 and recently, ITP 2.2. In ITP 2.1, Apple completely blocks third-party cookies and keeps cookies created on the browser for only seven days. In ITP 2.2, cookies are kept for only one day. Google’s announcement is nowhere near as aggressive as Apple’s, but it is the first step toward the same end goal. For more information on Apple's policies, see [Apple Intelligent Tracking Prevention (ITP) 2.x](/src/pages/before-implement/privacy/apple-itp-2x.md).

## What are cookies and how are they used?

Before we dive into Google’s changes to its cookies policies, let’s touch upon what cookies are and how they are used. Simply put, cookies are small text files stored in the web browser that are used to remember user attributes. 

Cookies are important because they enhance the user’s experience as they browse the web. For example, if you are shopping on an eCommerce website and add something to your cart but don’t sign in or purchase in that visit, cookies remember your items and keep them in your cart for your next visit. Or, imagine if you were forced to re-input your username and password every time you visit your favorite social media website. Cookies solve that problem too, because they store information that helps sites identify who you are. These kinds of cookies are called first-party cookies because they are created and used by the website you visited.

Third-party cookies also exist. To better understand them, let’s consider this example: 

Let’s say a hypothetical social media company called "Friends" provides a Share button that other sites implement to allow Friends users to share the site’s content on the Friends feed. Now, a user reads a news article on a news website that’s using the Share button and clicks it to automatically post on their Friends account. 

For this to happen, the browser fetches the Friends Share button from `platform.friends.com` when the news article is loaded. Within this process, the browser attaches Friends cookies, which contain the logged-in credentials of the user, to the request to Friends servers. This allows Friends to post the news article in its feed on the user’s behalf without requiring the user to log in. 

This is all possible by using third-party cookies. In this case, the third-party cookie is saved on the browser for `platform.friends.com`, so that `platform.friends.com` can make the post in the Friends app on the user’s behalf. 

If you imagine for a moment how to achieve this use case without third-party cookies, the user would have to follow a lot of manual steps. First, the user would have to copy the link to the news article. Second, the user would have to log into the Friends app separately. Then, the user would click on the Create Post button. Then the user would copy and paste the link in the text field, and finally click Post. As you can see, third-party cookies immensely help the user experience as manual steps can be drastically reduced. 

More generally, third-party cookies make it possible for data to be stored on a user’s browser without requiring that user to explicitly visit a website.

## Security concerns

Although cookies enhance user experiences and power advertising, they can also introduce security vulnerabilities like Cross-Site Request Forgery (CSRF) attacks. For example, if a user logs in to a banking site to pay credit card bills and leaves the site without logging out and then browses to a malicious site in the same session, a CSRF attack can occur. The malicious site could include code that makes a request to the banking site that executes when the page loads. Because the user is still authenticated to the banking site, the session cookie can be used to launch a CSRF attack to initiate a funds transfer event out of the user’s bank account. This is because whenever you visit a site, all the cookies are attached in the HTTP request. And because of these security concerns, Google is now attempting to mitigate them.

## How does Target use cookies?

With all that said, let’s see how Target uses cookies. In order for you to use Target in the first place, you need to install the Target JavaScript library on your site. This enables you to place a first-party cookie on the browser of the user that visits your site. As your user interacts with your website, you can pass the user’s behavioral and interest data to Target through the JavaScript library. The Target JavaScript library uses first-party cookies to extract identification information about the user to map to the user’s behavior and interest data. This data is then used by Target to power your personalization activities.

Target also (sometimes) uses third-party cookies. If you own multiple websites that live on different domains and you want to track the user journey across those websites, you can use third-party cookies by leveraging cross-domain tracking. By enabling cross-domain tracking in the Target JavaScript library, your account will start using third-party cookies. As a user hops from one domain to another, the browser communicates with the backend server of Target, and in this process, a third-party cookie is created and placed on the user’s browser. Through the third-party cookie that lives on the user’s browser, Target is able to deliver a consistent experience across different domains for a single user.

## Google’s new cookie recipe

To provide safeguards around when cookies are sent across sites so that users are protected, Google plans to add support for an IETF standard called SameSite, which requires web developers to manage cookies with the SameSite attribute component in the Set-Cookie header.

There are three different values that can be passed into the SameSite attribute: Strict, Lax, or None.

|Value|Description|
| --- | --- |
|Strict|Cookies with this setting can be accessed only when visiting the domain on which it was initially set. In other words, Strict completely blocks the cookie from being used across sites. This option would be best for applications that require high security, such as banks.|
|Lax|Cookies with this setting are sent only on same-site requests or top-level navigation with non-idempotent HTTP requests, like `HTTP GET`. Therefore, this option would be used if the cookie can be used by third-parties, but with an added security benefit that protects users from being victimized by CSRF attacks.|
|None|Cookies with this setting will work the same way as cookies work today.|

Keeping the above in mind, Chrome 80 introduces two independent settings for users: "SameSite by default cookies" and "Cookies without SameSite must be secure." These settings will be enabled by default in Chrome 80.

![SameSite dialog box](../assets/samesite.png)

* **SameSite by default cookies**: When set, all cookies that don’t specify the SameSite attribute will automatically be forced to use `SameSite = Lax`.
* **Cookies without SameSite must be secure**: When set, cookies without the SameSite attribute or with `SameSite = None` need to be Secure. Secure in this context means that all browser requests must follow the HTTPS protocol. Cookies that do not adhere to this requirement are rejected. All websites should use HTTPS to meet this requirement.

## Target follows Google's security best practices

At Adobe, we always want to support the industry’s latest best practices for security and privacy. We are happy to announce that Target supports the new security and privacy settings introduced by Google.

For the "SameSite by default cookies" setting, Target will continue to deliver personalization without any impact and intervention by you. Target uses first-party cookies and will continue to function properly as the flag `SameSite = Lax` is applied by Google Chrome.

For the "Cookies without SameSite must be secure" option, if you do not opt-in for the cross-domain tracking feature in Target, the first-party cookies in Target will continue to work. 

However, when you opt-in to use cross-domain tracking to leverage Target across multiple domains, Chrome requires `SameSite = None` and Secure flags to be used for third-party cookies. This means that you must ensure that your sites use the HTTPS protocol. Client-side libraries in Target will automatically use the HTTPS protocol and attach the `SameSite = None` and Secure flags to third-party cookies in Target to ensure that all activities continue to deliver.

## What do you need to do?

To understand what you need to do to have Target continue to work for Google Chrome 80+ users, consult the table below, of which you will see the following columns:

* **Target JavaScript Library**: If you are using at.js 1.*x* or at.js 2.*x* on your sites.
* **SameSite by default cookies = Enabled**: If your users have "SameSite by default cookies" enabled, how does it impact you and is there anything you need to do for Target to continue to work.
* **Cookies without SameSite must be secure = Enabled**: If your users have "Cookies without SameSite must be secure" enabled, how does it impact you and is there anything you need to do to have Target continue to work.

|Target JavaScript Library|SameSite by default cookies = Enabled|Cookies without SameSite must be secure = Enabled|
| --- | --- | --- |
|at.js 1.*x* with first-party cookie.|No impact.|No impact if you are not using cross-domain tracking.|
|at.js 1.*x* with cross-domain tracking enabled.|No impact.|You must enable the HTTPS protocol for your site.<br />Target uses a third-party cookie to track users and Google requires third-party cookies to have `SameSite = None` and Secure flag. The Secure flag requires your sites must use the HTTPS protocol.|
|at.js 2.*x*|No impact.|No impact.|

## What does Target need to do?

So, what did we need to do in our platform to help you comply with the new Google Chrome 80+ SameSite cookie policies?

|Target JavaScript Library|SameSite by default cookies = Enabled|Cookies without SameSite must be secure = Enabled|
| --- | --- | --- |
|at.js 1.*x* with first-party cookie.|No impact.|No impact if you are not using cross-domain tracking.|
|at.js 1.*x* with cross-domain tracking enabled.|No impact.|at.js 1.*x* with cross-domain tracking enabled.|
|at.js 2.*x*|No impact.|No impact.|

## What is the impact if you don’t move over to using the HTTPS protocol?

The only use case that will impact you is if you are using the cross-domain tracking feature in Target through at.js 1.*x*. Without moving over to HTTPS, which is a requirement by Google, you will see a spike in unique visitors across your domains because the third-party cookie we use will be dropped by Google. And because the third-party cookie will be dropped, Target will not be able to provide a consistent and personalized experience for that user as the user navigates from one domain to another. The third-party cookie is mainly used to identify a single user navigating across domains you own.

## Conclusion

As the industry makes strides to create a more secure web for consumers, Adobe is absolutely committed to helping our customers deliver personalized experiences in a manner that ensures security and privacy for end users. All you need to do is follow the aforementioned best practices and take advantage of Target to comply with Google Chrome’s new SameSite Cookie Policies.
