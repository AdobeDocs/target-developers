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
        title: 'Getting Started with APIs',
        path: '/guides/'
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
        title: 'SDK Reference',
        path: '/sdk/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        header: true,
        pages: [
          {
            title: 'How to Configure Authentication for Adobe Target APIs',
            path: '/guides/'
          },
        ]
      },
      {
        title: 'Use Recommendations APIs',
        path: '/guides/recs-api/',
        header: true,
        pages: [
          {
            title: 'Recs API Overview',
            path: '/guides/recs-api/'
          },
          {
            title: 'Manage Your Catalog with APIs',
            path: '/guides/recs-api/manage-catalog.md'
          },
          {
            title: 'Manage Custom Criteria',
            path: '/guides/recs-api/manage-custom-criteria.md'
          },
          {
            title: 'Use the Delivery API with Recommendations',
            path: '/guides/recs-api/fetch-recs-server-side-delivery-api.md'
          }
        ]
      },
      {
        title: 'Intro to SDKs',
        path: '/sdk/',
        header: true,
        pages: [
          {
            title: 'Welcome',
            path: '/sdk/'
          },
          {
            title: 'Getting started',
            path: '/sdk/getting-started/getting-started-overview.md'
          },
          {
            title: 'Sample apps',
            path: '/sdk/sample-apps/sample-apps-overview.md'
          },
          {
            title: 'Core principles',
            path: '/sdk/core-principles/core-principles-overview.md'
          },
          {
            title: 'Integration with Experience Cloud',
            path: '/sdk/integration-with-experience-cloud/'
          }
        ]
      },
      {
        title: 'On-Device Decisioning',
        path: '/sdk/on-device-decisioning/',
        header: true,
        pages: [
          {
            title: 'Introduction to on-device decisioning',
            path: '/sdk/on-device-decisioning/introduction-to-on-device-decisioning.md'
          },
          {
            title: 'Rule artifact',
            path: '/sdk/on-device-decisioning/manage-catalog.md'
          },
          {
            title: 'Execute A/B tests with feature flags',
            path: '/sdk/on-device-decisioning/manage-custom-criteria.md'
          },
          {
            title: 'Execute feature tests with attributes',
            path: '/sdk/on-device-decisioning/execute-feature-tests-with-attributes.md'
          },
          {
            title: 'Manage rollouts for feature tests',
            path: '/sdk/on-device-decisioning/manage-rollouts-for-feature-tests.md'
          },
          {
            title: 'Deliver personalization',
            path: '/sdk/on-device-decisioning/deliver-personalization.md'
          },
          {
            title: 'Supported features',
            path: '/sdk/on-device-decisioning/supported-features-overview.md'
          },
          {
            title: 'Troubleshooting',
            path: '/sdk/on-device-decisioning/troubleshooting/'
          }
        ]
      },
      {
        title: 'SDK Reference',
        path: '/sdk/',
        header: true,
        pages: [
          {
            title: 'Node.js SDK',
            path: '/sdk/'
          },
          {
            title: 'Java SDK',
            path: '/sdk/'
          },
          {
            title: '.NET SDK',
            path: '/sdk/'
          },
          {
            title: 'Python SDK',
            path: '/sdk/'
          }
        ]
      },
      {
        title: 'Best Practices',
        path: '/sdk/',
        header: true,
        pages: [
          {
            title: 'When to use on-device vs. edge decisioning',
            path: '/sdk/'
          },
        ]
      },
      {
        title: 'Rest API',
        path: '/sdk/',
        header: true,
        pages: [
          {
            title: 'Using the REST API',
            path: '/sdk/'
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
