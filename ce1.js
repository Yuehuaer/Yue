/******************************
脚本功能：书书猫
脚本作者：Yuer
更新时间：2024-07-12
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
 ^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Yuehuaer/QX/main/ce1.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
var Yuer = $response.body;
var obj =  JSON.parse(Yuer);
if($request.url.indexOf("/api/app/user/info") != -1)  {
 obj.subscriber.subscriptions.qbit_8_month.is_sandbox = true
}
Yuer = JSON.stringify(obj);
$done({body;Yuer});
