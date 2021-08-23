// pages/index/index.js
const myRequest = require("../../api/index.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgList:[
        '/image/swiper/ad1.jpg',
        '/image/swiper/ad2.jpg',
        '/image/swiper/ad3.jpg',
        '/image/swiper/ad4.jpg',
        '/image/swiper/ad5.jpg',
        '/image/swiper/ad6.jpg',
        '/image/swiper/ad7.jpg',
      ],
      swiperCurrent:0,
      navList:[
        {
          icon:'/image/nav-icon/diantai.png',
          events:"goToBangDan",
          text:"榜单"
        },{
          icon:'/image/nav-icon/diantai.png',
          events:"goToBangDan",
          text:"听小说"
        },{
          icon:'/image/nav-icon/diantai.png',
          events:"goToBangDan",
          text:"情感电台"
        },{
          icon:'/image/nav-icon/diantai.png',
          events:"goToBangDan",
          text:"听知识"
        }
      ],
  },
  swiperChange:function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      myRequest.getData().then( res => {
        this.setData({
          showitem: true,
          guess:res.data.guess.list.slice(0,3),
          xiaoshuocontent:res.data.hotRecommends.list[0].list,
          xiangshengcontent: res.data.hotRecommends.list[2].list,
        })
      }).catch(error =>{
        this.setData({
          showitem:false
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})