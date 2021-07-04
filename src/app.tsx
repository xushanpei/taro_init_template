import { Component, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import "./app.scss";
import { checkLogin } from "./services/auth";
import Taro from "@tarojs/taro";

// 此处必须使用 react-redux 否则报错
import { Provider } from "react-redux";

import dva from "./utils/dva";

import models from "./models";

// 集成 dva
const dvaApp = dva.createApp({
  initialState: {},
  models,
  enableLog: false
});
const store = dvaApp.getStore();

const App: React.FC = ({ children }): JSX.Element => {
  useEffect(() => {
    /********************************************************************************* */
    // 环境切换配置
    // 参考实现
    const ROOT_PATH = {
      development: "https://test.test.com",
      prepare: "https://uat.test.com",
      production: "https://prod.test.com"
    };

    const registerApp = () => {
      try {
        // 先获取miniDebug中修改的env环境变量，有效取值为"development"、"prepare"、"production"
        const env = Taro.getStorageSync("env") || "production";
        // 根据miniDebug设置的env，更改网络请求URL
        // 你的项目可能识别的设置方式，目的是更改网络请求的base URL
        Taro.getApp().globalData.Http.config.root = ROOT_PATH[env];
      } catch (e) {}
    };
    // 此段代码通常在小程序入口文件，onLoad第一行
    // Taro.getApp().needResetHttp为true，代表用户通过miniDebug修改了环境变量
    if (Taro.getApp().needResetHttp) {
      // 将标识重置
      Taro.getApp().needResetHttp = false;
      // resetHttp即为更改环境变量的方法，需要自行实现
      registerApp();
    }
    /********************************************************************************* */

    // 检查是否需要登录
    checkLogin();

    // 获取系统信息
    Taro.getSystemInfo({}).then(res => {
      console.log(res);
    });
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default App;

// class App extends Component {
//     componentWillMount() {
//         checkLogin();

//         Taro.showLoading({
//             title: '加载中',
//           })
//           setTimeout(function () {
//             Taro.hideLoading()
//           }, 2000)
//     }

//     componentDidShow() {}

//     componentDidHide() {}

//     componentDidCatchError() {}
//     render() {
//       return this.props.children
//     }
//   }

//   export default App;
