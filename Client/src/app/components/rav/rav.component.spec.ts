import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavComponent } from './rav.component';

describe('RavComponent', () => {
  let component: RavComponent;
  let fixture: ComponentFixture<RavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RavComponent]
    });
    fixture = TestBed.createComponent(RavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
