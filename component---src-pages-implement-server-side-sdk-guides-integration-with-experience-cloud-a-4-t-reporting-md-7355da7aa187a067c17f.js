(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9785],{94919:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(15007),n(64983)),d=n(99536),l=["components"],o={},s={_frontmatter:o},m=d.Z;function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"analytics-for-target-a4t-reporting"},"Analytics for Target (A4T) reporting"),(0,i.mdx)("p",null,"Adobe Target supports A4T reporting for both on-device decisioning and server-side Target activities. There are two configuration options for enabling A4T reporting:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Adobe Target automatically forwards the analytics payload to Adobe Analytics, or"),(0,i.mdx)("li",{parentName:"ul"},"The user requests the analytics payload from Adobe Target. (Adobe Target returns the Adobe Analytics payload back to the caller.)")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"NOTE"),": On-device decisioning only supports A4T reporting of which Adobe Target automatically forwards the analytics payload to Adobe Analytics. Retrieving the analytics payload from Adobe Target is not supported."),(0,i.mdx)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Configure the activity in the Adobe Target UI with Adobe Analytics as the reporting source, and ensure the accounts are enabled for A4T."),(0,i.mdx)("li",{parentName:"ol"},"The API user generates the Adobe Marketing Cloud Visitor ID and ensures this ID is available when the Target request is executed.")),(0,i.mdx)("h2",{id:"adobe-target-automatically-forwards-the-analytics-payload"},"Adobe Target automatically forwards the Analytics payload"),(0,i.mdx)("p",null,"Adobe Target can automatically forward the analytics payload to Adobe Analytics if the following identifiers are provided:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"supplementalDataId"),": The ID that is utilized to stitch between Adobe Analytics and Adobe Target. In order for Adobe Target and Adobe Analytics to correctly stitch data together, the same ",(0,i.mdx)("inlineCode",{parentName:"li"},"supplementalDataId")," needs to be passed to both Adobe Target and Adobe Analytics."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"trackingServer"),": The Adobe Analytics Server.")),(0,i.mdx)("h3",{id:"nodejs"},"Node.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\ntargetClient.getOffers({\n  request: {     \n    id: {\n      marketingCloudVisitorId : "2304820394812039",\n      tntId: "d359234570e044f14e1faeeba02d6ab23439914e.35_0",\n      thirdPartyId:"23423432"\n    },\n    experienceCloud: {\n      analytics: {\n        logging: "server_side",\n        supplementalDataId: "7D3AA246CC99FD7F-1B3DD2E75595498E",\n        trackingServer: "jimsbrims.sc.omtrds.net"\n      }\n    }, \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,i.mdx)("h3",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nVisitorId id = new VisitorId()\n  .tntId("d359234570e044f14e1faeeba02d6ab23439914e.35_0")\n  .thirdPartyId("B234A029348")\n  .marketingCloudVisitorId("10527837386392355901041112038610706884");\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nAnalyticsRequest analyticsRequest =\n    new AnalyticsRequest()\n        .trackingServer("jimsbrims.sc.omtrds.net")\n        .logging(LoggingType.SERVER_SIDE)\n        .supplementalDataId("7D3AA246CC99FD7F-1B3DD2E75595498E");\nExperienceCloud expCloud =\n    new ExperienceCloud()\n        .setAnalytics(analyticsRequest);\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .experienceCloud(expCloud)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,i.mdx)("h2",{id:"user-retrieves-analytics-payload-from-adobe-target"},"User retrieves analytics payload from Adobe Target"),(0,i.mdx)("p",null,"A user can retrieve the Adobe Analytics payload for a given mbox, then send it to Adobe Analytics via the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/analytics-1.4-apis/blob/master/docs/data-insertion-api/index.md"},"Data Insertion API"),". When an Adobe Target request is fired, pass ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_side")," to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"logging")," field in the request. This will return a payload if the specified mbox is present in an activity that is using Analytics as the reporting source."),(0,i.mdx)("h3",{id:"nodejs-1"},"Node.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\nconst targetClient = TargetClient.create(CONFIG);\ntargetClient.getOffers({\n  request: {     \n    id: {\n      marketingCloudVisitorId : "2304820394812039",\n      tntId: "d359234570e044f14e1faeeba02d6ab23439914e.35_0",\n      thirdPartyId:"23423432"\n    },\n    experienceCloud: {\n      analytics: {\n        logging: "client_side"\n      }\n    },  \n    execute: {\n      mboxes: [{\n        name: "some-mbox"\n      }]\n    }       \n  }\n})\n.then(console.log)\n.catch(console.error);\n')),(0,i.mdx)("h3",{id:"java-1"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n  .client("acmeclient")\n  .organizationId("1234567890@AdobeOrg")\n  .build();\nTargetClient targetClient = TargetClient.create(config);\n\nVisitorId id = new VisitorId()\n  .tntId("d359234570e044f14e1faeeba02d6ab23439914e.35_0")\n  .thirdPartyId("B234A029348")\n  .marketingCloudVisitorId("10527837386392355901041112038610706884");\nContext context = new Context().channel(ChannelType.WEB);\nMboxRequest mbox = new MboxRequest()\n  .name("some-mbox")\n  .index(0);\nExecuteRequest executeRequest = new ExecuteRequest()\n  .mboxes(Arrays.asList(mbox));\n\nAnalyticsRequest analyticsRequest =\n    new AnalyticsRequest()\n        .logging(LoggingType.CLIENT_SIDE);\nExperienceCloud expCloud =\n    new ExperienceCloud()\n        .setAnalytics(analyticsRequest);\n\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n  .context(context)\n  .execute(executeRequest)\n  .experienceCloud(expCloud)\n  .build();\n\nTargetDeliveryResponse offers = targetClient.getOffers(request);\n')),(0,i.mdx)("p",null,"Once you have specified ",(0,i.mdx)("inlineCode",{parentName:"p"},"logging = client_side"),", you will receive the payload in the mbox field."),(0,i.mdx)("p",null,"If the response from Target contains anything in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"analytics -> payload")," property, forward it as it is to Adobe Analytics. Adobe Analytics knows how to process this payload. This can be done in a GET request using the following format:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"https://{datacollectionhost.sc.omtrdc.net}/b/ss/{rsid}/0/CODEVERSION?pe=tnt&tnta={payload}&mcid={mcid}&vid={vid}&aid={aid}\n")),(0,i.mdx)("h3",{id:"query-string-parameters-and-variables"},"Query String Parameters and Variables"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Field Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Required"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,i.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:null},"The report suite ID")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"pe")),(0,i.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:null},"Page event. Always set to ",(0,i.mdx)("inlineCode",{parentName:"td"},"tnt"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"tnta")),(0,i.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:null},"Analytics payload returned by Target server in ",(0,i.mdx)("inlineCode",{parentName:"td"},"analytics -> payload -> tnta"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")),(0,i.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:null},"Marketing Cloud Visitor ID")))),(0,i.mdx)("h3",{id:"required-header-values"},"Required Header Values"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Header Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Header Value"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Host"),(0,i.mdx)("td",{parentName:"tr",align:null},"Analytics data collection server (eg: ",(0,i.mdx)("inlineCode",{parentName:"td"},"adobeags421.sc.omtrdc.net"),")")))),(0,i.mdx)("h3",{id:"sample-a4t-data-insertion-http-get-call"},"Sample A4T Data Insertion HTTP Get Call"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"https://demo.sc.omtrdc.net/b/ss/myCustomRsid/0/MOBILE-1.0?pe=tnt&tnta=285408:0:0|2&mcid=2304820394812039\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-integration-with-experience-cloud-a-4-t-reporting-md-7355da7aa187a067c17f.js.map