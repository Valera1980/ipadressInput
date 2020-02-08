import { ModelAdress, EnumIpType } from './../models/model-adress';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-ipform',
  templateUrl: './ipform.component.html',
  styleUrls: ['./ipform.component.scss']
})
export class IpformComponent implements OnInit {

  mainForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mainForm = this._fb.group({
      adresses: this._fb.array([])
    });
    this.mainForm.valueChanges
      .subscribe((v: any) => {
        console.log(v);
      });
    for (const addr of this.getMockData()) {
      this.addAdress(addr);
    }
    this._cd.detectChanges();
  }
  createAddrFormGroup(model: ModelAdress = null): FormGroup {
     return this._fb.group({
       adress: model.adress,
       comment: model.comment,
       id: model.id,
       isNew: model.isNew,
       subnetMask: model.subnetMask,
       type: model.type
     });
  }
  addAdress(model: ModelAdress = null): void {
    let newIpaddr;
    if (!model) {
      newIpaddr = new ModelAdress({
        adress: '',
        comment: '',
        id: UUID.UUID(),
        isNew: true,
        type: EnumIpType.IPv4
      });
    } else {
      newIpaddr = model;
    }
    this.adresses.push(this.createAddrFormGroup(newIpaddr));
  }
  get adresses(): FormArray {
    return this.mainForm.get('adresses') as FormArray;
  }

  getMockData(): ModelAdress[] {
    return [
      new ModelAdress({
        id: 1,
        isNew: false,
        type: EnumIpType.IPv4,
        adress: '127.0.0.1',
        subnetMask: '255.255.0.0',
        comment: 'first adress'
      }),
      new ModelAdress({
        id: 2,
        isNew: false,
        type: EnumIpType.IPv6,
        adress: 'eeee:eeee:eeee:eeee:eeee:eeee:eeee:eeee',
        comment: 'second adress'
      })
    ]
  }
  remove(index): void {

    this.adresses.removeAt(index);
  }
}
