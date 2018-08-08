import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthentificationComponent } from './form-authentification.component';

describe('FormAuthentificationComponent', () => {
  let component: FormAuthentificationComponent;
  let fixture: ComponentFixture<FormAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
