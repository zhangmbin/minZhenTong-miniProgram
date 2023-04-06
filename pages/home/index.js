// pages/home/index.js

import {
  getMessageList,
  getUserList,
  getBasicInfo
} from '../../api/api';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [],
    message: {},
    userForm: {
      name: '',
      id: 0,
      number: 0
    },
    
    //test
    params: {
      mpiId: 1506392
    },

    positionList:['美国', '中国', '巴西', '日本'],
    currentPosi:0


  },

  showAppointmentPage: function(){
    wx.navigateTo({
      url: '/pages/appointment-register/index'
    })
  },
  showConsultationPage: function(){
    wx.navigateTo({
      url: '/pages/online-consultation/index'
    })
  },
  
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // let user = wx.getStorageSync('user')
    // this.setData({
    //   userInfo: user
    // })
    // wx.getUserProfile({
    //   desc: '必须授权才能使用',
    //   success: res => {
    //     let user = res.userInfo
    //     wx.setStorageSync('user', user)
    //     console.log('成功', res)
    //     this.setData({
    //       userInfo: user
    //     })
    //   },
    //   fall: res => {
    //     console.log('失败', res)
    //   }
    // })


    const that = this
    getMessageList('', function (res) {
      // 使用 Mock
      const {data} = res
      that.setData({
        messageList: data
      })
    });
    // console.log(this.data.messageList);

    getBasicInfo(this.data.params).then((res) => {
      // console.log('api test',res);
    })

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
    //导航栏切换
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    console.log('0000');
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