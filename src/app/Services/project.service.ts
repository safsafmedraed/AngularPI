import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Project} from '../Models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = '/api/project';
  constructor(private http: HttpClient) { }
  getProjects(id) {
    return this.http.get<Project[]>(this.url + '/getprojects/' + id);
  }
  getProjectbyid(id) {
    return this.http.get<Project>(this.url + '/getproject/' + id);
  }
}
