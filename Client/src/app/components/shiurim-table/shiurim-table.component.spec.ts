import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiurimTableComponent } from './shiurim-table.component';

describe('ShiurimTableComponent', () => {
  let component: ShiurimTableComponent;
  let fixture: ComponentFixture<ShiurimTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiurimTableComponent]
    });
    fixture = TestBed.createComponent(ShiurimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
