import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public host = 'http://localhost:9080/Graduation-Project-web/Student';
  constructor(private http: HttpClient) { }
  getStuents() {
      return this.http.get<Student[]>(this.host + '/GetListRegistrationStudent');
  }
}
