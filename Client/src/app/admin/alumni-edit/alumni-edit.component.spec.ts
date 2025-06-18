import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniEditComponent } from './alumni-edit.component';

describe('AlumniEditComponent', () => {
  let component: AlumniEditComponent;
  let fixture: ComponentFixture<AlumniEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniEditComponent]
    });
    fixture = TestBed.createComponent(AlumniEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
