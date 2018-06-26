# webpack-preload-filelist-plugin

### 项目介绍 - Description
webpack 生成 json 文件给 preload 加载资源

### 安装 - Install
```
yarn add webpack-preload-filelist-plugin -D

or

npm install --save-dev webpack-preload-filelist-plugin
```

### 使用说明 - Usage
在 webpack.config.js 里引入并添加

```
const WebpackPreloadFilelistPlugin = require('webpack-preload-filelist-plugin');

module.exports = {
    // ...
    plugins: [
      new WebpackPreloadFilelistPlugin(),
    ]
};
```