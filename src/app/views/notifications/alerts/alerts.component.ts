import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from 'src/app/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendance } from 'src/app/model/Attendance';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  // visible = [true, true];
  // dismissible = true;

  constructor(
    private serverHttp: ServerHttpService,
    public router: Router
  ) { }
  public attendances: Attendance[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.serverHttp.getDataAttendance().then((response) => {
      const responseData = response.data;
      this.attendances = responseData as Attendance[];
      console.log(this.attendances);
    }).catch((error) => {
      console.log(error);
    })
  }

  // onAlertVisibleChange(eventValue: any = this.visible) {
  //   this.visible[1] = eventValue;
  // }

  // onResetDismiss() {
  //   this.visible = [true, true];
  // }

  // onToggleDismiss() {
  //   this.dismissible = !this.dismissible;
  // }

}
