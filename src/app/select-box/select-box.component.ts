import { Component, OnInit, Input } from '@angular/core';

import { Clause } from '../shared/clause'
import { Constants } from '../shared/constants'

@Component({
  selector: 'bm-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  builtQuery: string = "";

  fields: string[] = Constants.fields;
  operators: string[] = Constants.operators;
  value: string = Constants.value;

  oldClauses: Clause[] = [
        {
            field: 'DOSSIER_register_nr',
            operator: '=',
            value: '-'
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

  modelChangeFn(event: any){
    //TextArea Content
    console.log(event);
    var splitted = event.split("AND", 10);
    //remove blanks
    splitted = splitted.map(function(e: string) {
      e = e.replace(/\s/g, "");
      return e;
    });

    console.log(splitted);

    console.log(this.fromStringToClause(splitted[0]));
    //rebuild oldClauses
    this.oldClauses = [];
    for(let s of splitted){
      var clause = this.fromStringToClause(s);
      if(clause != null){
        this.oldClauses.push(clause);
      }
    }
  }

  fromStringToClause(text: String){
    //find the position of the operator
    for(let op of this.operators){
      var pos = text.indexOf(op);
      if(pos != -1){
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
