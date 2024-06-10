^https:\/\/user\.ihuaben\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/huaben.js
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