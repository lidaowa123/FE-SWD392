import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoogleApiService, UserInfo } from '../../../google-api.service';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  userInfo?: UserInfo
  
  // logout() {
    
  //   this.googleApi.signOut()
  // }
  constructor(private classToggler: ClassToggleService,
    // private readonly googleApi: GoogleApiService
    ) {
    super();
    // googleApi.userProfileSubject.subscribe( info => {
    //   this.userInfo = info
    // })
  }
}
