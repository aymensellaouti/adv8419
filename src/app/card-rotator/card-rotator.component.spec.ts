import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRotatorComponent } from './card-rotator.component';

describe('CardRotatorComponent', () => {
  let component: CardRotatorComponent;
  let fixture: ComponentFixture<CardRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
