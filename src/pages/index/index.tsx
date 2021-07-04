import { Component } from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import Taro, { getUserInfo } from "@tarojs/taro";
import * as api from "../../services/api";
import TopTitle from "./components/TopTitle";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./index.scss";

const Index: React.FC = (): JSX.Element => {
  const scanCode = () => {
    Taro.scanCode({
      success: result => {
        console.log("扫码成功的回调", result);
        // 震动
        Taro.vibrateShort({
          success: () => {
            //扫码成功.跳转到 表单页面
            // 自定义页面
          }
        });
      }
    });

    // //扫码成功.跳转到 表单页面
    // Taro.navigateTo({
    //   url: '/pages/scanCode/scanCode?id=1',
    //   events: {
    //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    //     acceptDataFromOpenedPage: function(data) {
    //       console.log(data)
    //     },
    //     someEvent: function(data) {
    //       console.log(data)
    //     }

    //   },
    //   success: function (res) {
    //     // 通过eventChannel向被打开页面传送数据
    //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
    //   }
    // })
  };

  // 开票记录
  const billingRecord = () => {
    Taro.navigateTo({
      url: "/pages/billingRecord/billingRecord"
    });
  };

  const getDetail = () => {
    api
      .getDetail({
        data: 1232
      })
      .then(res => {
        console.log(res);
      });
  };

  return (
    <View className="homePage">
      <View className="login_bg_color"></View>
      <Swiper
        className="test-h"
        indicatorColor="#F2F2F2"
        indicatorActiveColor="#D8D8D8"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="demo-text-1">
            <Image
              style={{ width: "100%", height: "94px" }}
              src={require("../../assets/images/banner.png")}
            ></Image>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-1">
            <Image
              style={{ width: "100%", height: "94px" }}
              src={require("../../assets/images/banner.png")}
            ></Image>
          </View>
        </SwiperItem>
      </Swiper>
      <View className="login_bg_color"></View>

      {/* 扫码开票 */}
      <View>
        <TopTitle title="便捷开票"></TopTitle>
        <View className="open_bill">
          <View onClick={scanCode} className="open_bill_right"></View>
          <View onClick={billingRecord} className="open_bill_left"></View>
        </View>
      </View>

      <View>
        <TopTitle title="开票指南"></TopTitle>
        <View className="index_line"></View>
        <View className="atList_content">
          <AtList hasBorder={false}>
            <AtListItem
              hasBorder={false}
              title="快捷开盘指南"
              extraText="如何进行快捷开盘呢？"
              arrow="right"
            />
          </AtList>
        </View>
      </View>

      {/* <AtButton onClick={scanCode} type="secondary" circle={true}>
          扫码开票
        </AtButton>

        <AtButton onClick={getDetail} type="secondary" circle={true}>
          测试接口
        </AtButton> */}
    </View>
  );
};
export default Index;
