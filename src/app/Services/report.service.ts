import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {Post} from '../Models/Post';
import {Observable} from 'rxjs';
import {ReportPost} from '../Models/ReportPost';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public host = '/api/report';
  constructor(private http: HttpClient,  @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addreport(report: ReportPost, id): Observable<any> {
    return this.http.post(  this.host + '?id=' + id , report, this.httpOptions );
  }
}
