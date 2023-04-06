// components/select-patient/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    patientList:[],
    patient:{
      name:'郝家伙',
      sex:'男',
      age:24,
      avatar:''
    },
    hasPatient:false
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    addNewPatient:function(){
      wx.navigateTo({
        url: '/pages/patient-list/index',
      })
    }
  }
})
