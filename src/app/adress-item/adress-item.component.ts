import { EnumIpType } from './../models/model-adress';
import { Component, OnInit, ChangeDetectionStrategy,
      Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-adress-item',
  templateUrl: './adress-item.component.html',
  styleUrls: ['./adress-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AdressItemComponent implements OnInit {
  faTrash = faTrash;
  @Input() form;
  @Output() eventRemove = new EventEmitter();
  enumIp = EnumIpType;
  selectedIpType: EnumIpType;
  ipV4Regexp = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$');
  ipV6Regexp = new RegExp(`^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))
                          ((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$`);
  maskRegexp = new RegExp(`^((128|192|224|240|248|252|254)\.0\.0\.0)|
                            (255\.(((0|128|192|224|240|248|252|254)\.0\.0)|
                            (255\.(((0|128|192|224|240|248|252|254)\.0)
                            |255\.(0|128|192|224|240|248|252|254)))))$`);
  constructor(
    private _cd: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.form.controls.subnetMask.setValidators(this.maskValidator.bind(this));
  }
  selectType(v: EnumIpType): void {
    this.selectedIpType = v;
    this.toogleValidator();
    if (this.form.dirty) {
      this.form.controls.adress.patchValue('');
      this.form.controls.adress.markAsDirty();
    }
    this._cd.detectChanges();
  }
  remove(): void {
    this.eventRemove.emit();
  }
  toogleValidator() {
    if (this.selectedIpType === EnumIpType.IPv4) {
      this.form.controls.adress.setValidators(this.ipV4Validator.bind(this));
    } else {
      this.form.controls.adress.setValidators(this.ipV6Validator.bind(this));
    }
  }
  ipV4Validator(control: FormControl): any {
    if (this.ipV4Regexp.test(control.value)) {
      return null;
    }
    return { ipv4: true };
  }
  ipV6Validator(control: FormControl): any {
    if (this.ipV6Regexp.test(control.value)) {
      return null;
    }
    return { ipv6: true };
  }
  maskValidator(control: FormControl): any {
    if (this.selectedIpType === EnumIpType.IPv6) {
      return null;
    }
    return this.maskRegexp.test(control.value) ? null : { mask: true};
  }
  isIpInvalid(): boolean {
    return this.form.controls.adress &&
           this.form.controls.adress.dirty &&
           (this.form.controls.adress.hasError('ipv4') || this.form.controls.adress.hasError('ipv6'));
  }
  isMaskInValid(): boolean {
    return this.form.controls.subnetMask &&
           this.form.controls.subnetMask.dirty &&
           this.form.controls.subnetMask.hasError('mask');
  }
}
