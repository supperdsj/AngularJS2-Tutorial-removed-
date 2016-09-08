import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-data-binding',
  template: `
    <h2>
        data-binding Works!
    </h2>
    <p>
        stringInterpolation:{{stringInterpolation}}
    </p>
  `,
  styles: []
})
export class DataBindingComponent implements OnInit {

  stringInterpolation = 'There is string interpolation';

  constructor() {
  }

  ngOnInit() {
  }

}
