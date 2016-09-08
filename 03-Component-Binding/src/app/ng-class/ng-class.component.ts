import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ng-class',
  template: `
    <h2>
      ng-class Works!
    </h2>
    <p [ngClass]="{redColor:true,redBorder:true,redBackground:false}">
        ngClass demo
    </p>
  `,
  styles: [`
    .redColor{
        color: red;
    }
    .redBorder{
        border:1px solid red;
    }
    .redBackground{
        background-color: red;
    }
  `]
})
export class NgClassComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
