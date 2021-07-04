import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss"

import "taro-ui/dist/style/components/button.scss"; // 按需引入

interface IProps{
    title: string
}


const TopTitle: React.FC<IProps> = (props) => {



  return (
    <View className="TopTitle">
       <View className="btn_h"></View> <Text className="title_text">{props.title}</Text>
    </View>
  );
};

export default TopTitle;
