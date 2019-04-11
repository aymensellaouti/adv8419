import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nf404Component } from './nf404.component';

describe('Nf404Component', () => {
  let component: Nf404Component;
  let fixture: ComponentFixture<Nf404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nf404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nf404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
