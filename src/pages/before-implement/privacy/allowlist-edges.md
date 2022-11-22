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
|Edge31 (Mumbai)|`mboxedge31.tt.omtrdc.net`|3.7.179.87<br />65.1.98.82<br />43.204.137.245<br />13.126.50.65<br />3.6.96.116<br />13.235.102.129<br />3.6.127.130<br />43.204.67.50|
|Edge32 (Tokyo)|`mboxedge32.tt.omtrdc.net`|54.248.72.30<br />52.192.54.119<br />52.192.207.52<br />54.249.57.5<br />54.249.22.53<br />52.198.124.140<br />3.115.46.158<br />35.78.21.7<br />54.95.120.169<br />54.178.165.87|
|Edge34 (East Coast US)|`mboxedge34.tt.omtrdc.net`|54.205.65.144<br />3.223.74.175<br />34.232.170.91<br />18.209.206.16<br />34.192.211.137<br />34.205.91.25<br />54.198.103.180<br />52.45.28.116<br />52.206.181.199<br />54.90.36.247<br />18.208.8.140<br />34.234.114.189<br />54.145.130.7<br />3.226.2.172<br />34.197.227.119<br />44.199.123.230<br />23.23.171.149<br />35.171.14.20<br />3.217.136.91<br />54.87.210.38|
|Edge35 (West Coast US)|`mboxedge35.tt.omtrdc.net`|52.34.236.224<br />50.112.213.253<br />44.236.102.163<br />52.37.120.184<br />35.85.140.233<br />54.69.225.41<br />52.27.151.121<br />35.85.66.43<br />34.208.12.211<br />52.36.135.150|
|Edge36 (Sydney)|`mboxedge36.tt.omtrdc.net`|54.79.65.139<br />54.66.111.75|
|Edge37 (Ireland)|`mboxedge37.tt.omtrdc.net`|54.194.132.43<br />99.80.194.24|
|Edge38 (Singapore)|`mboxedge38.tt.omtrdc.net`|54.255.130.26<br />13.213.179.132|

As the load balancers detect changes in the traffic profile, it will scale up or down. The time required for Elastic Load Balancing to scale can range from 1 to 7 minutes, depending on the changes detected. When the load balancers scale, they update the DNS record with the new list of IP addresses. To ensure you are taking advantage of the increased capacity, Elastic Load Balancing uses a TTL setting on the DNS record of 60 seconds.

Here is a script that can be run to get the latest public IPs per load balancer, using Prod KLAM CLI credentials:

<CodeBlock slots="heading, code" repeat="1" languages="CURL" />

#### Latest Public IPs per Load Balancer

```curl
# the script will iterate over all regions of AWS
regions=" ap-south-1 ap-northeast-1 us-east-1 us-west-2 ap-southeast-2  eu-west-1 ap-southeast-1"
 
for region in $regions
do
     echo "\nListing IP's by Edge ALB in region:'$region'..."
     aws ec2 describe-network-interfaces --filters Name=description,Values="*-ingressnginx-albd-*" --query 'NetworkInterfaces[*].PrivateIpAddresses[*].Association.PublicIp' --output text --region $region
done
```