import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CockpitService {
  fields: string[] = ['DOSSIER_register_nr', 'COMPANY_suva_nr'];
  operators: string[] = ['!>', '>=', '<=', '=', '<', '>'];
  defaultValue: string = '-';

  getFields() : string[] { return this.fields;}
  getOperators(): string[] { return this.operators;}
  getDefaultValue() : string { return this.defaultValue;}
}
