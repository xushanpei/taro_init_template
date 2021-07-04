import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtPagination } from "taro-ui";
import ExamineList from "./components/examineList";
import BillingList from "./components/billingList";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/pagination.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./billingRecord.scss";

const BillingRecord: React.FC = () => {
  const tabList = [{ title: "审核列表" }, { title: "开票列表" }];
  const [current, setCurrent] = useState<number>(0);
  return (
    <View>
      <AtTabs
        current={current}
        tabList={tabList}
        onClick={value => setCurrent(value)}
      >
        <AtTabsPane current={current} index={0}>
          <ExamineList />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <BillingList />
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default BillingRecord;
