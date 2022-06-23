# Supported features overview

Adobe Target's server-side SDKs give developers the flexibility to choose between performance and freshness of data for decisions. In other words, if delivering the most relevant and engaging personalized content via machine learning is most important to you, a live server call should be made. But when performance is more critical, an on-device decision should be made. For on-device decisioning to work, please refer to the following list of supported features:

* Activity Types
* Audience Targeting
* Allocation Method

## Activity types

The following table indicates which [activity types](https://experienceleague.adobe.com/docs/target/using/activities/target-activities-guide.html) created using the [Form-based Experience Composer](https://experienceleague.adobe.com/docs/target/using/experiences/form-experience-composer.html?) are supported or not supported for on-device decisioning.

|Activity Type|Supported|
| --- | --- |
|[A/B Test](https://experienceleague.adobe.com/docs/target/using/activities/abtest/test-ab.html)|Yes|
|[Auto-Allocate](https://experienceleague.adobe.com/docs/target/using/activities/auto-allocate/automated-traffic-allocation.html)|No|
|[Auto-Target](https://experienceleague.adobe.com/docs/target/using/activities/auto-target/auto-target-to-optimize.html)|No|
|[Analytics for Target](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html) (A4T)|Yes|
|[Multivariate Test](https://experienceleague.adobe.com/docs/target/using/activities/multivariate-test/multivariate-testing.html) (MVT)|No|
|[Experience Targeting](https://experienceleague.adobe.com/docs/target/using/activities/experience-targeting/experience-target.html) (XT)|Yes|
|[Automated Personalization](https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html) (AP)|No|
|[Recommendations](https://experienceleague.adobe.com/docs/target/using/recommendations/recommendations.html)|No|


## Audience targeting

The following table indicates which audience rules are supported or not supported for on-device decisioning.

|Audience Rule|On-device Decisioning|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html)|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html)|No|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html)|No|
|[Custom Parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html)|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html)|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html)|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html)|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html)|No|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html)|No|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html)|Yes|
|[Experience Cloud Audiences](https://experienceleague.adobe.com/docs/target/using/integrate/mmp.html) (Audiences from Adobe Audience Manager, Adobe Analytics, and Adobe Experience Manager|No|

### Geo targeting for on-device decisioning

In order to maintain near-zero latency for on-device decisioning activities with geo-based audiences, Adobe recommends you provide the geo values yourself in the call to `getOffers`. Do this by setting the `Geo` object in the `Context` of the request. This means your server will need a way to determine the location of each end user. For example, your server may perform an IP-to-Geo lookup, using a service you configure. Some hosting providers, such as Google Cloud, provide this functionality via custom headers in each `HttpServletRequest`.

**Node.js**

```csharp
const CONFIG = {
    client: "acmeclient",
    organizationId: "1234567890@AdobeOrg",
    decisioningMethod: "on-device"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
    request: {
        context: {
            geo: {
                city: "SAN FRANCISCO",
                countryCode: "US",
                stateCode: "CA",
                latitude: 37.75,
                longitude: -122.4
            }
        },
        execute: {
            pageLoad: {}
        }
    }
})
```

**Java**

```javascript
public class TargetRequestUtils {

    public static Context getContext(HttpServletRequest request) {
        Context context = new Context()
            .geo(ipToGeoLookup(request.getRemoteAddr()))
            .channel(ChannelType.WEB)
            .timeOffsetInMinutes(330.0)
            .address(getAddress(request));
        return context;
    }

    public static Geo ipToGeoLookup(String ip) {
        GeoResult geoResult = geoLookupService.lookup(ip);
        return new Geo()
            .city(geoResult.getCity())
            .stateCode(geoResult.getStateCode())
            .countryCode(geoResult.getCountryCode());
    }

}
```

However, if you do not have the ability to perform IP-to-Geo lookups on your server, but you still want to perform on-device decisioning for `getOffers` requests that contain geo-based audiences, this is also supported. The downside of this approach is that it will use a remote IP-to-Geo lookup, which will add latency to each `getOffers` call. This latency should be lower than a remote `getOffers` call, since it hits a CDN that is located close to your server. You must only provide the `ipAddress` field in the `Geo` object in the `Context` of your request, in order for the SDK to retrieve the geo-location of your user's IP address. If any other field in addition to the `ipAddress` is provided, the Target SDK will not fetch the geo-location metadata for resolution.

**Node.js**

```csharp
const CONFIG = {
    client: "acmeclient",
    organizationId: "1234567890@AdobeOrg",
    decisioningMethod: "on-device"
};

const targetClient = TargetClient.create(CONFIG);

targetClient.getOffers({
    request: {
        context: {
            geo: {
                ipAddress: "127.0.0.1"
            }
        },
        execute: {
            pageLoad: {}
        }
    }
})
```

**Java**

```javascript
public class TargetRequestUtils {

    public static Context getContext(HttpServletRequest request) {
        Context context = new Context()
            .geo(new Geo().ipAddress(request.getRemoteAddr()))
            .channel(ChannelType.WEB)
            .timeOffsetInMinutes(330.0)
            .address(getAddress(request));
        return context;
    }

}
```

## Allocation method

The following table indicates which allocation methods are supported or not supported for on-device decisioning.

|Allocation Method|Supported|
| --- | --- |
|Manual|Yes|
|[Auto-allocate to best experience](https://experienceleague.adobe.com/docs/target/using/activities/auto-allocate/automated-traffic-allocation.html)|No|
|[Auto-target for personalized experiences](https://experienceleague.adobe.com/docs/target/using/activities/auto-target-to-optimize.html)|No|
