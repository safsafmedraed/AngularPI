import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Classes} from '../Models/Classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  public host = 'http://localhost:9080/Graduation-Project-web/classe';
  constructor(private http: HttpClient) { }
  getSites() {
    return this.http.get<Classes[]>(this.host + '/getclasses');
  }
  getsitebyschool(id) {
    return this.http.get<Classes[]>(this.host + '/getclassess/' + id );
  }
  AddSite(site) {
    return this.http.post<Classes>(this.host, site);
  }
  affecter(school, id) {
    return this.http.put<Classes>(this.host + '/' + id, school);
  }
  affecterstudent(school, id) {
    return this.http.put<Classes>(this.host + '/' + school + '/' + id, {});
  }
  DeleteSite(id) {
    return this.http.delete<Classes>(this.host + '/' + id);
  }
}
