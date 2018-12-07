import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVinhComponent } from './form-vinh.component';

describe('FormVinhComponent', () => {
  let component: FormVinhComponent;
  let fixture: ComponentFixture<FormVinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
