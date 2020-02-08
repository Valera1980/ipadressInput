import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpformComponent } from './ipform.component';

describe('IpformComponent', () => {
  let component: IpformComponent;
  let fixture: ComponentFixture<IpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
