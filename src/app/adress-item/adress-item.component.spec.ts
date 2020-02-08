import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressItemComponent } from './adress-item.component';

describe('AdressItemComponent', () => {
  let component: AdressItemComponent;
  let fixture: ComponentFixture<AdressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
