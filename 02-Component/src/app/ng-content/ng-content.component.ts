import { Component, OnInit } from '@angular/core';

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
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
