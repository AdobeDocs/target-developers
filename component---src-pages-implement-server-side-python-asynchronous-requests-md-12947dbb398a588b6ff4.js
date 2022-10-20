"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[5417],{94592:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return c}});var o,s=t(87462),a=t(63366),r=(t(15007),t(64983)),i=t(91515),p=["components"],d={},u=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:d},m=i.Z;function c(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.mdx)(m,(0,s.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"asynchronous-requests"},"Asynchronous Requests"),(0,r.mdx)("h2",{id:"description"},"Description"),(0,r.mdx)("p",null,"One benefit of server-side integration is that you can leverage the huge bandwidth and computing resources available on the server-side by using parallelism. Target Python SDK supports asynchronous requests, which can reduce the effective target time to zero."),(0,r.mdx)("h2",{id:"supported-methods"},"Supported Methods"),(0,r.mdx)(u,{slots:"heading, code",repeat:"1",languages:"python",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"python"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"get_offers(options)\nsend_notifications(options)\nget_attributes(mbox_names, options)\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("p",null,"A sample application that uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"asyncio")," module's async/await in Python 3.9+ could look like this:"),(0,r.mdx)(u,{slots:"heading, code",repeat:"1",languages:"python",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"python-1"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'async def execute_mboxes(self, mboxes):\n    context = Context(channel=ChannelType.WEB)\n    execute = ExecuteRequest(mboxes=mboxes)\n    delivery_request = DeliveryRequest(context=context, execute=execute)\n\n    get_offers_options = {\n      "request": delivery_request\n    }\n    return await asyncio.to_thread(target_client.get_offers, get_offers_options)\n\nasync def get_target_delivery_response(mboxes):\n    target_delivery_response = await execute_mboxes(mboxes)\n    response = Response(target_delivery_response.get("response").to_str(), status=200, mimetype=\'application/json\')\n    return response\n\nmboxes = [MboxRequest(name="a1-serverside-ab", index=1)]\nreturn asyncio.run(get_target_delivery_response(mboxes)\n')),(0,r.mdx)("p",null,"This example assumes you you are using Python 3.9+. If using an older version of Python you can still send asynchronous requests by passing in ",(0,r.mdx)("inlineCode",{parentName:"p"},"options.callback")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"get_offers"),". Check out the sample Flask app for more details about asynchronous execution using either callbacks or async/await, ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/target-python-sdk/blob/main/samples/app.py"},"here"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-python-asynchronous-requests-md-12947dbb398a588b6ff4.js.map