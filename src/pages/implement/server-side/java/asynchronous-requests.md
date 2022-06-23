# Asynchronous Requests

## Description

One benefit of server-side integration is that you can leverage the huge bandwidth and computing resources available on the server-side by using parallelism. Target Java SDK supports asynchronous requests, which can reduce the effective target time to zero.

## Supported Methods

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Methods

```javascript
CompletableFuture<TargetDeliveryResponse> getOffersAsync(TargetDeliveryRequest request);
CompletableFuture<ResponseStatus> sendNotificationsAsync(TargetDeliveryRequest request);
CompletableFuture<Attributes> getAttributesAsync(TargetDeliveryRequest targetRequest, String ...mboxes);
```

## Example

A sample `Spring` application Controller could look like this:

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Sample Controller

```javascript
@RestController
public class TargetRestController {

    @Autowired
    private TargetClient targetJavaClient;

    @GetMapping("/mboxTargetOnlyAsync")
        public TargetDeliveryResponse mboxTargetOnlyAsync(
                @RequestParam(name = "mbox", defaultValue = "server-side-mbox") String mbox,
                HttpServletRequest request, HttpServletResponse response) {
            ExecuteRequest executeRequest = new ExecuteRequest()
                    .mboxes(getMboxRequests(mbox));

            TargetDeliveryRequest targetDeliveryRequest = TargetDeliveryRequest.builder()
                    .context(getContext(request))
                    .execute(executeRequest)
                    .cookies(getTargetCookies(request.getCookies()))
                    .build();
            CompletableFuture<TargetDeliveryResponse> targetResponseAsync =
                    targetJavaClient.getOffersAsync(targetDeliveryRequest);
            targetResponseAsync.thenAccept(tr -> setCookies(tr.getCookies(), response));
            simulateIO();
            TargetDeliveryResponse targetResponse = targetResponseAsync.join();
            return targetResponse;
        }

    /**
     * Function for simulating network calls like other microservices and database calls
     */
    private void simulateIO() {
        try {
            Thread.sleep(200L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
```

This example assumes you have [initialized the SDK](initialize-sdk.md) as a spring bean and that you have [utility methods](utility-methods.md) available.

The Target request is fired before `simulateIO` and by the time it is executed target result should also be ready. Even if it is not, you will have significant savings in most cases.