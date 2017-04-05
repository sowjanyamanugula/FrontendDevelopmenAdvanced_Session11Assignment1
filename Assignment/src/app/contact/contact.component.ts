import { Component, OnInit,ViewChild } from '@angular/core';
import {AddresssService} from '../addresss.service';

import { MydirectiveDirective } from '../mydirective.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
addresses=[];
//addresses1=[];
  constructor(private _addservice:AddresssService ){}

  ngOnInit() {
    this.addresses=this._addservice.getAddresses();
    //this.addresses1=this._addservice.getAddresses();
  }
 


}
