import {Component, OnInit} from '@angular/core';
import {ChildComponentComponent} from '../child-component'
import {SelectorComponent} from '../selector'
import {NgContentComponent} from '../ng-content'
@Component({
  moduleId: module.id,
  selector: 'app-new-component',
  templateUrl: 'new-component.component.html',
  styleUrls: ['new-component.component.css'],
  directives: [ChildComponentComponent,SelectorComponent,NgContentComponent]
})
export class NewComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
