---
keywords:
- mobile app
- mobile app location
- target mobile app
- mobile target locations
- mobile app success metrics
description: View sample code to help you learn how to create locations and success metrics in iOS apps so you can use Adobe Target to personalize and optimize your app.
title: How Do I Create Target Locations and Success Metrics in an iOS app?
feature: Implement Mobile
role: Developer
exl-id: c2f05478-b019-47a7-b1a5-3783929e6732
---
# iOS - create a Target location and success metric

To use Target in your mobile app, create a location and success metric.

This section includes sample code that can be used as a template for your app. The samples in this section contain code for iOS. The same patterns apply to Android. Android-specific syntax can be found in the [Android SDK 4.x for Experience Cloud Solutions](https://experienceleague.adobe.com/docs/mobile-services/android/target-android/target-main.html) guide.

<InlineAlert variant="info" slots="text"/>

See the [Mobile documentation](https://experienceleague.adobe.com/docs/mobile-services/ios/target-ios/c-target-methods.html) for a list of all the available Target methods.

To create a Target location in your app and make a request, there are two primary methods:

* `targetCreateRequestWithName` 
* `targetLoadRequest`

1. Create a Target location.

   Here is a sample call to create a request:

   ```
   // make your request 
   ADBTargetLocationRequest *myRequest = [ADBMobile targetCreateRequestWithName:@"heroBanner" 
                                                    defaultContent:@"default.png" 
                                                    parameters:nil];
   ```

   |  Parameter  | Description  |
   |---|---|
   |  `ADBTargetLocationRequest *myRequest`  | Replace `myRequest` with the name of your `targetLocation` in the app.  |
   |  `targetCreateRequestWithName:@"heroBanner"`  | Replace `heroBanner` with the name of your `targetLocation` in Target. This is the same as the mbox name. This hero banner appears in the Target interface.  |
   |  `defaultContent:@"default.png"`  | Replace `default.png` with the value the app uses if Target doesn't respond.  |
   |  `parameters:nil`  | Specify profile or mbox parameters. See more information in the 'Passing custom data' section.  |

   Here is a sample call to load the request:

   ```
   // load your request 
   [ADBMobile targetLoadRequest:myRequest callback:^(NSString *content) { 
                                        // do something with content 
                                        heroImage.image = [UIImage imageNamed:content]; 
   }];
   ```

   |  Parameter  | Description  |
   |---|---|
   |  `targetLoadRequest:myRequest`  | Replace `myRequest` with the name of your `targetLocation` in the app.  |
   |  `NSString *content`  | Replace content with the actual content coming back from Adobe. The string can be XML, JSON or a plain string. Use this section of the code to define variables, set image paths, view controller flows, transaction points, or anything else you want to do. Target will return the content entered in the UI in the exact same format.  |
   |  `heroImage.image = [UIImage imageNamed:content];`  | For example: Take content and set the path for a hero image.  |

1. Create a success metric.

   The method `targetCreateOrderConfirmRequestWithName` can be used to track a conversion/success metric in your app.

   ```
   ADBTargetLocationRequest *req = [ADBMobile targetCreateOrderConfirmRequestWithName: "orderConfirm" 
                                              orderId: orderId 
                                              orderTotal: @"39.95" 
                                              productPurchasedId: _galleryItem.title 
                                              parameters: nil]; 
   [ADBMobile targetLoadRequest: req callback: nil];
   ```

   |  Parameter  | Description  |
   |---|---|
   |  `orderId`  | Replace with a dynamic variable representing a unique order ID.  |
   |  `@"39.95"`  | Replace with a dynamic variable representing a unique order total.  |
   |  `_galleryItem.title`  | Replace with a dynamic variable representing a comma-delimited list of products purchased.  |
   |  `parameters: nil`  | Optional dictionary of additional parameters.  |

1. Build the app.

   Step Result After you have successfully created a target location and tagged a success metric, create an A/B test. The activity can be created using the form-based experience composer.
