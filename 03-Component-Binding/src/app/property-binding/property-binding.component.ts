import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    <h2>
        property-binding Works!
    </h2>
    <p>
        inputValue:{{inputValue}}
    </p>
    Use double braces:<input type="text" id="input1" value="{{inputValue}}"> <br>
    Use middle bracket:<input type="text" id="input2" [value]="inputValue"> <br>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  inputValue = 'inputValue';

  constructor() {
  }

  ngOnInit() {
  }

}
