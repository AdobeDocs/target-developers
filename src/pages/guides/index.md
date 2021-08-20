---
title: How to Configure Authentication for Adobe Target APIs
description: This tutorial guides developers through the steps required to generate authentication tokens needed to successfully interact with Adobe Target APIs. Follow these steps to use the Adobe Developer Console to generate and test the bearer access token, which is needed to use the Target APIs.
role: Developer, Administrator, Architect
level: Intermediate
topic: Personalization, Administration, Integrations, Development
feature: APIs/SDKs, Administration & Configuration
doc-type: tutorial
kt:
thumbnail:
author: Judy Kim
exl-id: 8a1e93e4-67b2-4942-a8da-fc0f2cbb2df2
---
# Configure authentication for Adobe Target APIs

The Adobe Target Admin APIs, including [!DNL Recommendations] Admin APIs, are secured by authentication to ensure only authorized users use them to access Adobe Target. Use the [Adobe Developer Console](https://console.adobe.io/) to manage this authentication for all Adobe Experience Cloud solutions, including [!DNL Target].

This lesson walks through the preliminary steps required to generate authentication tokens needed to successfully interact with Adobe Target APIs. In the sections that follow, you will:

1. Create a project (previously called integration) in the Adobe Developer Console.
2. Export project details to Postman.
3. Generate a bearer access token.
4. Test the bearer access token.

## Pre-requisites

|Resource|Details|
| --- | --- |
|Postman|In order to complete these steps successfully, get the [Postman app](https://www.postman.com/downloads/) for your operating system. Postman basic is free with account creation. While not required in order to use Adobe Target APIs in general, Postman makes API workflows easier, and Adobe Target provides several Postman collections to help execute its APIs and learn how they operate. The rest of this tutorial assumes working knowledge of Postman. For assistance, please reference the [Postman documentation](https://learning.getpostman.com/).  |
|References|Familiarity with the following resources is assumed throughout the rest of this tutorial:<UL><li>[Adobe I/O Github](https://github.com/adobeio)</li><li>[Target Adobe I/O documentation](https://developers.adobetarget.com/api/#introduction)</li><li>[Recommendations API documentation](https://developers.adobetarget.com/api/recommendations/)</li></ul>|

## Create an Adobe I/O project

In this section, you will access the Adobe Developer Console and create a project for [!DNL Adobe Target]. For more information, reference the [documentation on projects](https://www.adobe.io/apis/experienceplatform/console/docs.html#!AdobeDocs/adobeio-console/master/projects.md).

<!--1. Generate your private key and public certificate, per the [documentation on authentication](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md). //<!--as described in **Step 1** of [How to set up Adobe IO: Authentication - Step by Step](https://helpx.adobe.com/marketing-cloud-core/kb/adobe-io-authentication-step-by-step.html). After completing Step 1, return to this tutorial and resume with Step 2, below. // The outcome of this step should be the creation of a `private.key` file and a `certificate_pub.crt` file. Return to this tutorial once you have generated these two files.-->

1. In the [Adobe Admin Console](https://adminconsole.adobe.com/), ensure your Adobe user account has been granted both [Product Admin](https://helpx.adobe.com/enterprise/using/admin-roles.html) and [Developer](https://helpx.adobe.com/enterprise/using/manage-developers.html) level access to [!DNL Target].

2. In the [Adobe Developer Console](https://console.adobe.io/), select the Experience Cloud Organization for which you want to create this integration. (Note it is likely you may only have access to a single Experience Cloud Organization.) 

   ![configure-io-target-createproject2.png](assets/configure-io-target-createproject2.png)

3. Click **[!UICONTROL Create new project]**.

   ![configure-io-target-createproject3.png](assets/configure-io-target-createproject3.png)

4. Click **[!UICONTROL Add API]** to add a REST API to your project to access Adobe services and products.

   ![Add API](assets/configure-io-target-createproject4.png)

5. Select **[!DNL Adobe Target]** as the Adobe service you wish to integrate with. Click the **[!UICONTROL Next]** button that appears. 

   ![configure-io-target-createproject5](assets/configure-io-target-createproject5.png)

6. Select an option for associating public and private keys with the service account integration you are creating for Target. For this tutorial, select **[!UICONTROL Option 1: Generate a key pair]** and click **[!UICONTROL Generate keypair]**.
   ![configure-io-target-createproject6](assets/configure-io-target-createproject6.png)

7. Note the results! As instructed, make note of the automatically downloaded configuration file (`config`), which contains your private key. Click **[!UICONTROL Next]**.
   ![configure-io-target-createproject7](assets/configure-io-target-createproject7.png)
8. In your file system, verify the location of `config`, which is the compressed configuration file created in the previous step. Again, this `config` file contains your private key, which you will need, later. The exact location within your file system may differ from the one shown here.
   ![configure-io-target-createproject8](assets/configure-io-target-createproject8.png)
9. Back in the Adobe Developer Console, select the [product profile(s)](https://helpx.adobe.com/enterprise/using/manage-products-and-profiles.html) corresponding to the properties in which you are using [!DNL Recommendations]. (If you are not using properties, select the Default Workspace option.) Click **[!UICONTROL Save configured API]**.
   ![configure-io-target-createproject9](assets/configure-io-target-createproject9.png)

10. Click **[!UICONTROL Create Integration]**. You should receive a temporary message indicating your API was successfully configured.

11. As a final step, rename your project to a name more meaningful than the original `Project 1`. To do this, navigate to the project using the navigation path as shown, click **[!UICONTROL Edit project]** to access the **[!UICONTROL Edit Project] modal, and rename the project.

   ![configure-io-target-createproject11](assets/configure-io-target-createproject11.png)

   >[!NOTE]
   > 
   >In this tutorial, we name our project "Target Integration." If you anticipate using your project for more than just Adobe Target, you may want to name it accordingly. For example, you might choose to name it "Adobe APIs" or "Experience Cloud APIs," since it may be used with other solutions in the Adobe Experience Cloud.

## Export project details

Now that you have an Adobe project you can use for accessing [!DNL Target], you need to make sure to send details of that project along with your Adobe API requests. These details are required in order to interact with several Adobe APIs, including several [!DNL Target] APIs. For example, the integration details include authorization and authentication information required by the [!DNL Target] Admin APIs. Therefore, to use the APIs with Postman, you need to get those details into Postman.

There are many ways to specify the details of your project in Postman, but in this section, we take advantage of some pre-built features and collections. First (in this section), you will export the details of your integration into a Postman environment. Next (in the following section), you will generate a bearer access token to grant you access to the necessary Adobe resources.

>[!NOTE]
>
>For video instructions applicable for any Experience Cloud solution, including [!DNL Target], see [Use Postman with Experience Platform APIs](https://docs.adobe.com/content/help/en/platform-learn/tutorials/apis/postman.html). The following sections are relevant to the [!DNL Target] APIs:
>
> 1. Export Adobe I/O Integration Details to Postman
> 2. Generate an Access Token with Postman
>
> These steps are also provided below.

1. Still in the [Adobe Developer Console](https://console.adobe.io/), navigate to view your new project's **[!UICONTROL Service Account (JWT)]** credentials. Use either the left navigation or the **[!UICONTROL Credentials]** section as shown.
   ![JWT1](assets/configure-io-target-jwt1.png)
   In **[!UICONTROL Credential details]**, note you may view your **Public key(s)**, **Client ID**, and other information related to your service account.
   ![JWT1a](assets/configure-io-target-jwt1a.png)
2. Click to navigate to information about the **[!UICONTROL Adobe Target]** API. Use either the left navigation or the **[!UICONTROL Connected products and services]** section as shown.
   ![JWT2](assets/configure-io-target-jwt2.png)
3. Click **[!UICONTROL Download for Postman]** > **[!UICONTROL Service Account (JWT)]** to create a JSON file capturing your authentication information for a Postman environment.
   ![JWT3](assets/configure-io-target-jwt3.png)
   Note the JSON file in your file system.
   ![JWT3a](assets/configure-io-target-jwt3a.png)
4. In Postman, click the gear icon to manage your environments, then click **Import** to import the JSON file (environment).
   ![JWT4](assets/configure-io-target-jwt4.png)
5. Choose your file and click **Open**.
   ![JWT5](assets/configure-io-target-jwt5.png)
6. In the Postman **Manage Environments** modal, click the name of the newly imported environment to inspect it. (Your environment name may be different from the one shown here. Edit the name as desired. It does not necessarily need to match the name of the Adobe project.)
   ![JWT6](assets/configure-io-target-jwt6.png)
7. Note `CLIENT_SECRET` and `API_KEY` (along with other variables) have their values pre-populated, taken from your integration as defined in the Adobe Developer Console. (The Postman `CLIENT_SECRET` variable should match the `CLIENT SECRET` Adobe credential as displayed in the Developer Console, and `API_KEY` in Postman should likewise match `CLIENT ID` in the Developer Console.) By contrast, note `PRIVATE_KEY`, `JWT_TOKEN`, and `ACCESS_TOKEN` are blank. Let's start by providing the `PRIVATE_KEY` value.
   ![JWT7](assets/configure-io-target-jwt7.png)

   >[!NOTE]
   >
   >**Surprise!**
   >
   >Pop quiz! Can you remember where your private key is?
   >That's right, it's in the `config` file downloaded earlier from the Adobe Developer Console!

8. From your file system, open your `config` file, and open the `private` key file.
   ![JWT8](assets/configure-io-target-jwt8.png)
9. Select and copy the entire contents of the `private` key file.
   ![JWT9](assets/configure-io-target-jwt9.png)
10. In Postman, paste your private key value into the **INITIAL VALUE** and **CURRENT VALUE** fields.
   ![JWT10](assets/configure-io-target-jwt10.png)
11. Click **[!UICONTROL Update]**, and close the Environments modal.


## Generate the bearer access token

In this section, you generate your bearer access token, which is required for authenticating your interaction with Adobe Target APIs. To generate your bearer access token, you need to send your integration details (established in the preceding sections) to the [Adobe Identity Management Service (IMS)](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/AuthenticationGuide.md). There are a few different ways to do this, but in this tutorial we have you build a bespoke POST request to the IMS API. Just kidding. In this tutorial, we take advantage of a Postman collection containing a pre-built IMS call that makes the process direct and easy. Once you import the collection, you may reuse it whenever needed, to generate new tokens not only for Adobe Target, but other Adobe APIs as well.

1. Navigate to the [Adobe Identity Management Service API sample calls](https://github.com/adobe/experience-platform-postman-samples/tree/master/apis/ims).
   ![token1](assets/configure-io-target-generatetoken1.png)
2. Click the **Adobe I/O Access Token Generation Postman collection**.
   ![token2](assets/configure-io-target-generatetoken2.png)
3. Get the raw JSON for this collection by clicking **Raw**, then copying the resulting JSON to your clipboard. (Alternatively, you can save the raw JSON as a .json file.)
   ![token3](assets/configure-io-target-generatetoken3.png)
4. In Postman, import the collection by pasting and submitting the raw JSON from your clipboard. (Alternatively, you can upload the .json file you saved.) Click **Continue**.
   ![token4](assets/configure-io-target-generatetoken4.png)
5. Select the **[!UICONTROL IMS: JWT Generate + Auth via User Token]** request in the Adobe I/O Access Token Generation Postman collection, ensure your environment is selected, and click **Send** to generate the token.

   ![token5](assets/configure-io-target-generatetoken5.png)

   >[!NOTE]
   >
   >This bearer access token will be valid for 24 hours. Send the request again whenever you need to generate a new token.
   
6. Open the Manage Environments modal again, and select your environment.
   ![token6](assets/configure-io-target-jwt11.png)
7.  Note the `ACCESS_TOKEN` and `JWT_TOKEN` values are now populated.
   ![token7](assets/configure-io-target-generatetoken7.png)

>[!NOTE]
>
>Q: Do I have to use the Adobe I/O Access Token Generation Postman collection to generate the JSON Web Token (JWT) and bearer access token?
>
>A: Nope! The Adobe I/O Access Token Generation Postman collection is available as a convenience to more easily generate the JWT and bearer access token in Postman. Alternatively, you can use capabilities within the Adobe Developer Console to manually generate the bearer access token.

## Test the bearer access token

In this exercise, you will use your new bearer access token by sending an API request that retrieves a list of activities from your [!DNL Target] account. A successful response indicates your Adobe project and authentication are operating as expected in order to use the API.

1. Import the [Adobe Target Admin APIs Postman Collection](https://developers.adobetarget.com/api/#admin-postman-collection). Follow all prompts until the collection is imported in Postman.
   ![testtoken1](assets/configure-io-target-testtoken0.png)
1. Expand the collection, and note the **[!UICONTROL List activities]** request.
   ![testtoken1](assets/configure-io-target-testtoken1.png)
1. Note that variables such as `{{access_token}}` are initially unresolved. You could resolve this in several different ways—for example, you could define a new collection variable called `{{access_token}}`—but in this tutorial, you will instead change the API request to leverage the Postman environment you were previously using. This will enable the environment to continue to serve as a single, consistent consolidation of all variables common across Adobe APIs.
   ![testtoken2](assets/configure-io-target-testtoken2.png)
1. Type to replace `{{access_token}}` with `{{ACCESS_TOKEN}}`.
   ![testtoken3](assets/configure-io-target-testtoken3.png)
1. Type to replace `{{api_key}}` with `{{API_KEY}}`.
   ![testtoken4](assets/configure-io-target-testtoken4.png)
1. Type to replace `{{tenant}}` with `{{TENANT_ID}}`. Note `{{TENANT_ID}}` is not yet recognized.
   ![testtoken4](assets/configure-io-target-testtoken4a.png)
1. Open the Manage Environments modal, and select your environment.
   ![JWT11](assets/configure-io-target-jwt11.png)
1. Type to add a new `{{TENANT_ID}}` environment variable. Copy and paste your Tenant ID value into the **INITIAL VALUE** and **CURRENT VALUE** fields for your new `TENANT_ID` environment variable.

   ![testtoken5](assets/configure-io-target-testtoken5.png)

   >[!NOTE]
   >
   >The Tenant ID is different from your [!DNL Target] `clientcode`. The Tenant ID exists in the URL when you are logged in to [!DNL Target]. To obtain your Tenant ID, log in to the [!DNL Adobe Experience Cloud], open [!DNL Target], and click the [!DNL Target] card. Use the Tenant ID value as noted in the URL subdomain.
   >
   >For example, if your URL when logged in to Adobe Target is
   >
   >`<https://mycompany.experiencecloud.adobe.com/...>`
   >
   >then your Tenant ID is "mycompany."

1. Send your request, after ensuring you have selected the correct environment. You should receive a response containing your list of activities.
   ![testtoken6](assets/configure-io-target-testtoken6.png)

Congratulations! Now that you have verified your Adobe authentication, you may use it to interact with Adobe Target APIs (as well as other Adobe APIs). For example, you can [Use Recommendations APIs](https://docs.adobe.com/content/help/en/target-learn/recommendations-api-tutorial/recs-api-overview.html) to create or manage recommendations.
