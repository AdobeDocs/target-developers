# Custom HTTP Client Configuration

If the application running the SDK requires a custom HTTP Client, to enable features such as configuring SSL or adding default headers to requests, then the `TargetClient` will need to be configured using `ClientConfig.builder().httpClient()`:

## Basic Custom HTTP Client Config

The SDK currently supports HTTP Clients that implement the `org.apache.http.client.HttpClient` interface.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Basic Implementaiton

```Java
CloseableHttpClient httpClient = HttpClients.custom().build();
ClientConfig clientConfig = ClientConfig.builder()
    .client("acmeclient")
    .organizationId("1234567890@AdobeOrg")
    .httpClient(httpClient)
    .build();
TargetClient targetClient = TargetClient.create(clientConfig);
```

## Custom HTTP Client Config with SSL Configuration

Here is an example of how to configure SSL in the `TargetClient` by customizing the `HttpClient` passed into the `ClientConfig`. The following code snippet uses classes from the `org.apache.http.conn.ssl` package for SSL configuration.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### SSL Implementaiton

```Java
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
