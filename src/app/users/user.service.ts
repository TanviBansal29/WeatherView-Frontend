import { Injectable, inject } from '@angular/core';
import { CommonConstants } from '../shared/constants/commonConstants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  getUserByPlace(place: string) {
    return this.httpClient.get(
      `${CommonConstants.baseURL}/users?place=${place}`
    );
  }

  getUserByUserId(id: string) {
    return this.httpClient.get(
      `${CommonConstants.baseURL}/history?user_id=${id}`
    );
  }
}
