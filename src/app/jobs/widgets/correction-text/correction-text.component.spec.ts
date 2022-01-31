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

  it('should trigger an event on "modelChange"', () => {
    {
      //arrange
      let receivedText!: string;
      component.changeCorrectionEvent.subscribe(
      text => {receivedText = text});
      component.oldText = 'toChange';
      component.newText = 'correction';

      //act - simulate event sending
      component.modelChange();

      //assert
      expect(receivedText).toBe('s{toChange|correction}g');
    }
  });
});
