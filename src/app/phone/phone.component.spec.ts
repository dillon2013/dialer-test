import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneComponent } from './phone.component';
import { DisplayComponent } from '../display/display.component';
import { KeypadComponent } from '../keypad/keypad.component';
import {fakeAsync} from "@angular/core/testing";
import {tick} from "@angular/core/testing";

describe('PhoneComponent', () => {
  let component: PhoneComponent;
  let fixture: ComponentFixture<PhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneComponent,
        DisplayComponent,
        KeypadComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onToggleCall', () => {
    it('should add dialled number to call list', () => {
      component.number = '020300923';
      component.onToggleCall();
      expect(component.callList.length).toBe(1);
      expect(component.callList).toEqual(['020300923']);
    });

    it('should set callInProgress to true when number is called', () => {
      component.number = '020300923';
      component.onToggleCall();
      expect(component.callInProgress).toBeTruthy();
    });

    it('should set callInProgress to false when call is ended', () => {
      component.number = '020300923';
      component.callInProgress = true;
      component.onToggleCall();
      expect(component.callInProgress).toBeFalsy();
    });

    it('should reset the number when call is ended', () => {
      component.number = '020300923';
      component.callInProgress = true;
      component.onToggleCall();
      expect(component.number).toEqual('');
    });

    it('should wait 10 seconds before ending a call', fakeAsync(() => {
      component.number = '020300923';
      component.onToggleCall();
      expect(component.callInProgress).toBeTruthy();

      tick(10000);
      fixture.detectChanges();

      fixture.whenStable().then(()=> {
        expect(component.callInProgress).toBeFalsy();
      })
    }));

    describe('onDial', () => {
      it('should concatenate numbers on the number', () => {
        component.onDial('1');
        component.onDial('2');
        component.onDial('3');
        expect(component.number).toEqual('123');
      })
    })

    describe('onDelete', () => {
      it('should delete numbers on the number', () => {
        component.onDial('1');
        component.onDial('2');
        component.onDial('3');
        expect(component.number).toEqual('123');
      })
    })
  });




});
