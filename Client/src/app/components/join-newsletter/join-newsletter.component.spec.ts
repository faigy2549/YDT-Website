import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinNewsletterComponent } from './join-newsletter.component';

describe('JoinNewsletterComponent', () => {
  let component: JoinNewsletterComponent;
  let fixture: ComponentFixture<JoinNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinNewsletterComponent]
    });
    fixture = TestBed.createComponent(JoinNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
