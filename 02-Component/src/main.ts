import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { NewComponentComponent } from './app/new-component';
import { SelectorComponent } from './app/selector';

if (environment.production) {
  enableProdMode();
}
bootstrap(AppComponent);
bootstrap(NewComponentComponent);
bootstrap(SelectorComponent);
bootstrap(SelectorComponent);
