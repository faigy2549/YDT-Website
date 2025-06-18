import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiurimComponent } from './shiurim.component';

describe('ShiurimComponent', () => {
  let component: ShiurimComponent;
  let fixture: ComponentFixture<ShiurimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiurimComponent]
    });
    fixture = TestBed.createComponent(ShiurimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
