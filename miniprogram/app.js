App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
      wx.getSetting({
        withSubscriptions: true,
        success: res => {
          if(res.authSetting["scope.userInfo"]){
              //如果授权
              wx.getUserInfo({
                lang: lang,
                success:res => {
                    this.globalData.userInfo = res.userInfo
                    this.globalData.login = false
                    if(this.userInfoReadCallback){
                      this.userInfoReadCallback(res)
                    }
                }
              })
          }

        }
      })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData: {
    userInfo: null,
    login:false
  }
})
