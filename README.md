# 咸虾米壁纸 🎨

一个基于 uni-app 框架开发的跨平台壁纸应用，支持 H5、小程序、App 等多端部署。

## 📱 项目简介

咸虾米壁纸是一款精美的壁纸应用，提供丰富的高质量壁纸资源，支持分类浏览、每日推荐、壁纸预览和下载等功能。应用采用现代化的 UI 设计，为用户提供流畅的壁纸浏览体验。

## ✨ 功能特性

### 🏠 首页推荐
- **轮播横幅**: 精选壁纸轮播展示
- **公告通知**: 滚动显示最新公告信息
- **每日推荐**: 每日精选高质量壁纸推荐
- **随机壁纸**: 随机发现惊喜壁纸

### 🗂️ 分类浏览
- **多种分类**: 按主题、风格、颜色等维度分类
- **分类列表**: 支持分类下壁纸列表浏览
- **下拉刷新**: 实时获取最新壁纸内容

### 🔍 壁纸预览
- **高清预览**: 支持壁纸高清预览
- **详细信息**: 显示壁纸尺寸、分辨率等信息
- **下载功能**: 一键下载心仪壁纸
- **分享功能**: 支持壁纸分享到社交平台

### 👤 个人中心
- **个人信息**: 用户个人资料管理
- **收藏管理**: 收藏的壁纸统一管理
- **下载历史**: 查看壁纸下载记录
- **设置选项**: 应用个性化设置

## 🛠️ 技术栈

### 前端框架
- **uni-app**: 跨平台应用开发框架
- **Vue 3**: 渐进式 JavaScript 框架
- **Vue Composition API**: 组合式 API

### UI 组件
- **uni-ui**: uni-app 官方 UI 组件库
- **自定义组件**: 定制化业务组件

### 开发工具
- **Vite**: 现代化构建工具
- **TypeScript**: 类型安全的 JavaScript
- **SCSS**: CSS 预处理器

### 多端支持
- **H5**: 移动端网页应用
- **微信小程序**: 微信生态应用
- **支付宝小程序**: 支付宝生态应用
- **百度小程序**: 百度智能小程序
- **字节跳动小程序**: 抖音、今日头条小程序
- **QQ小程序**: QQ 生态小程序
- **快手小程序**: 快手生态应用
- **App**: 原生移动应用（Android/iOS）

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0
- HBuilderX（推荐）或 VS Code

### 安装依赖
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发运行

#### H5 开发
```bash
npm run dev:h5
```

#### 微信小程序开发
```bash
npm run dev:mp-weixin
```

#### App 开发
```bash
npm run dev:app
```

#### 其他平台
```bash
# 支付宝小程序
npm run dev:mp-alipay

# 百度小程序
npm run dev:mp-baidu

# 字节跳动小程序
npm run dev:mp-toutiao

# QQ小程序
npm run dev:mp-qq

# 快手小程序
npm run dev:mp-kuaishou
```

### 项目构建

#### 生产构建
```bash
# H5 构建
npm run build:h5

# 微信小程序构建
npm run build:mp-weixin

# App 构建
npm run build:app

# 其他平台构建
npm run build:mp-alipay
npm run build:mp-baidu
npm run build:mp-toutiao
npm run build:mp-qq
npm run build:mp-kuaishou
```

## 📁 项目结构

```
wallpaper/
├── api/                    # API 接口管理
│   └── api.js             # 接口定义
├── common/                 # 公共资源
│   └── style/             # 公共样式
├── components/             # 自定义组件
│   ├── common-title/      # 通用标题组件
│   ├── custom-nav-bar.vue # 自定义导航栏
│   └── theme-item/        # 主题项组件
├── pages/                  # 页面文件
│   ├── index/             # 首页
│   ├── classify/          # 分类页
│   ├── classlist/         # 分类列表页
│   ├── preview/           # 预览页
│   ├── search/            # 搜索页
│   ├── notice/            # 公告页
│   └── user/              # 用户中心
├── static/                 # 静态资源
│   └── tabBar/            # 底部导航图标
├── utils/                  # 工具函数
│   ├── common.js          # 通用工具
│   ├── request.js         # 网络请求
│   └── system.js          # 系统相关
├── uni_modules/           # uni-app 插件
├── App.vue                # 应用入口组件
├── main.js                # 应用入口文件
├── manifest.json          # 应用配置文件
├── pages.json             # 页面路由配置
├── uni.scss               # 全局样式变量
└── vite.config.js         # Vite 配置文件
```

## 🔧 配置说明

### manifest.json
应用的基本配置文件，包含：
- 应用基本信息（名称、版本、描述等）
- 各平台特定配置
- 权限配置
- 启动页配置

### pages.json
页面路由和全局样式配置：
- 页面路径和样式配置
- 全局样式设置
- 底部导航栏配置
- easycom 组件自动引入配置

### vite.config.js
Vite 构建工具配置文件

## 🌐 API 接口

项目使用 RESTful API 设计，主要接口包括：

- `GET /homeBanner` - 获取首页轮播图
- `GET /randomWall` - 获取随机壁纸
- `GET /wallNewsList` - 获取公告列表
- `GET /classify` - 获取分类信息
- `GET /wallList` - 获取壁纸列表
- `GET /wallNewsDetail` - 获取壁纸详情

## 📱 兼容性

### 移动端浏览器
- Android >= 4.4
- iOS >= 9

### 小程序平台
- 微信小程序
- 支付宝小程序
- 百度智能小程序
- 字节跳动小程序
- QQ 小程序
- 快手小程序

### App 平台
- Android 原生应用
- iOS 原生应用

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议，详情请参阅 [LICENSE](LICENSE) 文件。

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-username/wallpaper/issues)
- 邮箱: your-email@example.com

## 🙏 致谢

感谢以下开源项目的支持：
- [uni-app](https://uniapp.dcloud.io/) - 跨平台应用开发框架
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui) - uni-app UI 组件库

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
