---
keywords:
- implement
- implementing
- whitelist
- white list
- allowlist
- allow list
- edge
- edges
description: View a list of hosts to help you allowlist Adobe Target edges (geographically distributed serving nodes that ensure optimum response times end users).
title: How Do I Allowlist Target Edge Nodes?
feature: Privacy & Security
role: Developer
exl-id: 2d8399b9-eec8-40b0-8b35-2812f83ff4dc
---
# Allowlist Target edge nodes

Information and an up-to-date list of hosts to help you allowlist Adobe Target edges.

An edge is a geographically distributed serving architecture that ensures optimum response times for end-users requesting content, regardless of where they are located. Each edge node has all the information required to respond to the user's content request and to track analytics data on that request. User requests are routed to the nearest edge node. For more information, see [The edge network](https://experienceleague.adobe.com/docs/target/using/introduction/how-target-works.html#concept_0AE2ED8E9DE64288A8B30FCBF1040934).

You can allowlist Target edge nodes, if desired.

## Network Address Translation (NAT) IP addresses of Target edges

List of egress IP addresses of Target edges. Allowlist these IPs if you plan to have Target reach out to your services.

|Edge Location|Egress IP Addresses|
| --- | --- |
|Edge31 (Mumbai)|13.126.131.246<br />13.234.229.8|
|Edge32 (Tokyo)|3.115.154.28<br />3.115.227.146|
|Edge34 (East Coast US)|34.232.149.249<br />52.21.139.93|
|Edge35 (West Coast US)|52.10.11.139<br />44.231.171.161|
|Edge36 (Sydney)|13.237.227.20<br />13.210.93.142|
|Edge37 (Ireland)|54.72.21.68<br />52.208.139.19|
|Edge38 (Singapore)|18.141.132.96<br />54.179.187.167|

## Target edge IP addresses

List of IP addresses of Target edges. Allowlist these IPs if you want to make API calls to Target edges.

<InlineAlert variant="warning" slots="text" />

This list will change often, as the load balancers scale up and down based on traffic profiles.

|Edge Location|Domain|IP Addresses|
| --- | --- | --- |
||`CLIENTCODE.tt.omtrdc.net`<br />(where CLIENTCODE is your Target client ID)||
|Edge31 (Mumbai)|`mboxedge31.tt.omtrdc.net`|13.235.211.15<br />35.154.193.2<br />35.154.53.50<br />15.206.4.195<br />13.234.45.112<br />3.7.14.31<br />3.7.182.1<br />52.66.52.225<br />3.6.64.110<br />65.0.222.85<br />65.1.67.35<br />43.205.52.220|
|Edge32 (Tokyo)|`mboxedge32.tt.omtrdc.net`|3.112.121.190<br />54.65.158.134<br />52.199.9.11<br />54.95.35.22<br />52.68.152.188<br />52.196.181.152<br />54.150.112.230<br />52.198.235.210|
|Edge34 (East Coast US)|`mboxedge34.tt.omtrdc.net`|44.195.255.231<br />52.207.142.243<br />52.54.50.225<br />35.169.35.160<br />52.71.135.138<br />35.169.227.120<br />23.22.33.42<br />52.54.152.40<br />54.243.116.94<br />3.233.250.116<br />50.16.29.53<br />54.86.98.238<br />44.210.41.177<br />3.211.200.163<br />54.210.15.1<br />34.199.251.113|
|Edge35 (West Coast US)|`mboxedge35.tt.omtrdc.net`|44.238.17.94<br />52.27.37.224<br />52.89.178.205<br />52.24.182.215<br />44.241.83.238<br />52.24.177.17<br />35.165.241.91<br />52.36.84.148<br />52.40.70.235<br />52.11.244.25<br />35.83.17.210<br />52.42.219.24<br />54.218.0.208<br />34.218.165.70<br />44.239.131.209<br />52.37.121.114<br />35.164.96.150<br />52.40.11.173<br />52.32.91.22<br />35.82.102.174<br />50.112.233.80<br />44.241.57.139<br />44.233.4.154<br />54.69.42.127<br />34.211.73.73<br />54.148.130.206<br />44.238.29.100<br />44.228.116.36<br />52.40.119.218<br />52.25.253.33|
|Edge36 (Sydney)|`mboxedge36.tt.omtrdc.net`|54.206.232.103<br />54.206.183.241<br />3.24.158.129<br />54.253.0.242|
|Edge37 (Ireland)|`mboxedge37.tt.omtrdc.net`|54.77.63.43<br />63.35.113.29<br />63.34.224.124<br />54.246.171.67<br />99.80.163.253<br />34.253.167.75<br />52.211.90.101<br />54.246.201.164<br />34.249.148.170<br />54.76.19.168<br />52.209.9.253|
|Edge38 (Singapore)|`mboxedge38.tt.omtrdc.net`|52.220.75.199<br />52.221.116.71|

As the load balancers detect changes in the traffic profile, it will scale up or down. The time required for Elastic Load Balancing to scale can range from 1 to 7 minutes, depending on the changes detected. When the load balancers scale, they update the DNS record with the new list of IP addresses. To ensure you are taking advantage of the increased capacity, Elastic Load Balancing uses a TTL setting on the DNS record of 60 seconds.
