import React, { Component, useState } from 'react'
import { View, Button, Text } from '@tarojs/components'

import { handleSwitchTab } from '../../util';
import './index.less'


const Index = (props) => {

  const { activeIndex } = props;

  return <View className="custom-tab-bar">
    <View className={`item${activeIndex === 0 ? ' active' : ''}`} onClick={handleSwitchTab('/pages/index/index')} >
      <View className="item-icon icon-home"></View>
      <View className="item-title">首页</View>
    </View>
    <View className={`item${activeIndex === 1 ? ' active' : ''}`} onClick={handleSwitchTab('/pages/discover/index')} >
      <View className="item-icon icon-discover"></View>
      <View className="item-title">发现</View>
    </View>

    <View className={`item${activeIndex === 2 ? ' active' : ''}`} onClick={handleSwitchTab('/pages/personal/index')}>
      <View className="item-icon icon-me"></View>
      <View className="item-title">我的</View>
      {/*<View className="btn-wrap absolute absolute-fill">*/}
      {/*</View>*/}
      <Button className="btn-user" open-type="getUserInfo"></Button>
    </View>
  </View>;
};

export default Index

