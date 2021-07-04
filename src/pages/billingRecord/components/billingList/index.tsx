import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtPagination } from "taro-ui";
import Table from "../../../../components/taro_table";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const BillingList: React.FC = () => {
  const dataSource = [
    {
      username: "8888",
      telephone: "123",
      status: "失败"
    },
    {
      username: "小明",
      telephone: "456",
      status: "失败"
    }
  ];

  const columns = [
    {
      title: "购方名称",
      dataIndex: "username",
      width: 25
    },
    {
      title: "开票金额(元)",
      dataIndex: "telephone",
      width: 25
    },
    {
      title: "状态",
      dataIndex: "status",
      width: 25,
      align: "center"
    },
    {
      title: "操作",
      dataIndex: "telephone",
      width: 25,
      align: "center",
      render: (key, record) => {
        return <View className="gotoDetail">查看</View>;
      }
    }
  ];
  return (
    <View>
      <Table border={true} columns={columns} dataSource={dataSource} />
      <View className="pagination">
        <AtPagination icon total={50} pageSize={10} current={1}></AtPagination>
      </View>
    </View>
  );
};

export default BillingList;
