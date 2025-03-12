import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestShiurimComponent } from './latest-shiurim.component';

describe('LatestShiurimComponent', () => {
  let component: LatestShiurimComponent;
  let fixture: ComponentFixture<LatestShiurimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestShiurimComponent]
    });
    fixture = TestBed.createComponent(LatestShiurimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
