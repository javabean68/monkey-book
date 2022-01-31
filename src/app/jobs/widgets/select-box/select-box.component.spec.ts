import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxComponent } from './select-box.component';
import { Clause } from '../shared/clause'

describe('SelectBoxComponent', () => {
  let component: SelectBoxComponent;
  let fixture: ComponentFixture<SelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a clause on add button click', () => {
    {
      //arrange
      //act - simulate button click
      component.addEmptyClause();
      //assert - default clause + new
      expect(component.clauses.length).toBe(2);
    }
  });

  it('should update the internal clauses an event on "modelChange"', () => {
    {
      //arrange
      //act - simulate text change
      component.modelChange('DOSSIER_register_nr = value1 AND DOSSIER_register_nr !=  value2');

      //assert
      expect(component.clauses.length).toBe(2)
    }
  });
});
