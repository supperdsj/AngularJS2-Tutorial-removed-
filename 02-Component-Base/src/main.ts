import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { NewComponentComponent } from './app/new-component';
import { SelectorComponent } from './app/selector';
import { InlineTemplateComponent } from './app/inline-template';
import { InlineStyleComponent } from './app/inline-style';
import { NgContentComponent } from './app/ng-content';

if (environment.production) {
  enableProdMode();
}
bootstrap(AppComponent);
bootstrap(NewComponentComponent);
bootstrap(SelectorComponent);
bootstrap(InlineTemplateComponent);
bootstrap(InlineStyleComponent);
bootstrap(NgContentComponent);
