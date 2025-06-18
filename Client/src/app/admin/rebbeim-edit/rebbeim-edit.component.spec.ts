import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebbeimEditComponent } from './rebbeim-edit.component';

describe('RebbeimEditComponent', () => {
  let component: RebbeimEditComponent;
  let fixture: ComponentFixture<RebbeimEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RebbeimEditComponent]
    });
    fixture = TestBed.createComponent(RebbeimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
