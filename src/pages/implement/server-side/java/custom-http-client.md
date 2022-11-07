# Custom HTTP Client Configuration

If the application running the SDK requires a custom HTTP Client, to enable features such as configuring SSL or adding default headers to requests, then the `TargetClient` will need to be configured using `ClientConfig.builder().httpClient()`:

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Basic Custom HTTP Client Config

```javascript
CloseableHttpClient httpClient = HttpClients.custom().build();
ClientConfig clientConfig = ClientConfig.builder()
    .client("acmeclient")
    .organizationId("1234567890@AdobeOrg")
    .httpClient(httpClient)
    .build();
TargetClient targetClient = TargetClient.create(clientConfig);
```

### Custom HTTP Client Config with SSL Configuration

```javascript
SSLContext context = SSLContextBuilder.create().build();
SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(context);
CloseableHttpClient httpClient = HttpClients.custom().setSSLSocketFactory(sslSocketFactory).build();
ClientConfig clientConfig = ClientConfig.builder()
    .client("acmeclient")
    .organizationId("1234567890@AdobeOrg")
    .httpClient(httpClient)
    .build();
TargetClient targetClient = TargetClient.create(clientConfig);
```




