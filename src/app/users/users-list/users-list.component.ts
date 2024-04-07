import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { TableRowSelectEvent, TableRowUnSelectEvent } from 'primeng/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  searchedPlace: any;
  loading = false;
  message = 'Please search users by place.';
  isUserSearched = false;
  users: any;
  selectedUser: any;
  isUserSelected = false;
  visible: boolean = false;

  constructor(private userService: UserService) {}

  onRowSelect($event: TableRowUnSelectEvent) {
    this.isUserSelected = true;
    this.visible = true;
  }
  onRowUnSelect($event: TableRowUnSelectEvent) {
    // throw new Error('Method not implemented.');
  }
  getUsersByPlace() {
    this.loading = true;
    this.userService.getUserByPlace(this.searchedPlace).subscribe({
      next: (data) => {
        this.users = data;
        this.isUserSearched = true;
        this.loading = false;
      },
      error: (err) => {},
    });
  }
}
