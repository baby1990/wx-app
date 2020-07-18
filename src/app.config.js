export default {
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/personal/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,

    color: '#333',
    selectedColor: '#FF8A30',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',


    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现',
      },
      {
        pagePath: 'pages/personal/index',
        text: '我的',
      },
    ],
  },
}
