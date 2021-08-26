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
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        menu: [{
          title: 'Profile API',
          description: 'Adobe Target Profile API',
          path: '/api/profile-api/index.md'
        }, {
          title: 'Admin API',
          description: 'Adobe Target Admin API',
          path: '/api/admin-api/index.md'
        }, {
          title: 'Delivery API',
          description: 'Adobe Target Delivery API',
          path: '/api/delivery-api/index.md'
        }]
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
        pages: [
          {
            title: 'How to Configure Authentication for Adobe Target APIs',
            path: '/guides/'
          },
          {
            title: 'Adobe Recommendations API Overview',
            path: '/guides/recommendations-api-tutorial/recs-api-overview/'
          },
          {
            title: 'Manage Your Catalog with APIs',
            path: '/guides/recommendations-api-tutorial/manage-catalog/'
          },
          {
            title: 'Manage Custom Criteria',
            path: '/guides/recommendations-api-tutorial/manage-custom-criteria/'
          },
          {
            title: 'Use the Delivery API with Recommendations',
            path: '/guides/recommendations-api-tutorial/fetch-recs-server-side-delivery-api/'
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
