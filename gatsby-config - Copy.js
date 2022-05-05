/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    home: {
      title: 'Adobe Target Developer Guide',
      path: '/target/'
    },
    pages: [
      {
        title: 'Before You Implement',
        path: '/before-implement/'
      },
      {
        title: 'Implement',
        menu: [
          {
            title: 'Client-side',
            description: 'Implement using AEP Web SDK or at.js',
            path: '/implement/client-side/'
          },
          {
            title: 'Server-side',
            description: 'Node.js, Java, .NET, Python',
            path: '/implement/server-side/'
          },
          {
            title: 'Hybrid',
            description: 'Client- and Server-side combination',
            path: '/implement/hybrid/'
          },
          {
            title: 'Mobile',
            description: 'AEP Mobile SDK',
            path: '/implement/mobile/'
          },
          {
            title: 'Email',
            description: 'Email implementation',
            path: '/implement/email/'
          },
          {
            title: 'APIs',
            description: 'Get Started, Delivery API',
            path: '/api-guides/'
          }
        ]
      },
      {
        title: 'API Guides',
        path: '/api-guides/'
      },
      {
        title: 'API Reference',
        menu: [
          {
          title: 'Delivery API',
          description: 'Adobe Target Delivery API',
          path: '/api/delivery-api/index.md'
          },
          {
          title: 'Admin and Profile API',
          description: 'Adobe Target Admin and Profile API',
          path: '/api/admin-api/index.md'
          }
        ]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Before You Implement',
        path: '/before-implement/',
        pages: [
          {
            title: 'Before you implement',
            path: '/before-implement/'
          },
          {
            title: 'Prepare to implement',
            path: '/before-implement/prepare-to-implement-target.md'
          }
        ]
      },
      {
        title: 'Privacy and security',
        path: '/before-implement/privacy/privacy.md',
        pages: [
          {
            title: 'Privacy overview',
            path: '/before-implement/privacy/privacy.md'
          },
          {
            title: 'Privacy and data protection regulations',
            path: '/before-implement/privacy/cmp-privacy-and-general-data-protection-regulation.md'
          },
          {
            title: 'Target cookies',
            path: '/before-implement/privacy/cookie-behavior.md'
          },
          {
            title: 'Delete the Target cookie',
            path: '/before-implement/privacy/cookie-deleting.md'
          },
          {
            title: 'Google Chrome SameSite cookie policies',
            path: '/before-implement/privacy/google-chrome-samesite-cookie-policies.md'
          },
          {
            title: 'Apple Intelligent Tracking Prevention (ITP) 2.x',
            path: '/before-implement/privacy/apple-itp-2x.md'
          },
          {
            title: 'Content Security Policy (CSP) directives',
            path: '/before-implement/privacy/content-security-policy.md'
          },
          {
            title: 'Allowlist Target edge nodes',
            path: '/before-implement/privacy/allowlist-edges.md'
          }
        ]
      },
      {
        title: 'Methods to get data into Target',
        path: '/before-implement/methods-to-get-data-into-target/methods-to-get-data-into-target.md',
        pages: [
          {
            title: 'Methods overview',
            path: '/before-implement/methods-to-get-data-into-target/methods-to-get-data-into-target.md'
          },
          {
            title: 'Page parameters',
            path: '/before-implement/methods-to-get-data-into-target/page-parameters.md'
          },
          {
            title: 'In-page profile attributes',
            path: '/before-implement/methods-to-get-data-into-target/in-page-profile-attributes.md'
          },
          {
            title: 'Script profile attributes',
            path: '/before-implement/methods-to-get-data-into-target/script-profile-attributes.md'
          },
          {
            title: 'Data providers',
            path: '/before-implement/methods-to-get-data-into-target/data-providers.md'
          },
          {
            title: 'Bulk profile update API',
            path: '/before-implement/methods-to-get-data-into-target/bulk-profile-update-api.md'
          },
          {
            title: 'Single profile update API',
            path: '/before-implement/methods-to-get-data-into-target/single-profile-update-api.md'
          },
          {
            title: 'Customer attributes',
            path: '/before-implement/methods-to-get-data-into-target/customer-attributes.md'
          },
          {
            title: 'Profile API settings',
            path: '/before-implement/methods-to-get-data-into-target/profile-api-settings.md'
          }
        ]
      },
      {
        title: 'Target security overview',
        path: '/before-implement/target-security-overview.md'
      },
      {
        title: 'Supported browsers',
        path: '/before-implement/supported-browsers.md'
      },
      {
        title: 'Transport Layer Security (TLS) encryption changes',
        path: '/before-implement/tls-transport-layer-security-encryption.md'
      },
      {
        title: 'CNAME and Adobe Target',
        path: '/before-implement/implement-cname-support-in-target.md'
      },
      {
        title: 'Client-side implementation',
        path: '/implement/client-side/',
        header: true,
        pages: [
          {
            title: 'Overview: implement Target for client-side web',
            path: '/implement/client-side/'
          },
          {
            title: 'AEP Web SDK implementation overview',
            path: '/implement/client-side/aep-web-sdk.md'
          },
          {
            title: 'at.js implementation',
            path: '/implement/client-side/how-atjs-works/how-atjs-works.md',
            pages: [
              {
                title: 'How at.js works',
                path: '/implement/client-side/how-atjs-works/how-atjs-works.md'
              },
              {
                title: 'How at.js manages flicker',
                path: '/implement/client-side/how-atjs-works/manage-flicker-with-atjs.md'
              },
              {
                title: 'at.js integrations',
                path: '/implement/client-side/how-atjs-works/target-atjs-integrations.md'
              }
            ]
          },
          {
            title: 'How to deploy at.js',
            path: '/implement/client-side/how-to-deployatjs/how-to-deployatjs.md',
            pages: [
              {
                title: 'How to deploy at.js',
                path: '/implement/client-side/how-to-deployatjs/how-to-deployatjs.md'
              },
              {
                title: 'Implement Target using Adobe Experience Platform',
                path: '/implement/client-side/how-to-deployatjs/implement-target-using-adobe-launch.md'
              },
              {
                title: 'Implement Target without a tag manager',
                path: '/implement/client-side/how-to-deployatjs/implement-target-without-a-tag-manager.md'
              },
              {
                title: 'Implement Target using Dynamic Tag Manager (DTM)',
                path: '/implement/client-side/how-to-deployatjs/implement-target-using-dtm.md'
              },
              {
                title: 'Implement Target for Single Page Applications (SPAs)',
                path: '/implement/client-side/how-to-deployatjs/target-atjs-single-page-application.md'
              }
            ]
          },
          {
            title: 'at.js functions',
            path: '/implement/client-side/atjs-functions/atjs-functions.md',
            pages: [
              {
                title: 'at.js functions overview',
                path: '/implement/client-side/atjs-functions/atjs-functions.md'
              },
              {
                title: 'adobe.target.getOffer()',
                path: '/implement/client-side/atjs-functions/adobe-target-getoffer.md'
              },
              {
                title: 'adobe.target.getOffers() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-getoffers-atjs-2.md'
              },
              {
                title: 'adobe.target.applyOffer()',
                path: '/implement/client-side/atjs-functions/adobe-target-applyoffer.md'
              },
              {
                title: 'adobe.target.applyOffers() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-applyoffers-atjs-2.md'
              },
              {
                title: 'adobe.target.triggerView() - at.js 2.x',
                path: '/implement/client-side/atjs-functions/adobe-target-triggerview-atjs-2.md'
              },
              {
                title: 'adobe.target.trackEvent()',
                path: '/implement/client-side/atjs-functions/adobe-target-trackevent.md'
              },
              {
                title: 'mboxCreate() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/mboxcreate-atjs.md'
              },
              {
                title: 'targetGlobalSettings()',
                path: '/implement/client-side/atjs-functions/targetglobalsettings.md'
              },
              {
                title: 'mboxDefine() and mboxUpdate() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/mboxdefine-mboxupdate-atjs-1x.md'
              },
              {
                title: 'targetPageParams()',
                path: '/implement/client-side/atjs-functions/targetpageparams.md'
              },
              {
                title: 'targetPageParamsAll()',
                path: '/implement/client-side/atjs-functions/targetpageparamsall.md'
              },
              {
                title: 'registerExtension() - at.js 1.x',
                path: '/implement/client-side/atjs-functions/registerextension-atjs-1x.md'
              },
              {
                title: 'sendNotifications() - at.js 2.1',
                path: '/implement/client-side/atjs-functions/adobe.target.sendnotifications-atjs-21.md'
              },
              {
                title: 'at.js custom events',
                path: '/implement/client-side/atjs-functions/atjs-custom-events.md'
              },
              {
                title: 'Debug at.js using the Adobe Experience Cloud Debugger',
                path: '/implement/client-side/target-debugging-atjs/target-debugging-atjs.md'
              },
              {
                title: 'Use cloud-based instances with Target',
                path: '/implement/client-side/target-debugging-atjs/targeting-using-cloud-based-instances.md'
              }
            ]
          },
          {
            title: 'at.js frequently asked questions',
            path: '/implement/client-side/target-atjs-faq/target-atjs-faq.md',
            pages: [
              {
                title: 'at.js FAQs',
                path: '/implement/client-side/target-atjs-faq/target-atjs-faq.md'
              }
            ]
          },
          {
            title: 'at.js version details',
            path: '/implement/client-side/target-atjs-versions.md'
          },
          {
            title: 'Upgrading from at.js 1.x to at.js 2.x',
            path: '/implement/client-side/upgrading-from-atjs-1x-to-atjs-20.md'
          },
          {
            title: 'at.js cookies',
            path: '/implement/client-side/atjs-cookies.md'
          },
          {
            title: 'Understand the Global mbox',
            path: '/implement/client-side/global-mbox/global-mbox-overview.md',
            pages: [
              {
                title: 'Global mbox overview',
                path: '/implement/client-side/global-mbox/global-mbox-overview.md'
              },
              {
                title: 'Customize a global mbox',
                path: '/implement/client-side/global-mbox/customize-global-mbox.md'
              },
              {
                title: 'Use a global mbox from a legacy implementation',
                path: '/implement/client-side/global-mbox/mbox-global-target-standard.md'
              },
              {
                title: 'Pass parameters to a global mbox',
                path: '/implement/client-side/global-mbox/pass-parameters-to-global-mbox.md'
              },
              {
                title: 'Global mbox frequently asked questions',
                path: '/implement/client-side/global-mbox/global-mbox-faq.md'
              }
            ]
          },
        ]
      },
      {
        title: 'Target for Mobile Apps',
        path: '/implement/mobile/',
        header: true,
        pages: [
          {
            title: 'Target for mobile apps overview',
            path: '/implement/mobile/'
          },
          {
            title: 'How Target works in mobile apps',
            path: '/implement/mobile/how-target-works-mobile-apps.md'
          },
          {
            title: 'Enable Target in the SDK',
            path: '/implement/mobile/enable-target-in-sdk.md'
          },
          {
            title: 'iOS - create a Target location and success metric',
            path: '/implement/mobile/mobile-create-location-and-metric.md'
          },
          {
            title: 'iOS - send custom user data',
            path: '/implement/mobile/mobile-custom-user-data.md'
          },
          {
            title: 'Target mobile preview',
            path: '/implement/mobile/target-mobile-preview.md'
          },
          {
            title: 'Prefetch offer content',
            path: '/implement/mobile/prefetch-offer-content.md'
          },
          {
            title: 'Target for mobile apps FAQ',
            path: '/implement/mobile/mobile-faq.md'
          },
          {
            title: 'Use Location Service',
            path: '/implement/mobile/use-location-service.md'
          },
        ]
      },
      {
        title: 'Implement server-side',
        path: '/implement/server-side/',
        pages: [
          {
            title: 'Target Server-side implementation overview',
            path: '/implement/server-side/'
          },
          {
            title: 'Transition from Target legacy APIs to Adobe I/O',
            path: '/implement/server-side/transition-from-target-legacy-apis.md'
          },
          {
            title: 'On-device decisioning',
            path: '/implement/server-side/on-device-decisioning.md'
          },
          {
            title: 'Welcome',
            path: '/implement/sdk-guides/'
          },
          {
            title: 'Getting started',
            path: '/implement/sdk-guides/getting-started/'
          },
          {
            title: 'Sample apps',
            path: '/implement/sdk-guides/sample-apps/'
          },
        ]
      },
      {
        title: 'Core Principles',
        path: '/implement/sdk-guides/core-principles/',
        pages: [
          {
            title: 'Adobe Target core principles',
            path: '/implement/sdk-guides/core-principles/',
          },
          {
            title: 'User identification & bucketing',
            path: '/implement/sdk-guides/core-principles/user-identification-and-bucketing.md'
          },
          {
            title: 'Audience targeting',
            path: '/implement/sdk-guides/core-principles/audience-targeting.md'
          },
          {
            title: 'Event tracking',
            path: '/implement/sdk-guides/core-principles/event-tracking.md'
          },
          {
            title: 'User permissions & properties',
            path: '/implement/sdk-guides/core-principles/user-permissions-and-properties.md'
          }
        ]
      },
      {
        title: 'Integration',
        path: '/implement/sdk-guides/integration-with-experience-cloud/',
        pages: [
          {
            title: 'Integration Overview',
            path: '/implement/sdk-guides/integration-with-experience-cloud/',
          },
          {
            title: 'Experience Cloud ID (ECID) Service',
            path: '/implement/sdk-guides/integration-with-experience-cloud/ecid.md'
          },
          {
            title: 'Analytics for Target (A4T) reporting',
            path: '/implement/sdk-guides/integration-with-experience-cloud/a4t-reporting.md'
          },
          {
            title: 'AAM Segments',
            path: '/implement/sdk-guides/integration-with-experience-cloud/aam-segments.md'
          }
        ]
      },
      {
        title: 'On-Device Decisioning',
        path: '/implement/sdk-guides/on-device-decisioning/',
        pages: [
          {
            title: 'Introduction to On-Device Decisioning',
            path: '/implement/sdk-guides/on-device-decisioning/'
          },
          {
            title: 'Rule artifact',
            path: '/implement/sdk-guides/on-device-decisioning/rule-artifact-overview.md'
          },
          {
            title: 'Execute A/B tests with feature flags',
            path: '/implement/sdk-guides/on-device-decisioning/execute-ab-tests-with-feature-flags.md'
          },
          {
            title: 'Execute feature tests with attributes',
            path: '/implement/sdk-guides/on-device-decisioning/execute-feature-tests-with-attributes.md'
          },
          {
            title: 'Manage rollouts for feature tests',
            path: '/implement/sdk-guides/on-device-decisioning/manage-rollouts-for-feature-tests.md'
          },
          {
            title: 'Deliver personalization',
            path: '/implement/sdk-guides/on-device-decisioning/deliver-personalization.md'
          },
          {
            title: 'Supported features',
            path: '/implement/sdk-guides/on-device-decisioning/supported-features.md'
          },
          {
            title: 'Troubleshooting',
            path: '/implement/sdk-guides/on-device-decisioning/troubleshooting.md'
          }
        ]
      },
      {
        title: 'Best Practices',
        path: '/implement/sdk-guides/best-practices/',
        pages: [
          {
            title: 'When to use on-device vs. edge decisioning',
            path: '/implement/sdk-guides/best-practices/'
          },
        ]
      },
      {
        title: 'Node.js SDK Reference',
        path: '/implement/server-side/node-js/',
        pages: [
          {
            title: 'Overview',
            path: '/implement/server-side/node-js/',
          },
          {
            title: 'Install SDK',
            path: '/implement/server-side/node-js/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/implement/server-side/node-js/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/implement/server-side/node-js/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/implement/server-side/node-js/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/implement/server-side/node-js/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/implement/server-side/node-js/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/implement/server-side/node-js/logger.md'
          }
        ]
      },
      {
        title: 'Java SDK Reference',
        path: '/implement/server-side/java/',
        pages: [
          {
            title: 'Overview',
            path: '/implement/server-side/java/'
          },
          {
            title: 'Install SDK',
            path: '/implement/server-side/java/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/implement/server-side/java/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/implement/server-side/java/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/implement/server-side/java/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/implement/server-side/java/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/implement/server-side/java/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/implement/server-side/java/logger.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/implement/server-side/java/asynchronous-requests.md'
          },
          {
            title: 'Proxy Configuration',
            path: '/implement/server-side/java/proxy-configuration.md'
          },
          {
            title: 'Utility Methods',
            path: '/implement/server-side/java/utility-methods.md'
          }
        ]
      },
      {
        title: '.NET SDK Reference',
        path: '/implement/server-side/net/',
        pages: [
          {
            title: 'Overview',
            path: '/implement/server-side/net/'
          },
          {
            title: 'Install SDK',
            path: '/implement/server-side/net/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/implement/server-side/net/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/implement/server-side/net/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/implement/server-side/net/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/implement/server-side/net/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/implement/server-side/net/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/implement/server-side/net/asynchronous-requests.md'
          },
        ]
      },
      {
        title: 'Python SDK Reference',
        path: '/implement/server-side/python/',
        pages: [
          {
            title: 'Overview',
            path: '/implement/server-side/python/'
          },
          {
            title: 'Install SDK',
             path: '/implement/server-side/python/install-sdk.md'
           },
          {
            title: 'Initialize SDK',
            path: '/implement/server-side/python/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/implement/server-side/python/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/implement/server-side/python/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/implement/server-side/python/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/implement/server-side/python/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/implement/server-side/python/asynchronous-requests.md'
          },
          {
            title: 'Logger',
            path: '/implement/server-side/python/logger.md'
          },
        ]
      },
      {
        title: 'Hybrid implementation',
        path: '/implement/hybrid/'
      },
      {
        title: 'Email Implementation',
        path: '/implement/email/',
        header: true,
        pages: [
          {
            title: 'Email implementation overview',
            path: '/implement/email/'
          },
          {
            title: 'Create an Adbox for an image',
            path: '/implement/email/testing-content-with-the-adbox.md'
          },
          {
            title: 'Test an email image Adbox',
            path: '/implement/email/testing-email-image-adbox.md'
          },
          {
            title: 'Work with redirectors',
            path: '/implement/email/working-with-redirectors.md'
          }
        ]
      },
      {
        title: 'Get Started',
        path: '/api-guides/',
        header: true,
        pages: [
          {
            title: 'Target API Overview',
            path: '/api-guides/'
          },
          {
            title: 'How to Configure Authentication for Adobe Target APIs',
            path: '/api-guides/configure-authentication.md'
          }
        ]
      },
      {
        title: 'Use Recommendations APIs',
        path: '/api-guides/recs-api/',
        header: true,
        pages: [
          {
            title: 'Recs API Overview',
            path: '/api-guides/recs-api/'
          },
          {
            title: 'Manage Your Catalog with APIs',
            path: '/api-guides/recs-api/manage-catalog.md'
          },
          {
            title: 'Manage Custom Criteria',
            path: '/api-guides/recs-api/manage-custom-criteria.md'
          },
          {
            title: 'Use the Delivery API with Recommendations',
            path: '/api-guides/recs-api/fetch-recs-server-side-delivery-api.md'
          }
        ]
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/target/'
};