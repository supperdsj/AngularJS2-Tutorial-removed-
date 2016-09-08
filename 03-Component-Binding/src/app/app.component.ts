import {Component} from '@angular/core';
import {DataBindingComponent} from './data-binding';
import {PropertyBindingComponent} from './property-binding';
import {NgClassComponent} from './ng-class'
import {NgStyleComponent} from './ng-style';
import {ComponentPropertyBindingComponent} from './component-property-binding'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DataBindingComponent, PropertyBindingComponent, NgClassComponent, NgStyleComponent, ComponentPropertyBindingComponent]
})
export class AppComponent {
  title = 'app works!';
  timer = 0;
  constructor() {
    setInterval(() => {
      this.timer++;
      console.log(this.timer);
    }, 1000)
  }
}
