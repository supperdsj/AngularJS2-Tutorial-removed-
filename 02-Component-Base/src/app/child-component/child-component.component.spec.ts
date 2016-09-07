/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChildComponentComponent } from './child-component.component';

describe('Component: ChildComponent', () => {
  it('should create an instance', () => {
    let component = new ChildComponentComponent();
    expect(component).toBeTruthy();
  });
});
