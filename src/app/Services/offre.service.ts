import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offreentreprise} from '../Models/offreentreprise';
import {Category} from '../Models/Category';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  public host = '/api/Offre';

  constructor(private http: HttpClient) {
  }

  /******************add offre****************/
  Addoffre(offre) {
    return this.http.post<Offreentreprise>(this.host, offre);
  }

  /******************get offre****************/
  getOffre() {
    return this.http.get<Offreentreprise[]>(this.host + '/Getoffre');
  }

  /***********delete offre *************/
  Deletoffre(id) {
    return this.http.delete(this.host + '/' + id);
  }
}
