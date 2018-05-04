import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  private _callInProgress: boolean;

  @Input() set callInProgress(value: boolean) {
    this._callInProgress = value;
  }
  @Input() number: number;

  get callInProgress(): boolean {
    return this._callInProgress;
  }

  constructor() { }

}
