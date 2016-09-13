import {Component} from '@angular/core';
import {DataBindingComponent} from './data-binding';
import {PropertyBindingComponent} from './property-binding';
import {NgClassComponent} from './ng-class'
import {NgStyleComponent} from './ng-style';
import {ComponentPropertyBindingComponent} from './component-property-binding'
import {EventBindingComponent} from './event-binding'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DataBindingComponent, PropertyBindingComponent, NgClassComponent, NgStyleComponent, ComponentPropertyBindingComponent,EventBindingComponent]
})
export class AppComponent {
  title = 'app works!';
  timer = 0;
  constructor() {
    setInterval(() => {
      this.timer++;
    }, 1000)
  }
}
