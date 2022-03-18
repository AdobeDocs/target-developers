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
      title: 'Adobe Target Documentation',
      path: 'https://experienceleague.adobe.com/docs/target.html'
    },
    pages: [
      {
        title: 'Adobe Target',
        path: '/'
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
        title: 'SDK Guides',
        path: '/sdk-guides/'
      },
      {
        title: 'SDK Reference',
        menu: [
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
          {
            title: 'Core principles',
            path: '/sdk-guides/core-principles/'
          },
          {
            title: 'Integration with Experience Cloud',
            path: '/sdk-guides/integration-with-experience-cloud/'
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
            path: '/sdk-guides/on-device-decisioning/rule-artifact/'
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
        title: 'Java SDK Overview',
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
        path: '/sdk/java/get-offers.md'
      },
      {
        title: 'Logger',
        path: '/sdk/java/get-offers.md'
      },
      {
        title: 'Asynchronous Requests',
        path: '/sdk/java/get-offers.md'
      },
      {
        title: 'Proxy Configuration',
        path: '/sdk/java/get-offers.md'
      },
      {
        title: 'Utility Methods',
        path: '/sdk/java/get-offers.md'
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