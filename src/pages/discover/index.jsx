import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import TabBar from '../../components/TabBar';

import './index.less'


const Index = () => {

  return <View className="page-discover">
    <View>发现页</View>
    <TabBar activeIndex={1} />
  </View>;
};

export default Index

