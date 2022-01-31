import { Component, OnInit, Input } from '@angular/core';

import { Clause } from '../shared/clause'
import { CockpitService } from '../shared/cockpit.service'

@Component({
  selector: 'bm-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  builtQuery: string = "";
  fields: string[] = this.cockpitService.getFields();
  operators: string[] = this.cockpitService.getOperators();
  value: string = this.cockpitService.getDefaultValue();

  constructor(private cockpitService: CockpitService) { }

  clauses: Clause[] = [
    {
      field: 'DOSSIER_register_nr',
      operator: '=',
      value: '-'
    }
  ];

  @Input() removeClause(toRemove: Clause) {
    if (this.clauses.length > 1) {
      this.clauses = this.clauses.filter(obj => obj !== toRemove);
      this.buildQuery();
    }
  }

  @Input() changedClause(changed: Clause) {
    this.buildQuery();
  }

  ngOnInit(): void {
    this.buildQuery();
  }

  addEmptyClause() {
    //add an empty clause only when the value for the last is given
    if (!(this.clauses.slice(-1)[0].value == '')) {
      this.clauses.push({
        field: '',
        operator: '',
        value: ''
      });
      this.buildQuery();
    }
  }

  buildQuery() {
    this.builtQuery = '';
    for (let c of this.clauses) {
      if (this.builtQuery) {
        this.builtQuery = this.builtQuery + " AND " + c.field + c.operator + c.value;
      } else {
        this.builtQuery = c.field + c.operator + c.value;
      }
    }
  }

  modelChange(event: any) {
    //TextArea Content
    console.log(event);
    var splitted = event.split("AND", 10);
    //remove blanks
    splitted = splitted.map((text: string) => {
      text =text.replace(/\s/g, "");
      return text;
    });

    //rebuild oldClauses
    this.clauses = [];
    for (let s of splitted) {
      var clause = this.fromStringToClause(s);
      if (clause != null) {
        this.clauses.push(clause);
      }
    }
  }

  fromStringToClause(text: String) {
    //find the position of the operator
    for (let op of this.operators) {
      var pos = text.indexOf(op);
      if (pos != -1) {
        return {
          field: text.substring(0, pos),
          operator: op,
          value: text.substring(pos + op.length, text.length)
        }
      }
    }
    return null;
  }
}
