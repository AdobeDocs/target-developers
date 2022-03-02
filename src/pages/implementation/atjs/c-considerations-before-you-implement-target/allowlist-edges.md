---
keywords: implement;implementing;whitelist;white list;allowlist;allow list;edge;edges
description: View a list of hosts to help you allowlist Adobe [!DNL Target] edges (geographically distributed serving nodes that ensure optimum response times end users).
title: How Do I Allowlist [!DNL Target] Edge Nodes?
feature: Privacy & Security
role: Developer
exl-id: 2d8399b9-eec8-40b0-8b35-2812f83ff4dc
---
# Allowlist [!DNL Target] edge nodes

Information and an up-to-date list of hosts to help you allowlist [!DNL Adobe Target] edges.

An edge is a geographically distributed serving architecture that ensures optimum response times for end-users requesting content, regardless of where they are located. Each edge node has all the information required to respond to the user's content request and to track analytics data on that request. User requests are routed to the nearest edge node. For more information, see [The edge network](/help/c-intro/how-target-works.md#concept_0AE2ED8E9DE64288A8B30FCBF1040934) in *How Adobe [!DNL Target] works*.

You can allowlist [!DNL Target] edge nodes, if desired. 

## Network Address Translation (NAT) IP addresses of [!DNL Target] edges

List of egress IP addresses of [!DNL Target] edges. Allowlist these IPs if you plan to have Target reach out to your services.

|Edge Location|Egress IP Addresses|
| --- | --- |
|Edge31 (Mumbai)|13.126.131.246<br>13.234.229.8|
|Edge32 (Tokyo)|3.115.154.28<br>3.115.227.146|
|Edge34 (East Coast US)|34.232.149.249<br>52.21.139.93|
|Edge35 (West Coast US)|52.10.11.139<br>44.231.171.161|
|Edge36 (Sydney)|13.237.227.20<br>13.210.93.142|
|Edge37 (Ireland)|54.72.21.68<br>52.208.139.19|
|Edge38 (Singapore)|18.141.132.96<br>54.179.187.167|

## Target edge IP addresses

List of IP addresses of [!DNL Target] edges. Allowlist these IPs if you want to make API calls to Target edges.

|Edge Location|Domain|IP Addresses|
| --- | --- | --- |
||`CLIENTCODE.tt.omtrdc.net`<br>(where CLIENTCODE is your [!DNL Target] client ID)||
|Edge31 (Mumbai)|`mboxedge31.tt.omtrdc.net`|15.207.157.131<br>15.206.8.201|
|Edge32 (Tokyo)|`mboxedge32.tt.omtrdc.net`|54.199.66.101<br>54.64.93.37|
|Edge34 (East Coast US)|`mboxedge34.tt.omtrdc.net`|3.225.56.36<br>3.230.207.249<br>34.198.55.51<br>52.3.14.12<br>52.21.222.93<br>52.55.235.132<br>52.70.52.52<br>54.165.204.89|
|Edge35 (West Coast US)|`mboxedge35.tt.omtrdc.net`|52.10.244.20<br>52.36.232.38<br>52.88.209.29<br>54.214.180.56<br>35.162.74.35<br>34.214.12.211<br>52.42.35.202<br>54.148.71.13|
|Edge36 (Sydney)|`mboxedge36.tt.omtrdc.net`|13.238.34.185<br>3.24.250.17<br>3.104.234.91<br>13.211.248.241|
|Edge37 (Ireland)|`mboxedge37.tt.omtrdc.net`|52.212.193.208<br>52.19.133.54<br>52.51.251.137<br>34.252.156.174<br>52.213.168.74<br>34.252.166.160<br>52.18.150.20<br>18.203.205.32|
|Edge38 (Singapore)|`mboxedge38.tt.omtrdc.net`|52.221.145.65<br>52.220.44.99<br>13.250.75.226<br>54.151.139.123|
