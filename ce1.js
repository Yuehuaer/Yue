/******************************
脚本功能：书书猫
脚本作者：Yue
更新时间：2024-07-12
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.iyykj\.cn\/ url script-response-body https://raw.githubusercontent.com/Yuehuaer/QX/main/ce1.js
[mitm] 
hostname = api.iyykj.cn
*******************************/
var Yue = $response.body;
var obj =  JSON.parse(Yue);
if($request.url.indexOf("/api/app/user/info") != -1) {
 obj={
   "code" : 200,
  "data" : {
    "beanNum" : 0,
    "vipEndTime" : 2099-01-01T00:00:00,
    "inviteCode" : "SZRGUB4V",
    "gmtCreate" : "2024-07-12T16:19:52",
    "userName" : "bl0104882",
    "userStatus" : 1,
    "vipFlag" : 1,
    "nickName" : "Yue",
    "avatar" : null,
    "invitedFlag" : true,
    "goldNum" : 0,
    "vipType" : 1,
    "vipStartTime" : 2099-01-01T00:00:00,
    "gender" : 0
  },
  "msg" : "获取成功",
  "traceId" : "5c005461-803c-4fad-9031-91c3f8b7bdf4"
 };
}
Yue = JSON.stringify(obj);
$done({body;Yue});
