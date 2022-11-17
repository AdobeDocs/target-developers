"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[8811],{97741:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var i=a(87462),s=a(63366),n=(a(15007),a(64983)),o=a(91515),r=["components"],l={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",t)}},p=d("InlineAlert"),m=d("CodeBlock"),c={_frontmatter:l},h=o.Z;function u(e){var t=e.components,a=(0,s.Z)(e,r);return(0,n.mdx)(h,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"draft---under-review"},"DRAFT - UNDER REVIEW"),(0,n.mdx)("h1",{id:"models-api-overview"},"Models API Overview"),(0,n.mdx)("p",null,'The Models API, also called the Blocklist API, enables users to view and manage the list of features used in machine learning models for Automated Personalization (AP) and Auto-Target (AT) activities. If a user would like to exclude a feature from being used by the models for AP or AT activities, they can use the Models API to add that feature to the "blocklist."'),(0,n.mdx)(p,{variant:"info",slots:"header, text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Definition"),(0,n.mdx)("p",null,"A ",(0,n.mdx)("strong",{parentName:"p"},"blocklist")," defines the set of features that will be excluded by Adobe Target from its machine learning models. For more information on features, see ",(0,n.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/ap-data.html"},"Data used by Target machine-learning algorithms"),"."),(0,n.mdx)("p",null,"Blocklists may be defined per activity (activity level), or for all activities within a Target account (global level)."),(0,n.mdx)("p",null,"To get started with the Models API in order to create and manage your blocklist, download the Postman Collection ","[here]","."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 2"),": what is the link to the postman collection? ",(0,n.mdx)("a",{parentName:"p",href:"https://git.corp.adobe.com/target/ml-configuration-management-service/tree/nextRelease/rest_api_library"},"https://git.corp.adobe.com/target/ml-configuration-management-service/tree/nextRelease/rest_api_library")," ---- note this is internal. Need to publish this publicly if want to share with customers."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"JUDY"),": Vadim to check with Daniel re: public Postman collection link.\n",(0,n.mdx)("strong",{parentName:"p"},"JUDY"),": Cross-link to the spec so they have direct code they can copy."),(0,n.mdx)(p,{variant:"info",slots:"header, text1, text2, text3, text4, text5",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"How to manage blocklists"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Step 1:")," View full list of features for an activity"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Step 2:")," Check the blocklist of the activity"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Step 3:")," Add features to the blocklist of the activity"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Step 4:")," (Optional) Unblock"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Step 5:")," (Optional) Manage the global blocklist"),(0,n.mdx)("h2",{id:"step1"},"Step 1: View full list of features for an activity"),(0,n.mdx)("p",null,"Before blocklisting a feature, check the full list of available activity features, regardless of whether or not they are blocked from inclusion in the models. ",(0,n.mdx)("strong",{parentName:"p"},"JUDY"),' False. This should be the list of features that are currently used in the model. Note: difference between saying features that are "allowed" versus "used."'),(0,n.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,n.mdx)("h4",{id:"request"},"Request"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},"GET https://mc.adobe.io/<tenant>/target/models/features/<campaignId>\n")),(0,n.mdx)("h4",{id:"response"},"Response"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "features": [\n        {\n            "externalName": "Visitor Profile - Total Visits to Activity",\n            "internalName": "SES_PREVIOUS_VISIT_COUNT",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Total Visits",\n            "internalName": "SES_TOTAL_SESSIONS",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Pages Seen Before Activity",\n            "internalName": "SES_PREVIOUS_VISIT_COUNT",\n            "type": "CONTINUOUS"\n        },\n        {\n            "externalName": "Visitor Profile - Activity Lifetime Time on Site",\n            "internalName": "SES_TOTAL_TIME",\n            "type": "CONTINUOUS"\n        }\n    ],\n    "reportParameters": {\n        "clientCode": <tenant>,\n        "campaignId": <campaignId>\n    }\n}\n')),(0,n.mdx)("p",null,"JUDY: Update codeblock above once you have the complete Response."),(0,n.mdx)("p",null,"In the example shown here, the user is checking to see the full list of features for the activity whose Activity ID is 260840."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"761px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/95d766161dfba09e4d207ab2266fa50a/5530d/models-api-step-1.webp 320w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/0c8fb/models-api-step-1.webp 640w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/751eb/models-api-step-1.webp 761w"],sizes:"(max-width: 761px) 100vw, 761px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/95d766161dfba09e4d207ab2266fa50a/dd4a7/models-api-step-1.png 320w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/0f09e/models-api-step-1.png 640w","/target-developers/static/95d766161dfba09e4d207ab2266fa50a/fe1bc/models-api-step-1.png 761w"],sizes:"(max-width: 761px) 100vw, 761px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/95d766161dfba09e4d207ab2266fa50a/fe1bc/models-api-step-1.png",alt:"Step 1",title:"Step 1",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"To find your activity's Activity ID, navigate to the Activities List in the Target UI. Click on the activity of interest. The Activity ID will be displayed in the body of the resulting Activities Overview page, as well as at the end of the URL for that page."),(0,n.mdx)(p,{variant:"info",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Definition"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("strong",{parentName:"p"},"externalName")," is a user-friendly name for the feature that is created by Target. It is possible that this value may change over time. - Users can view these user-friendly names in the Model Insights report by downloading a CSV - double check with Muti ",(0,n.mdx)("strong",{parentName:"p"},"JUDY")),(0,n.mdx)("p",null,"The ",(0,n.mdx)("strong",{parentName:"p"},"internalName")," is the feature's actual identifier. It cannot be changed. This is the value you will need to reference in order to identify the feature(s) you would like to blocklist."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 3"),": Where/how can a user rename a feature? It's not possible. This API is not part of the regular flow - create an activity, data comes in, model training job checks data and uses what it has in configuration. No options to change. There is an internal service that does the mapping of extneralName and internalName. Model Insights report can show.... csv - user ...."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 4"),": What are the exact conditions under which you will get a non-null list of features returned? For example, does the campaign have to be ACTIVATED? Does it have to have been running for a certain amount of time? Or will a SAVED BUT INACTIVE automated personalization campaign also return a non-null list of features from this GET request? Or is the activity status inconsequential, and in fact the only thing that matters in terms of populating the blocklist is whether or not you, well, populate the blocklist? (in other words, could you have a saved but never-before-run activity, for which you define a blocklist of 3 features, which would then show up from this GET request?)  ANSWER: campaign must be activated, and it must have been running for some time, and thre must have been some activity on the campapign (so that the ML model will have had some data to run against). Also there is a separate job that needs to run for the report. That being said, the blocklist is agnostic... so yes you can actually populate the blocklist using the api, even ifi the campaign is inactivated. The blocklist only cares that the activity exists."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 5"),": What are the exact conditions under which you get NO features returned? (For example, what if you put in the wrong campaign id (for a campaign that doesn't exist), or what if the blocklist has never been populated before, or what if you enter a campaign id for a regular AB test instead of an AP test?) What will those results look like?"),(0,n.mdx)("h2",{id:"step2"},"Step 2: Check the blocklist of the activity"),(0,n.mdx)("p",null,"Next, view the blocklist. In other words, check to see which features, if any, are currently being blocked from inclusion in the models for this activity."),(0,n.mdx)(p,{variant:"error",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Note that ",(0,n.mdx)("inlineCode",{parentName:"p"},"/blockList/")," is case sensitive in the request."),(0,n.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,n.mdx)("h4",{id:"request-1"},"Request"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},"GET https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n")),(0,n.mdx)("h4",{id:"response-1"},"Response"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},"")),(0,n.mdx)("p",null,"In the example shown here, the user is checking the list of blocked features for the activity whose Activity ID is 260840. The results are empty, which means this activity does not currently have any blocklisted features."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/5530d/models-api-step-2.webp 320w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/0c8fb/models-api-step-2.webp 640w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/c30c1/models-api-step-2.webp 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/dd4a7/models-api-step-2.png 320w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/0f09e/models-api-step-2.png 640w","/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/b38af/models-api-step-2.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/f29558b31e3555bd38daf28b7308d7e3/b38af/models-api-step-2.png",alt:"Step 2",title:"Step 2",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"You may see empty results like this, the first time you check the full blocklist, before adding any features to it. However, once you have added (and subsequently removed) features from a blocklist, you may see slightly different results, in which placeholders for blocklisted features are returned, but those placeholders will be empty (devoid of values). Continue reading to see an example of this in ",(0,n.mdx)("a",{parentName:"p",href:"#step4"},"Step 4"),"."),(0,n.mdx)("h2",{id:"step-3-add-features-to-the-blocklist-of-the-activity"},"Step 3: Add features to the blocklist of the activity"),(0,n.mdx)("p",null,"To add features to the blocklist, change the request from GET to PUT, and modify the body of the request to specify the ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatures")," as desired. Refer back to Step 1 to know which exact values to use: ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatures")," should be populated with values taken from ",(0,n.mdx)("inlineCode",{parentName:"p"},"internalName")," from ",(0,n.mdx)("a",{parentName:"p",href:"#step1"},"Step 1"),"."),(0,n.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,n.mdx)("h4",{id:"request-2"},"Request"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n\n{\n    "blockedFeatureSources": ["AAM"],\n    "blockedFeatures": ["SES_PREVIOUS_VISIT_COUNT", "SES_TOTAL_SESSIONS"]\n}\n')),(0,n.mdx)("h4",{id:"response-2"},"Response"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [\n            "SES_PREVIOUS_VISIT_COUNT",\n            "SES_TOTAL_SESSIONS"\n        ],\n    "blockedFeatureSources": [\n            "AAM"\n        ]\n}\n\n')),(0,n.mdx)("p",null,"In the example shown here, the user is blocking two features, ",(0,n.mdx)("inlineCode",{parentName:"p"},"SES_PREVIOUS_VISIT_COUNT")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"SES_TOTAL_SESSIONS"),", which they previously identified by querying the full list of features for the activity whose Activity ID is 260480, as described in ",(0,n.mdx)("a",{parentName:"p",href:"#step1"},"Step 1"),"."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"713px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.06249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/5530d/models-api-step-3.webp 320w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/0c8fb/models-api-step-3.webp 640w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/e185d/models-api-step-3.webp 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/dd4a7/models-api-step-3.png 320w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/0f09e/models-api-step-3.png 640w","/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/61d11/models-api-step-3.png 713w"],sizes:"(max-width: 713px) 100vw, 713px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/5d7e2a5cb8b45d86cfb680dea79cddd5/61d11/models-api-step-3.png",alt:"Step 3",title:"Step 3",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 6"),": Will the Body of the results show the FULL list of blocked features, or will it only display the features you just blocked, within that specific PUT request?"),(0,n.mdx)(p,{variant:"help",slots:"header, text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Q: How do I know which values to use for the blockedFeatureSources?"),(0,n.mdx)("p",null,"A: ",(0,n.mdx)("strong",{parentName:"p"},"QUESTION 7"),": NEED LIST OF BLOCKED FEATURE SOURCES."),(0,n.mdx)("p",null,"Note that after blocklisting a feature, it is recommended that you verify the updated blocklist by performing ",(0,n.mdx)("a",{parentName:"p",href:"#step2"},"Step 2")," again (GET the blocklist). Verify that the results appear as expected, including the features that you added from the latest PUT request."),(0,n.mdx)("h2",{id:"step4"},"Step 4: (Optional) Unblock"),(0,n.mdx)("p",null,"To unblock, clear the values from both ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatures"),"."),(0,n.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,n.mdx)("h4",{id:"request-3"},"Request"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'PUT https://mc.adobe.io/<tenant>/target/models/features/blockList/<campaignId>\n\n{\n    "blockedFeatureSources": [],\n    "blockedFeatures": []\n}\n')),(0,n.mdx)("h4",{id:"response-3"},"Response"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [],\n    "blockedFeatureSources": []\n}\n\n')),(0,n.mdx)("p",null,"In the example shown here, the user is clearing their blocklist for the activity whose Activity ID is 260840. Note that the response shows placeholders for blocked features and their sources—",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatureSources")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockedFeatures"),", respectively—but those placeholders are empty."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"741px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/5530d/models-api-step-4.webp 320w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/0c8fb/models-api-step-4.webp 640w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/d34f7/models-api-step-4.webp 741w"],sizes:"(max-width: 741px) 100vw, 741px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/dd4a7/models-api-step-4.png 320w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/0f09e/models-api-step-4.png 640w","/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/660ed/models-api-step-4.png 741w"],sizes:"(max-width: 741px) 100vw, 741px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ad9e92f316a9f6baedb9447405689cbf/660ed/models-api-step-4.png",alt:"Step 4",title:"Step 4",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"As always, after modifying the blocklist, it is recommended that you perform ",(0,n.mdx)("a",{parentName:"p",href:"#step2"},"Step 2")," again (GET the blocklist to verify the results appear as expected). In the example shown here, the user is verifying that their blocklist is now empty."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/5530d/models-api-step-4b.webp 320w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/0c8fb/models-api-step-4b.webp 640w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/6aa51/models-api-step-4b.webp 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/dd4a7/models-api-step-4b.png 320w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/0f09e/models-api-step-4b.png 640w","/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/ad973/models-api-step-4b.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ecb48cbc22072e57e64ff6f96254db6f/ad973/models-api-step-4b.png",alt:"Step 4b",title:"Step 4b",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 8"),": T/F: To remove a single item from a multi-item blockList, the customer needs to delete the ENTIRE list, then re-add the desired features BACK ONTO the blockList? Is there a way to just remove a single feature without deleting everything first, and then having to rebuild the list?"),(0,n.mdx)("h2",{id:"step-5-optional-manage-the-global-blocklist"},"Step 5: (Optional) Manage the global blocklist"),(0,n.mdx)("p",null,"The examples above were all in the context of a single activity. You may also block features for all activities across a given client (tenant), instead of having to specify the blocklist for each activity. To perform a global blocklist, use the ",(0,n.mdx)("inlineCode",{parentName:"p"},"/blockList/global")," call, instead of ",(0,n.mdx)("inlineCode",{parentName:"p"},"blockList/<campaignId>"),"."),(0,n.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,n.mdx)("h4",{id:"request-4"},"Request"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'GET https://mc.adobe.io/<tenant>/target/models/features/blockList/global\n\n{\n    "blockedFeatureSources": ["AAM"],\n    "blockedFeatures": ["AAM_FEATURE_1", "AAM_FEATURE_2"]\n}\n')),(0,n.mdx)("h4",{id:"response-4"},"Response"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "blockedFeatures": [\n        "AAM_FEATURE_1",\n        "AAM_FEATURE_2"\n    ],\n    "blockedFeatureSources": [\n        "AAM",\n        "PRO",\n        "ENV"\n    ]\n}\n\n')),(0,n.mdx)("p",null,"In the example shown here, the user is blocking two features, ",(0,n.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_1")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_2"),", for all activities in their Target account. This means that regardless of the activity, ",(0,n.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_1")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"AAM_FEATURE_2")," will not be included in the machine learning models for this account."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"731px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.75000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/5530d/models-api-step-5.webp 320w","/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/0c8fb/models-api-step-5.webp 640w","/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/263f1/models-api-step-5.webp 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/dd4a7/models-api-step-5.png 320w","/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/0f09e/models-api-step-5.png 640w","/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/4bd0f/models-api-step-5.png 731w"],sizes:"(max-width: 731px) 100vw, 731px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b1bb5f085ea7d75ae4935c9731f54569/4bd0f/models-api-step-5.png",alt:"Step 5",title:"Step 5",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 9"),": Why do 3 Sources appear in the response above, which involves only 2 Features? Can a single Feature belong to more than one Source?"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 10"),": Global blocking uses a GET, not a PUT ??? Is this screenshot actually showing how to retrieve a global list of blocked features, as opposed to updating it? Or do we only strictly allow GETting the blocklist on a per-campaign basis?"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"QUESTION 11"),": Does the Models API require authentication?"),(0,n.mdx)("p",null,"JUDY modify the following text, based on the answer:"),(0,n.mdx)("p",null,"To use the Models API, you must configure authentication using the ",(0,n.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console"),", just as you would with the ",(0,n.mdx)("a",{parentName:"p",href:"../administer/admin-api/index.md"},"Target Admin API"),". For more information, see ",(0,n.mdx)("a",{parentName:"p",href:"../before-administer/configure-authentication.md"},"How to Configure Authentication"),"."),(0,n.mdx)("p",null,"JUDY: update ",(0,n.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/target/before-administer/"},"https://developer.adobe.com/target/before-administer/"),' with Models API info as necessary. i.e. Add this new "type" to the list of API types.'))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-administer-models-api-md-43856dc95edbfdd92c10.js.map