const request = require('../utils/request')
// 注册   这里的data不写params全部写data作为参数的传递
export default {
  getMedicalList(data) {
    return request({
      url: '/a/clinical/show/intergrateView/main/getPrescAndAdvice',
      method: 'post',
      data
    })
  }
}
