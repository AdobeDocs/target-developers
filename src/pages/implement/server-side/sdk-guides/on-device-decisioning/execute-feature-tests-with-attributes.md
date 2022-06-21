# Execute feature tests with attributes

## Summary of steps

1. Enable On-Device Decisioning for your organization
1. Create an A/B activity
1. Define your A and B
1. Add an audience
1. Set traffic allocation
1. Set traffic distribution to variations
1. Set up reporting
1. Add metrics for tracking KPIs
1. Implement code to execute feature tests with attributes
1. Implement code to track conversion events
1. Activate your feature tests with attributes

**NOTE**: Suppose you are a retail e-commerce company. You want to increase the conversion rate when customers browse and sort through your catalog of products. You have a hypothesis that certain sorting algorithms and pagination strategies yield better results than others. To test this theory, you decide to run a feature test that involves the redesign of the sorting widget using different sorting options for your end users. You want to ensure this feature test is executed at near-zero latency so it doesn't negatively impact user experiences and skew the results.

## Enable On-Device Decisioning for your organization

Enabling on-device decisioning ensures an A/B activity is executed at near-zero latency. To enable this feature, navigate to **Administration** > **Implementation** > **Account details** in Adobe Target, and enable the **On-Device Decisioning** toggle.

![alt image](assets/asset-odd-toggle.png)

**NOTE**: You must have the Admin or Approver [user role](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html) to enable or disable the **On-Device Decisioning** toggle.

After enabling the **On-Device Decisioning** toggle, Adobe Target begins generating *rule artifacts* for your client.

## Create an A/B activity

1. In Adobe Target, navigate to the **Activities** page, then select **Create Activity** > **A/B test**. 

   ![alt image](assets/asset-ab.png)

1. In the **Create A/B Test Activity** modal, leave the default **Web** option selected (1), select **Form** as your experience composer (2), select **Default Workspace** with **No Property Restrictions** (3), and click **Next** (4).

   ![alt image](assets/asset-form.png)

## Define your feature flag and attribute values

1. In the **Experiences** step of activity creation, provide a name for your activity (1) and add a second experience, Experience B, by clicking the **Add Experience** (2) button. Enter the name of the location (3) within your application where you want to execute your feature test with attributes. In the example shown below, `product-results-page` is the location defined for Experience A. (It is also the location defined for Experience B.)

   ![alt image](assets/asset-location.png)

   **Experience A** will contain the JSON that signals your business logic to do the following:

   * Initiate the sorting algorithm feature via the `test_sorting` feature flag
   * Execute the recommended sorting algorithm defined in the `sorting_algorithm _**_attribute`
   * Return 50 products per page as defined by the pagination strategy defined in the `pagination_limit`

1. In Experience A, click to change the content from **Default Content** to the JSON by selecting **Create JSON Offer** as shown below (1).

   ![alt image](assets/asset-offer.png)

1. Define the JSON with `test_sorting`, `sorting_algorithm`, and `pagination_limit` flags and attributes that will be used to initiate the recommended sorting algorithm with a pagination limit of 50 products.

   **NOTE**: When Adobe Target buckets a user to see Experience A, the JSON with the defined attributes in the example will be returned. In your code, you will need to check the value of the feature flag `test_sorting` to see whether the sorting feature should be turned on. If so, you will use the recommended value of the `sorting_algorithm` attribute to show recommended products in the product list view. The limit of products to show for your application will be 50, since that is the value of the `pagination_limit` attribute.

   ![alt image](assets/asset-sorting.png)

   **Experience B** will define the JSON that signals your business logic to do the following:

   * Initiate the sorting algorithm feature via the test_sorting feature flag
   * Execute the `best_sellers` sorting algorithm defined in the `sorting_algorithm _**_attribute`
   * Return 50 products per page as defined by the pagination strategy defined in the `pagination_limit`

   **NOTE**: When Adobe Target buckets a user to see Experience B, the JSON with the defined attributes in the example will be returned. In your code, you will need to check the value of the feature flag `test_sorting` to see whether the sorting feature should be turned on. If so, you will use the `best_sellers` value of the `sorting_algorithm` attribute to show best selling products in the product list view. The limit of products to show for your application will be 50, since that is the value of the `pagination_limit` attribute.

   ![alt image](assets/asset-sorting-b.png)

## Add an audience

In the **Targeting** step, keep the **All Visitors** audience. This will enable you to understand the impact of your sorting feature, as well as which algorithm and number of items best influence the results.

![alt image](assets/asset-audience-b.png)

## Set traffic allocation

Define the percentage of your visitors against which you want to test your sorting algorithms and pagination strategy. In other words, to what percentage of your users do you want to roll out this test? In this example, to deploy this test to all logged-in users, keep the traffic allocation at 100%.

![alt image](assets/asset-allocation-100.png)

## Set traffic distribution to variations

Define the percentage of your visitors that will see the recommended versus the best sellers sorting algorithm, with a limit of 50 products per page. In this example, keep the traffic distribution as a 50/50 split between Experiences A and B.

![alt image](assets/asset-variations-50.png)

## Set up reporting

In the **Goals & Settings** step, choose **Adobe Target** as the **Reporting Source** to view your A/B test results in the Adobe Target UI, or choose **Adobe Analytics** to view them in the Adobe Analytics UI.

![alt image](assets/asset-reporting-b.png)

## Add metrics for tracking KPIs

Choose a **Goal Metric** to measure the feature test with attributes. In this example, success is based on whether the user purchases a product, depending on the sorting algorithm and pagination strategy they were shown.

## Implement feature tests with attributes into your application

**Node.js**

```
const TargetClient = require("@adobe/target-nodejs-sdk");
const options = {
  client: "testClient",
  organizationId: "ABCDEF012345677890ABCDEF0@AdobeOrg",
  decisioningMethod: "on-device",
  events: {
    clientReady: targetClientReady
  }
};
const targetClient = TargetClient.create(options);

function targetClientReady() {
  return targetClient.getAttributes(["product-results-page"]).then(function(attributes) {
    const test_sorting = attributes.getValue("product-results-page", "test-sorting");
    const sorting_algorithm = attributes.getValue("product-results-page", "sorting_algorithm");
    const pagination_limit = attributes.getValue("product-results-page", "pagination_limit");
  });
}
```

**Java**

```
import com.adobe.target.edge.client.ClientConfig;
import com.adobe.target.edge.client.TargetClient;
import com.adobe.target.delivery.v1.model.ChannelType;
import com.adobe.target.delivery.v1.model.Context;
import com.adobe.target.delivery.v1.model.ExecuteRequest;
import com.adobe.target.delivery.v1.model.MboxRequest;
import com.adobe.target.edge.client.entities.TargetDeliveryRequest;
import com.adobe.target.edge.client.model.TargetDeliveryResponse;

ClientConfig config = ClientConfig.builder()
    .client("testClient")
    .organizationId("ABCDEF012345677890ABCDEF0@AdobeOrg")
    .build();
TargetClient targetClient = TargetClient.create(config);
MboxRequest mbox = new MboxRequest().name("product-results-page").index(0);
TargetDeliveryRequest request = TargetDeliveryRequest.builder()
    .context(new Context().channel(ChannelType.WEB))
    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))
    .build();
Attributes attributes = targetClient.getAttributes(request, "product-results-page");
String testSorting = attributes.getString("product-results-page", "test-sorting");
String sortingAlgorithm = attributes.getString("product-results-page", "sorting_algorithm");
String paginationLimit = attributes.getString("product-results-page", "pagination_limit");
```

## Implement code to track conversion events

**Node.js**

```
//... Code removed for brevity

//When a conversion happens
TargetClient.sendNotifications({
    targetCookie,
    "request" : {
      "notifications" : [
        {
          type: "click",
          timestamp : Date.now(),
          id: "conversion",
          mbox : {
            name : "product-results-page"
          }
        }
      ]
    }
})
```

**Java**

```
ClientConfig config = ClientConfig.builder()
  .client("acmeclient")
  .organizationId("1234567890@AdobeOrg")
  .build();
TargetClient targetClient = TargetClient.create(config);

Context context = new Context().channel(ChannelType.WEB);

ExecuteRequest executeRequest = new ExecuteRequest();

NotificationDeliveryService notificationDeliveryService = new NotificationDeliveryService();

Notification notification = new Notification();
notification.setId("conversion");
notification.setImpressionId(UUID.randomUUID().toString());
notification.setType(MetricType.CLICK);
notification.setTimestamp(System.currentTimeMillis());
notification.setTokens(
    Collections.singletonList(
        "IbG2Jz2xmHaqX7Ml/YRxRGqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q=="));

TargetDeliveryRequest targetDeliveryRequest =
    TargetDeliveryRequest.builder()
        .context(context)
        .execute(executeRequest)
        .notifications(Collections.singletonList(notification))
        .build();

TargetDeliveryResponse offers = targetClient.getOffers(request);
notificationDeliveryService.sendNotification(request);

Attributes attributes = targetClient.getAttributes(request, "product-results-page");
String testSorting = attributes.getString("product-results-page", "test-sorting");
String sortingAlgorithm = attributes.getString("product-results-page", "sorting_algorithm");
String paginationLimit = attributes.getString("product-results-page", "pagination_limit");
```

## Activate your feature tests with attributes

![alt image](assets/asset-activate.png)