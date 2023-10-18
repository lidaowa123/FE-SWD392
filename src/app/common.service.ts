import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalProjects = 0;
  public totalProjects$ = new BehaviorSubject<number>(0);


  constructor() { }

  public setTotalProjects(total: number){
    this.totalProjects = total;
    this.totalProjects$.next(total);
  }

  public increamentProject(){
    this.totalProjects++;
    this.totalProjects$.next(this.totalProjects);
  }
}
