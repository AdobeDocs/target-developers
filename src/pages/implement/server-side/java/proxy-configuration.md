# Proxy Configuration

## Basic Proxy

If the application running the SDK requires a proxy to access the internet, the `TargetClient` will need to be configured with a proxy configuration as follows.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Basic Proxy Config

```java
ClientConfig clientConfig = ClientConfig.builder()
    .client("acmeclient")
    .organizationId("1234567890@AdobeOrg")
    .proxyConfig(new ClientProxyConfig(host,port))
    .build();
TargetClient targetClient = TargetClient.create(clientConfig);
```

## Authentication

If a proxy authentication is required, the credentials can be passed as parameters to the `ClientProxyConfig` constructor, as per the below example. Note that this only works for simple username/password proxy authentication.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Basic Proxy Authentication

```java
ClientConfig clientConfig = ClientConfig.builder()
    .client("acmeclient")
    .organizationId("1234567890@AdobeOrg")
    .proxyConfig(new ClientProxyConfig(host,port,username,password))
    .build();
TargetClient targetClient = TargetClient.create(clientConfig);
```
