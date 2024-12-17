import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShiurimComponent } from './all-shiurim.component';

describe('AllShiurimComponent', () => {
  let component: AllShiurimComponent;
  let fixture: ComponentFixture<AllShiurimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllShiurimComponent]
    });
    fixture = TestBed.createComponent(AllShiurimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
