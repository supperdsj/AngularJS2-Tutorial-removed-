import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component';
import {NgContentComponent} from '../ng-content';
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
export class InlineStyleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
