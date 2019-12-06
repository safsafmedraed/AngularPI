import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TaskComment} from '../Models/TaskComment';


@Injectable({
  providedIn: 'root'
})
export class TaskCommentService {
  url = '/api/taskcomment';
  httpOptions =
    {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    };
  constructor(private http: HttpClient) { }
  getComments(id) {
    return this.http.get<TaskComment[]>(this.url + '/getcommentsbytask/' + id);
  }
  addComment(COMMENT) {
    return this.http.post(this.url + '/addcomment' , COMMENT, this.httpOptions);
  }
}
