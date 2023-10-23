import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServerHttpService } from 'src/app/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from 'src/app/model/Major';

// import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit{

  // items = [1, 2, 3, 4];
  public majors: Major[] = [];

  constructor(
    // private sanitizer: DomSanitizer
    private serverHttp: ServerHttpService,
    public router: Router

  ) { }
  ngOnInit(): void {
      this.loadData();
  }

  // getAccordionBodyText(value: string) {
  //   const textSample = `
  //     <strong>This is the <mark>#${value}</mark> item accordion body.</strong> It is hidden by
  //     default, until the collapse plugin adds the appropriate classes that we use to
  //     style each element. These classes control the overall appearance, as well as
  //     the showing and hiding via CSS transitions. You can modify any of this with
  //     custom CSS or overriding our default variables. It&#39;s also worth noting
  //     that just about any HTML can go within the <code>.accordion-body</code>,
  //     though the transition does limit overflow.
  //   `;
  //   return this.sanitizer.bypassSecurityTrustHtml(textSample);
  // }
  public loadData() {
    this.serverHttp.getDataMajors().then((response) => {
      const responseData = response.data;
      this.majors = responseData as Major[];
      console.log(this.majors);
    }).catch((error) => {
      console.log(error);
    })
    // this.serverHttp.getDataMajors().then((response) => {
    //   // Chỉ trích xuất dữ liệu từ phản hồi Axios
    // const responseData = response.data;
    //   // Gán dữ liệu từ response vào mảng majors
    //   this.majors = responseData as Major[];
    //   console.log(this.majors); // Hiển thị dữ liệu đã nhận được trong console log
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  public deleteMa: Major = {
  id: '',
  name: '',
  code: '',
  updateTime: new Date(),
  status: 0
  };

  // delete = new Major();

  public deleteMajor(majorId: string){
    if(majorId == null){

    }else{
      this.serverHttp.deleteMajor(majorId).then(res =>{
        console.log(res);
        const responseData = res.data;
      this.majors = responseData as Major[];
        this.loadData();
      }).catch(function(error){
        console.log(error);
      })
    }
  }
}
