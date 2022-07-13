---
title: Adobe Target Delivery API Known Limitations
description: Adobe Target Delivery Known Limitations
keywords:
- delivery api
--- 

# Known Limitations

1. There is no authentication for Target Delivery APIs.
1. This API does not process cookies or redirect calls.
1. Support for Automated Personalization (AP) and Recommendations Activities: This API has two modes for fetching content: execute and prefetch mode. Prefetch mode can only be used for AB and XT activities. Do not use prefetch mode for AP, Auto-Allocate, Auto-Target, or Recommendations activity types.