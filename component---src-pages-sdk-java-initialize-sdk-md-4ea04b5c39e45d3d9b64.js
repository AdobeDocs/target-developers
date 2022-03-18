(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7059],{26550:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return x}});var a,l=n(22122),r=n(19756),d=(n(15007),n(64983)),m=n(99536),i=["components"],o={},p=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),u={_frontmatter:o},g=m.Z;function x(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(g,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"initialize-sdk"},"Initialize SDK"),(0,d.mdx)("h2",{id:"description"},"Description"),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"create")," method in order to initialize the Java SDK and instantiate the Target Client to make calls to Adobe Target for experiments and personalized experiences."),(0,d.mdx)("h2",{id:"method"},"Method"),(0,d.mdx)(p,{slots:"heading, code",repeat:"1",languages:"JAVA",mdxType:"CodeBlock"}),(0,d.mdx)("h3",{id:"java"},"Java"),(0,d.mdx)("h2",{id:"create"},"create"),(0,d.mdx)("p",null,"TargetClient is created using ",(0,d.mdx)("inlineCode",{parentName:"p"},"TargetClient.create"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"TargetClient TargetClient.create(ClientConfig clientConfig)\n")),(0,d.mdx)("p",null,"ClientConfig is created using ",(0,d.mdx)("inlineCode",{parentName:"p"},"ClientConfig.builder"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"ClientConfigBuilder ClientConfig.builder()\n")),(0,d.mdx)("h2",{id:"parameters"},"Parameters"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"ClientConfigBuilder")," has the following structure:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"client"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Target Client Id")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"organizationId"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Experience Cloud Organization ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"connectTimeout"),(0,d.mdx)("td",{parentName:"tr",align:null},"Number"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"10000"),(0,d.mdx)("td",{parentName:"tr",align:null},"Connection timeout for all requests in milliseconds")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"socketTimeout"),(0,d.mdx)("td",{parentName:"tr",align:null},"Number"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"10000"),(0,d.mdx)("td",{parentName:"tr",align:null},"Socket timeout for all requests in milliseconds")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"maxConnectionsPerHost"),(0,d.mdx)("td",{parentName:"tr",align:null},"Number"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"100"),(0,d.mdx)("td",{parentName:"tr",align:null},"Max Connections per Target host")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"maxConnectionsTotal"),(0,d.mdx)("td",{parentName:"tr",align:null},"Number"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"200"),(0,d.mdx)("td",{parentName:"tr",align:null},"Max Connections including all Target hosts")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"enableRetries"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Automatic retries for socket timeouts (max 4)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"logRequests"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Log Target requests and responses in debug")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"logRequestStatus"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"false"),(0,d.mdx)("td",{parentName:"tr",align:null},"Log Target response time, status, and URL")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"serverDomain"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"client"),".tt.omtrdc.net"),(0,d.mdx)("td",{parentName:"tr",align:null},"Overrides default hostname")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"secure"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Unset to enforce HTTP scheme")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"requestInterceptor"),(0,d.mdx)("td",{parentName:"tr",align:null},"HttpRequestInterceptor"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Null"),(0,d.mdx)("td",{parentName:"tr",align:null},"Add custom request Interceptor")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"defaultPropertyToken"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Sets the default property token for every ",(0,d.mdx)("inlineCode",{parentName:"td"},"getOffers")," call. ",(0,d.mdx)("strong",{parentName:"td"},"For on-device decisioning"),", the SDK will only download the artifact that contains the qualified activities for the property token set in ",(0,d.mdx)("inlineCode",{parentName:"td"},"defaultPropertyToken"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"defaultDecisioningMethod"),(0,d.mdx)("td",{parentName:"tr",align:null},"DecisioningMethod enum"),(0,d.mdx)("td",{parentName:"tr",align:null},"SERVER_SIDE"),(0,d.mdx)("td",{parentName:"tr",align:null},"Must be set to ON_DEVICE or HYBRID to enable on-device decisioning"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"onDeviceEnvironment"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"production"),(0,d.mdx)("td",{parentName:"tr",align:null},"Can be used to specify a different on-device environment, such as staging")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"onDeviceConfigHostname"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"assets.adobetarget.com")),(0,d.mdx)("td",{parentName:"tr",align:null},"Can be used to specify a different host to use to download the on-device decisioning artifact file")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"onDeviceDecisioningPollingIntSecs"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"300 (5 minutes)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Number of seconds between fetches of the on-device decisioning artifact file")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"onDeviceArtifactPayload"),(0,d.mdx)("td",{parentName:"tr",align:null},"byte[]"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Provides on-device decisioning with previous artifact payload to allow immediate execution")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"onDeviceDecisioningHandler"),(0,d.mdx)("td",{parentName:"tr",align:null},"OnDeviceDecisioningHandler"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Registers callbacks for on-device decisioning events")))),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)(p,{slots:"heading, code",repeat:"1",languages:"JAVA",mdxType:"CodeBlock"}),(0,d.mdx)("h3",{id:"java-1"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'ClientConfig clientConfig = ClientConfig.builder()\n        .client("acmeclient")\n        .organizationId("1234567890@AdobeOrg")\n        .build();\n\nTargetClient.create(clientConfig);\n\n// make calls to Adobe Target\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-java-initialize-sdk-md-4ea04b5c39e45d3d9b64.js.map