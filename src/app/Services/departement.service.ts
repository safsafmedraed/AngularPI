import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../Models/School";
import {Departement} from "../Models/Departement";
import {Site} from "../Models/Site";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  public host = 'http://localhost:9080/Graduation-Project-web/departement';
  constructor(private http: HttpClient) { }
  getDepartements() {
    return this.http.get<Departement[]>(this.host + '/getdepartement');
  }
  getDepartementsbySite(id) {
    return this.http.get<Departement[]>(this.host + '/getdepartementt/' + id);
  }
  /***********addSchool*************/
  AddDepartement(departement) {
    return this.http.post<Departement>(this.host, departement);
  }
  /************DeleteSchool*****************/
  DeleteDepartement(id) {
    return this.http.delete<Departement>(this.host + '/' + id);
  }
  affecter(Site, id) {
    return this.http.put<Departement>(this.host + '/' + id, Site);
  }
}
