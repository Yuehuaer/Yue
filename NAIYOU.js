
[rewrite_local]

^https:\/\/nz-api\.duitang\.com\/account\/me\/   url script-response-body



hostname = nz-api.duitang.com



/******************************/
// 获取重写接口的响应信息
var obj =  JSON.parse($response.body);

//此处进行修改响应信息
{
  "status" : 1,
  "message" : "success",
  "data" : {
    "id" : 3977395,
    "bindQQ" : false,
    "vip" : true,
    "version" : 1,
    "bindWechat" : true,
    "createAt" : "2023-08-21 10:08:42",
    "avatar" : "",
    "bindApple" : false,
    "updateAt" : "2023-08-21 10:08:42",
    "statics" : {
      "payTotal" : 0,
      "blogCollectTotal" : 0,
      "blogDownloadTotal" : 0
    },
    "nickname" : "",
    "telephone" : "2",
    "status" : 0,
    "bindPhone" : false
  }
}
// 将修改后的响应数据返回
$done(JSON.stringify(obj));

 

