/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-13 13:42:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-13 21:03:13
 * @FilePath: \JS\爬虫\新爬虫.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const axios = require('axios');
const cheerio = require('cheerio');
const notifier = require('node-notifier');

const url = 'https://www.meizi5.com/'; // 你想要爬取的网页URL

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const images = [];

    // 选择所有图片标签，并将它们的src属性值添加到images数组中
    $('img').each((index, element) => {
      const imgSrc = $(element).attr('src');
      if (imgSrc) {
        images.push(imgSrc);
      }
    });

    // 图片链接获取完毕后发送通知
    notifier.notify({
      title: '图片链接获取完成',
      message: `共找到${images.length}张图片`,
      icon: 'path/to/image', // 可选的，可以是绝对路径或相对路径
      sound: true, // 可选的，是否播放提示音
      wait: true // 可选的，是否等待用户交互
    }, (err, response) => {
      // 通知发送完毕后的回调
      if (err) throw err;
      console.log(response);
    });

    console.log(images); // 输出所有找到的图片链接
  })
  .catch(error => {
    console.error('Error fetching the webpage:', error);
  });