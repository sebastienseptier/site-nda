import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermsPrivacyComponent } from './therms-privacy.component';

describe('ThermsPrivacyComponent', () => {
  let component: ThermsPrivacyComponent;
  let fixture: ComponentFixture<ThermsPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermsPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
