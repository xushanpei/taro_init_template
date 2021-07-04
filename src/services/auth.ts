import Taro from "@tarojs/taro"

/**
 * 判断用户登录状态是否过期或者未登录
 * 如果未登录或者身份过期,直接跳转到登录页
 */
export const checkLogin = ()=>{
    if(Taro.getStorageSync('userInfo')){
        Taro.checkSession({
            success:  ()=> {
              //session_key 未过期，并且在本生命周期一直有效
              console.log('不需要登录')
              Taro.switchTab({
                url: '/pages/index/index'
              })
            },
            fail:  ()=> {
              // session_key 已经失效，跳转到login
              console.log('需要登录')
              Taro.clearStorage()
              Taro.reLaunch({
                url: '/pages/login/login'
              })
            }
          })
    }else{
      console.log('login')
        Taro.reLaunch({
            url: '/pages/login/login'
          })
    }
}