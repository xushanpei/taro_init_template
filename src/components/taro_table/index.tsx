import { ReactNode, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtForm, AtInput, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
interface CLOUMS {
  title?: string;
  dataIndex?: string;
  align?: string;
  width?: number;
  render?: (key: any, record: DATASOURCE) => ReactNode;
}
interface DATASOURCE {
  [key: string]: any;
}

interface IProps {
  columns: Array<CLOUMS>;
  dataSource: Array<DATASOURCE>;
  border?: boolean
}

const Table: React.FC<IProps> = props => {
  console.log("模板数据源", props);
  return (
    <View className="taro_table" style={{border: props.border ? "1Px solid #E5E5E5" : 'none'}}>
      {/* table_header */}
      <View className={"taro_table_header"}>
        {props.columns.map((item, key) => {
          return (
            <View
              style={{ width: `${item.width}%`, textAlign: item.align as any }}
              className="taro_table_header_item"
            >
              {item.title}
            </View>
          );
        })}
      </View>
      <View className={"taro_table_content"}>
        {/* 遍历列 */}
        {props.columns.map((item, key) => {
          console.log(item);
          return (
            <View
            className={"taro_table_content_item"}
              style={{ width: `${item.width}%`, textAlign: item.align as any }}
            >
              {props.dataSource.map((keyStr, index) => {
                if (item.render) {
                  return item.render(keyStr[item.dataIndex],keyStr);
                }
                return <View>{keyStr[item.dataIndex]}</View>;
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Table;
