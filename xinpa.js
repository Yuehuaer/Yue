// 定义请求的 URL
const apiUrl = "https://3650000.xyz/api";

// 发送 HTTP 请求
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // 解析返回的数据
    const imageUrl = data.url;

    // 输出图片链接
    console.log("Image URL: " + imageUrl);

    // 在浏览器中展示通知，并可以点击打开图片链接
    Notification.requestPermission().then(function(result) {
      if (result === 'granted') {
        var notification = new Notification('图片链接获取完成', {
          body: '点击查看图片',
          image: imageUrl
        });
        notification.onclick = function(event) {
          window.open(imageUrl, '_blank');
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
