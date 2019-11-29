import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = '/api/task';
  constructor(private http: HttpClient) { }
  getTasks(id) {
    return this.http.get<Task[]>(this.url + '/gettasksbyproject/' + id);
  }
  getTask(id) {
    return this.http.get<Task>(this.url + '/gettask/' + id);
  }
  addTask(task) {
    return this.http.post<Task>(this.url + '/addtask/' , task);
  }
  updatestatus(task) {
    return this.http.put<Task>(this.url + '/updatestatus/' , task);
  }
  updateapproved(task) {
    return this.http.put<Task>(this.url + '/updateapproved/' , task);
  }
  deletetask(id) {
    return this.http.delete(this.url + '/deletetask/' + id);
  }
  getKeywords(id) {
    return this.http.get(this.url + '/getkeywords/' + id);
  }
  getStats(id) {
    return this.http.get(this.url + '/getstatsbyproject/' + id);
  }
  getDateStats(id) {
    return this.http.get(this.url + '/getdatestats/' + id);
  }
}
