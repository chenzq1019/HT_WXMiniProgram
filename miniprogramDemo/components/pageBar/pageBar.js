// components/pageBar/pageBar.js
Component({
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
    _handletap: function(evt) {
      console.log(evt)
      this.setData({
        currentIndex: evt.currentTarget.id
      })
      this.triggerEvent("pageChange",evt.currentTarget.id)
    },
    _handleChange: function(evt){
      console.log(evt)
      this.setData({
        currentIndex: evt.detail.current
      })
    }
  }
})
