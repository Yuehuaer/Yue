// 此脚本需要在Quantumult X的脚本功能中运行

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
      // 添加图片链接到数组
      images.push(match[1]);
    }

    // 检查是否找到图片
    if (images.length > 0) {
      // 选择第一张图片进行展示
      const firstImage = images[0];

      // 在Quantumult X中展示通知
      $notification.post("图片获取成功", "", "第一张图片: " + firstImage);
      // 这里可以添加更多的逻辑来处理其他图片
    } else {
      $notification.post("图片获取失败", "", "没有找到图片链接");
    }

    // 输出所有找到的图片链接
    console.log("Found images: " + images.join(", "));
  }
});
