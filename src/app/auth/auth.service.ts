import { Injectable, inject } from '@angular/core';
import { CommonConstants } from '../shared/constants/commonConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpClient: HttpClient = inject(HttpClient);

  login(username: string, password: string) {
    return this.httpClient.post(`${CommonConstants.baseURL}/login`, {
      username: username,
      password: password,
    });
  }

  logout() {
    sessionStorage.clear();
  }

  createUser(
    username: string,
    password: string,
    city: string,
    zipcode: string
  ) {
    return this.httpClient.post(`${CommonConstants.baseURL}/register`, {
      username: username,
      password: password,
      city: city,
      zipcode: zipcode,
    });
  }
}