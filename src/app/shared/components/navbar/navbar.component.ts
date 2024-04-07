import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router, private authSer: AuthService) {}
  logoutVisible = false;

  ngOnInit() {
    if (sessionStorage.getItem('jwt')) {
      this.logoutVisible = true;
    }
    this.authSer.userLoggedIn.subscribe({
      next: (data) => {
        this.logoutVisible = data;
      },
    });
  }

  logout() {
    this.authSer.logout();
    this.router.navigate(['/login']);
  }
}
