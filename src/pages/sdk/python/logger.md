# Logger

## Description

When [initializing the SDK](../initialize-sdk.md), the `options["logger"]` object is an optional object. By default, an INFO level logger will be created under the `adobe.target` namespace. However, in order to customize log level or debug effectively when an issue occurs, a `logger` object can be provided when initializing the SDK.

The `logger` object is expected to have a `debug()` and an `error()` method. When an appropriate logger is provided, Target requests and responses will be logged.

## Example

<CodeBlock slots="heading, code" repeat="1" languages="python" />

### Python

```python
logger = logging.getLogger("org.logger")
logger.setLevel(logging.DEBUG)

client_options = {
  "client": "acmeclient",
  "organization_id": "1234567890@AdobeOrg",
  "logger": logger
}
target_client = TargetClient.create(client_options)
```

You should see requests and responses being printed in the console.