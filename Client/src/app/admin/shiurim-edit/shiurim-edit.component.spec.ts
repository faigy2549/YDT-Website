import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiurimEditComponent } from './shiurim-edit.component';

describe('ShiurimEditComponent', () => {
  let component: ShiurimEditComponent;
  let fixture: ComponentFixture<ShiurimEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiurimEditComponent]
    });
    fixture = TestBed.createComponent(ShiurimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
