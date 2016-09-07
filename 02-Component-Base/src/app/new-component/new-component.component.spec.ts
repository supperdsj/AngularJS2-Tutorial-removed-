/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NewComponentComponent } from './new-component.component';

describe('Component: NewComponent', () => {
  it('should create an instance', () => {
    let component = new NewComponentComponent();
    expect(component).toBeTruthy();
  });
});
