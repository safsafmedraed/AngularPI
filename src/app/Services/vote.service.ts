import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {VoteComment} from '../Models/VoteComment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  public host = '/api/addvote';
  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getvotePerComment(id) {
    return this.http.get<VoteComment[]>(this.host + '?id=' + id) ;
  }
}
