import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  logIn(email, password) {

    return this.http.get<any>('http://localhost:9080/Graduation-Project-web/authenticate?email=' +  email + '&password=' + password);

  }
}
