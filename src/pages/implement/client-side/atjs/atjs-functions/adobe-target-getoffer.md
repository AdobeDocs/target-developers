---
keywords:
- adobe.target.getOffer
- getOffer
- getoffer
- get offer
- at.js
- functions
- function
description: Use the adobe.target.getOffer() function and its options for the Adobe Target at.js library to fire requests to get a Target offer.
title: How Do I Use the adobe.target.getOffer() Function?
feature: at.js
role: Developer
exl-id: 3448fdaa-b5f6-465d-8858-1dfe214bd8c4
---
# adobe.target.getOffer(options)

This function fires a request to get a Target offer.

Use with `adobe.target.applyOffer()` to process the response or use your own success handling. The options parameter is mandatory and has the following structure:

| Key | Type | Required | Description |
|--- |--- |--- |--- |
|mbox|String|Yes|Mbox name|
|params|Object|No|Mbox parameters. An object of key-value pairs that has the following structure:<br />`{ "param1": "value1", "param2": "value2"}`|
|success|Function|Yes|Callback to be executed when we got a response from the server. The success callback function will receive a single parameter that represents an array of offer objects. Here is a success callback example:<br />`function handleSuccess(response){......}`<br />See Responses below for details.|
|error|Function|Yes|Callback to be executed when we got an error. There are a few cases that are considered erroneous:<ul><li>HTTP status code different from 200 OK</li><li>Response can not be parsed. For example we poorly constructed JSON or HTML instead of JSON.</li><li>Response contains the "error" key. For example an exception was thrown on the edge a request could not be properly processed. We could get an error when an mbox is blocked and we could not retrieve any content for it, etc. The error callback function will receive two parameters: status and error. Here is an error callback example: `function handleError(status, error){......}`</li></ul>See Error Responses below for details.|
|timeout|Number|No|Timeout in milliseconds. If not specified, the default timeout in at.js will be used.<br />The default timeout can be set from the Target UI under Administration > Implementation.|

## Examples

Adding parameters with getOffer() and using applyOffer() for success-handling:

```javascript
adobe.target.getOffer({   
  "mbox": "target-global-mbox", 
  "params": { 
     "a": 1, 
     "b": 2 
  }, 
  "success": function(offer) {           
        adobe.target.applyOffer( {  
           "mbox": "target-global-mbox", 
           "offer": offer  
        } ); 
  },   
  "error": function(status, error) {           
      console.log('Error', status, error); 
  } 
});
```

Adding parameters and profile parameters with getOffer() and using applyOffer() for success-handling:

```javascript
adobe.target.getOffer({   
  "mbox": "target-global-mbox", 
  "params": { 
     "a": 1, 
     "b": 2, 
     "profile.age": 27, 
     "profile.gender": "male" 
  }, 
  "success": function(offer) {           
        adobe.target.applyOffer( {  
           "mbox": "target-global-mbox", 
           "offer": offer  
        } ); 
  },   
  "error": function(status, error) {           
      console.log('Error', status, error); 
  } 
});
```

Using custom timeout and custom success-handling with getOffer():

"YOUR_OWN_CUSTOM_HANDLING_FUNCTION" is a placeholder for a function the customer would define.

```javascript
adobe.target.getOffer({     
  "mbox": "target-global-mbox",   
  "success": function(offer) { 
    YOUR_OWN_CUSTOM_HANDLING_FUNCTION(offer);   
  }, 
  "error": function(status, error) {                 
    console.log('Error', status, error);   
  },   
  "timeout": 2000 
});
```

## Responses

The response parameter passed to the success callback will be an array of actions. An action is an object that usually has the following format:

| Name | Type | Description |
|--- |--- |--- |
|action|String|Type of action to be applied to the identified element.|
|selector|Sting|Represents a Sizzle selector.|
|cssSelector|String|DOM native selector, used for element pre-hiding.|
|content|String|The content to be applied to the identified element.|

## Example

```javascript
{ 
    "sessionId": "1444512212156-384616", 
    "tntId": "1444512212156-384616.17_35", 
    "offers": [{ 
        "plugins": ["<script type=\"text/javascript\">\r\n/*mboxHighlight+ (1of2) v1 ==> Response Plugin*/\r\nwindow.ttMETA=(typeof(window.ttMETA)!='undefined')?window.ttMETA:[];window.ttMETA.push({'mbox':'target-global-mbox','campaign':'at: redirect ootb','experience':'Experience B','offer':'/at_redirect_ootb/experiences/1/pages/0/1442082890250'});window.ttMBX=function(x){var mbxList=[];for(i=0;i<ttMETA.length;i++){if(ttMETA[i].mbox==x.getName()){mbxList.push(ttMETA[i])}}return mbxList[x.getId()]}\r\n</script>"], 
        "actions": { 
            "content": [{ 
                "passMboxSession": false, 
                "selector": "body", 
                "action": "redirect", 
                "url": "https://example.com/04.html", 
                "includeAllUrlParameters": true 
            }] 
        } 
    }] 
}
```

## Error Responses

The "status" and "error" parameters passed to the error callback will have the following format:

| Name | Type | Description |
|--- |--- |--- |
|status|String|Represents the error status. This parameter can have the following values:<ul><li>timeout: Indicates that the request timed out.</li><li>parseerror: Indicates that the response could not be parsed, for example if we receive HTML or plain text instead of JSON.</li><li>error: Indicates a general error like we received HTTP status different from 200 OK</li></ul>|
|error|String|Contains additional data like exception message or anything else that might be useful for troubleshooting.|
