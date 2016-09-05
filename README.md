#AngularJS 2 Tutorial
AngularJs2(基于rc4)教程 , 欢迎反馈错误和补充内容。

##目录
* [1.快速构建一个AngularJs2项目](#1.快速构建一个angularjs2项目)
* [2.Component 基础](#2.Component-基础)  
 
---
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

##2.Component 基础
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
```
最后再在 newComponent 的模板文件 new-component.html内添加 newComponent 的指令 app-child-component , 添加代码如下: 
```
<app-child-component></app-child-component>
```
再次打开[http://localhost:4200](http://localhost:4200)进行访问，可以看到 newComponent 内已经成功嵌套了 childComponent。

*因 angular-cli 在生成 Component 时会默认为文件名和导出的模块自动添加相关后缀 ，故之后新建的 Component 不再为 Component 添加冗余后缀*
###Component 的 selector
Component 可以自定义选择器来针对不同的指令进行应用，修改 Component 主文件内 selector 属性的内容即可。我们先新建一个名为 selector 的 Component ， 并将其引用到 main.ts 中 , 再在 index.html 内添加如下指令：
```
<app-selector>app-selector</app-selector>
  <div class="app-selector">.app-selector</div>
  <div id="app-selector1">#app-selector</div>
  <div app-selector>[app-selector]</div>
```
然后修改 selector 主文件内的 selector 属性依次如下：
*  app-selector - 标签选择器
*  .app-selector - 类选择器
*  #app-selector - id选择器
*  [app-selector] - 属性选择器

如需应用多个选择器来指定指令，用","将选择器间进行分隔即可，如：app-selector,#app-selector,.app-selector。此时网页内只有第一个标签应用 Component 成功。
将同样的指令应用到 newComponent 中，我们发现除 #app-selector 以外的指令均应用成功。

**在 AngularJS 2 RC 4 中，不能重复应用同一 root Component ， Component 的 id 选择器与标签选择器或类选择器不能同时应用。**
###Component 的 template
Component 可以通过在 Component 主文件内 templateUrl 或 template 属性来定义模板 。 如使用 templateUrl 属性则 Component 会寻找对应的文件来加载模板 ; 如使用 template 属性则 Component 会在主文件内根据该属性的字段来加载模板。 
angular-cli 默认使用 templateUrl 来定义模板 , 现在我们使用 angular-cli 来新建一个名为 inlineTemplate 的 Component , 并使用 template 来定义模板。执行命令:
```
ng generate component inlineTemplate --inline-template // 可简写为 ng g c inlineTemplate --it
```
对比之前 Component 的文件结构我们可以发现 , 添加 --inline-template 参数后 , angular-cli 并没有生成 Component 的模板文件 , 然后我们打开 Component 的主文件 inline-template.component.ts , 可以看到如下代码:
```
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-inline-template',
  template: `
    <p>
      inline-template Works!
    </p>
  `,
  styleUrls: ['inline-template.component.css']
})
```
我们可以看到 , angular-cli 已经为我们添加了 template 属性 , 并在该属性内写了一段 html 的 demo。
###Component 的 style
Component 可以通过在 Component 主文件内 styleUrls 或 styles 属性来定义CSS样式 。 如使用 styleUrls 属性则 Component 会寻找对应的文件来应用CSS样式 ; 如使用 template 属性则 styles 会在主文件内根据该属性的字段来应用CSS样式。 
angular-cli 默认使用 styleUrls 来定义CSS样式 , 现在我们使用 angular-cli 来新建一个名为 inlineStyle 的 Component , 并使用 styleUrls 来定义CSS样式。执行命令:
```
ng generate component inlineStyle --inline-style // 可简写为 ng g c inlineStyle --is
```
对比之前 Component 的文件结构我们可以发现 , 添加 --inline-style 参数后 , angular-cli 并没有生成 Component 的样式文件 , 然后我们打开 Component 的主文件 inline-style.component.ts , 可以看到如下代码:
```
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-inline-style',
  templateUrl: 'inline-style.component.html',
  styles: []
})
```
我们可以看到 , angular-cli 已经为我们添加了 styles 属性 , 但现在该属性内的样式并为定义 , 接下来我们在该属性中添加一段 CSS 样式 , 将 templateUrl 修改为 template , 并将 child-component 加载到此 Component 中 , 最终 Component 代码如下:
```
import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component';
@Component({
  moduleId: module.id,
  selector: 'app-inline-style',
  template: `
  <h1> My name is inline-style! </h1>    
  <p>
    inline-style works! <br>
    <app-child-component></app-child-component>
  </p>
    `,
  styles: [`
    p {
        color: red;
    }
    `],
  directives: [ChildComponentComponent]
})
```
查看页面后我们可以发现 , 虽然我们在 Component 中以 p 作为 CSS 样式的选择器 , 但只有 app-inline-style 下的 p 标签的样式受到了影响 , 与其他 Component 的 p 标签的样式相隔离。我们打开 chrome 的开发者工具可以看到如下 html 代码:
```
<app-inline-style _nghost-fqi-1="">
  <h1 _ngcontent-fqi-1=""> My name is inline-style! </h1>
  <p _ngcontent-fqi-1="">
    inline-style works! <br _ngcontent-fqi-1="">
    <app-child-component _ngcontent-fqi-1="" _nghost-fqi-2="">
    <p _ngcontent-fqi-2="">
        child-component works!
    </p>
    </app-child-component>
  </p>
</app-inline-style>
```
我们可以发现 , AngularJS2 为每一个 Component 都添加了随机的属性 , 然后我们查看 p 标签的 CSS 样式 , 每个 p 标签也被添加了对应的属性选择器 , 结果就实现了 CSS 样式的 Component 隔离。
###利用 ng-content 在 Component 内显示内容
Component 会默认将对应指令内的全部内容替换为模板内的内容 , 如果我们需要保留指令内的内容则需要使用 ng-content 在模板内指定内容出现的位置 , 我们新建一个名为 ngContent 的 Component 来进行演示:
```
@Component({
  moduleId: module.id,
  selector: 'app-ng-content',
  template: `
    <p>
      ng-content Works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
```
然后将该 Component 加载到 new-component 内:
```
<app-ng-content>there is ng-content</app-ng-content>
```
页面上会出现如下 html 代码:
```
<app-ng-content _ngcontent-buv-1="">
    <p>
      ng-content Works!
    </p>
    there is ng-content
  </app-ng-content>
```
但是在 index.html 内用同样的方法则只出现了如下 html 代码:
```
<app-ng-content>
    <p>
      ng-content Works!
    </p>
</app-ng-content>
```
**在 Angular 2 RC 4 暂时还不支持 root Component 内使用 ng-content 加载数据。**

