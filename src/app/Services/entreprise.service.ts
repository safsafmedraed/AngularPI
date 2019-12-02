import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entreprise} from '../Models/entreprise';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Subject} from 'rxjs';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  public host = '/api/Entreprise';


  constructor(private http: HttpClient) {
  }


  /**************GetApprovedCompanies********************/
  getCompanies() {
    return this.http.get<Entreprise[]>(this.host + '/GetEntreprise');

  }

  /*************Approve Company****************/
  approveCompany(id) {
    return this.http.put<Entreprise>(this.host + '/approved/' + id, null );
  }

  /******************Register Company****************/
  registerCompany(Company) {
    return this.http.post<Entreprise>(this.host, Company);
  }

  /************Delete Company ************/
  deleteCompany(id) {
    return this.http.delete(this.host + '/' + id);
  }
}
