const GET = 'get';
const POST = 'post';

const baseURL = 'http://121.204.145.122:18087/cdr';  // 接口请求地址
// const baseURL = 'http://xxx.com';  // 接口请求地址

module.exports = function (options) {
    return new Promise(function(resolve, reject) {
        let header = {
            'content-type': 'application/json'
        };
        wx.request({
            url: baseURL + options.url,
            method: options.method,
            data: options.method === POST ? JSON.stringify(options.data) : options.data,
            header: header,
            success(res) {
              // 请求到接口前页面展示loading
              wx.showLoading({
                title: '加载中...',
                success: function() {
                  // 请求成功
                  // 判断状态码，根据后端定义来判断
                  // if (res.data.code == 600) {
                  //     resolve(res);
                  // } else {
                  //     // 其他异常
                  //     reject(res);
                  //     wx.showToast({
                  //       title: res.data.msg,
                  //       icon: 'none'
                  //     })
                  // }
                  resolve(res.data)
                }
              })
            },
            fail: function (err) {
              // 请求失败
              reject(err)
              wx.showToast({
                  title: '网络繁忙，请稍后重试~',
                  icon: 'none'
              })
             },
             complete: function () {
                // 配对使用（loading消失）
                wx.hideLoading();
             }
        })
    })
}