// pages/patient-list/add-patient/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newPatient:{
      name:'',
      idNum:'',
      sex:'',
      age:'',
      adress:'',
      isSelf:false,
      isDefault:false
    },
    // region:
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    sexArray: ['男','女'],
  },

  bindRegionChange:function(e){
    console.log(e);
    console.log( this.data.newPatient)
    this.data.newPatient.region=e.detail.value
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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