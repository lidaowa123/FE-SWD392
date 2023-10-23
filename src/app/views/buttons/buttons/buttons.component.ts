import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from 'src/app/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/model/School';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{
  public schools: School[] = [];

  // states = ['normal', 'active', 'disabled'];
  // colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  constructor(
    private serverHttp: ServerHttpService,
    public router: Router
  ) { }
  ngOnInit(): void {
      this.loadData();
  }

  public loadData() {
    this.serverHttp.getDataProject().then((response) => {
      // Chỉ trích xuất dữ liệu từ phản hồi Axios
    const responseData = response.data;
      // Gán dữ liệu từ response vào mảng majors
      this.schools = responseData as School[];
      console.log(this.schools); // Hiển thị dữ liệu đã nhận được trong console log
    }).catch((error) => {
      console.log(error);
    });
  }
}
