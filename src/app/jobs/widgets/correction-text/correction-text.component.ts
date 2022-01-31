import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CockpitService } from '../shared/cockpit.service'

@Component({
  selector: 'bm-correction-text',
  templateUrl: './correction-text.component.html',
  styleUrls: ['./correction-text.component.css']
})
export class CorrectionTextComponent implements OnInit {

  oldText!: string;
  newText!: string;
  correctionText!: string;
  @Output() changeCorrectionEvent = new EventEmitter<string>();

  /**
   * Wird anfangs die bestehende Korrektur durch den WS geliefert?
   * @param cockpitService
   */
  constructor(private cockpitService: CockpitService) { }

  ngOnInit(): void {
  }

  /**
   * Muss die Korrektur auch nach draussen bekannt gemacht werden?
   * @param event
   */
  modelChange() {
    this.correctionText = 's{' + this.oldText + "|" + this.newText + '}g';
    this.changeCorrectionEvent.emit(this.correctionText);
    console.log(this.correctionText);
  }

}
