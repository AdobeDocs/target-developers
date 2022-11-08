"use strict";(self.webpackChunktarget_developers=self.webpackChunktarget_developers||[]).push([[7263],{79724:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return C},default:function(){return g}});var i,o=n(87462),l=n(63366),a=(n(15007),n(64983)),r=n(91515),c=["components"],C={},d=(i="CodeBlock",function(t){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}),s={_frontmatter:C},u=r.Z;function g(t){var e=t.components,n=(0,l.Z)(t,c);return(0,a.mdx)(u,(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"custom-http-client-configuration"},"Custom HTTP Client Configuration"),(0,a.mdx)("p",null,"If the application running the SDK requires a custom HTTP Client, to enable features such as configuring SSL or adding default headers to requests, then the ",(0,a.mdx)("inlineCode",{parentName:"p"},"TargetClient")," will need to be configured using ",(0,a.mdx)("inlineCode",{parentName:"p"},"ClientConfig.builder().httpClient()"),":"),(0,a.mdx)(d,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,a.mdx)("h2",{id:"basic-custom-http-client-config"},"Basic Custom HTTP Client Config"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-Java"},'CloseableHttpClient httpClient = HttpClients.custom().build();\nClientConfig clientConfig = ClientConfig.builder()\n    .client("acmeclient")\n    .organizationId("1234567890@AdobeOrg")\n    .httpClient(httpClient)\n    .build();\nTargetClient targetClient = TargetClient.create(clientConfig);\n')),(0,a.mdx)("h2",{id:"custom-http-client-config-with-ssl-configuration"},"Custom HTTP Client Config with SSL Configuration"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-Java"},'SSLContext context = SSLContextBuilder.create().build();\nSSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(context);\nCloseableHttpClient httpClient = HttpClients.custom().setSSLSocketFactory(sslSocketFactory).build();\nClientConfig clientConfig = ClientConfig.builder()\n    .client("acmeclient")\n    .organizationId("1234567890@AdobeOrg")\n    .httpClient(httpClient)\n    .build();\nTargetClient targetClient = TargetClient.create(clientConfig);\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-java-custom-http-client-md-8e181ae27d73ff1d8356.js.map