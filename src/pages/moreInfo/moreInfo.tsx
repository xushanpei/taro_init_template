import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtForm, AtInput, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "./moreInfo.scss";

const MoreInfo: React.FC = () => {
  return (
    <View className="detail_content">
      <AtInput
        customStyle={{ textAlign: "right" }}
        name="value1"
        title="公司地址："
        type="phone"
        placeholder="请输入公司地址"
        value={null}
        onChange={() => {}}
      />
      <AtInput
        customStyle={{ textAlign: "right" }}
        name="value1"
        title="公司电话："
        type="phone"
        placeholder="请输入公司电话"
        value={null}
        onChange={() => {}}
      />
      <AtInput
        customStyle={{ textAlign: "right" }}
        name="value1"
        title="开户行："
        type="phone"
        placeholder="请输入开户行"
        value={null}
        onChange={() => {}}
      />
      <AtInput
        customStyle={{ textAlign: "right" }}
        name="value1"
        title="账户："
        type="phone"
        placeholder="账户"
        value={null}
        onChange={() => {}}
      />
      <AtInput
        customStyle={{ textAlign: "right" }}
        name="value1"
        title="备注："
        type="phone"
        placeholder="备注"
        value={null}
        onChange={() => {}}
      />
    </View>
  );
};

export default MoreInfo;
