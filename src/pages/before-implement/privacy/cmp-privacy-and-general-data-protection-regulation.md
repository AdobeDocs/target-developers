---
keywords:
- gdpr
- eu
- european union
- privacy
- faq
- frequently asked questions
- california consumer privacy act
- ccpa
- privacy
- data protection
- opt-out
- opt out
- government
- regulation
description: Learn about Target and the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other privacy requirements.
title: How Does Target Handle Privacy and Data Protection Regulations?
feature: Privacy & Security
role: Developer
exl-id: 5013a9d2-a463-4787-90ee-3248d9cb02b2
---
# Privacy and data protection regulations

Information about the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other international privacy requirements. Learn how these regulations impact your organization and Adobe Target.

## Privacy and General Data Protection Regulation (GDPR) overview

On May 25, 2018, the European Union's GDPR went into effect. For more information about what this regulation means for you, see [GDPR and Your Business](https://business.adobe.com/privacy/general-data-protection-regulation.html).

When Adobe is providing software and services to an enterprise, Adobe is acting as a Data Processor for any personal data it processes and stores as part of providing these services. As a Data Processor, Adobe processes personal data in accordance with your company's permission and instructions (for example, as set out in your agreement with Adobe).

As the Data Controller, you determine the personal data that Adobe processes and stores on your behalf. If you use Adobe Experience Cloud solutions, Adobe might host personal data for you, depending on the solutions you use and the information you choose to send to your Adobe Experience Cloud account. For a detailed list of examples, see [Adobe Experience Cloud Privacy](https://www.adobe.com/privacy/experience-cloud.html#collect).

Adobe Experience Cloud provides GDPR-ready APIs for Data Controllers that allow them to complete the following tasks:

* Access Data Subject information stored within Target
* Delete Data Subject information stored within Target

For more information, see:

* [Adobe Privacy Service overview](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html)
* [Privacy Service API guide](https://experienceleague.adobe.com/docs/experience-platform/privacy/api/overview.html)
* [Privacy Service UI overview](https://experienceleague.adobe.com/docs/experience-platform/privacy/ui/overview.html)

## California Consumer Privacy Act (CCPA) overview

The California Consumer Privacy Act (CCPA) provides California consumers with new rights regarding their personal information and imposes data protection responsibilities on certain entities that conduct business in California. The CCPA went into effect January 1, 2020.

At a high level, the law affords Californians several key rights, including rights to:

* Request information (data access)
* Opt out of the sale of personal information (a broadly defined right to opt out of sharing of information with third parties)
* Have personal information deleted
* Be informed that personal information is being disclosed or sold

If you were busy getting ready for Europe’s privacy law (GDPR) last year, some of these rights might be familiar and much of the work you have done can be repurposed.

<InlineAlert variant="info" slots="text"/>

Accessing and deleting data as it applies to the CCPA follows the same process as for the GDPR.

## Adobe Target and Adobe Experience Platform opt-in

Target provides opt-in functionality support via tags in Adobe Experience Platform to help support your consent management strategy. Opt-in functionality lets customers control how and when the Target tag is fired. There is also an option via Adobe Experience Platform to pre-approve the Target tag. To enable the ability to use Opt-In in the Target at.js library, you should use `targetGlobalSettings` and add the `optinEnabled=true` setting. In Adobe Experience Platform, select "enable" from the GDPR Opt-In drop-down list in the extension installation view. See [Implement Target using Adobe Experience Platform](../../../../../implement/client-side/atjs/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md) for more details.

The following code snippet shows you how to enable the `optinEnabled=true` setting:

```
window.targetGlobalSettings = {
  optinEnabled: true
};
```

<InlineAlert variant="info" slots="text"/>

Opt-in functionality is supported in at.js version 1.7.0 and at.js 2.1.0 or later. Opt-in is not supported in at.js version 2.0.0 and 2.0.1.

<InlineAlert variant="info" slots="text"/>

Using Adobe Experience Platform to manage opt-in is the recommended approach. Further granular control exists in Adobe Experience Platform to hide selected elements of your page before Target firing that are helpful to use as part of your consent strategy.

There are three scenarios to consider when using Opt-In:

1. **The Target tag is pre-approved via Adobe Experience Platform (or the data subject previously approved Target):** The Target tag is not held for consent and functions as expected.
2. **The Target tag is NOT pre-approved and `bodyHidingEnabled` is FALSE:** The Target tag fires only after consent is collected from the customer. Before consent is collected, default content only is available. After consent is received, Target is called and personalized content is available to the data subject (visitor). Because only default content is available before consent, it is important to use an appropriate strategy, such as a splash page that covers any portion of the page or content that might be personalized. This process ensures that the experience remains consistent for the data subject (visitor).
3. **The Target tag is NOT pre-approved and `bodyHidingEnabled` is TRUE:** The Target tag fires only after consent is collected from the customer. Before consent is collected, default content only is available. However, because `bodyHidingEnabled` is set to true, `bodyHiddenStyle` dictates what content on the page is hidden until the Target tag is fired (or the data subject declines opt-in, in which case default content is displayed). By default, `bodyHiddenStyle` is set to `body { opacity:0;}`, which hides the HTML body tag. Adobe's recommended page configuration is below so that the entire body of the page, other than the consent manager dialog, is hidden by putting the content of the page in one container and the consent manager dialogue in a separate container. This setup configures Target so that it hides the page content container only. See the [Privacy Service overview](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html?).

   The recommended page setup for scenario 3 is:

   ```
   <html> 
   <head> 
   //visitor, at.js 
   </head> 
    
   <body> 
   <div id = "consentManagerDialog"> 
    
   //consent manager html dialog goes here 
   </div> 
    
   <div id="pageContent"> 
   // page content goes here 
   </div> 
    
   </body> 
   </html> 
   
   ```

   Assuming the `bodyHiddenStyle` of:

   ```
   #pageContent { opacity:0;}
   ```

## Privacy and data protection regulations FAQ

Frequently Asked Questions about the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other international privacy requirements specific to Target.

### What is the Adobe policy for these regulations?

Adobe either already meets or is implementing its obligations as a Data Processor. Adobe has a strong foundation of certified security and privacy controls by design and made product enhancements before the May 2018 deadline. Enterprise customers have the responsibility to implement these enhancements and update any necessary policies and procedures.

### Must my company, the Data Controller, submit a GDPR or CCPA request to each Adobe Experience Cloud solution that it uses?

No, Adobe provides a central way to help Data Controllers meet their GDPR and CCPA requirements. Data Controllers do not need to go directly to each solution.

All GDPR and CCPA requests across Experience Cloud solutions, including Target, are through a central Adobe API, currently called the GDPR API. The API then completes the request across the Data Controller's Experience Cloud solution suite.

### What information does Adobe enable customers to delete in response to a data subject/user request?

The information related to an individual visitor within Target is contained within the Target Visitor Profile. Target lets customers delete all data associated with an ID in their Visitor Profile. For examples of the profile data Target stores, see [Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html).

Aggregated or anonymized data (for example, reporting data) that does not identify a particular individual, or data that is unrelated to a specific individual (for example, content data), is outside the scope of a user-deletion request.

Target Visitor Profiles that have been inactive for 90 days are deleted by default, without any action required.

### What IDs are supported to help customers complete a GDPR or CCPA access and deletion request for Target?

Target supports the following ID types to locate a customer profile:

| User ID | Name Space ID Type | Namespace ID | Definition |
|--- |--- |--- |--- |
|Experience Cloud ID (ECID)|Standard|4|Adobe Experience Cloud ID, formerly known as Visitor ID or Experience Cloud ID. You can use the JavaScript API to locate this ID (see details below).|
|TnT ID / Cookie ID(TNTID)|Standard|9|Target identifier set as a cookie in the visitor’s browser. You can use the JavaScript API to locate this ID (see details below).|
|3rd-Party ID / CRM ID (THIRDPARTYID)|Target-Specific|N/A|If you provide Target with your CRM or other unique identifier information for your customers.|

<InlineAlert variant="info" slots="text"/>

Although Target supports both first-party and third-party cross-domain cookies, first-party Target cookies only are recommended for GDPR and CCPA.

### How does Target handle consent management?

GDPR and CCPA do not change when you must get consent, but how you get it. Each customer's consent strategy depends on its data collection and use practices and its privacy policy. Consent management isn’t supported by and shouldn’t be achieved via Target for GDPR and CCPA.

Adobe does not currently offer a Consent Management Solution, but there are various tools developing in the market to address some of the new requirements. For more information on privacy tools in general, including consent managers, see the [2017 Privacy Tech Vendor Report](https://iapp.org/media/pdf/resource_center/Tech-Vendor-Directory-1.4.1-electronic.pdf) on the *International Association of Privacy Professionals (iaap)* website.

Target does provide opt-in functionality support via Adobe Experience Platform to support your consent management strategy. Opt-in functionality lets customers control how and when the Target tag is fired. There is also an option via Adobe Experience Platform to pre-approve the Target tag. Using Adobe Experience Platform to manage opt-in is the recommended approach. Further granular control exists in Adobe Experience Platform to hide select elements of your page before the Target firing that might be helpful to use as part of your consent strategy.

For more information on GDPR, CCPA, and Adobe Experience Platform, see [The Adobe Privacy JavaScript Library and GDPR](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html?). Also, see the *Adobe Target and Adobe Experience Platform opt-in* section above.

### Does `AdobePrivacy.js` submit information to the GDPR API?

AdobePrivacy.js does *not* submit this information to the API. The customer must do that. This library provides only the IDs that are stored in the browser for that specific visitor.

### What does `removeIdentities` remove?

`removeIdentities` *only* removes those identities from the browser, and that only depends on whether the Adobe solution has implemented it.

For example, Target deletes the cookies storing its IDs, but Adobe Audience Manager (AAM) does not delete the demdex ID that is stored in a third-party cookie.

### What information must be included in a Target GDPR or CCPA request?

In addition to the requirements from Central Privacy Service, a valid GDPR or CCPA message for Target contains:

```
{ 
    "jobId":"12345AD43E", 
    ... 
    "products":["Target",...], 
    "companyContexts":[ 
        { 
            "namespace":"imsOrgID", 
            "value":"123456789@AdobeOrg" 
        }, 
        ... 
    ], 
    "userContexts":[ 
        { 
            "namespace":"ECID", 
            "namespaceId":4, 
            "type":"standard", 
            "value":"53792210477379708453829363835595041181" 
        } 
        And/OR: 
        { 
            "namespace":"TNTID", 
            "namespaceId":9, 
            "type":"standard", 
            "value":"1234567890" 
        } 
        And/OR: 
        { 
            "namespace":"THIRDPARTYID", 
            "type":"target", 
            "value":"thirdPartyIdName" 
        }, 
        ... 
    ] 
}
```

### What types of responses can I expect from Target via the GDPR API?

| Request Status | Target Response Message | Scenario |
|--- |--- |--- |
|Processing|Processing|Target received the GDPR or CCPA request and is processing.|
|Complete|Not applicable - company context not applicable|The IMS ID in the GDPR or CCPA request is not mapped to any Target client.<br />Some companies have multiple IMS IDs. Submit the IMS ID where Target is provisioned.|
|Complete|Not applicable - user context not found|The ID provided in the GDPR or CCPA request for the specific visitor or data subject is not present in the Target profile store.<br />This result also returns if you attempt to submit a namespace ID type that is not supported by Target (see above for supported IDs).|
|Error|Error Message (details depend on the type of error)|Error while fetching or deleting the requested data subject profile.<br />Error while uploading to Azure for access request.|

### What response does Target send to the GDPR API for an access request?

Responses to access data requests contain a summary of the Target profile for the visitor in question. This return is sent to the Experience Cloud GDPR API, which in turn sends Data Controllers a response.

A sample Target access API response could look like this:

```
{ 
    "jobId":"12345AD43E", 
    ... 
    "products":["Target",...], 
    "companyContexts":[ 
        { 
            "namespace":"imsOrgID", 
            "value":"123456789@AdobeOrg" 
        }, 
        ... 
    ], 
    "userContexts":[ 
        { 
            ~"namespace":"ECID", 
            "namespaceId":4, 
            "type":"standard", 
            "value":"53792210477379708453829363835595041181" 
        } 
        And/OR: 
        { 
            ~"namespace":"tntId", 
            "namespaceId":9, 
            "type":"standard", 
            "value":"1234567890" 
        } 
        And/OR: 
        { 
            "namespace":"thirdPartyId", 
            "type":"target", 
            "value":"thirdPartyIdName" 
        }, 
        ... 
    ] 
} 

```

| Field | Description |
|--- |--- |
|jobId|Indicates the GDPR or CCPA job ID from the Central GDPR API.|
|imsOrgID|Provides a unique identifier for your company.|
|namespace|Also referred to as data source. See "What IDs are supported to help customers complete a GDPR or CCPA access and deletion request for Target?" in this topic.|
|type|The type of ID for which you requested the GDPR or CCPA data access. Target accepts several ID types, some of which are standard and some of which are specific to Target. See "What IDs are supported to help customers complete a GDPR or CCPA access and deletion request for Target?" in this topic.|
|value|The ID of the namespace/data source. See "What IDs are supported to help customers complete a GDPR or CCPA access and deletion request for Target?" for accepted values.|
|integration code|Integration codes are friendly names for your data sources and help you track your data sources easier than using data source IDs.|

When multiple values are provided to identify profiles, each valid identifier has one profile file. One or more profile files are sent to the central GDPR Azure Blob through the GDPR Central API, in the format of Target Profile JSON response.

A sample Target Profile JSON could look like the following example:

```
{"profileAttributes": 
 
"Sample_Parameter":{"value":"Gold Loyalty Status","modifiedAt":"2018-04-11T21:44:14.000-04:00"}, 
 
"user.ReturnTimeOfDay":{"value":"44.0","modifiedAt":"2018-04-11T21:44:14.000-04:00"}, 
 
"firstSessionStart":{"value":"1523497450602","modifiedAt":"2018-04-11T21:44:10.000-04:00"}, 
 
"user.sessionCountScript":{"value":"1","modifiedAt":"2018-04-11T21:44:14.000-04:00"} 
   } 
} 

```

The following table contains description of the illustrative profile JSON fields:

| Field | Description |
|--- |--- |
|Sample_Parameter|Many pieces of information in the Target profile are uploaded or directly provided by the Data Controller. In this example, a parameter was uploaded into the Target profile using the Profile Update API. For more information, see [Methods to get Data into Target](/methods-to-get-data-into-target/methods-to-get-data-into-target.md).|
|user.ReturnTimeOfDay|This standard field includes the time of day of a user’s most recent return visit.|
|firstSessionStart|This standard field includes the time of day the user’s first session began.|
|user.sessionCountScript|Many pieces of information in the Target profile are uploaded or directly provided by the Data Controller. In this example, a profile script is incrementing the number of sessions this visitor has made to the Data Controller’s site. For more information, see [Profile Script Attributes](https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/profile-parameters.html).|

<InlineAlert variant="info" slots="text"/>

This code sample is a shortened version of a Target profile JSON for illustration. Many of the fields of the Target profile are not standard. What is returned depends on what information is in that specific visitor profile.

### Does Target support IP obfuscation?

Target supports IP obfuscation if you choose to use it as part of your GDPR or CCPA implementation strategy. For more information, see [Privacy](privacy.md/#replacement-of-last-octet-of-ip-addresses).

### Should I do something to prevent my data from being shared or sold to third parties?

Target does not allow customers to share or sell data direct from Target to third parties, so there is no opt-out of sale for Target.
