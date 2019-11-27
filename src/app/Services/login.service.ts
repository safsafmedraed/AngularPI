import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  logIn(email, password) {


    return this.http.get<any>('/api/authenticate?email=' +  email + '&password=' + password);

  }
}
