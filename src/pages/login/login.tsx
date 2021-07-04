import { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import { useSelector, useDispatch } from "react-redux";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./login.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";

const Login: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  // const login = () => {
  //   Taro.login({
  //     success: result => {
  //       console.log(result);
  //       setIsOpened(true);
  //       setCode(`code: ${result.code}`);

  //       getUserInfo();
  //     }
  //   });
  // };

  const getUserInfo = () => {
    Taro.getUserProfile({
      desc: "用于完善会员资料",
      success: ({ userInfo }) => {
        console.log(userInfo);
        /**
         * 用户信息保存到本地
         */
        Taro.setStorageSync("userInfo", userInfo);
        // 保存到 dva 
        dispatch({
          type:"setting/setUserInfo",
          data:{
            userInfo
          }
        })



        /**
         * 授权成功调用登录
         */
        Taro.login({
          success: result => {
            console.log(result);
            setIsOpened(true);
            setCode(`code: ${result.code}`);

            // 路由跳转
            Taro.switchTab({
              url: "/pages/index/index"
            });
          }
        });
      }
    });
  };

  // useEffect(() => {
  //   Taro.setNavigationBarTitle({
  //     title: '测试数据'
  //   })
  // }, []);

  return (
    <View className="login">
      <Image
        className="login_bg"
        src={require("../../assets/images/login_bg.png")}
      ></Image>
      <View className="login_btn">
      <AtButton onClick={getUserInfo} type="primary">
        微信登录
      </AtButton>
      </View>
      <AtToast isOpened={isOpened} text={code}></AtToast>
    </View>
  );
};
export default Login;
