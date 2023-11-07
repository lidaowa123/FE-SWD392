import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerHttpService } from './server-http.service';

export interface UserInfo {
  info: {
    sub: string;
    email: string;
    name: string;
    picture: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com';

  userProfileSubject = new Subject<UserInfo>();

  constructor(
    private readonly oAuthService: OAuthService,
    private readonly httpClient: HttpClient,
    private readonly serverService: ServerHttpService
  ) {
    
  }
  emails(userId: string): Observable<any> {
    return this.httpClient.get(
      `${this.gmail}/gmail/v1/users/${userId}/messages`,
      { headers: this.authHeader() }
    );
  }

  getMail(userId: string, mailId: string): Observable<any> {
    return this.httpClient.get(
      `${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`,
      { headers: this.authHeader() }
    );
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signIn() {
    this.oAuthService.initLoginFlow();
  }

  signOut() {
    this.oAuthService.logOut();
  }

  private authHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.oAuthService.getAccessToken()}`,
    });
  }
}
