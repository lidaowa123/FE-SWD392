import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './constants/authConfig';
import { ServerHttpService } from './server-http.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'CoreUI Free Angular Admin Template';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private readonly oAuthService: OAuthService,
    private readonly serverService: ServerHttpService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
    // confiure oauth2 service
    oAuthService.configure(authCodeFlowConfig);
    // manually configure a logout url, because googles discovery document does not provide it
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    oAuthService.tokenValidationHandler = new JwksValidationHandler();
    // loading the discovery document from google, which contains all relevant URL for
    // the OAuth flow, e.g. login url
    oAuthService.loadDiscoveryDocumentAndTryLogin({
      onTokenReceived: (token) => {
        const claims: any = token.idClaims;
        const email = claims?.['email'];
        if (!email) {
          // Redirect to 401
          console.log('Throw error');
        }
        console.log(email);
        
        return this.serverService.signInUsingBE(JSON.stringify(String(email))).subscribe({
          next: (value) => {
            console.log('user: ', value);
            localStorage.setItem('token', value.accessToken);
          },
          error: (err) => {
            // Redirect to 401
            console.log('err: ', err);
          },
        });
      },
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
