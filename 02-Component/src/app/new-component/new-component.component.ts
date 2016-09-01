import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component'
import {SelectorComponent} from '../selector'
@Component({
  moduleId: module.id,
  selector: 'app-new-component',
  templateUrl: 'new-component.component.html',
  styleUrls: ['new-component.component.css'],
  directives: [ChildComponentComponent,SelectorComponent]
})
export class NewComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
