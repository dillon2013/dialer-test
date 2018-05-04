import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent {

  @Input() callInProgress: boolean;
  @Input() number: string = '';

  @Output() keypadComponentCall: EventEmitter<any> = new EventEmitter();
  @Output() keypadComponentDial: EventEmitter<any> = new EventEmitter();
  @Output() keypadComponentDeleteNum: EventEmitter<any> = new EventEmitter();

  public keys: Array<string> = ['1','2','3','4','5','6','7','8','9','*', '0', '#'];

  toggleCall (): void {
    this.keypadComponentCall.emit();
  }

  keyPress (e): void {
    if(!this.callInProgress){
      const num = e.target.innerHTML;
      this.keypadComponentDial.emit(num);
    }
  }

  delete(): void {
    this.keypadComponentDeleteNum.emit();
  }

}
