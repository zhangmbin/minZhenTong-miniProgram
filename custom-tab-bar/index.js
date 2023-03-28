Component({
  data: {
    selected: 0,
    color: "#AFB8CB ",
    selectedColor: "#0075FF",
    list: [{
      "pagePath": "/pages/home/index",
      "text": "首页",
      "iconPath": "../icons/home.png",
      "selectedIconPath": "../icons/home.png"
    },
    {
      "pagePath": "/pages/clinic/index",
      "text": "诊所",
      "iconPath": "../icons/clinic.png",
      "selectedIconPath": "../icons/clinic-selected.png"
    },
    {
      "pagePath": "/pages/user/index",
      "text": "我的",
      "iconPath": "../icons/user.png",
      "selectedIconPath": "../icons/user.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})