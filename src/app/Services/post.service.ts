import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Entreprise} from '../Models/entreprise';
import {Post} from '../Models/Post';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public host = '/api/post';
  constructor(private http: HttpClient,  @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPosts() {
    return this.http.get<Post[]>(this.host + '/allposts');
  }
  getPostById(id) {
    return this.http.get<Post>(this.host + '/' + id);
  }
  addPost(post: Post): Observable<any> {
    return this.http.post(  this.host , post, this.httpOptions );
  }
  deletePost(id: number) {
    return this.http.delete(this.host + '/' + id);
  }
  updatePost(id) {
    return this.http.put(this.host + '?idposte=' + id , this.httpOptions);
  }
}
