import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entreprise} from '../Models/entreprise';
import {School} from '../Models/School';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  public host = 'http://localhost:9080/Graduation-Project-web/school';

  constructor(private http: HttpClient) {
  }

  /*************getschools*****/
  getSchools() {
    return this.http.get<School[]>(this.host + '/getschool');
  }
  getSchoolsdetails(name) {
    return this.http.get<School[]>(this.host + '/getschoolbyname/' + name);
  }

  /***********addSchool*************/
  AddSchool(SCHOOL) {
    return this.http.post<School>(this.host, SCHOOL);
  }
  /************DeleteSchool*****************/
  DeleteSchool(id) {
    return this.http.delete<School>(this.host + '/' + id);
  }
  findbyname(schoolname) {
    return this.http.get<School[]>(this.host + '/getschoolbyname/' + schoolname);
  }
}
