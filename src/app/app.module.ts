import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleApiService } from './google-api.service';
import { OAuthService,AuthConfig } from 'angular-oauth2-oidc';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
// import { UpdateMajorComponent } from './update-major/update-major.component';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  // UpdateMajorComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
    IconSetService,
    Title,
    OAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
