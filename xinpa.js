// 此脚本需要在 Quantumult X 的脚本功能中运行

// 定义请求的 URL
const url = "https://www.meizi5.com/";

// 发送 HTTP 请求
$httpClient.get(url, function(error, response, data) {
  if (error) {
    // 发生错误时，输出错误信息
    console.log("Error: " + error);
  } else {
    // 使用正则表达式匹配所有图片的 src 属性
    const regex = /<img.*?src="(.*?)".*?>/g;
    let match;
    const images = [];

    // 循环匹配所有图片链接
    while ((match = regex.exec(data)) !== null) {
      images.push(match[1]);
    }

    // 输出所有找到的图片链接
    console.log("Found " + images.length + " images: " + images.join(", "));

    // 通知用户（Quantumult X 支持的通知方式）
    $notification.post("图片链接获取完成", "", "共找到" + images.length + "张图片");
  }
});
