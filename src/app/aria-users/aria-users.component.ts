import { Component, OnInit } from '@angular/core';

export interface Store {
  value: number;
  viewValue: string;
}



@Component({
  selector: 'app-aria-users',
  templateUrl: './aria-users.component.html',
  styleUrls: ['./aria-users.component.css']
})

export class AriaUsersComponent implements OnInit {

  displayedColumns: string[];
  userInfo: string[];
  stores: object[];

  constructor() { }


  ngOnInit() {
    this.displayedColumns = [
      'USER ID',
      'NAME',
      'ROLES',
      'FUNCTION'
    ];

    this.userInfo = [
      'CIMRS',
      'MATT SCUTERI',
      'ARIA LEVEL 1',
      'FULL ACCESS'
    ];

    this.stores = [
      {value: 121, viewValue: '121 - S/R Rochelle PK'},
      {value: 118, viewValue: '118 - S/R Hoboken'},
      {value: 900, viewValue: '900 - Wakefern NEW POST TEST'}
    ];
  }

}
