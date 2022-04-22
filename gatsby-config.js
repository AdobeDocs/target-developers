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
      path: '/'
    },
    pages: [
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
        title: 'SDK Guides',
        path: '/sdk-guides/'
      },
      {
        title: 'SDK Reference',
        menu: [
          {
            title: 'SDK Overview',
            description: 'Adobe Target SDK Overview',
            path: '/sdk/'
          },
          {
          title: 'Node.js SDK',
          description: 'Adobe Target Node.js SDK',
          path: '/sdk/node-js/'
          },
          {
          title: 'Java SDK',
          description: 'Adobe Target Java SDK',
          path: '/sdk/java/'
          },
          {
          title: '.NET SDK',
          description: 'Adobe Target .NET SDK',
          path: '/sdk/net/'
          },
          {
          title: 'Python SDK',
          description: 'Adobe Target Python SDK',
          path: '/sdk/python/'
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
        title: 'Target SDK Overview',
        path: '/sdk-guides/',
        header: true,
        pages: [
          {
            title: 'Welcome',
            path: '/sdk-guides/'
          },
          {
            title: 'Getting started',
            path: '/sdk-guides/getting-started/'
          },
          {
            title: 'Sample apps',
            path: '/sdk-guides/sample-apps/'
          },
        ]
      },
      {
        title: 'Core Principles',
        path: '/sdk-guides/core-principles/',
        header: true,
        pages: [
          {
            title: 'Adobe Target core principles',
            path: '/sdk-guides/core-principles/',
          },
          {
            title: 'User identification & bucketing',
            path: '/sdk-guides/core-principles/user-identification-and-bucketing.md'
          },
          {
            title: 'Audience targeting',
            path: '/sdk-guides/core-principles/audience-targeting.md'
          },
          {
            title: 'Event tracking',
            path: '/sdk-guides/core-principles/event-tracking.md'
          },
          {
            title: 'User permissions & properties',
            path: '/sdk-guides/core-principles/user-permissions-and-properties.md'
          }
        ]
      },
      {
        title: 'Integration',
        path: '/sdk-guides/integration-with-experience-cloud/',
        header: true,
        pages: [
          {
            title: 'Integration Overview',
            path: '/sdk-guides/integration-with-experience-cloud/',
          },
          {
            title: 'Experience Cloud ID (ECID) Service',
            path: '/sdk-guides/integration-with-experience-cloud/ecid.md'
          },
          {
            title: 'Analytics for Target (A4T) reporting',
            path: '/sdk-guides/integration-with-experience-cloud/a4t-reporting.md'
          },
          {
            title: 'AAM Segments',
            path: '/sdk-guides/integration-with-experience-cloud/aam-segments.md'
          }
        ]
      },
      {
        title: 'On-Device Decisioning',
        path: '/sdk-guides/on-device-decisioning/',
        header: true,
        pages: [
          {
            title: 'Introduction to On-Device Decisioning',
            path: '/sdk-guides/on-device-decisioning/'
          },
          {
            title: 'Rule artifact',
            path: '/sdk-guides/on-device-decisioning/rule-artifact-overview.md'
          },
          {
            title: 'Execute A/B tests with feature flags',
            path: '/sdk-guides/on-device-decisioning/execute-ab-tests-with-feature-flags.md'
          },
          {
            title: 'Execute feature tests with attributes',
            path: '/sdk-guides/on-device-decisioning/execute-feature-tests-with-attributes.md'
          },
          {
            title: 'Manage rollouts for feature tests',
            path: '/sdk-guides/on-device-decisioning/manage-rollouts-for-feature-tests.md'
          },
          {
            title: 'Deliver personalization',
            path: '/sdk-guides/on-device-decisioning/deliver-personalization.md'
          },
          {
            title: 'Supported features',
            path: '/sdk-guides/on-device-decisioning/supported-features.md'
          },
          {
            title: 'Troubleshooting',
            path: '/sdk-guides/on-device-decisioning/troubleshooting.md'
          }
        ]
      },
      {
        title: 'Best Practices',
        path: '/sdk-guides/best-practices/',
        header: true,
        pages: [
          {
            title: 'When to use on-device vs. edge decisioning',
            path: '/sdk-guides/best-practices/'
          },
        ]
      },
      {
        title: 'Node.js SDK',
        path: '/sdk/node-js/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/node-js/',
          },
          {
            title: 'Install SDK',
            path: '/sdk/node-js/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/node-js/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/node-js/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/node-js/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/node-js/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/node-js/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/sdk/node-js/logger.md'
          }
        ]
      },
      {
        title: 'Java SDK',
        path: '/sdk/java/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/java/'
          },
          {
            title: 'Install SDK',
            path: '/sdk/java/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/java/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/java/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/java/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/java/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/java/sdk-events.md'
          },
          {
            title: 'Logger',
            path: '/sdk/java/logger.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/java/asynchronous-requests.md'
          },
          {
            title: 'Proxy Configuration',
            path: '/sdk/java/proxy-configuration.md'
          },
          {
            title: 'Utility Methods',
            path: '/sdk/java/utility-methods.md'
          }
        ]
      },
      {
        title: '.NET SDK',
        path: '/sdk/net/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/net/'
          },
          {
            title: 'Install SDK',
            path: '/sdk/net/install-sdk.md'
          },
          {
            title: 'Initialize SDK',
            path: '/sdk/net/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/net/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/net/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/net/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/net/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/net/asynchronous-requests.md'
          },
        ]
      },
      {
        title: 'Python SDK',
        path: '/sdk/python/',
        pages: [
          {
            title: 'Overview',
            path: '/sdk/python/'
          },
          {
            title: 'Install SDK',
             path: '/sdk/python/install-sdk.md'
           },
          {
            title: 'Initialize SDK',
            path: '/sdk/python/initialize-sdk.md'
          },
          {
            title: 'Get Offers',
            path: '/sdk/python/get-offers.md'
          },
          {
            title: 'Get Attributes',
            path: '/sdk/python/get-attributes.md'
          },
          {
            title: 'Send Notifications',
            path: '/sdk/python/send-notifications.md'
          },
          {
            title: 'SDK Events',
            path: '/sdk/python/sdk-events.md'
          },
          {
            title: 'Asynchronous Requests',
            path: '/sdk/python/asynchronous-requests.md'
          },
          {
            title: 'Logger',
            path: '/sdk/python/logger.md'
          },
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