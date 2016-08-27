# learnAngularjs2
angularjs2(基于rc4)的学习历程
##目录
1. ##快速构建一个angularjs2项目
###安装 typescript 和 typings
``npm install -g typescript typings``  

由于angular2是基于typescript构建，所以我们必须安装typescript。  

###安装 angular-cli 
``npm install -g angular-cli``  
angularjs2的配置较为繁杂,安装angular-cli可以帮助我们快速的构建angularjs2项目
####常用 angular-cli 命令
* ng new project-name - 创建一个新项目，置为默认设置
* ng generate directive my-directive - 生成一个新指令
* ng generate pipe my-pipe - 生成一个新管道
* ng generate service my-service - 生成一个新服务
* ng generate route my-route - 生成一个新路由
* ng generate class my-class - 生成一个简易的模型类
* ng build - 构建/编译应用
* ng test - 运行单元测试
* ng e2e - 运行端到端（end-to-end）测试
* ng serve - 启动一个小型web服务器，用于托管应用
* ng deploy - 即开即用，部署到Github Pages或者Firebase
###使用 angular-cli 新建一个 angularjs2 项目
``ng new hello-world``
在命令行内执行该命令既会新建一个名为hello-world的项目
###使用 angular-cli 启动简易服务器来测试项目
``ng server``

切换到项目目录执行该命令后 angular-cli 会在端口4200启动一简易项目,并可通过[http://localhost:4200](http://localhost:4200)进行访问,--port参数指定端口号。
###修改显示内容为hello world !
进入/src/app/app.component.ts内，修改该Component为如下代码
```
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'hello wolrd !';
}
```
我们可以看到，该Component内指定了模板文件为app.component.html,样式文件为app.component.css,现在我们打开app.component.html查看模板，如下：
```
<h1>
  {{title}}
</h1>
```
此时绑定变量和angular的预防相同，现在我们再在模板内随意添加一些内容，如：
```
<h1>
  {{title}}
</h1>
<p>this is my first app</p>
```
再次打开[http://localhost:4200](http://localhost:4200)进行访问，可看到我们的页面内容已经修改为对应的内容。
###angular-cli构建项目各目录的用途（欢迎补充和指正）
* config/ - 各种项目配置和环境变量
* dist/ - 项目编译后的文件
* e2e/ - 测试实例
* node_modules/ - 依赖模块
* public/ - 公共资源，如js、css等
* src/ - **实际编写项目的目录**
* src/index.html - angularjs2的入口页面，同时该页面内会引入各个依赖，并引入angularjs2的入口函数bootstrap所在的文件
* src/main.ts - 项目生成后默认的执行bootstrap函数的ts文件
* src/system-config - 项目生成后默认的存放声明依赖的ts文件
* src/tsconfig.json - typescript的配置文件
* src/typings.d.ts - typescript的类型声明
* tmp/ - angular-cli的临时文件
* typings/ - typescript，src/typings.d.ts相关的typings
* angular-cli.json - angular-cli的配置文件，该文件内可对angular-cli进行一些配置，如defaults.prefix课修改后默认生成的前缀

