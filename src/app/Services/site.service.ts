import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Site} from '../Models/Site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  public host = 'http://localhost:9080/Graduation-Project-web/site';
  constructor(private http: HttpClient) { }
  getSites() {
    return this.http.get<Site[]>(this.host + '/getsite');
  }
  getsitebyschool(id) {
    return this.http.get<Site[]>(this.host + '/getsitee/' + id );
  }
  AddSite(site) {
    return this.http.post<Site>(this.host, site);
  }
  affecter(school, id) {
    return this.http.put<Site>(this.host + '/' + id, school);
  }
  DeleteSite(id) {
    return this.http.delete<Site>(this.host + '/' + id);
  }
}
