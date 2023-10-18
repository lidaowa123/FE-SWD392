import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from '././model/School';
import { enviroment } from '././enviroment/enviroment';
import { Observable } from 'rxjs';
import { Major } from 'src/app/model/Major';
import axios from 'axios';
import { Project } from '././model/Project';
import { Intern } from '././model/Intern';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  find(id: any){
    throw new Error('Method not implemented. ');
  }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('bearerToken')}`
    }),
  };

  constructor(private httpClient: HttpClient){}
  basicAPI: string = enviroment.basicAPI;

  async getDataMajors(){
   var config = {
      method: 'get',
      url: this.basicAPI + 'majors',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzM3ODU0NCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.H-vuL9uJKRkN7Ijh2N7SYHJ5B4FXtnZPxC8avw2CAEo'
      }
    };
    return await axios(config)
  }

  // getDataMajors(): Observable<Major[]>{
  //   return this.httpClient.get<Major[]>(this.basicAPI + 'swdprojectapi.azurewebsites.net/api/majors', this.httpOptions);
  // }

  async getDataProject(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'projects',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzYxNzQ4MCwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.bz_aknCS1hUHV2a1P0YQHFa9wtX9lX5EDW7Lj2Tgctw'
      }
    };
    return await axios(config)

    // var config = {
    //   method: 'get',
    //   url: 'http://localhost:4200/#/icons/coreui-icons',
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzM3NDMyNywiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.jBH7JjlPQQWKbIwl3B4apGBdmz9NMxyQ_Qutn7QN3HQ'
    //   }
    // };
    // return await axios(config)
  }

  //load data project
  // getDataProject(): Observable<Project[]>{
  //   return this.httpClient.get<Project[]>(this.basicAPI + 'api/projects' + this.httpOptions);
  // }
  //load data intern
  async getDataIntern(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'interns',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzE2NzczMSwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.GGiKt-DCanfb4TKnwB50DfiLvZ-U0j24HrofJd-B0Wc'
      }
    };
    return await axios(config)
    // return this.httpClient.get<Intern[]>('https://localhost:7254/api/Intern');
  }
  //load data school
  async getDataSchool(){
    var config = {
      method: 'get',
      url: this.basicAPI + 'universities',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzE2NzczMSwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.GGiKt-DCanfb4TKnwB50DfiLvZ-U0j24HrofJd-B0Wc'
      }
    };
    return await axios(config)
  // getDataSchool(){
  //   return this.httpClient.get<School[]>(this.basicAPI + 'api/universities/count' + this.httpOptions);
  // }

  //delete major
  // async deleteMajors(id: string){
  //   var config = {
  //     method: 'delete',
  //     url: this.basicAPI + 'api/Student/DeleteStudentAsync?id=' + id,
  //     headers: {
  //       // 'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzNjkxOWZkMC1jOTMyLTQxNDgtMGIwZS0wOGRiNjMwZDg4YjgiLCJleHAiOjE2ODY5OTQzNjl9.NcyON_2NT2FbkTdACD4psaaWXYJhA13ujNk6wg6XoeE'
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJodW5ncGhhbXBodTE1OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5NzE2NzczMSwiaXNzIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zd2Rwcm9qZWN0YXBpLmF6dXJld2Vic2l0ZXMubmV0In0.GGiKt-DCanfb4TKnwB50DfiLvZ-U0j24HrofJd-B0Wc'
  //     }
  //   };
  //   return await axios(config)
  // }

  }
}
