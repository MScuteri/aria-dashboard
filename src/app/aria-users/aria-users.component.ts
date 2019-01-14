import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-aria-users',
  templateUrl: './aria-users.component.html',
  styleUrls: ['./aria-users.component.css']
})
export class AriaUsersComponent implements OnInit {
  public modalRef: BsModalRef;
  public template: TemplateRef<any>;
  constructor(
    private modalService: BsModalService) { }

  openModal(template) {
     this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

}
