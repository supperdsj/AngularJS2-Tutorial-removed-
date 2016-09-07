import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  // selector: 'app-selector,.app-selector,#app-selector2,[app-selector]',
  selector: '#app-selector2,app-selector,.app-selector,[app-selector]',
  templateUrl: 'selector.component.html',
  styleUrls: ['selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
