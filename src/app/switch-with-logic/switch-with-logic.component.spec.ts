import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchWithLogicComponent } from './switch-with-logic.component';

describe('SwitchWithLogicComponent', () => {
  let component: SwitchWithLogicComponent;
  let fixture: ComponentFixture<SwitchWithLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchWithLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWithLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
