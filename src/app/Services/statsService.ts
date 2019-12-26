import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class statsService {

  constructor(private http: HttpClient) { }
  stats() {

    return this.http.get<any>('http://localhost:9080/Graduation-Project-web/Staff/DisplaySheetStats');

  }
}
