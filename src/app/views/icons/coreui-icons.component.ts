import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { School } from 'src/app/model/School';
import { ServerHttpService } from 'src/app/server-http.service';
import { CommonService } from 'src/app/common.service';
import {  Router } from '@angular/router';


@Component({
  templateUrl: 'coreui-icons.component.html',
  providers: [IconSetService],
})
export class CoreUIIconsComponent implements OnInit {
  // public title = 'CoreUI Icons';
  // public icons!: [string, string[]][];
  public schools: School[] = [];

  constructor(
    private route: ActivatedRoute, public iconSet: IconSetService,
    private serverHttp: ServerHttpService,
    private common: CommonService,
    public router: Router
  ) {
    // iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }


  ngOnInit() {
    this.loadData();
    // const path = this.route?.routeConfig?.path;
    // let prefix = 'cil';
    // if (path === 'coreui-icons') {
    //   this.title = `${this.title} - Free`;
    //   prefix = 'cil';
    // } else if (path === 'brands') {
    //   this.title = `${this.title} - Brands`;
    //   prefix = 'cib';
    // } else if (path === 'flags') {
    //   this.title = `${this.title} - Flags`;
    //   prefix = 'cif';
    // }
    // this.icons = this.getIconsView(prefix);
  }

  public loadData() {
    this.serverHttp.getDataSchool().then((response) => {
      // Chỉ trích xuất dữ liệu từ phản hồi Axios
    const responseData = response.data;
      // Gán dữ liệu từ response vào mảng projects
      this.schools = responseData as School[];
      console.log(this.schools); // Hiển thị dữ liệu đã nhận được trong console log
    }).catch((error) => {
      console.log(error);
    });
  }

  // toKebabCase(str: string) {
  //   return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  // }

  // getIconsView(prefix: string) {
  //   return Object.entries(this.iconSet.icons).filter((icon) => {
  //     return icon[0].startsWith(prefix);
  //   });
  // }
}
