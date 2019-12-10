import {Inject, Injectable} from '@angular/core';
import {Comment} from '../Models/Comment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../Models/Post';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {Observable} from 'rxjs';
import {VoteComment} from '../Models/VoteComment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public host = '/api/comment';
  public host2 = '/api/addvote';
  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getComments(id) {
    return this.http.get<Comment[]>(this.host + '/' + id);
  }
  addPComment(comment: Comment, id): Observable<any> {
    return this.http.post(  this.host + '?id=' + id , comment, this.httpOptions );
  }
  getvotePerComment(id) {
    return this.http.get<VoteComment[]>(this.host2 + '?id=' + id) ;
  }
  getnotif(){
    return this.http.get<string[]>(this.host + '/notifs');
  }
}
