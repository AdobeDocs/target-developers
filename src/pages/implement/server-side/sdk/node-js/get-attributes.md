# Get Attributes

## Description

`getAttributes()` is used to fetch experimentation and personalized experiences from Target and extract attribute values.

## Method

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### getAttributes

```js
TargetClient.getAttributes(mboxNames: Array, options: Object): Promise
```

## Parameters

|Name|Type|Required|Default|
| --- | --- | --- |--- |
|mboxNames|Array|Yes|None|
|options|Object|No|None|

## Promise

The `Promise` returned by `TargetClient.getAttributes()` resolves an object with the following methods:

|Method|Return Type|Description|
| --- | --- | --- |
|getValue(mboxName, key)|Any|Returns the value for a specified mbox name and attribute key|
|asObject(mboxName)|Object|Returns a simple json object with key value pairs|
|getResponse()|[getOffers Response](https://github.com/jasonwaters/target-nodejs-sdk#targetclientgetoffers)|Returns the response object normally returned by `getOffers`|

## Example

<CodeBlock slots="heading, code" repeat="1" languages="js" />

### Node.js

```js
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);
const offerAttributes = await targetClient.getAttributes(["demo-engineering-flags"]);


//returns just the value of searchProviderId from the mbox offer
const searchProviderId = offerAttributes.getValue("demo-engineering-flags", "searchProviderId");

//returns a simple JSON object representing the mbox offer
const engineeringFlags = offerAttributes.asObject("demo-engineering-flags");

//  the value of engineeringFlags looks like this
//  {
//      "cdnHostname": "cdn.cloud.corp.net",
//      "searchProviderId": 143,
//      "hasLegacyAccess": false
//  }

const assetUrl = `http://${engineeringFlags.cdnHostname}/path/to/asset`;
```