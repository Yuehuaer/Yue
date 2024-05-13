/// 定义请求的 URL
const apiUrl = "https://3650000.xyz/api";

// 发送 HTTP 请求
$httpClient.get(apiUrl, function(error, response, data) {
  if (error) {
    // 发生错误时，输出错误信息
    console.log("Error: " + error);
  } else {
    // 解析返回的数据
    const responseData = JSON.parse(data);

    // 获取图片链接
    const imageUrl = responseData.url;

    // 输出图片链接
    console.log("Image URL: " + imageUrl);

    // 在 Quantumult X 上展示通知，并可以点击打开图片链接
    $notification.post("图片链接获取完成", "", "点击查看图片", imageUrl);
  }
});
