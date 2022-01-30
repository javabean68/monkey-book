import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Clause } from '../shared/clause'
import { CockpitService } from '../shared/cockpit.service'

@Component({
  selector: 'bm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
/* https://angular.io/guide/forms */
export class SelectComponent implements OnInit {

  constructor(private cockpitService: CockpitService) { }

  fields: string[] = this.cockpitService.getFields();
  operators: string[] = this.cockpitService.getOperators();
  value: string = this.cockpitService.getDefaultValue();

  @Input() clause: Clause = { field: '', operator: '', value: '' };
  @Output() removeClauseEvent = new EventEmitter<Clause>();
  @Output() changeClauseEvent = new EventEmitter<Clause>();

  fireRemoveEvent() {
    this.removeClauseEvent.emit(this.clause);
  }

  modelChangeFn(event: any) {
    console.log(event);
    this.changeClauseEvent.emit(this.clause);
  }

  ngOnInit(): void {
  }
}
