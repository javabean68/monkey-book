import { Component, OnInit } from '@angular/core';

import { Clause } from '../shared/clause'

@Component({
  selector: 'bm-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  builtQuery: string = "";

  oldClauses: Clause[] = [{
        field: 'DOSSIER_register_nr',
        operator: '=',
        value: '1207890023'
        }
  ];

  newClauses: Clause[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
