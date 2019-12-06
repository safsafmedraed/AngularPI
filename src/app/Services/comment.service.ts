import { Injectable } from '@angular/core';
import {Comment} from '../Models/Comment';
import {HttpClient} from '@angular/common/http';
import {Post} from '../Models/Post';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public host = '/api/comment';
  constructor(private http: HttpClient) { }

  getComments(id) {
    return this.http.get<Comment[]>(this.host + '/' + id);
  }
}
