import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtNavBar } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./submitStatus.scss";

const SubmitStatus: React.FC = () => {
  return (
    <View className="submit_page">
      <View className="submit_page_status">
        <View>
          <Image
            className="status_img"
            src={require("../../assets/images/success.png")}
          ></Image>
        </View>
        开票申请已提交
      </View>
      {/* setup */}
      <View className="setup">
        <View className="setup_container">
          <View className="title">提交开票申请</View>
          <View className="subTitle">后台将尽快为您开票</View>
        </View>
        <View className="setup_container">
          <View className="title">开票完成</View>
          <View className="subTitle">
            开票完成后，系统会将发票推送到您的邮箱
          </View>
        </View>
      </View>

      {/* 完成 */}
      <View className="success_btn">
        <AtButton type="primary">完 成</AtButton>
      </View>
    </View>
  );
};

export default SubmitStatus;
