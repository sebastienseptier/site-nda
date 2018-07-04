import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscriptionComponent } from './form-inscription.component';

describe('FormInscriptionComponent', () => {
  let component: FormInscriptionComponent;
  let fixture: ComponentFixture<FormInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
