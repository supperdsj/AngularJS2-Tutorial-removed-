import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component'
@Component({
  moduleId: module.id,
  selector: 'app-new-component',
  templateUrl: 'new-component.component.html',
  styleUrls: ['new-component.component.css'],
  directives: [ChildComponentComponent]
})
export class NewComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
