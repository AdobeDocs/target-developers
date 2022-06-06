# Best practices

Adobe recommends the following best practices when using on-device decisioning:

## Best practices when decisioning method is "on-device"

When using "on-device" as the decisioning method, the artifact is downloaded when the visitor loads the webpage for the first time. Any activity qualification that needs to happen on the first page load (no cache) happens only after the artifact is fully downloaded. There are certain best practices you can follow to ensure that activity qualifications happen fast for a new anonymous visitor.

* Deactivate "On-Device" capable activities that are not meant to be in the artifact.
* If you have Target Premium, you can use [properties/workspaces](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html) to create different artifacts files for different workspaces.
* If your artifact files becomes very large due to legitimate reasons, you can use the "hybrid" decisioning method. This method allows you to download the artifact in parallel and all Target API calls go over the wire until the artifact has downloaded. Read the best practices section on "Hybrid" decisioning mode below to learn more about this approach.
* If you have a Single Page Application (SPA), Adobe recommends that you load and initialize at.js before loading your application's main JavaScript file during first page load. This approach initiates the artifact downloading much earlier, providing a faster experience rendering.

## Best practices when decisioning method is "hybrid"

When using "hybrid" as the decisioning method, the artifact is downloaded in parallel. Until the artifact is downloaded, any Target API calls go over the wire even if the "locations" are on-device capable. This behavior is the default for all `getOffers()` calls and provides the best performance in most situations. If you change the default behavior of `getOffers()` by setting the `decisioningMethod` to `on-device`, follow these best practices to avoid errors and ensure the best performance.

* If you decide to call `getOffers()` with `decisioningMethod` as `on-device` when the page loads for the first time, you must do so inside the "ARTIFACT_DOWNLOAD_SUCCEEDED" at.js event handler to avoid errors. If your artifact is very large, any "locations" using this approach are rendered only after the artifact is fully downloaded, which can delay experience rendering. Adobe recommends that you rarely use this approach. Follow the best practices to reduce artifact size under the "On Device" best practices section above when using this approach.
