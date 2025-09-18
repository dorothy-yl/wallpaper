// 系统相关工具函数

/**
 * 获取状态栏高度
 * @returns {number} 状态栏高度（px）
 */
export const getStatusBarHeight = () => {
  // 获取系统信息
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo.statusBarHeight || 0;
};

/**
 * 获取导航栏高度（状态栏 + 导航栏）
 * @returns {number} 导航栏总高度（px）
 */
export const getNavBarHeight = () => {
  const systemInfo = uni.getSystemInfoSync();
  const statusBarHeight = systemInfo.statusBarHeight || 0;
  // 不同平台导航栏高度不同
  let navBarHeight = 44; // 默认高度
  
  if (systemInfo.platform === 'android') {
    navBarHeight = 48;
  } else if (systemInfo.platform === 'ios') {
    navBarHeight = 44;
  }
  
  return statusBarHeight + navBarHeight;
};
