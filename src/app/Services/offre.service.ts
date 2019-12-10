import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Offreentreprise} from '../Models/offreentreprise';
import {Category} from '../Models/Category';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Useroffre} from '../Models/useroffre';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  public host = '/api/Offre';

  constructor(private http: HttpClient) {
  }

  /*****************OffreCby id*******************/
  offrebyid(): Observable<Offreentreprise[]> {
    return this.http.get<Offreentreprise[]>(this.host + '/MyOffres').pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  /******************add offre****************/
  Addoffre(offre) {
    return this.http.post<Offreentreprise>(this.host, offre);
  }

  /******************get offre****************/
  getOffre(): Observable<Offreentreprise[]> {
    return this.http.get<Offreentreprise[]>(this.host + '/Getoffre').pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  /***********delete offre *************/
  Deletoffre(id) {
    return this.http.delete(this.host + '/' + id);
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  applytoOffre(id) {
    return this.http.post<Useroffre>(this.host + '/Offrestudent?ido=' + id, id);
  }

  candidature(id): Observable<Useroffre[]> {
    return this.http.get<Useroffre[]>(this.host + '/MyOffres/' + id).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  stat(idE, date) {
    return this.http.get(this.host + '/StatD?idE=' + idE + '&date=' + date);
  }
}
