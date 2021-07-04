import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { Debug } from '@jdlfe/minidebug-next'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './debug.scss'

const Bug: React.FC = () => {

  return (
    <View className="ddddd">
      <Debug/>
    </View>
  );
};

export default Bug;
