# Audience targeting

The following table indicates which audience rules are supported or not supported for on-device decisioning.

|Audience Rule|On-device Decisioning|
| --- | --- |
|[Geo](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/geo.html){target=_blank}|Yes|
|[Network](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/network.html){target=_blank}|No|
|[Mobile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/mobile.html){target=_blank}|No|
|[Custom Parameters](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html){target=_blank}|Yes|
|[Operating System](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/operating-system.html){target=_blank}|Yes|
|[Site Pages](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/site-pages.html){target=_blank}|Yes|
|[Browser](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/browser.html){target=_blank}|Yes|
|[Visitor Profile](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/visitor-profile.html){target=_blank}|No|
|[Traffic Sources](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/traffic-sources.html){target=_blank}|No|
|[Time Frame](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/time-frame.html){target=_blank}|Yes|
|[Experience Cloud Audiences](https://experienceleague.adobe.com/docs/target/using/integrate/mmp.html){target=_blank} (Audiences from Adobe Audience Manager, Adobe Analytics, and Adobe Experience Manager|No|

## Geo targeting for on-device decisioning

In order to maintain near-zero latency for on-device decisioning activities with geo-based audiences, Adobe recommends you provide the geo values yourself in the call to `getOffers`. Do this by setting the `Geo` object in the `Context` of the request. This means your server will need a way to determine the location of each end user. For example, your server may perform an IP-to-Geo lookup, using a service you configure. Some hosting providers, such as Google Cloud, provide this functionality via custom headers in each `HttpServletRequest`.

**Node.js**

```
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

```
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

```
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

```
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