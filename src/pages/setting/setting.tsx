import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtModal, AtFab } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/modal.scss";
import "taro-ui/dist/style/components/fab.scss";
import "./setting.scss";

import { useSelector, useDispatch } from "react-redux";
import { GlobalModelState } from "../../models/setting/types";

interface IuserInfo {
  avatarUrl?: string;
  city?: string;
  country?: string;
  gender?: string | number;
  language?: string;
  nickName?: string;
  province?: string;
}

const Setting: React.FC = () => {
  //@ts-ignore
  const userInfo = useSelector(state => state.setting.userInfo).nickName
    ? useSelector(state => state.setting.userInfo)
    : Taro.getStorageSync("userInfo"); // Taro.getStorageSync("userInfo")

  // let info = Taro.getStorageSync("userInfo") as IuserInfo;
  // const [userInfo, setUserInfo] = useState<IuserInfo>(info);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  // 退出前
  const isLogOut = () => {
    // 隐藏 tabbbar
    Taro.hideTabBar({
      animation: true,
      success: () => {
        setIsOpened(true);
      }
    });
  };
  // 取消弹出操作
  const onCancel = () => {
    setIsOpened(false);
    Taro.showTabBar({
      animation: true,
      success: () => {}
    });
  };

  /**
   * 退出登录 清空本地缓存数据  跳转到登录页面
   */
  const logOut = () => {
    Taro.clearStorage();
    Taro.showTabBar({
      success: () => {
        Taro.reLaunch({
          url: "/pages/login/login"
        });
      }
    });
  };

  // 进入debug工具
  const gotoDebug = ()=>{
    Taro.navigateTo({
      url:'/pages/debug/debug'
    })
  }
  return (
    <View>
      <View className="userInfo">
        <Image className="avater" src={userInfo?.avatarUrl}></Image>
        <View className="username">
          <Text className="username_title">{userInfo?.nickName}</Text>
          <Text className="username_phone">188****1262</Text>
        </View>
      </View>
      <View className="logOut" onClick={isLogOut}>
        退出登录
      </View>

      <AtModal
        isOpened={isOpened}
        title="退出登录"
        cancelText="取消"
        confirmText="退出"
        onClose={onCancel}
        onCancel={onCancel}
        onConfirm={logOut}
        content="是否确认退出登录 ?"
      />

      <AtFab onClick={gotoDebug} className="debug">
        <Text className="at-fab__icon at-icon at-icon-settings"></Text>
      </AtFab>
    </View>
  );
};

export default Setting;
