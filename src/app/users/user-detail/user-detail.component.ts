import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  @Input('user') user: any;
  visible = true;
  userDetails: any;
  message = 'Loading';
  isHistoryPresent = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserByUserId(this.user.user_id).subscribe({
      next: (data) => {
        this.userDetails = data;
        this.isHistoryPresent = true;
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          this.message = 'No search history found!!';
          this.isHistoryPresent = false;
        }
      },
    });
  }
}
