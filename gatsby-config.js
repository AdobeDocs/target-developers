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
            title: 'How to Configure Authentication for Adobe Target APIs',
            path: '/api-guides/'
          },
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