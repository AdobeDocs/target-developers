# Example rule artifact

```json
{
	"version": "1.0.0",
	"meta": {
		"clientCode": "targetfeatures",
		"environment": "production"
	},
	"globalMbox": "target-global-mbox",
	"geoTargetingEnabled": false,
	"responseTokens": [],
	"remoteMboxes": [],
	"remoteViews": [],
	"localMboxes": ["central-prod", "central-stage", "edge-dev", "edge-prod", "edge-prod34", "edge-prod35", "edge-stage", "profile-dev", "profile-prod"],
	"localViews": [],
	"rules": {
		"mboxes": {
			"edge-prod35": [{
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-prod35",
					"location.type": "mbox",
					"location.id": 3,
					"audience.ids": [],
					"offer.id": 234880,
					"offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/3/1598040310443",
					"option.id": 5,
					"option.name": "Offer5"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [99.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod35",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 1,
					"experience.name": "Experience B",
					"location.name": "edge-prod35",
					"location.type": "mbox",
					"location.id": 3,
					"audience.ids": [],
					"offer.id": 234879,
					"offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/3/1598040310434",
					"option.id": 9,
					"option.name": "Offer9"
				},
				"condition": {
					"and": [{
						"<": [99.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod35",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}],
			"edge-prod34": [{
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-prod34",
					"location.type": "mbox",
					"location.id": 2,
					"audience.ids": [],
					"offer.id": 234881,
					"offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/2/1598040310459",
					"option.id": 4,
					"option.name": "Offer4"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [99.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod34",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 1,
					"experience.name": "Experience B",
					"location.name": "edge-prod34",
					"location.type": "mbox",
					"location.id": 2,
					"audience.ids": [],
					"offer.id": 234878,
					"offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/2/1598040310417",
					"option.id": 8,
					"option.name": "Offer8"
				},
				"condition": {
					"and": [{
						"<": [99.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod34",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}],
			"profile-dev": [{
				"ruleKey": "121413",
				"activityId": 121413,
				"meta": {
					"activity.id": 121413,
					"activity.name": "Profile Configuration",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "profile-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 237411,
					"offer.name": "/profile_configuration/experiences/0/pages/0/zones/0/1600446608982",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "profile-dev",
					"options": [{
						"type": "json",
						"eventToken": "NOE+oy7q47YMejnY4KQaMWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"M2_PROCESS_PROFILE_UPDATE_VIA_PIPELINE": true,
							"M2_PUBLISH_PROFILE_UPDATE_VIA_KAFKA": false,
							"M2_PROFILE_UPDATE_SECONDARY_PIPELINE_ENABLED": false,
							"M2_PROFILE_UPDATE_PRIMARY_PIPELINE_LIMIT_PER_CLIENT": 5000000
						}
					}],
					"metrics": []
				}
			}],
			"central-prod": [{
				"ruleKey": "121452",
				"activityId": 121452,
				"meta": {
					"activity.id": 121452,
					"activity.name": "Enable DULE - Temp",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "central-prod",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [],
					"offer.id": 237491,
					"offer.name": "/enable_dule_-_temp/experiences/0/pages/0/zones/1/1600710199554",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "central-prod",
					"options": [{
						"type": "json",
						"eventToken": "vqksnbzeGmM+VJVHy46c/WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"M2_ENABLE_DULE": false
						}
					}],
					"metrics": []
				}
			}],
			"edge-stage": [{
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-stage",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [],
					"offer.id": 234045,
					"offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/1/1597340302885",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [99.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-stage",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"m2.platform.edge.profile.zen.service.registry.address": "zenserviceregistry-stg4-va6.stage.cloud.adobe.io",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 1,
					"experience.name": "Experience B",
					"location.name": "edge-stage",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [],
					"offer.id": 234046,
					"offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/1/1597340302896",
					"option.id": 7,
					"option.name": "Offer7"
				},
				"condition": {
					"and": [{
						"<": [99.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-stage",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}],
			"edge-prod": [{
				"ruleKey": "121126",
				"activityId": 121126,
				"meta": {
					"activity.id": 121126,
					"activity.name": "MBox Endpoint Denied Usage",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-prod",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [1770707],
					"offer.id": 236484,
					"offer.name": "/mbox_endpoint_deniedusage/experiences/0/pages/0/zones/1/1600200955667",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"and": [{
							"<=": [0.0, {
								"var": "allocation"
							}]
						}, {
							">=": [100.0, {
								"var": "allocation"
							}]
						}]
					}, {
						"in": ["demo", {
							"var": "mbox.tenant_lc"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod",
					"options": [{
						"type": "json",
						"eventToken": "cEHkmK61Bpmw4+ty+j3gAWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": false
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120956",
				"activityId": 120956,
				"meta": {
					"activity.id": 120956,
					"activity.name": "Mbox Endpoint Allowed Usage",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-prod",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [1768591],
					"offer.id": 236483,
					"offer.name": "/mbox_endpoint_allowedusage/experiences/0/pages/0/zones/1/1600200900499",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"and": [{
							"<=": [0.0, {
								"var": "allocation"
							}]
						}, {
							">=": [100.0, {
								"var": "allocation"
							}]
						}]
					}, {
						"or": [{
							"in": ["allnipponairwayscolt", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["audible", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["demo", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["mitsuifudosan", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["maruig", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["nomurasecurities", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["panasonicglobal", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["senshukai", {
								"var": "mbox.tenant_lc"
							}]
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod",
					"options": [{
						"type": "json",
						"eventToken": "r63j6mIiqBHfg54CQiTpt2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": true
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120955",
				"activityId": 120955,
				"meta": {
					"activity.id": 120955,
					"activity.name": "Mbox EOL",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-prod",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [],
					"offer.id": 236482,
					"offer.name": "/mbox_eol/experiences/0/pages/0/zones/1/1600200807347",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-prod",
					"options": [{
						"type": "json",
						"eventToken": "doRnjcbCfQmOI8iJISU2m2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": true
						}
					}],
					"metrics": []
				}
			}],
			"central-stage": [{
				"ruleKey": "121452",
				"activityId": 121452,
				"meta": {
					"activity.id": 121452,
					"activity.name": "Enable DULE - Temp",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "central-stage",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 237492,
					"offer.name": "/enable_dule_-_temp/experiences/0/pages/0/zones/0/1600710199563",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "central-stage",
					"options": [{
						"type": "json",
						"eventToken": "vqksnbzeGmM+VJVHy46c/WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"M2_ENABLE_DULE": false
						}
					}],
					"metrics": []
				}
			}],
			"profile-prod": [{
				"ruleKey": "121413",
				"activityId": 121413,
				"meta": {
					"activity.id": 121413,
					"activity.name": "Profile Configuration",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "profile-prod",
					"location.type": "mbox",
					"location.id": 1,
					"audience.ids": [],
					"offer.id": 240358,
					"offer.name": "/profile_configuration/experiences/0/pages/0/zones/1/1603493206257",
					"option.id": 3,
					"option.name": "Offer3"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "profile-prod",
					"options": [{
						"type": "json",
						"eventToken": "NOE+oy7q47YMejnY4KQaMWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"M2_PROCESS_PROFILE_UPDATE_VIA_PIPELINE": true,
							"M2_PUBLISH_PROFILE_UPDATE_VIA_KAFKA": false,
							"M2_PROFILE_UPDATE_SECONDARY_PIPELINE_ENABLED": false,
							"M2_PROFILE_UPDATE_PRIMARY_PIPELINE_LIMIT_PER_CLIENT": 5000000
						}
					}],
					"metrics": []
				}
			}],
			"edge-dev": [{
				"ruleKey": "121126",
				"activityId": 121126,
				"meta": {
					"activity.id": 121126,
					"activity.name": "MBox Endpoint Denied Usage",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [1770707],
					"offer.id": 236374,
					"offer.name": "/mbox_endpoint_deniedusage/experiences/0/pages/0/zones/0/1600100151912",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"and": [{
							"<=": [0.0, {
								"var": "allocation"
							}]
						}, {
							">=": [100.0, {
								"var": "allocation"
							}]
						}]
					}, {
						"in": ["demo", {
							"var": "mbox.tenant_lc"
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "cEHkmK61Bpmw4+ty+j3gAWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": true
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120956",
				"activityId": 120956,
				"meta": {
					"activity.id": 120956,
					"activity.name": "Mbox Endpoint Allowed Usage",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [1768591],
					"offer.id": 235966,
					"offer.name": "/mbox_endpoint_allowedusage/experiences/0/pages/0/zones/0/1599536746599",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"and": [{
							"<=": [0.0, {
								"var": "allocation"
							}]
						}, {
							">=": [100.0, {
								"var": "allocation"
							}]
						}]
					}, {
						"or": [{
							"in": ["allnipponairwayscolt", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["audible", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["demo", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["mitsuifudosan", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["maruig", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["nomurasecurities", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["panasonicglobal", {
								"var": "mbox.tenant_lc"
							}]
						}, {
							"in": ["senshukai", {
								"var": "mbox.tenant_lc"
							}]
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "r63j6mIiqBHfg54CQiTpt2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": true
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 233916,
					"offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/0/1597275643060",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [99.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceStgLocal",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120028",
				"activityId": 120028,
				"meta": {
					"activity.id": 120028,
					"activity.name": "Unified Profile Call Through",
					"activity.type": "ab",
					"experience.id": 1,
					"experience.name": "Experience B",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 233917,
					"offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/0/1597275643069",
					"option.id": 6,
					"option.name": "Offer6"
				},
				"condition": {
					"and": [{
						"<": [99.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceStgLocal",
							"M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": true
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "121956",
				"activityId": 121956,
				"meta": {
					"activity.id": 121956,
					"activity.name": "Edge Configuration",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 238654,
					"offer.name": "/edge_configuration/experiences/0/pages/0/zones/0/1602122472366",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "apUFi4FnGUoRVhE3gJ9y+GqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"m2.platform.edge.profile.zen.client.threads": 11
						}
					}],
					"metrics": []
				}
			}, {
				"ruleKey": "120955",
				"activityId": 120955,
				"meta": {
					"activity.id": 120955,
					"activity.name": "Mbox EOL",
					"activity.type": "ab",
					"experience.id": 0,
					"experience.name": "Experience A",
					"location.name": "edge-dev",
					"location.type": "mbox",
					"location.id": 0,
					"audience.ids": [],
					"offer.id": 235965,
					"offer.name": "/mbox_eol/experiences/0/pages/0/zones/0/1599536394016",
					"option.id": 2,
					"option.name": "Offer2"
				},
				"condition": {
					"and": [{
						"<=": [0.0, {
							"var": "allocation"
						}]
					}, {
						">=": [100.0, {
							"var": "allocation"
						}]
					}]
				},
				"consequence": {
					"name": "edge-dev",
					"options": [{
						"type": "json",
						"eventToken": "doRnjcbCfQmOI8iJISU2m2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
						"content": {
							"allow_mbox_endpoint": true
						}
					}],
					"metrics": []
				}
			}]
		},
		"views": {}
	}
}
```