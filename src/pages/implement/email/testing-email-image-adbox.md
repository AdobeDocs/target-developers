---
keywords:
- email
- adbox
- email image adbox
description: Learn how to use Adobe Target to dynamically test images in email, and even change those images on the fly when someone opens the email.
title: How Do I Test an Email Image Adbox?
feature: Implement Email
role: Developer
exl-id: 87a918d7-83dc-4277-821b-d90302c59736
---
# Test an email image Adbox

Dynamically test images in email, and even change those images on the fly when someone opens the email.

Redirectors can be used in emails to track clicks and dynamically control which landing page people reach.

Email image testing is achieved through using modified versions of adboxes. Because email clients do not allow cookies to be set, a unique identifier must be generated for each email. This number is appended to the adbox URL and to any redirectors used in the email to track clicks from the email.

<InlineAlert variant="info" slots="text"/>

Although Target can technically deliver image optimization at open time, each email client handles caching differently, so success will be varied. Regardless of the email service provider used, the email client that the end user uses to open the email (Gmail app, Outlook, Hotmail, and so forth) determines whether the image is actually fetched at open-time. For example, Gmail caches most everything, so the image the end user sees is dependent on when Gmail chooses to call and cache the image.

**Sample code for an email image adbox:**

```
<img src="https://{clientcode}.tt.omtrdc.net/m2/​{clientcode}/ubox/​image?
mbox={email_header}&
mboxDefault=​{http%3A%2F%2Fwww.domain.com%2Fheader.jpg}&
mboxXDomain=disabled&
mboxSession={123456}&
mboxPC={123456}” border=:"0"/>
```

Where the below values are specific to you:

| Value | Description |
|--- |--- |
|clientcode|Your company's client code. Find this in your at.js listed as `clientCode='yourclientcode'`. This is all lower case and has no special characters.|
|image|The offer type. It is always "image" for graphic ads and "page" for redirectors.|
|email_header|The name of the adbox.|
|`mboxDefault=http%3A%2F%2Fwww.domain.com%2Fheader.jpg`|Required. Replace the URL with appropriate default content for your adbox. This must be an absolute reference and must be URL encoded.|
|`mboxXDomain=disabled`|Tells  Target to not attempt to set a cookie.|
|`mboxSession=123456` and `mboxPC=123456`|Two values required by  Target to merge this user's profile with the existing profile for your site. 123456 is the unique identifier generated per email. Dynamically insert this value into every adbox and redirector URL. This number must be unique for each email sent to each person. If a weekly email is sent to 1,000 people, 1,000 unique IDs need to be generated.<br />The unique identifier per email needs to be assigned to the  mboxSession and  mboxPC in each adbox and redirector URL. The recommended format for this identifier is  timestamp-NNNNN where  NNNNN is a random 5-digit number, but any alphanumeric format will work. Some mass e-mail services and any programming language are capable of generating this unique identifier.|
