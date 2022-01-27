import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  fields: string[] = ['DOSSIER_register_nr', 'COMPANY_suva_nr'];
  operators: string[] = ['=', '!=', '<', '>'];
  value: string = '-';

  constructor() { }

  ngOnInit(): void {
  }
}
