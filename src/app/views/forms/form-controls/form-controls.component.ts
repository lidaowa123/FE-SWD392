import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from 'src/app/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project';
@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit{

  // public favoriteColor = '#26ab3c';

  constructor(
    private serverHttp: ServerHttpService,
    // private common: CommonService,
    public router: Router
    ) { }
    public projects: Project[] = [];


    ngOnInit(): void {
        this.loadData();
    }

    public loadData(){
      this.serverHttp.getDataProject().then((respone) => {
        const responseData = respone.data;
        this.projects = responseData as Project[];
        console.log(this.projects);
      }).catch((error) => {
        console.log(error);
      })
    }
}
