import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { Clause } from '../shared/clause'

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger an event on "modelChange"', () => {
    {
      //arrange
      let receivedClause!: Clause;
      //prepare to receive an event
      component.changeClauseEvent.subscribe(clause => {receivedClause = clause});
      component.clause.field = 'fieldName';
      component.clause.operator = '=';
      component.clause.value = 'fieldValue';

      //act - simulate event sending
      component.modelChange();

      //assert
      expect(receivedClause).toEqual({ field: 'fieldName', operator: '=', value: 'fieldValue' });
    }
  });

  it('should trigger an event on "fireRemoveEvent"', () => {
    {
      //arrange
      let receivedClause!: Clause;
      //prepare to receive an event
      component.removeClauseEvent.subscribe(clause => {receivedClause = clause});
      component.clause.field = 'fieldName';
      component.clause.operator = '=';
      component.clause.value = 'fieldValue';

      //act - simulate event sending
      component.fireRemoveEvent();

      //assert
      expect(receivedClause).toEqual({ field: 'fieldName', operator: '=', value: 'fieldValue' });
    }
  });
});
