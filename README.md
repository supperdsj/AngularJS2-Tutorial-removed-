#AngularJs2 Tutorial
AngularJs2(基于rc4)教程 , 欢迎反馈错误和补充内容。
##目录
* ##[1.快速构建一个AngularJs2项目](#1.快速构建一个AngularJs2项目)
* ##[2.Component](#2.Component)
##1.快速构建一个AngularJs2项目
###安装 typescript 和 typings
``npm install -g typescript typings``  

由于angular2是基于typescript构建，所以我们必须安装typescript。  

###安装 angular-cli 
``npm install -g angular-cli``  

AngularJs2的配置较为繁杂,安装angular-cli可以帮助我们快速的构建AngularJs2项目

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

###使用 angular-cli 新建一个 AngularJs2 项目
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
###angular-cli构建项目部分文件及目录的用途
* config/ - 各种项目配置和环境变量
* dist/ - 项目编译后的文件
* e2e/ - 测试实例
* node_modules/ - 依赖模块
* public/ - 公共资源，如js、css等
* src/ - **实际编写项目的目录**
* src/index.html - 入口页面，同时该页面内会引入各个依赖，并引入AngularJs2的引导函数bootstrap所在的文件
* src/main.ts - index.html引用的执行bootstrap引导函数的ts文件
* src/system-config - 项目生成后默认的存放声明依赖的ts文件
* src/tsconfig.json - typescript的配置文件
* src/typings.d.ts - typescript的类型声明
* tmp/ - angular-cli的临时文件
* typings/ - typescript，src/typings.d.ts相关的typings
* angular-cli.json - angular-cli的配置文件，该文件内可对angular-cli进行一些配置，如defaults.prefix课修改后默认生成的前缀

## 2 . Component
###什么是 Component ?
Component 是 AngularJs2 中构建元素和逻辑的主要手段,我们可以利用 Component 来实现 AngularJs 内 Directive ＋ Controller ＋ Scope的功能，即自定义指令。

###一个简单的 Component  
下面是一个简单的 Component：
```
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<div>Hello my name is {{name}}. <button (click)="helloWorld()">Say my name</button></div>'
})
export class MyComponent {
  constructor() {
    this.name = 'dongsj'
  }
  helloWorld() {
     alert('Hello ' + this.name)
  }
}

```
在这段代码内，我们定义了名为 MyComponent 的 Component ，该 Component 内定义了一段模板来显示 name 的内容，并且将 button 的 click 事件绑定了 helloWorld 方法，helloWorld 方法会将 MyComponent 内构造函数初始化的 name 进行显示。该 Component 同时定义了指令为 my-component，在 html 内写入指令对应的标签即可应用名为 MyComponent 的 Component：
```
<my-component></my-component>
```
###利用 angular-cli 创建 Component
```
ng generate component newComponent
```
在 angular-cli生成的项目下,可直接使用 angular-cli 所提供的命令创建 Component , 执行后会在目录 src/app 内生成文件夹 new-component , 在该文件夹内即是 angular-cli 为我们创建的 Component 。 

下面我们来看看 angular-cli 为我们生成的 Component 内都有哪些文件：

* index.ts - 导出该目录下的模块
* new-component.component.css - Component 的样式文件
* new-component.component.html - Component 的模板文件
* new-component.component.spec.ts - Component 的测试文件
* new-component.component.ts - Component 的主文件

下面我们来看看 ng generate component 的各个参数：

* --flat (Boolean) (Default: false) - 是否不生成文件夹,直接生成Component
* --route (Boolean) (Default: false) - 是否生成路由
* --inline-template (Boolean) (Default: false) aliases: -it - 是否直接在 Component 的主文件内定义模板
* --inline-style (Boolean) (Default: false) aliases: -is -是否直接在 Component的主文件内定义样式
* --prefix (Boolean) (Default: true) - 是否为 Component 自动添加前缀
###使用 Component
####在 html 内使用 Component
如果想在 html 页面内使用 Component , 我们需要将 Component 引用到页面内 , 再在 html 内输入 Component 所对应的指令即可。

现在我们将 index.html 内引用之前创建的 newComponent 。首先需要在 main.ts 内添加 newComponent 的引用 。打开new-component.component.ts , 我们可以看到该 export class NewComponentComponent , 即导出了模块 NewComponentComponent , 打开 main.ts 将该模块进行导入并利用引导函数 bootstrap 引入 NewComponentComponent , 添加代码如下:
```
import { NewComponentComponent } from './app/new-component';
...
bootstrap(NewComponentComponent);
```
然后再在 index.html 内使用 new-component 内选择器声明的指令:
```
  <app-new-component></app-new-component>
```
再次打开[http://localhost:4200](http://localhost:4200)进行访问，可以看到 newComponent 已经成功在页面中显示了。
####在 Component 内使用 Component
如果想在 Component 内使用 Component , 我们需要将被使用的 Component 引用到对应 Component 内 , 再在对应的 Component 内的模板中输入 被使用的 Component 所对应的指令即可。

现在我们新建一个名为 childComponent 的 Component , 并在 newComponent 内将其引用。首先利用 angular-cli 新建:
```
ng g c childComponent //angular-cli可以将命令进行缩写
```
然后在 newComponent 的主文件 new-component.component.ts 内添加 newComponentComponent 模块的引用 , 并利用 Component 的 Directive 属性引用 newComponentComponent 模块内的指令 , 修改后代码如下:
```
import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component'

@Component({
  moduleId: module.id,
  selector: 'app-new-component',
  templateUrl: 'new-component.component.html',
  styleUrls: ['new-component.component.css'],
  directives: [ChildComponentComponent]
})
export class NewComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
```
最后再在 newComponent 的模板文件 new-component.html内添加 newComponent 的指令 app-child-component , 添加代码如下: 
```
<app-child-component></app-child-component>
```
再次打开[http://localhost:4200](http://localhost:4200)进行访问，可以看到 newComponent 内已经成功嵌套了 childComponent。

###Component 的 selector
###Component 的 template
###Component 的 style

