# Proxy Configuration

It is possible to configure a proxy for the Node SDK's HTTP requests. This is possible by overriding the `fetch` API used by the SDK during initialization.

The following is a basic example of how to override `fetchApi` during the `TargetClient` initialization to add a proxy: 

```javascript
const { ProxyAgent } = require("undici");

const proxyAgent = new ProxyAgent("your proxy address here");

const fetchImpl = (url, options) => {
  const fetchOptions = options;
  fetchOptions.dispatcher = proxyAgent;
  return fetch(url, fetchOptions);
};

client = TargetClient.create({
    ...,
    fetchApi: fetchImpl
});
```

Note that this only works for Node versions 18.2+, in which `undici.fetch` is the default `fetch` for node. 
Please visit the [Node SDK samples repo](https://github.com/ericfichtel/target-nodejs-sdk-samples/tree/TNT-46700/proxy-configuration) for proxy configuration examples
for older versions of node and more information. 