import { Component, OnInit } from '@angular/core';

export interface UserRoles {
  userID: string;
  userName: string;
  roles: string;
  function: string;
}

const ELEMENT_DATA: UserRoles[] = [
  {userID: 'CIMRS', userName: 'Matt Scuteri', roles: 'ARIA COORDINATOR (FULL ACCESS)', function: 'FULL ACCESS'},
  {userID: 'RTNSL', userName: 'Nicholas LoPresti', roles: 'ARIA COORDINATOR (FULL ACCESS)', function: 'FULL ACCESS'},
  {userID: 'BRM2B', userName: 'Michele Bechtold', roles: 'ARIA INQUIRE', function: 'FULL ACCESS'},
  {userID: 'GGMMC', userName: 'Michele M Cavalieri', roles: 'MEMBER', function: 'FULL ACCESS'}
];

@Component({
  selector: 'app-aria-users',
  templateUrl: './aria-users.component.html',
  styleUrls: ['./aria-users.component.css']
})
export class AriaUsersComponent implements OnInit {

  displayedColumns: string[] = ['userID', 'userName', 'roles', 'function'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
