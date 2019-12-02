import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static getToken() {

    return localStorage.getItem('token').slice(1, -1);
  }

  constructor(private http: HttpClient) {
  }

  logCompany(identifiant, password) {
    return this.http.get<any>('/api/Entreprise/login?identifiant=' + identifiant + '&password=' + password);
  }

  logIn(email, password) {

    return this.http.get<any>('/api/authenticate?email=' + email + '&password=' + password);

  }

}
