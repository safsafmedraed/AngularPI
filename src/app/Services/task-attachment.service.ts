import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskAttachmentService {
  url = '';
  constructor(private http: HttpClient) { }
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = '/api/taskfile/upload?id=10';
    const formData: FormData = new FormData();
    formData.append('uploadedFile', fileToUpload);
    return this.http
      .post(endpoint, formData).pipe(
      map(() => true));
  }
  downloadFile(): Observable<HttpResponse<Blob>> {
    return this.http.get<any>('/api/taskfile/downloadbyid/4',{responseType: 'blob' as 'json'});
  }

  public downloadResource(): Promise<Blob> {
    const file =   this.http.get<Blob>(
      '/api/taskfile/downloadbyid/4',
      {responseType: 'blob' as 'json'}).toPromise();
    return file;
  }
}
