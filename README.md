# 介绍
测试react的一些ui库，dist目录下是打包以后的文件，src/ReactUI/目录是相关源码。该仓库是在一个测试webpack的仓库基础上修改的，所以src目录下的其他文件请忽略。


# 使用

* clone或者下载该分支
* `cd learnCoding`
* `npm install`
* shell执行 `webapck-dev-server --color`, 启动服务 , 如果找不到 `webpack-dev-server` 命令 , 请全局安装 `npm install webpack-dev-server -g`
* 浏览器访问 //localhost:666/
* 修改src/ReactUI/main.js, `import App from './XXXApp.js';` , 引入不同ui库对应的react component , 无需刷新 , 浏览器页面热更新
