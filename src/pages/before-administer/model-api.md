---
title: Adobe Models API Overview
description: Overview of the Models API, which users can use to block features from being included in machine learning models.
---
# DRAFT - UNDER REVIEW

# Models API Overview

The Models API, also called the Blocklist API, enables users to view and manage the list of features used in machine learning models for Automated Personalization (AP) and Auto-Target (AT) activities. If a user would like to exclude a feature from being used by the models for AP or AT activities, they can use the Models API to add that feature to the "blocklist."

**QUESTION 1**: Verify: AP and AT are the only activity types that have ML models and are therefore the only activity types for which blocklists are relevant, right? Not AA or any other activity types, yeah?

<InlineAlert variant="info" slots="header, text"/>

Definition

A **blocklist** defines the set of features that will be excluded by Adobe Target from its machine learning models. For more information on features, see [Data used by Target machine-learning algorithms](https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/ap-data.html).

Blocklists may be defined per activity (activity level), or for all activities within a Target account (global level).

To get started with the Models API in order to create and manage your blocklist, download the Postman Collection here.

**QUESTION 2**: what is the link to the postman collection?

<InlineAlert variant="info" slots="header, text1, text2, text3, text4, text5"/>

How to manage blocklists

**Step 1:** View full list of features for an activity

**Step 2:** Check the blocklist of the activity

**Step 3:** Add features to the blocklist of the activity

**Step 4:** (Optional) Unblock

**Step 5:** (Optional) Manage the global blocklist


## Step 1: View full list of features for an activity {#step1}

Before blocklisting a feature, check the full list of available activity features, regardless of whether or not they are blocked from inclusion in the models.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Request

```json
GET https://mc.adobe.io/<tenant>/target/models/features/<campaignId>
```

#### Response

```json
{
    "features": [
        {
            "externalName": "Visitor Profile - Total Visits to Activity",
            "internalName": "SES_PREVIOUS_VISIT_COUNT",
            "type": "CONTINUOUS"
        },
        {
            "externalName": "Visitor Profile - Total Visits",
            "internalName": "SES_TOTAL_SESSIONS",
            "type": "CONTINUOUS"
        },
        {
            "externalName": "Visitor Profile - Pages Seen Before Activity",
            "internalName": "SES_PREVIOUS_VISIT_COUNT",
            "type": "CONTINUOUS"
        },
        {
            "externalName": "Visitor Profile - Activity Lifetime Time on Site",
            "internalName": "SES_TOTAL_TIME",
            "type": "CONTINUOUS"
        }
    ],
    "reportParameters": {
        "clientCode": <tenant>,
        "campaignId": <campaignId>
    }
}
```

JUDY: Update codeblock above once you have the complete Response.

In the example shown here, the user is checking to see the full list of features for the activity whose Activity ID is 260840.

![Step 1](assets/models-api-step-1.png)

<InlineAlert variant="info" slots="text"/>

To find your activity's Activity ID, navigate to the Activities List in the Target UI. Click on the activity of interest. The Activity ID will be displayed in the body of the resulting Activities Overview page, as well as at the end of the URL for that page.

<InlineAlert variant="info" slots="header, text1, text2"/>

Definition

The **externalName** is the user-friendly name that you used to name the feature. This value may change over time, if you rename the feature.

The **internalName** is the feature's actual identifier. It cannot be changed. This is the value you will need to reference in order to identify the feature(s) you would like to blocklist.

**QUESTION 3**: Where/how can a user rename a feature?

**QUESTION 4**: What are the exact conditions under which you will get a non-null list of features returned? For example, does the campaign have to be ACTIVATED? Does it have to have been running for a certain amount of time? Or will a SAVED BUT INACTIVE automated personalization campaign also return a non-null list of features from this GET request? Or is the activity status inconsequential, and in fact the only thing that matters in terms of populating the blocklist is whether or not you, well, populate the blocklist? (in other words, could you have a saved but never-before-run activity, for which you define a blocklist of 3 features, which would then show up from this GET request?)

**QUESTION 5**: What are the exact conditions under which you get NO features returned? (For example, what if you put in the wrong campaign id (for a campaign that doesn't exist), or what if the blocklist has never been populated before, or what if you enter a campaign id for a regular AB test instead of an AP test?) What will those results look like?

## Step 2: Check the blocklist of the activity {#step2}

Next, view the blocklist. In other words, check to see which features, if any, are currently being blocked from inclusion in the models for this activity.

<InlineAlert variant="error" slots="text"/>

Note that `/blockList/` is case sensitive in the request.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Request

```json
GET https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>
```

#### Response

````json

````

In the example shown here, the user is checking the list of blocked features for the activity whose Activity ID is 260840. The results are empty, which means this activity does not currently have any blocklisted features.

![Step 2](assets/models-api-step-2.png)

<InlineAlert variant="info" slots="text"/>

You may see empty results like this, the first time you check the full blocklist, before adding any features to it. However, once you have added (and subsequently removed) features from a blocklist, you may see slightly different results, in which placeholders for blocklisted features are returned, but those placeholders will be empty (devoid of values). Continue reading to see an example of this in [Step 4](#step4).

## Step 3: Add features to the blocklist of the activity

To add features to the blocklist, change the request from GET to PUT, and modify the body of the request to specify the `blockedFeatureSources` and `blockedFeatures` as desired. Refer back to Step 1 to know which exact values to use: `blockedFeatures` should be populated with values taken from `internalName` from [Step 1](#step1).

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Request

```json
PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>

{
    "blockedFeatureSources": ["AAM"],
    "blockedFeatures": ["SES_PREVIOUS_VISIT_COUNT", "SES_TOTAL_SESSIONS"]
}
```

#### Response

````json
{
    "blockedFeatures": [
            "SES_PREVIOUS_VISIT_COUNT",
            "SES_TOTAL_SESSIONS"
        ],
    "blockedFeatureSources": [
            "AAM"
        ]
}

````

In the example shown here, the user is blocking two features, `SES_PREVIOUS_VISIT_COUNT` and `SES_TOTAL_SESSIONS`, which they previously identified by querying the full list of features for the activity whose Activity ID is 260480, as described in [Step 1](#step1).

![Step 3](assets/models-api-step-3.png)

**QUESTION 6**: Will the Body of the results show the FULL list of blocked features, or will it only display the features you just blocked, within that specific PUT request?

<InlineAlert variant="help" slots="header, text" />

Q: How do I know which values to use for the blockedFeatureSources?

A: **QUESTION 7**: NEED LIST OF BLOCKED FEATURE SOURCES.

Note that after blocklisting a feature, it is recommended that you verify the updated blocklist by performing [Step 2](#step2) again (GET the blocklist). Verify that the results appear as expected, including the features that you added from the latest PUT request.

## Step 4: (Optional) Unblock {#step4}

To unblock, clear the values from both `blockedFeatureSources` and `blockedFeatures`.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Request

```json
PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>

{
    "blockedFeatureSources": [],
    "blockedFeatures": []
}
```

#### Response

````json
{
    "blockedFeatures": [],
    "blockedFeatureSources": []
}

````

In the example shown here, the user is clearing their blocklist for the activity whose Activity ID is 260840. Note that the response shows placeholders for blocked features and their sources—`blockedFeatureSources` and `blockedFeatures`, respectively—but those placeholders are empty.

![Step 4](assets/models-api-step-4.png)

As always, after modifying the blocklist, it is recommended that you perform [Step 2](#step2) again (GET the blocklist to verify the results appear as expected). In the example shown here, the user is verifying that their blocklist is now empty.

![Step 4b](assets/models-api-step-4b.png)

**QUESTION 8**: T/F: To remove a single item from a multi-item blockList, the customer needs to delete the ENTIRE list, then re-add the desired features BACK ONTO the blockList? Is there a way to just remove a single feature without deleting everything first, and then having to rebuild the list?

## Step 5: (Optional) Manage the global blocklist

The examples above were all in the context of a single activity. You may also block features for all activities across a given client (tenant), instead of having to specify the blocklist for each activity. To perform a global blocklist, use the `/blockList/global` call, instead of `blockList/<campaignId>`.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Request

```json
GET https://mc.adobe.io/<tenant>/target/models/features/blockList/global

{
    "blockedFeatureSources": ["AAM"],
    "blockedFeatures": ["AAM_FEATURE_1", "AAM_FEATURE_2"]
}
```

#### Response

````json
{
    "blockedFeatures": [
        "AAM_FEATURE_1",
        "AAM_FEATURE_2"
    ],
    "blockedFeatureSources": [
        "AAM",
        "PRO",
        "ENV"
    ]
}

````

In the example shown here, the user is blocking two features, `AAM_FEATURE_1` and `AAM_FEATURE_2`, for all activities in their Target account. This means that regardless of the activity, `AAM_FEATURE_1` and `AAM_FEATURE_2` will not be included in the machine learning models for this account.

![Step 5](assets/models-api-step-5.png)

**QUESTION 9**: Why do 3 Sources appear in the response above, which involves only 2 Features? Can a single Feature belong to more than one Source?

**QUESTION 10**: Global blocking uses a GET, not a PUT ??? Is this screenshot actually showing how to retrieve a global list of blocked features, as opposed to updating it? Or do we only strictly allow GETting the blocklist on a per-campaign basis?

**QUESTION 11**: Does the Models API require authentication?

JUDY modify the following text, based on the answer:

To use the Models API, you must configure authentication using the [Adobe Developer Console](https://developer.adobe.com/console/home), just as you would with the [Target Admin API](../administer/admin-api/index.md). For more information, see [How to Configure Authentication](../before-administer/configure-authentication.md).

JUDY: update https://developer.adobe.com/target/before-administer/ with Models API info as necessary. i.e. Add this new "type" to the list of API types.

