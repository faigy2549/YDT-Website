import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebbeimComponent } from './rebbeim.component';

describe('RebbeimComponent', () => {
  let component: RebbeimComponent;
  let fixture: ComponentFixture<RebbeimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RebbeimComponent]
    });
    fixture = TestBed.createComponent(RebbeimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
