import { Component, OnInit, Input } from '@angular/core';

import { Clause } from '../shared/clause'

@Component({
  selector: 'bm-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  builtQuery: string = "";

  oldClauses: Clause[] = [
        {
            field: 'DOSSIER_register_nr',
            operator: '=',
            value: '1207890023'
        },
        {
            field: 'DOSSIER_register_nr',
            operator: '=',
            value: '1207890024'
        },
       {
           field: 'DOSSIER_register_nr',
           operator: '=',
           value: '1207890025'
       }
  ];

  addEmptyClause() {
    if(!(this.oldClauses.slice(-1)[0].value == '')){
      this.oldClauses.push({
        field: '',
        operator: '',
        value: ''
      });
      this.buildQuery();
    }
  }

  @Input() removeClause(toRemove: Clause) {
    if(this.oldClauses.length > 1) {
        this.oldClauses = this.oldClauses.filter(obj => obj !== toRemove);
        this.buildQuery();
      }
  }

  @Input() changedClause(changed: Clause) {
    this.buildQuery();
  }

  ngOnInit(): void {
    this.buildQuery();
  }

  buildQuery(){
    this.builtQuery = '';
    for (let c of this.oldClauses) {
      if(this.builtQuery){
        this.builtQuery = this.builtQuery + " AND " + c.field + c.operator + c.value;
       } else {
        this.builtQuery = c.field + c.operator + c.value;
       }
    }
  }
}
