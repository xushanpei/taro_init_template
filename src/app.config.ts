// 动态设置 pages
// 获取页面路径
const getPages = () => {
  const path = [
    "pages/login/login",
    "pages/setting/setting", 
    "pages/index/index",
  ]
  // 非生产环境注册debug承载页
  // if (process.env.NODE_ENV !== 'production') {
  //   path.push('pages/debug/debug')
  // }

  // console.log(path)
  return path
}


export default {
  pages: getPages(),
  // 分包
  subpackages: [
    {
      root: "pages/submitStatus/",
      pages: [
        "submitStatus"
      ]
    },
    //billingRecord
    {
      root: "pages/billingRecord/",
      pages: [
        "billingRecord"
      ]
    },
    {
      root: "pages/debug/",
      pages: [
        "debug"
      ]
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/images/tab_index.png",
        selectedIconPath: "assets/images/tab_index_active.png"
      },
      {
        pagePath: "pages/setting/setting",
        text: "个人中心",
        iconPath: "assets/images/tab_setting.png",
        selectedIconPath: "assets/images/tab_setting_active.png"
      }
    ],
    color: "#AAAAAA",
    selectedColor: "#333333",
    backgroundColor: "#fff",
    borderStyle: "white"
  }
};
