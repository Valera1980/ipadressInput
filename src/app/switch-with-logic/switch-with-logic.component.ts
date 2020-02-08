import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-switch-with-logic',
  templateUrl: './switch-with-logic.component.html',
  styleUrls: ['./switch-with-logic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchWithLogicComponent),
      multi: true
    }
  ]
})
export class SwitchWithLogicComponent implements OnInit, ControlValueAccessor {
  // @Input() name: string;
  @Input() trueValue: any;
  @Input() falseValue: any;
  @Output() eventSelected = new EventEmitter();
  private _value: any;
  constructor() { }
  ngOnInit(): void {
  }
  set value(v: any) {
    const val  = v ? this.trueValue : this.falseValue;
    this._value = v;
    this.writeValue(val);
  }
  get value(): any {
     return this._value;
  }
  onChange: any = () => { };
  onTouch: any = () => { };
  writeValue(value: any): void {
    if(value === this.trueValue){
      this._value = true;
    } else {
      this._value = false;
    }
    this.onChange(value);
    this.onTouch(value);
    this.eventSelected.emit(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }
}
