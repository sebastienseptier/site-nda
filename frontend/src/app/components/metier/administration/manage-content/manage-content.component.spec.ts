import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContentComponent } from './manage-content.component';

describe('ManageContentComponent', () => {
  let component: ManageContentComponent;
  let fixture: ComponentFixture<ManageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
