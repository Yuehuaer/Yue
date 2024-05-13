// 此脚本需要在Quantumult X的脚本功能中运行

// 定义API的 URL
const apiUrl = "https://3650000.xyz/api";

// 使用 Quantumult X 的 $task.fetch 发送 HTTP 请求
$task.fetch({
  url: apiUrl,
  method: "GET",
}).then(response => {
  // 响应成功
  const data = response.body;
  try {
    // 将响应体转换为JSON对象
    const jsonData = JSON.parse(data);

    // 假设JSON数据中有一个名为"image"的字段，它包含了图片的链接
    const imageUrl = jsonData.image;

    // 检查是否成功获取到图片链接
    if (imageUrl) {
      // 在Quantumult X中展示通知
      $notification.post("图片获取成功", "", "图片链接: " + imageUrl);
      // 这里可以尝试使用内置的打开链接功能，但这通常用于HTTP/HTTPS链接
      // $openUrl(imageUrl);
    } else {
      $notification.post("图片获取失败", "", "没有找到图片链接");
    }
  } catch (error) {
    // JSON解析失败或图片链接不存在
    $notification.post("图片获取失败", "", "解析JSON时发生错误");
    console.log("Error parsing JSON: " + error);
  }
}, reason => {
  // 请求失败
  $notification.post("图片获取失败", "", "请求API时发生错误: " + reason.error);
  console.log("Error: " + reason.error);
});
