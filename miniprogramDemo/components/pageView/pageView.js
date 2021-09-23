// components/pageView/pageView.js
Component({
  externalClasses:['page-class'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
      "pageItems": {
         type: Array,
         value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleTap: function(evt){
      console.log("tap")
      console.log(evt)
      let current = parseInt(evt.detail)
      this.setData({
        currentIndex: current
      })
    },
    _handleChange: function(evt){
      console.log(evt)
      let pageBar = this.selectComponent(".pageBar")
      pageBar._handleChange(evt)
    }
  }
})
