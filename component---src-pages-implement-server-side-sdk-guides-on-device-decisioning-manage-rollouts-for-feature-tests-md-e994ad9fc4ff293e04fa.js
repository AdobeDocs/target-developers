(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6312],{24540:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return c}});var s=a(22122),i=a(19756),o=(a(15007),a(64983)),n=a(99536),r=["components"],p={},l={_frontmatter:p},d=n.Z;function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.mdx)(d,(0,s.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"manage-rollouts-for-feature-tests"},"Manage rollouts for feature tests"),(0,o.mdx)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Enable On-Device Decisioning for your organization"),(0,o.mdx)("li",{parentName:"ol"},"Create an A/B activity"),(0,o.mdx)("li",{parentName:"ol"},"Define your feature and rollout settings"),(0,o.mdx)("li",{parentName:"ol"},"Implement and render the feature in your application"),(0,o.mdx)("li",{parentName:"ol"},"Implement tracking for events in your application"),(0,o.mdx)("li",{parentName:"ol"},"Activate your A/B activity"),(0,o.mdx)("li",{parentName:"ol"},"Adjust rollout and traffic allocation as needed")),(0,o.mdx)("h2",{id:"enable-on-device-decisioning-for-your-organization"},"Enable On-Device Decisioning for your organization"),(0,o.mdx)("p",null,"Enabling on-device decisioning ensures an A/B activity is executed at near-zero latency. To enable this feature, navigate to ",(0,o.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Implementation")," > ",(0,o.mdx)("strong",{parentName:"p"},"Account details")," in Adobe Target, and enable the ",(0,o.mdx)("strong",{parentName:"p"},"On-Device Decisioning")," toggle."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/cb523/asset-odd-toggle.webp 320w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/797b9/asset-odd-toggle.webp 640w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/4b075/asset-odd-toggle.webp 1280w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/480e2/asset-odd-toggle.webp 1322w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/72799/asset-odd-toggle.png 320w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/6af66/asset-odd-toggle.png 640w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/21b4d/asset-odd-toggle.png 1280w","/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/203d3/asset-odd-toggle.png 1322w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b3fbb00461e4a60ab9b1956142857d61/21b4d/asset-odd-toggle.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"NOTE"),": You must have the Admin or Approver ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html"},"user role")," to enable or disable the On-Device Decisioning toggle."),(0,o.mdx)("p",null,"After enabling the On-Device Decisioning toggle, Adobe Target begins generating ",(0,o.mdx)("em",{parentName:"p"},"rule artifacts")," for your client."),(0,o.mdx)("h2",{id:"create-an-ab-activity"},"Create an A/B activity"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In Adobe Target, navigate to the ",(0,o.mdx)("strong",{parentName:"p"},"Activities")," page, then select ",(0,o.mdx)("strong",{parentName:"p"},"Create Activity")," > ",(0,o.mdx)("strong",{parentName:"p"},"A/B test"),"."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.375000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/cb523/asset-ab.webp 320w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/797b9/asset-ab.webp 640w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/4b075/asset-ab.webp 1280w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/acdca/asset-ab.webp 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/72799/asset-ab.png 320w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/6af66/asset-ab.png 640w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/21b4d/asset-ab.png 1280w","/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/81ebd/asset-ab.png 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/ceaaa4d5b8a65ecfdf8bf91ee4eca532/21b4d/asset-ab.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"Create A/B Test Activity")," modal, leave the default ",(0,o.mdx)("strong",{parentName:"p"},"Web")," option selected (1), select ",(0,o.mdx)("strong",{parentName:"p"},"Form")," as your experience composer (2), select ",(0,o.mdx)("strong",{parentName:"p"},"Default Workspace")," with ",(0,o.mdx)("strong",{parentName:"p"},"No Property Restrictions")," (3), and click ",(0,o.mdx)("strong",{parentName:"p"},"Next")," (4)."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/cb523/asset-form.webp 320w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/797b9/asset-form.webp 640w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/3504f/asset-form.webp 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/72799/asset-form.png 320w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/6af66/asset-form.png 640w","/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/d44c9/asset-form.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/fa5d8ade849f51c2f0c45da592d80e99/d44c9/asset-form.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,o.mdx)("h2",{id:"define-your-feature-and-rollout-settings"},"Define your feature and rollout settings"),(0,o.mdx)("p",null,"In the ",(0,o.mdx)("strong",{parentName:"p"},"Experiences")," step of activity creation, provide a name for your activity (1). Enter the name of the location (2) within your application where you want to manage rollouts for your feature. For example,  ",(0,o.mdx)("inlineCode",{parentName:"p"},"ondevice-rollout")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"homepage-addtocart-rollout")," are location names indicating the destinations for managing feature rollouts. In the example shown below, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ondevice-rollout")," is the location defined for Experience A. You can optionally add Audience refinements (4) to restrict qualification to the activity."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/cb523/asset-location-rollout.webp 320w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/797b9/asset-location-rollout.webp 640w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/4b075/asset-location-rollout.webp 1280w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/84ebd/asset-location-rollout.webp 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/72799/asset-location-rollout.png 320w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/6af66/asset-location-rollout.png 640w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/21b4d/asset-location-rollout.png 1280w","/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/3707e/asset-location-rollout.png 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/fb4db9f3a78cad3ab31e6e800d7a0968/21b4d/asset-location-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"Content")," section on the same page, select ",(0,o.mdx)("strong",{parentName:"p"},"Create JSON Offer")," in the drop-down (1) as shown."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"371px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"139.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/cb523/asset-offer.webp 320w","/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/78533/asset-offer.webp 371w"],sizes:"(max-width: 371px) 100vw, 371px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/72799/asset-offer.png 320w","/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/d4635/asset-offer.png 371w"],sizes:"(max-width: 371px) 100vw, 371px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/d2d0ca796a71b47c5b9557cf7ab26df9/d4635/asset-offer.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"JSON Data")," text box that appears, enter the feature flag variable for the feature you intend to roll out with this activity in Experience A (1), using a valid JSON object (2)."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/cb523/asset-json-a-rollout.webp 320w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/797b9/asset-json-a-rollout.webp 640w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/4b075/asset-json-a-rollout.webp 1280w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/a0ae5/asset-json-a-rollout.webp 1875w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/72799/asset-json-a-rollout.png 320w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/6af66/asset-json-a-rollout.png 640w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/21b4d/asset-json-a-rollout.png 1280w","/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/85bc8/asset-json-a-rollout.png 1875w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b54c180c78dfdb5afafe0c1c954278e2/21b4d/asset-json-a-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Click ",(0,o.mdx)("strong",{parentName:"p"},"Next")," (1) to advance to the ",(0,o.mdx)("strong",{parentName:"p"},"Targeting")," step of activity creation."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/e8f3c5b75caff0569af7abd804132a51/cb523/asset-next-2-t-rollout.webp 320w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/797b9/asset-next-2-t-rollout.webp 640w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/4b075/asset-next-2-t-rollout.webp 1280w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/acdca/asset-next-2-t-rollout.webp 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/e8f3c5b75caff0569af7abd804132a51/72799/asset-next-2-t-rollout.png 320w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/6af66/asset-next-2-t-rollout.png 640w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/21b4d/asset-next-2-t-rollout.png 1280w","/target-developers/static/e8f3c5b75caff0569af7abd804132a51/81ebd/asset-next-2-t-rollout.png 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/e8f3c5b75caff0569af7abd804132a51/21b4d/asset-next-2-t-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"Targeting")," step, keep the ",(0,o.mdx)("strong",{parentName:"p"},"All Visitors")," audience (1), for simplicity. But adjust the traffic allocation (2) to 10%. This will restrict the feature to only 10% of your site visitors. Click Next (3) to advance to the ",(0,o.mdx)("strong",{parentName:"p"},"Goals & Settings")," step."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.187499999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d8bf8e494500179e484919f138986e38/cb523/asset-next-2-g-rollout.webp 320w","/target-developers/static/d8bf8e494500179e484919f138986e38/797b9/asset-next-2-g-rollout.webp 640w","/target-developers/static/d8bf8e494500179e484919f138986e38/4b075/asset-next-2-g-rollout.webp 1280w","/target-developers/static/d8bf8e494500179e484919f138986e38/c97c6/asset-next-2-g-rollout.webp 1866w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/d8bf8e494500179e484919f138986e38/72799/asset-next-2-g-rollout.png 320w","/target-developers/static/d8bf8e494500179e484919f138986e38/6af66/asset-next-2-g-rollout.png 640w","/target-developers/static/d8bf8e494500179e484919f138986e38/21b4d/asset-next-2-g-rollout.png 1280w","/target-developers/static/d8bf8e494500179e484919f138986e38/60c1e/asset-next-2-g-rollout.png 1866w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/d8bf8e494500179e484919f138986e38/21b4d/asset-next-2-g-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the ",(0,o.mdx)("strong",{parentName:"p"},"Goals & Settings")," step, choose ",(0,o.mdx)("strong",{parentName:"p"},"Adobe Target")," (1) as the ",(0,o.mdx)("strong",{parentName:"p"},"Reporting Source")," to view your activity results in the Adobe Target UI.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Choose a ",(0,o.mdx)("strong",{parentName:"p"},"Goal Metric")," to measure the activity. In this example, a successful conversion is based on whether the user purchases an item, as indicated by whether the user reached the orderConfirm (2) location.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Click ",(0,o.mdx)("strong",{parentName:"p"},"Save & Close")," (3) to save the activity."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/cb523/asset-conv-rollout.webp 320w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/797b9/asset-conv-rollout.webp 640w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/4b075/asset-conv-rollout.webp 1280w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/84ebd/asset-conv-rollout.webp 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/72799/asset-conv-rollout.png 320w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/6af66/asset-conv-rollout.png 640w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/21b4d/asset-conv-rollout.png 1280w","/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/3707e/asset-conv-rollout.png 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/91a3362af24c3eb3056cc9d56725bc3d/21b4d/asset-conv-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,o.mdx)("h2",{id:"implement-and-render-the-feature-in-your-application"},"Implement and render the feature in your application"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'targetClient.getAttributes(["ondevice-rollout"]).then(function(attributes) {\n      const featureFlags = attributes.asObject("ondevice-rollout");\n\n      // Your flag variables are now available in the featureFlags object variable.\n      //If you failed to qualify for the Activity, you will have an empty object.\n      console.log(featureFlags);\n    });\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'    Attributes attrs = targetJavaClient.getAttributes(targetDeliveryRequest, "ondevice-rollout");\n    Map<String, Object> featureFlags = attrs.toMboxMap("ondevice-rollout");\n​\n    // Your flag variables are now available in the featureFlags object variable.\n    //If you failed to qualify for the Activity, you will have an empty object.\n    System.out.println(featureFlags);\n')),(0,o.mdx)("h2",{id:"implement-tracking-for-events-in-your-application"},"Implement tracking for events in your application"),(0,o.mdx)("p",null,"After making the feature flag variable available in the application, you can use it enable any feature that is already part of your application. If a visitor does not qualify for the activity, it means they were not included as part of the 10% bucket defined as the audience."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'//... Code removed for brevity\n\nif(featureFlags.enable == "yes") { //Fell within 10% traffic\n    console.log("Render Feature");\n}\nelse {\n    console.log("Disable Feature");\n}\n\n// alternatively, the getValue method could be used on the Attributes object.\n\nif(attributes.getValue("ondevice-rollout", "enable") === "yes") { //Fell within 10% traffic\n    console.log("Render Feature");\n}\nelse {\n    console.log("Disable Feature");\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'//... Code removed for brevity\n​\nif("yes".equals(String.valueOf(featureFlags.get("enable")))) { //Fell within 10% traffic\n    System.out.println("Render Feature");\n}\nelse {\n    System.out.println("Disable Feature");\n}\n​\n// alternatively, the getString method could be used on the Attributes object.\n​\nif("yes".equals(attrs.getString("ondevice-rollout", "enable"))) { //Fell within 10% traffic\n    System.out.println("Render Feature");\n}\nelse {\n    System.out.println("Disable Feature");\n}\n')),(0,o.mdx)("h2",{id:"activate-your-rollout-activity"},"Activate your rollout activity"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/cb523/asset-activate-rollout.webp 320w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/797b9/asset-activate-rollout.webp 640w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/4b075/asset-activate-rollout.webp 1280w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/633bf/asset-activate-rollout.webp 1874w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/72799/asset-activate-rollout.png 320w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/6af66/asset-activate-rollout.png 640w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/21b4d/asset-activate-rollout.png 1280w","/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/064b2/asset-activate-rollout.png 1874w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/651d0ddb7a2c1ac95f54958a6ce90f35/21b4d/asset-activate-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"adjust-rollout-and-traffic-allocation-as-needed"},"Adjust rollout and traffic allocation as needed"),(0,o.mdx)("p",null,"Once you have activated your activity, edit it any time to increase or decrease the traffic allocation as needed."),(0,o.mdx)("p",null,"Increasing the traffic allocation from 10% to 50% due to the success of the initial rollout."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/cb523/asset-adjust-rollout.webp 320w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/797b9/asset-adjust-rollout.webp 640w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/4b075/asset-adjust-rollout.webp 1280w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/acdca/asset-adjust-rollout.webp 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/72799/asset-adjust-rollout.png 320w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/6af66/asset-adjust-rollout.png 640w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/21b4d/asset-adjust-rollout.png 1280w","/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/81ebd/asset-adjust-rollout.png 1868w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/b55881c4aa6548a9cdd0e7dcf2ba6ba8/21b4d/asset-adjust-rollout.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-on-device-decisioning-manage-rollouts-for-feature-tests-md-e994ad9fc4ff293e04fa.js.map