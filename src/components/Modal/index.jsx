import React, { Component, useState, useEffect } from 'react'
import { CoverView } from '@tarojs/components'

import './index.less'


const Index = (props) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const { content, title = '', okText = '确定', cancelText = '取消', cancelShow = true, onOk = () => {}, onCancel = () => {} } = props;

  return <CoverView className={show ? 'c-modal' : 'c-modal hide'}>
    <CoverView className="modal-layout">
      {title && <CoverView className="title">{title}</CoverView>}
      <CoverView className="content long-text">{content}</CoverView>
      <CoverView className="modal-footer">
        <CoverView className={cancelShow ? 'btn btn-cancel' : 'btn btn-cancel hide'} onClick={() => {
          onCancel();
          setShow(false);
        }}>{cancelText}</CoverView>
        <CoverView className="btn btn-ok" onClick={() => {
          onOk();
          setShow(false);
        }}>{okText}</CoverView>
      </CoverView>
    </CoverView>
  </CoverView>;
};

export default Index

