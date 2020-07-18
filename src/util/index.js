import Taro from '@tarojs/taro';

export const handleNavigaterTo = (url) => () => {
  Taro.navigateTo({
    url,
  });
};

export const handleRedirectTo = (url) => () => {
  Taro.redirectTo({
    url,
  });
};

export const handleSwitchTab = (url) => () => {

  Taro.switchTab({
    url,
  });
};
