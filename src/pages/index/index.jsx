import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'

import './index.less'

import TabBar from '../../components/TabBar';

import Modal from '../../components/Modal';

const Index = () => {

  return <View className="page-index">

    <TabBar activeIndex={0} />

    <Modal
      show={false}
      title="提示"
      content="看看撒框架的撒凯迪拉克萨拉开大是考虑打开了萨迪克萨克对抗赛拉的卡萨丁凯撒考虑到卡"
      cancelShow={false}
    />

  </View>;
};

export default Index

