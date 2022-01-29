import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionTextComponent } from './correction-text.component';

describe('CorrectionTextComponent', () => {
  let component: CorrectionTextComponent;
  let fixture: ComponentFixture<CorrectionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
