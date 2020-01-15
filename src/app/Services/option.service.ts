import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Options} from '../Models/Options';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  public host = 'http://localhost:9080/Graduation-Project-web/Options';
  constructor(private http: HttpClient) { }
  getOpt() {
    return this.http.get<Options[]>(this.host + '/getOptions');
  }
  getOptbyDepart(id) {
    return this.http.get<Options[]>(this.host + '/getOptionss/' + id );
  }
  Adddepart(site) {
    return this.http.post<Options>(this.host, site);
  }
  affecter(school, id) {
    return this.http.put<Options>(this.host + '/' + id, school);
  }
  DeleteDepart(id) {
    return this.http.delete<Options>(this.host + '/' + id);
  }
}
