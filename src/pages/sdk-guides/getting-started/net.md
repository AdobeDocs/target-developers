# .NET

## Summary of steps

1. Enable On-Device Decisioning for your organization
1. Install the SDK
1. Initialize the SDK
1. Set up the feature flags in an Adobe Target A/B Test
1. Implement and render the feature in your application
1. Implement tracking for events in your application
1. Activate your A/B activity

## Enable On-Device Decisioning for your organization

1. Enabling on-device decisioning ensures an A/B activity is executed at near-zero latency. To enable this feature, navigate to **Administration** > **Implementation** > **Account details** and enable the **On-Device Decisioning** toggle.

<!--- Insert image-ood4.png --->
![alt image](./asset-getting-started-1.png)

<InlineAlert variant="info" slots="text"/>

You must have the **Admin** or **Approver** [user role](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/user-management.html) to enable or disable the **On-Device Decisioning** toggle.

After enabling the **On-Device Decisioning** toggle, Adobe Target begins generating *rule artifacts* for your client.

## Install the SDK

To get started with Target .NET SDK, just add it as a dependency by *installing from NuGet*.

Bash

```
dotnet add package Adobe.Target.Client
```

## Initialize the SDK

### When using .NET dependency injection

Just add the SDK at service configuration step by calling `services.AddTargetLibrary();`, then inject `ITargetClient targetClient` in your app's constructor.

After this, use the `Initialize` method of the SDK to configure the SDK, thus completing the initialization step.

**NOTE**: The rule artifact is downloaded during the SDK initialization step. You can customize the initialization step to determine how the artifact is downloaded and used.

C#

```
var targetClientConfig = new TargetClientConfig.Builder("testClient", "ABCDEF012345677890ABCDEF0@AdobeOrg")
    .Build();
this.targetClient.Initialize(targetClientConfig);
```

### When not using .NET dependency injection

Using the `Create` method of the SDK, configure the SDK to complete the initialization step.

**NOTE**: The rule artifact is downloaded during the SDK initialization step. You can customize the initialization step to determine how the artifact is downloaded and used.

C#

```
var targetClientConfig = new TargetClientConfig.Builder("testClient", "ABCDEF012345677890ABCDEF0@AdobeOrg")
    .Build();
targetClient = TargetClient.Create(targetClientConfig);
```

## Set up the feature flags in an Adobe Target A/B Test

1. In Adobe Target, navigate to the **Activities** page, then select **Create Activity** > **A/B test**.

   *Insert image-ab.png*

1. In the **Create A/B Test Activity** modal, leave the default **Web** option selected (1), select **Form** as your experience composer (2), select **Default Workspace** with **No Property Restrictions**(3), and click **Next** (4).

   *Insert image-form.png*

1. In the **Experiences** step of activity creation, provide a name for your activity (1) and add a second experience, Experience B, by clicking the **Add Experience** (2) button. Enter the location name of your choice (3). For example,  ondevice-featureflag or homepage-addtocart-featureflag are location names indicating the destinations for feature flag testing.  In the example shown below, ondevice-featureflag is the location defined for Experience B. You can optionally add Audience refinements (4) to restrict qualification to the activity.

   *Insert image-location.png*

1. In the **Content** section on the same page, select **Create JSON Offer** in the drop-down (1) as shown.

   *Insert image-offer.png*

1. In the JSON Data text box that appears, enter your feature flag variables for each experience (1), using a valid JSON object (2).

   Enter the feature flag variables for Experience A.

   *Insert image-json_a.png*

   Enter the feature flag variables for Experience B.

   *Insert image-json_b.png*

1. Click **Next** (1) to advance to the **Targeting** step of activity creation.

   In the Targeting step, we show an example that leaves Audience Targeting (2) as All Visitors for simplicity, but note Adobe recommends you always target your audiences for real, production activities. Click **Next** (3) to advance to the **Goals & Settings** step of activity creation.

   *Insert image-next_2_t.png*

1. In the **Goals & Settings** step, set **Reporting Source** as **Adobe Target** (1) and define the **Goal Metric** as **Conversion**, specifying the details based on your site's conversion metrics (2). Click **Save & Close** (3) to save the activity.

   *Insert image-conv.png*

## Implement and render the feature in your application

After setting up the feature flag variables in Adobe Target, modify your application code to use them. For example, after getting the feature flag in the application, you can use it to enable features and render the experience for which the visitor qualified.

C#

```
var mbox = new MboxRequest(index: 0, name: "ondevice-featureflag");
var deliveryRequest = new TargetDeliveryRequest.Builder()
    .SetContext(new Context(ChannelType.Web))
    .SetExecute(new ExecuteRequest(mboxes: new List<MboxRequest> { mbox }))
    .Build();
var attributes = targetClient.GetAttributes(request, "ondevice-featureflag");
var flag = attributes.GetString("ondevice-featureflag", "flag");
```

## Implement additional tracking for events in your application

Optionally, you may send additional events for tracking conversions using the `SendNotifications()` function.

.NET

```
var order = new Order
{
    Id = "BR9389",
    Total = 98.93M,
    PurchasedProductIds = new List<string> { "J9393", "3DJJ3" },
};
​
var notification = new Notification
{
    Id = "conversion",
    ImpressionId = Guid.NewGuid().ToString(),
    Type = MetricType.Display,
    Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
    Order = order,
};
​
var notificationRequest = new TargetDeliveryRequest.Builder()
    .SetContext(new Context(ChannelType.Web))
    .SetNotifications(new List<Notification> {notification})
    .Build();
​
targetClient.SendNotifications(notificationRequest);
```

## Activate your A/B activity

Click **Activate** (1) to activate your A/B activity.

**NOTE**: You must have the Approver or Publisher *user role* to perform this step.

*Insert image-activate.png