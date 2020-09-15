import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFormComponent } from './magic-form.component';

describe('MagicFormComponent', () => {
  let component: MagicFormComponent;
  let fixture: ComponentFixture<MagicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
