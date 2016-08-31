import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  templateUrl: 'child-component.component.html',
  styleUrls: ['child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
