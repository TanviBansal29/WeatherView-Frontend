import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('signupform') signupForm?: NgForm;
  @ViewChild('form') form?: NgForm;

  visible: boolean = false;
  // isSignUp: boolean = false;
  authSer: AuthService = inject(AuthService);

  constructor(
    private messageService: MessageService,
    private router: Router // private authSer: AuthService
  ) {}

  showDialog() {
    this.visible = true;
  }
  onSubmit() {
    const username = this.form?.value.username;
    const password = this.form?.value.password;

    this.authSer.login(username, password).subscribe({
      next: (response: any) => {
        this.authSer.userLoggedIn.next(true);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        });
        const jwt = response.access_token;
        sessionStorage.setItem('jwt', jwt);
        const decodedToken: any = jwtDecode(jwt);
        if (decodedToken.role == 'user') {
          this.router.navigate(['home', 'user', 'weather']);
        } else {
          this.router.navigate(['home', 'admin', 'users']);
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid Credentials',
        });
      },
    });
  }

  createUser() {
    const username = this.signupForm?.value.username;
    const password = this.signupForm?.value.password;
    const city = this.signupForm?.value.cityname;
    const zipcode = this.signupForm?.value.zipcode;

    this.authSer.createUser(username, password, city, zipcode).subscribe({
      next: (response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User created successfully',
        });
        this.visible = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Username Already exists',
        });
      },
    });
  }
}
