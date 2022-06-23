# Logger

## Description

When [initializing the SDK](../initialize-sdk.md), there are several options on the `ClientConfig` object, which can be set to log requests.

|Option|Description|
| --- | --- |
|`logRequests`|Logs whole request body as well as response body.|
|`logRequestStatus`|Logs request's url, status along with response time.|

Target Java SDK uses `slf4j` logging. You need to provide your implementation of logger such as `java.util.logging`, `logback`, and `log4j`. Refer to [http://www.slf4j.org/manual.html](http://www.slf4j.org/manual.html) for more information. All logs will be printed in `debug`.

## Example

Add the `slf4j` dependency.

<CodeBlock slots="heading, code" repeat="2" languages="Java, Java" />

### Gradle

```javascript
compile 'org.slf4j:slf4j-simple:2.0.0-alpha0'
```

### Maven

```javascript
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>2.0.0-alpha0</version>
</dependency>
```

Enable the `DEBUG` logs based on your implementation, and mark the request logging flags.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Debug

```javascript
System.setProperty(SimpleLogger.DEFAULT_LOG_LEVEL_KEY, "DEBUG");
ClientConfig config = ClientConfig.builder()
        .client("acmeclient")
        .organizationId("1234567890@AdobeOrg")
        .logRequests(true)
        .logRequestStatus(true)
        .build();

TargetClient targetClient = TargetClient.create(config);
```

You should see requests, responses, and response times being printed in the console.