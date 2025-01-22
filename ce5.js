

[General]
ip-mode = v4-only
dns-server = system
sni-sniffing = true
disable-stun = false
dns-reject-mode = LoopbackIP
domain-reject-mode = DNS
udp-fallback-mode = REJECT
wifi-access-http-port = 7222
wifi-access-socks5-port = 7221
allow-wifi-access = false
interface-mode = auto
test-timeout = 2
disconnect-on-policy-change = false
switch-node-after-failure-times = 3
internet-test-url = http://connectivitycheck.platform.hicloud.com/generate_204
proxy-test-url = http://www.gstatic.com/generate_204
resource-parser = https://raw.githubusercontent.com/sub-store-org/Sub-Store/release/sub-store-parser.loon.min.js
geoip-url = https://geodata.kelee.one/Country-Masaiki.mmdb
ipasn-url = https://geodata.kelee.one/GeoLite2-ASN-P3TERX.mmdb
skip-proxy = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local,e.crashlynatics.com
bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32


[Proxy]


[Remote Proxy]
临时 = https://sub.store/download/%E4%B8%B4%E6%97%B6?target=Loon,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true
恒古|小花花 = https://subneko.v1999.sbs/study/xuexi/v999/hneko?token=9289c2b55388152d2b12bcb0f5ceefd3,parser-enabled = true,udp=false,fast-open=false,vmess-aead=true,skip-cert-verify=default,enabled=true,flexible-sni=true
国宝 = https://gbtgurl.me/api/v1/client/subscribe?token=bd0f388767d29819fced466ec0a19675,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true
Sub-时之沙 = https://sub.store/download/collection/%E6%97%B6%E4%B9%8B%E6%B2%99?target=Loon,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true,img-url=https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/icon/AmyTelecom.png
恒古|爱坤坤 = https://bintb.no-mad-world.club/link/YPQeaRsk6043xLOt?clash=3&extend=1,parser-enabled = true,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true
恒古|马铃薯 = https://mlshu.xyz/api/v1/client/subscribe?token=b4a9133e8905e22bc1633d2c5d36939d,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true
恒古|新加坡 = https://mydy.xlm.plus/api/v1/client/subscribe?token=79d413df2ea00624c76fe831e429a449,udp=true,fast-open=false,vmess-aead=true,skip-cert-verify=default,enabled=false,flexible-sni=true
恒古|一元鸡 = https://sub2.smallstrawberry.com/api/v1/client/subscribe?token=2fad1c967c41a55dbb91a4af9abc510d,parser-enabled = true,udp=true,fast-open=default,vmess-aead=true,skip-cert-verify=true,enabled=false,flexible-sni=true

[Remote Filter]
香港节点 = NameRegex, FilterKey = "^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
台湾节点 = NameRegex, FilterKey = "^(?=.*((?i)🇹🇼|台湾|(\b(TW|Tai|Taiwan)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
日本节点 = NameRegex, FilterKey = "^(?=.*((?i)🇯🇵|日本|川日|东京|大阪|泉日|埼玉|(\b(JP|Japan)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
韩国节点 = NameRegex, FilterKey = "^(?=.*((?i)🇰🇷|韩国|韓|首尔|(\b(KR|Korea)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
新国节点 = NameRegex, FilterKey = "^(?=.*((?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
美国节点 = NameRegex, FilterKey = "^(?=.*((?i)🇺🇸|美国|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|(\b(US|United States)(\d+)?\b)))(?!.*((?i)回国|校园|游戏|🎮|(\b(GAME)\b))).*$"
游戏节点 = NameRegex, FilterKey = "^(?=.*((?i)游戏|🎮|(\b(GAME)(\d+)?\b)))(?!.*((?i)回国|校园)).*$"
全球节点 = NameRegex, FilterKey = "^(?=.*(.))(?!.*((?i)群|邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|支持|(\b(USE|USED|TOTAL|EXPIRE|EMAIL|Panel)\b|(\d{4}-\d{2}-\d{2}|\dG)))).*$"

[Proxy Group]
# --------------------------------
# 场景策略
香港手动场景 = ssid,default=香港手动策略,cellular=香港手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
台湾手动场景 = ssid,default=台湾手动策略,cellular=台湾手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
日本手动场景 = ssid,default=日本手动策略,cellular=日本手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
韩国手动场景 = ssid,default=韩国手动策略,cellular=韩国手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
新国手动场景 = ssid,default=新国手动策略,cellular=新国手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
美国手动场景 = ssid,default=美国手动策略,cellular=美国手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
游戏手动场景 = ssid,default=游戏手动策略,cellular=游戏手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
全球手动场景 = ssid,default=全球手动策略,cellular=全球手动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
香港自动场景 = ssid,default=香港自动策略,cellular=香港自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
台湾自动场景 = ssid,default=台湾自动策略,cellular=台湾自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
日本自动场景 = ssid,default=日本自动策略,cellular=日本自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
韩国自动场景 = ssid,default=韩国自动策略,cellular=韩国自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
新国自动场景 = ssid,default=新国自动策略,cellular=新国自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
美国自动场景 = ssid,default=美国自动策略,cellular=美国自动策略,"春江花月夜"=DIRECT,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SSID.png
# --------------------------------
# 地区策略
香港手动策略 = select,香港节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
台湾手动策略 = select,台湾节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
日本手动策略 = select,日本节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
韩国手动策略 = select,韩国节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
新国手动策略 = select,新国节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
美国手动策略 = select,美国节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png
游戏手动策略 = select,游戏节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/GAME.png
全球手动策略 = select,全球节点,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png
香港自动策略 = select,香港时延优选,香港故障转移,香港负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
台湾自动策略 = select,台湾时延优选,台湾故障转移,台湾负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
日本自动策略 = select,日本时延优选,日本故障转移,日本负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
韩国自动策略 = select,韩国时延优选,韩国故障转移,韩国负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
新国自动策略 = select,新国时延优选,新国故障转移,新国负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
美国自动策略 = select,美国时延优选,美国故障转移,美国负载均衡,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png
# --------------------------------
# 自动策略
香港时延优选 = url-test,香港节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
台湾时延优选 = url-test,台湾节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
日本时延优选 = url-test,日本节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
韩国时延优选 = url-test,韩国节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
新国时延优选 = url-test,新国节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
美国时延优选 = url-test,美国节点,interval = 60,tolerance = 50,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png

香港故障转移 = fallback,香港节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
台湾故障转移 = fallback,台湾节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
日本故障转移 = fallback,日本节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
韩国故障转移 = fallback,韩国节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
新国故障转移 = fallback,新国节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
美国故障转移 = fallback,美国节点,interval = 60,max-timeout = 2000,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png

香港负载均衡 = load-balance,香港节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png
台湾负载均衡 = load-balance,台湾节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png
日本负载均衡 = load-balance,日本节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png
韩国负载均衡 = load-balance,韩国节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png
新国负载均衡 = load-balance,新国节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png
美国负载均衡 = load-balance,美国节点,interval = 60,max-timeout = 2000,algorithm = pcc,img-url = https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png
# --------------------------------
# 兜底策略后备
兜底后备策略 = fallback,香港自动场景,台湾自动场景,日本自动场景,韩国自动场景,新国自动场景,美国自动场景,interval = 60,max-timeout = 2000,img-url = https://github.com/shindgewongxj/WHATSINStash/raw/main/icon/fallback.png

[Rule]
DOMAIN,log-api.pangolin-sdk-toutiao-b.com,DIRECT
GEOIP,fnos.yuehua.xin,DIRECT
# Local Rule
# Type:DOMAIN-SUFFIX,DOMAIN,DOMAIN-KEYWORD,USER-AGENT,URL-REGEX,IP-CIDR,IP-CIDR6,IP-ASN
# Strategy:DIRECT,Proxy,REJECT
# Options:no-resolve(no-resolve(only for cidr))
# IP-CIDR,192.168.0.0/16,DIRECT
# IP-CIDR,10.0.0.0/8,DIRECT
# IP-CIDR,172.16.0.0/12,DIRECT
# IP-CIDR,127.0.0.0/8,DIRECT
# 配置文件已自带远程GEOIP,cn,DIRECT规则，请勿在此添加
# 请勿修改远程CN REGION规则的排序甚至删除
IP-CIDR,28.0.0.1/8,DIRECT
IP-CIDR,198.18.0.1/16,DIRECT
IP-CIDR,198.18.0.0/15,DIRECT
IP-CIDR6,fc00::/18,DIRECT
FINAL,兜底后备策略
[Remote Rule]
https://rule.kelee.one/Loon/Telegram.list, policy=兜底后备策略, tag=Telegram, enabled=true
https://kelee.one/Tool/Loon/Rule/TikTok.list, policy=新国手动场景, tag=TikTok, enabled=true
https://kelee.one/Tool/Loon/Rule/AI.list, policy=美国手动场景, tag=AI, enabled=true
https://kelee.one/Tool/Loon/Rule/AppleID.list, policy=DIRECT, tag=Apple Account, enabled=true
https://kelee.one/Tool/Loon/Rule/AppStore.list, policy=DIRECT, tag=App Store, enabled=false
https://rule.kelee.one/Loon/GitHub.list, policy=兜底后备策略, tag=GitHub, enabled=true
https://rule.kelee.one/Loon/Netflix.list, policy=新国手动场景, tag=Netflix, enabled=true
https://rule.kelee.one/Loon/YouTube.list, policy=兜底后备策略, tag=Youtube, enabled=true
https://rule.kelee.one/Loon/Disney.list, policy=兜底后备策略, tag=Disney, enabled=true
https://rule.kelee.one/Loon/Twitter.list, policy=兜底后备策略, tag=Twitter, enabled=true
https://rule.kelee.one/Loon/Facebook.list, policy=兜底后备策略, tag=Facebook, enabled=true
https://rule.kelee.one/Loon/Instagram.list, policy=兜底后备策略, tag=Instagram, enabled=true
https://rule.kelee.one/Loon/Spotify.list, policy=兜底后备策略, tag=Spotify, enabled=true
https://rule.kelee.one/Loon/Google.list, policy=兜底后备策略, tag=Google, enabled=true
https://rule.kelee.one/Loon/OneDrive.list, policy=兜底后备策略, tag=OneDrive, enabled=true
https://kelee.one/Tool/Loon/Rule/LAN_SPLITTER, policy=DIRECT, tag=LAN, enabled=true
https://kelee.one/Tool/Loon/Rule/REGION_SPLITTER, policy=DIRECT, tag=CN REGION, enabled=true


https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Telegram/Telegram.list, policy=兜底后备策略, tag=电报消息, enabled=true
https://kelee.one/Tool/Loon/Rule/TikTok.list, policy=兜底后备策略, tag=TikTok, enabled=true
https://kelee.one/Tool/Loon/Rule/AI.list, policy=美国策略, tag=Open AI, enabled=true
https://kelee.one/Tool/Loon/Rule/AppleID.list, policy=DIRECT, tag=Apple ID, enabled=true
https://kelee.one/Tool/Loon/Rule/AppStore.list, policy=DIRECT, tag=App Store, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/GitHub/GitHub.list, policy=手动变更, tag=GitHub, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Netflix/Netflix.list, policy=手动变更, tag=奈飞, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/YouTube/YouTube.list, policy=手动变更, tag=Youtube, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Disney/Disney.list, policy=手动兜底, tag=迪士尼, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Twitter/Twitter.list, policy=手动变更, tag=推特, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Facebook/Facebook.list, policy=手动兜底, tag=Facebook, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Instagram/Instagram.list, policy=手动变更, tag=Instagram, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Spotify/Spotify.list, policy=手动变更, tag=Spotify, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/Google/Google.list, policy=手动变更, tag=谷歌, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/OneDrive/OneDrive.list, policy=手动兜底, tag=OneDrive, enabled=true
https://kelee.one/Tool/Loon/Rule/LAN, policy=DIRECT, tag=LAN, enabled=true
https://kelee.one/Tool/Loon/Rule/CN_REGION, policy=DIRECT, tag=CN REGION, enabled=true

[Host]
ssid:春江花月夜 = server:192.168.21.1


[Rewrite]

[Script]
cron "0 0 * * *" script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/1024.js, timeout=60, tag=草榴社区, img-url=https://raw.githubusercontent.com/Yuheng0101/X/main/Assets/1024.png
cron "0 10 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/bfc5527ad3ea8ac7b0820ca442442452/raw/iqoo.js, timeout=60, tag=IQOO签到
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/leiyiyan/resource/main/script/lhtj/lhtj.js, timeout=60, tag=龙湖天街
cron "0 9 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/3e1fe82fa18dbcff9b2ae7fdad7596a6/raw/ppmt.js, timeout=60, tag=泡泡玛特
cron "0 0/59 8-22 * * ?" script-path=https://raw.githubusercontent.com/Yuehuaer/Yue/refs/heads/main/Time/qianye.js, timeout=60, tag=千夜
cron "0 0/35 8-22 * * ?" script-path=https://raw.githubusercontent.com/Yuehuaer/Yue/refs/heads/main/Time/meizitu.js, timeout=60, tag=万古如长夜
cron "15 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/9aab5b214f3145e39639a2581e83bb27/raw/yuchenios.js, timeout=60, tag=雨晨
cron "0 0/50 8-23 * * ?" script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/javday.js, timeout=10, tag=JavDay每日推荐
cron "0 0/45 8-22 * * ?" script-path=https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/PixivShow/Script/PixivShow.js, timeout=300, tag=PixivShow, img-url=https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/Files/PixivShowICON.png
cron "0 0 * * *" script-path=https://github.com/xzxxn777/Surge.git, timeout=60, tag=雪乃库
cron "0 9 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/74ce859af0cd8a602b00bf5efdfddb53/raw/cst.js, timeout=60, tag=城市通
cron "10 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/250a02315f0a2c99f42da3b3573375c8/raw/xcbwc.js, timeout=60, tag=小蚕霸王餐
cron "5 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/8b4f5487e0f28786c7dec9c7484dcd5e/raw/teaMilk.js, timeout=60, tag=奶茶多合一
cron "7 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/4d0e9572b99530b7cb0e7298622aa2a9/raw/naixue.js, timeout=60, tag=奈雪的茶
cron "30 6-23 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/hotsearch/hot.js, timeout=60, tag=热搜监控
cron "11 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/6d15658e313eee254a55d2b97933587c/raw/jsb.js, timeout=60, tag=杰士邦
cron "12 0 * * *" script-path=https://raw.githubusercontent.com/Crazy-Z7/Task/main/Tuhyche.js, timeout=60, enabled=false, tag=途虎养车
cron "0 7,11,17 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/33800a98dcd029ba09f8b6fc6f0f5162/raw/aliyun.js, timeout=60, tag=阿里云盘
cron "30 10 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/845cf469e4762afdc83c3949be006609/raw/pgsh.js, timeout=60, tag=胖乖生活
cron "10 0 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/865c82e42a5730bb696f6700ebb94cee/raw/mxbc.js, timeout=60, tag=蜜雪冰城
cron "55 8,17 * * 1-6" script-path=https://raw.githubusercontent.com/Toperlock/Quantumult/main/task/dd_daily.js, timeout=60, tag=钉钉打卡
cron "30 6-23 * * *" script-path=https://raw.githubusercontent.com/Toperlock/Quantumult/main/task/hotoday.js, timeout=60, tag=今日热搜
cron "15 15 * * *" script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/moyu.js, timeout=60, tag=摸鱼摸鱼
cron "0 10 * * *" script-path=https://raw.githubusercontent.com/Yuehuaer/Yue/refs/heads/main/Time/huilv.js, timeout=60, tag=汇率监控
cron "5 10 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/gist/restore.js, timeout=60, enabled=false, tag=Gist恢复



  
[Remote Script]
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/JingCai/JingCai.sgmodule/_end_/JingCai.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=鲸才招聘, enabled=true
https://raw.githubusercontent.com/mw418/Loon/main/script/jd_price.js, tag=京东比价, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/YiLi/YiLi.sgmodule/_end_/YiLi.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=伊利, enabled=true
https://raw.githubusercontent.com/Former-Years/Surge/refs/heads/main/Script/erke.js, tag=鸿星尔克, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/anyehttp/quantumult-x/main/task/lccd.js/_end_/lccd.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=莱充充电, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/leiyiyan/resource/main/script/cfmoto/cfmoto.js/_end_/cfmoto.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=春风摩托, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/leiyiyan/resource/main/script/lhtj/lhtj.js/_end_/lhtj.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=龙湖天街, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/wf021325/qx/refs/heads/main/task/wps.js/_end_/wps.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=WPS, enabled=true
https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/zippo.js, tag=Zippo, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/ThomasCook.js/_end_/ThomasCook.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=托迈酷客, enabled=true
https://raw.githubusercontent.com/anyehttp/quantumult-x/main/task/ziwi-loon.plugin, tag=Ziwi猫粮, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/WangChao/WangChao.sgmodule/_end_/WangChao.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=望潮, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/Toperlock/Quantumult/main/task/oil_price.js/_end_/oil_price.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=今日油价, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/dls.js/_end_/dls.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=杜蕾斯, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/Crazy-Z7/Task/main/Tuhyche.js/_end_/Tuhyche.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=途虎, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/dompling/Script/master/gist/backup.js/_end_/backup.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=Boxjs备份恢复, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/hlbdy.js/_end_/hlbdy.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=黑料不打烊, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/TongLu/TongLu.sgmodule/_end_/TongLu.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=潇洒桐庐, enabled=true
https://raw.githubusercontent.com/leiyiyan/resource/main/script/zeeho/zeeho.js, tag=极核, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/DaChao/DaChao.sgmodule/_end_/DaChao.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=大潮, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/ZTE/ZTE.sgmodule/_end_/ZTE.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=中兴手机, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/YueCheng/YueCheng.sgmodule/_end_/YueCheng.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=今日越城, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/YongPai/YongPai.sgmodule/_end_/YongPai.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=甬派, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/FTEJ/FTEJ.sgmodule/_end_/FTEJ.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=福田w家, enabled=true
https://gist.githubusercontent.com/Sliverkiss/6b4da0d367d13790a9fd1d928c82bdf8/raw/dlm.js, tag=达美乐, enabled=true
http://script.hub/file/_start_/https://gist.githubusercontent.com/Sliverkiss/250a02315f0a2c99f42da3b3573375c8/raw/xcbwc.js/_end_/xcbwc.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=小蚕霸王餐, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/SDL/SDL.sgmodule/_end_/SDL.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=三得利, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/wf021325/qx/master/task/zeekr.js/_end_/zeekr.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=极氪签到, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/RQSP/RQSP.sgmodule/_end_/RQSP.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=日清食品, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/MSWEFLS/MSWEFLS.sgmodule/_end_/MSWEFLS.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=麦斯威尔, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/xxyx/xxyx_signin.js/_end_/xxyx_signin.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=晓晓优选, enabled=true
https://gist.githubusercontent.com/Sliverkiss/8b4f5487e0f28786c7dec9c7484dcd5e/raw/teaMilk.js, tag=奶茶多合一, enabled=true
https://gist.githubusercontent.com/Sliverkiss/1589f69e675019b0b685a57a89de9ea5/raw/quarkV2.js, tag=夸克签到, enabled=true
https://gist.githubusercontent.com/Sliverkiss/4d0e9572b99530b7cb0e7298622aa2a9/raw/naixue.js, tag=奈雪的茶, enabled=true
https://raw.githubusercontent.com/leiyiyan/resource/main/script/aliyun_web/aliyun_web.js, tag=阿里云服务, enabled=true
https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/4ksj.js, tag=4k世界, enabled=true
https://raw.githubusercontent.com/ClydeTime/BiliBili/main/modules/BiliBiliDailyBonus.plugin, tag=哔哩哔哩签到, enabled=true
https://raw.githubusercontent.com/leiyiyan/resource/main/script/wdzhsy/wdzhsy.js, tag=万达智慧商业, enabled=true
https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/pp_parking.js, tag=PP停车, enabled=true
https://gist.githubusercontent.com/Sliverkiss/585daf69a0a6c7243db8993f5394a124/raw/youzan.js, tag=有赞小程序, enabled=true
https://gist.githubusercontent.com/Sliverkiss/6d15658e313eee254a55d2b97933587c/raw/jsb.js, tag=杰士邦, enabled=true
https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/appstore/AppMonitor.js, tag=App价格监控, enabled=true
https://gist.githubusercontent.com/Sliverkiss/865c82e42a5730bb696f6700ebb94cee/raw/mxbc.js, tag=蜜雪冰城, enabled=true
https://raw.githubusercontent.com/shengetui/qx/main/xxcd.js, tag=星星充电, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/wf021325/qx/master/task/ampDache.js/_end_/ampDache.plugin?type=qx-rewrite&target=loon-plugin&del=true, tag=高德打车, enabled=true
https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/top.js, tag=热搜聚盒, enabled=true
https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/60s.js, tag=每天60秒, enabled=true
https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/hotsearch/hot.js, tag=热门监控, enabled=true
https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jparking_sign.js, tag=捷停车, enabled=true

[Plugin]
https://kelee.one/Tool/Loon/Plugin/LoonGallery.plugin, policy=兜底后备策略, enabled=true
https://kelee.one/Tool/Loon/Plugin/Block_HTTPDNS.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/BlockAdvertisers.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Remove_ads_by_keli.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/QuickSearch.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Prevent_DNS_Leaks.plugin, policy=兜底后备策略, enabled=true
https://kelee.one/Tool/Loon/Plugin/Node_detection_tool.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/TestFlightRegionUnlock.plugin, policy=DIRECT, enabled=true
https://kelee.one/Tool/Loon/Plugin/BoxJs.plugin, policy=兜底后备策略, enabled=true
https://kelee.one/Tool/Loon/Plugin/Sub-Store.plugin, policy=兜底后备策略, enabled=true
https://kelee.one/Tool/Loon/Plugin/Script-Hub.plugin, policy=兜底后备策略, enabled=true
http://script.hub/file/_start_/https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/ZXJL/ZXJL.sgmodule/_end_/ZXJL.plugin?type=qx-rewrite&target=loon-plugin&del=true, enabled=true
https://github.com/Yuheng0101/Hostname_Monitor/releases/download/Auto_Update/heiliao.sgmodule, tag=黑料网, enabled=true
https://raw.githubusercontent.com/LD2J0618/loon/refs/heads/plugin%26rule/wechat.sgmoduule, enabled=false
https://kelee.one/Tool/Loon/Plugin/Zhihu_remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/RedPaper_remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/MeetYou_remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Bilibili_remove_ads.plugin, enabled=false
https://kelee.one/Tool/Loon/Plugin/Cainiao_remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/51Job_remove_ads.plugin, enabled=true
https://github.com/BiliUniverse/Enhanced/releases/latest/download/BiliBili.Enhanced.plugin, tag=哔哩哔哩, enabled=true
https://github.com/BiliUniverse/Enhanced/releases/latest/download/BiliBili.Enhanced.plugin, enabled=true
https://gist.githubusercontent.com/YoshichikaTokyo/2fb31b8d7123dfcbd5d3d9ddfa34831f/raw/SakuraChatCookie.plugin, enabled=true
https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.loon.plugin, enabled=true
https://github.com/fmz200/wool_scripts/raw/main/Loon/plugin/blockAds.plugin, enabled=true
https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Loon.plugin, policy=手动兜底, enabled=true
https://raw.githubusercontent.com/deezertidal/private/master/plugallery/appraven.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/NodeLinkCheck.Plugin, enabled=true
https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Plugin/skip-proxy.plugin, enabled=true
https://raw.githubusercontent.com/deezertidal/private/master/plugallery/NodeLinkCheck.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/TikTok_redirect.plugin, enabled=false
https://kelee.one/Tool/Loon/Plugin/Switch_repository_source.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Weixin_external_links_unlock.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Auto_Join_TF.plugin, enabled=false
https://kelee.one/Tool/Loon/Plugin/WexinMiniPrograms_Remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Amap_remove_ads.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Weixin_Official_Accounts_remove_ads.plugin, enabled=true
https://raw.githubusercontent.com/fangkuia/XPTV/main/X/xptv.plugin, tag=XPTV分流, enabled=true
https://gist.githubusercontent.com/Sliverkiss/74ce859af0cd8a602b00bf5efdfddb53/raw/cst.js, tag=城市通, enabled=true
https://kelee.one/Tool/Loon/Plugin/KingdeeMyMoney_remove_ads.plugin, tag=随手记, enabled=true
https://github.com/VirgilClyne/GetSomeFries/raw/main/plugin/DNS.plugin, tag=Dns, enabled=true
https://raw.githubusercontent.com/Yuehuaer/Yue/refs/heads/main/Plugins/javdb.plugin, tag=JavDB, img-url=https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/YouTubeMusic.png, enabled=true
https://kelee.one/Tool/Loon/Plugin/YouTube_remove_ads.plugin, tag=YouTube去广告, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/Loon/Advertising/Advertising.plugin, tag=Advertising, enabled=true
https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Plugin/MediaCheck.plugin, tag=Node Detection Tool, enabled=true
https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Plugin/TF-Download.plugin, tag=TF-Download, enabled=true
https://kelee.one/Tool/Loon/Plugin/LoonGallery.plugin, policy=手动兜底, enabled=true
https://kelee.one/Tool/Loon/Plugin/Block_HTTPDNS.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/BlockAdvertisers.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Remove_ads_by_keli.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/QuickSearch.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/Prevent_DNS_Leaks.plugin, policy=手动兜底, enabled=true
https://kelee.one/Tool/Loon/Plugin/Node_detection_tool.plugin, enabled=true
https://kelee.one/Tool/Loon/Plugin/TestFlightRegionUnlock.plugin, policy=DIRECT, enabled=true
https://kelee.one/Tool/Loon/Plugin/BoxJs.plugin, policy=手动兜底, enabled=true



[MITM]
hostname = fnos.yuehua.xin:1599,feiniu.yuehua.xin
ca-p12 = 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
ca-passphrase = KA09EAZW
enable = false
skip-server-cert-verify = false
