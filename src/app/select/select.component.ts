import { Component, OnInit } from '@angular/core';

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

  clause: Clause = {field: 'COMPANY_suva_nr', operator: '>', value : '2'};

  constructor() { }

  ngOnInit(): void {
  }
}
