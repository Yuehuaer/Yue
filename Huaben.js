/******************************
脚本功能：话本小说-去广告，解锁本地会员标识
脚本作者：Yue
更新时间：2024-07-12
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/user\.ihuaben\.com\/ url script-response-body https://raw.githubusercontent.com/Yuehuaer/QX/main/Huaben.js
[mitm] 
hostname = user.ihuaben.com
*******************************/

var Yue = $response.body;
var obj =  JSON.parse(Yue);

if($request.url.indexOf("/api/userinfo") != -1) {
    obj.nickName = "Yuehua";
    obj.isPaymentMember = obj.isMember = true;
}

Yue = JSON.stringify(obj);
$done(Yue);



