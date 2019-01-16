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

  constructor() { }

  stores: Store[] = [
    {value: 121, viewValue: '121 - S/R Rochelle PK'},
    {value: 118, viewValue: '118 - S/R Hoboken'},
    {value: 900, viewValue: '900 - Wakefern NEW POST TEST'}
  ];

  displayedColumns = [
    {userID: 'USER ID'},
    {userName: 'NAME'},
    {roles: 'ROLES'},
    {function: 'FUNCTION'}
  ];
  ngOnInit() {
  }

}
