# Logger

## Description

When [initializing the SDK](../initialize-sdk.md), the `options.logger` object is an optional object. However, in order to debug effectively when an issue occurs, a `logger` object should be provided when initializing the SDK.

The `logger` object is expected to have a `debug()` and an `error()` method. When an appropriate logger is provided, such as `console`, Target requests and responses will be logged.

## Example

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg",
  logger: console
};

const targetClient = TargetClient.create(CONFIG);

const request = {
    execute: {
        mboxes: [{
            name: "a1-serverside-ab",
            index: 1
        }]
    }
};

const response = await targetClient.getOffers({ request, targetCookie });
```

You should see requests and responses being printed in the console.