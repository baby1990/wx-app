import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import TabBar from '../../components/TabBar';

import './index.less'


const Index = () => {

  return <View className="page-personal">
    <View>我的</View>
    <TabBar activeIndex={2} />
  </View>;
};

export default Index

