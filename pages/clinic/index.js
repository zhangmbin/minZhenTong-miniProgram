// pages/clinic/index.js
import { getClinicList } from '../../api/api';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clinicList:[],
    positionList:['美国', '中国', '巴西', '日本'],
    currentPosi:0,
    clinicForm:{}
  },

  changePicker(){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
  },

  showClinicDetail:function(event){
    console.log(event);
    // const {id} = e.currentTarget.dataset.clinic;
    wx.navigateTo({
      url: `/pages/clinic-detail/index`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    //获取诊所列表
    getClinicList('',function(res){
      const {data} = res
      that.setData({
        clinicList:data
      })
    })
    console.log('clinic',this.data.clinicList);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
    console.log('11111');
  }

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})