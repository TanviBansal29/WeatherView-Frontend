import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [AuthService],
})
export class NavbarComponent {
  constructor(private router: Router, private authSer: AuthService) {}
  isLoggedIn = false;
  // viewProfile() {}

  // ngOnChanges() {
  //   if (sessionStorage.getItem('jwt')) {
  //     this.isLoggedIn = true;
  //   }
  // }

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('jwt') !== '';
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.authSer.logout();
    this.router.navigate(['/login']);
  }
}
