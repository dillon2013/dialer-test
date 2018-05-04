import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {

  public callInProgress: boolean = false;
  public number: string = '';
  public callList: Array<string> = [];

  private timeOut;

  onToggleCall(): void {

    if (this.number.length > 0) {

      if(!this.callInProgress) {
        this.callInProgress = true;
        this.callList.push(this.number);
        this.timeOut = setTimeout(() => {
          this.callInProgress = false;
          this.number = '';
        }, 10000);
      } else {
        this.callInProgress = false;
        this.number = '';
        clearTimeout(this.timeOut);
      }
    }

  }

  onDial(num): void {
    this.number += num;
  }

  onDelete(): void {
    if(this.number.length > 0 && !this.callInProgress) {
      this.number = this.number.slice(0, -1);
    }
  }

}
