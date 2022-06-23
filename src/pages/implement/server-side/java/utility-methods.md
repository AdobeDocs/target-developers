# Utility Methods

These helper methods are reusable across controllers and can be moved to a separate utility class.

<CodeBlock slots="heading, code" repeat="1" languages="Java" />

### Methods

```javascript
public class TargetRequestUtils {

    public static Context getContext(HttpServletRequest request) {
        Context context = new Context()
                .channel(ChannelType.WEB)
                .timeOffsetInMinutes(330.0)
                .address(getAddress(request));
        return context;
    }

    public static Address getAddress(HttpServletRequest request) {
        Address address = new Address()
                .referringUrl(request.getHeader("referer"))
                .url(request.getRequestURL().toString());
        return address;
    }

    public static List<TargetCookie> getTargetCookies(Cookie[] cookies) {
        if (cookies == null) {
            return Collections.emptyList();
        }
        return Arrays.stream(cookies)
                .filter(Objects::nonNull)
                .filter(cookie -> CookieUtils.getTargetCookieNames().contains(cookie.getName()))
                .map(cookie -> new TargetCookie(cookie.getName(), cookie.getValue(), cookie.getMaxAge()))
                .collect(Collectors.toList());
    }

    public static HttpServletResponse setCookies(List<TargetCookie> targetCookies,
                                                  HttpServletResponse response) {
        targetCookies
                .stream()
                .map(targetCookie -> new Cookie(targetCookie.getName(), targetCookie.getValue()))
                .forEach(cookie -> {
                    cookie.setPath("/");
                    response.addCookie(cookie);
                });
        return response;
    }

    public static List<MboxRequest> getMboxRequests(String... name) {
        List<MboxRequest> mboxRequests = new ArrayList<>();
        for (int i = 0; i < name.length; i++) {
            mboxRequests.add(new MboxRequest().name(name[i]).index(i));
        }
        return mboxRequests;
    }

    public static PrefetchRequest getPrefetchRequest() {
        PrefetchRequest prefetchRequest = new PrefetchRequest();
        ViewRequest viewRequest = new ViewRequest();
        prefetchRequest.setViews(Arrays.asList(viewRequest));
        return prefetchRequest;
    }
}
```