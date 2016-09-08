import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component-property-binding',
  template: `
    <h2>
      component-property-binding Works!
    </h2>
    <p>{{componentProperty}}</p>
  `,
  styles: []
})
export class ComponentPropertyBindingComponent implements OnInit {
  @Input() componentProperty: number = 0;
  constructor() {
  }

  ngOnInit() {
  }

}
