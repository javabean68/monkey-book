import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Clause } from '../shared/clause'

@Component({
  selector: 'bm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
/* https://angular.io/guide/forms */
export class SelectComponent implements OnInit {
  fields: string[] = ['DOSSIER_register_nr', 'COMPANY_suva_nr'];
  operators: string[] = ['=', '!=', '<', '>'];
  value: string = '-';

  @Input() clause: Clause = {field: '', operator: '', value : ''};
  @Output() removeClauseEvent = new EventEmitter<Clause>();
  @Output() changeClauseEvent = new EventEmitter<Clause>();

  fireRemoveEvent(){
    this.removeClauseEvent.emit(this.clause);
  }

  modelChangeFn(event: any){
    console.log(event);
    this.changeClauseEvent.emit(this.clause);
  }

  ngOnInit(): void {
  }
}
