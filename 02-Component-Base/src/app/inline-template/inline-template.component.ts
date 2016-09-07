import { Component, OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-inline-template',
  template: `
    <p>
      inline-template Works!
    </p>
  `,
  styleUrls: ['inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
