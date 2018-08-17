import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalDataComponent } from './personnal-data.component';

describe('PersonnalDataComponent', () => {
  let component: PersonnalDataComponent;
  let fixture: ComponentFixture<PersonnalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
