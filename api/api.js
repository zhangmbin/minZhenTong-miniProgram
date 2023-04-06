var Mock = require("../utils/WxMock.js");
const request = require('../utils/request')

//  模拟手机号
//  Mock.Random.extend({
//   phone: function () {
//     var phonePrefixs = ['132', '135', '189'] 
//     return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
//   }
// })

module.exports = {

  // test
  getBasicInfo: function getBasicInfo(data) {
    return request({
      url: '/a/cdr/show/normal/getPatientBasicInfo',
      method: 'get',
      params: data
    })
  },

  getMessageList: (data, fn, method = "get") => {
    // 模拟数据
    const res = Mock.mock({
      'code': 200,
      'msg': '',
      'data|10': [{
        'id|+1': 1,
        'img': '@image()',
        'title': '@ctitle(9,20)',
        'published_time': '@datetime()',
      }]
    })
    // 输出结果
    return fn(res);
  },

  getClinicList:(data, fn, method = "get") => {
    const res = Mock.mock({
      'code': 200,
      'msg': '',
      'data|10': [{
        'id|+1': 1,
        'clinic_img': '@image()',
        'clinic_name': '@ctitle(2,8)',
        'clinic_address':'@county(true)',
        'is_nline':'@boolean()',
        'is_appoitable':'@boolean()',
        'score|1-100':1,
        'consultations|1-1000':1
      }]
    })
    return fn(res)
  }
}