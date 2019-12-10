import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Activity} from '../Models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url = '/api/activity';
  constructor(private http: HttpClient) { }

  getActivities(id) {
    return this.http.get<Activity[]>(this.url + '/getactivities/' + id);
  }
}
