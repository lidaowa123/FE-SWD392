import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GoogleApiService, UserInfo } from '../../../google-api.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from 'src/app/icons/icon-subset';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss'],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class LoginComponent {

  title = 'angular-google-oauth-example';

  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  async getEmails() {
    if (!this.userInfo) {
      return;
    }

    const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach( (element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then( mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }
}