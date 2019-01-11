import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaUsersComponent } from './aria-users.component';

describe('AriaUsersComponent', () => {
  let component: AriaUsersComponent;
  let fixture: ComponentFixture<AriaUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
