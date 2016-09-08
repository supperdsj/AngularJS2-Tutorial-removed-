import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ng-style',
  template: `
    <h2>
      ng-style Works!
    </h2>
    <p [ngStyle]="{'color':color1,'border':color1+' solid 1px'}">color1</p>
    <p [ngStyle]="{'color':color2,'border':color2+' solid 1px'}">color2</p>
    <p [ngStyle]="{'color':color3,'border':color3+' solid 1px'}">color3</p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  color1 = 'red';
  color2 = 'green';
  color3 = 'blue';

  constructor() {
  }

  ngOnInit() {
  }

}
