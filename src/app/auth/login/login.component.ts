import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  @ViewChild('signupform') signupForm?: NgForm;
  @ViewChild('form') form?: NgForm;
  loginSuccess = new Subject<void>();
  visible: boolean = false;
  // isSignUp: boolean = false;

  constructor(
    private authSer: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  showDialog() {
    this.visible = true;
  }
  onSubmit() {
    const username = this.form?.value.username;
    const password = this.form?.value.password;

    console.log(this.form);

    this.authSer.login(username, password).subscribe({
      next: (response: any) => {
        this.loginSuccess.next();
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        });
        const jwt = response.access_token;
        sessionStorage.setItem('jwt', jwt);
        const decodedToken: any = jwtDecode(jwt);
        console.log(decodedToken);
        if (decodedToken.role == 'user') {
          this.router.navigate(['home', 'user', 'weather']);
        } else {
          this.router.navigate(['home', 'admin', 'users']);
        }
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid Credentials',
        });
      },
    });
  }

  createUser() {
    console.log(this.signupForm);
    const username = this.signupForm?.value.username;
    const password = this.signupForm?.value.password;
    const city = this.signupForm?.value.cityname;
    const zipcode = this.signupForm?.value.zipcode;

    this.authSer.createUser(username, password, city, zipcode).subscribe({
      next: (response: any) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User created successfully',
        });
        this.visible = false;
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Username Already exists',
        });
      },
    });
  }
}
