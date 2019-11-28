import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sheet } from '../Models/Sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {

constructor(private httpClient: HttpClient) { }
getAllSheet() {
  return this.httpClient.get<Sheet[]>(
      'http://localhost:9080/Graduation-Project-web/Staff/DisplayAllSheet'
  ); }

getStaffSheet() {
  return this.httpClient.get<Sheet[]>(
    'http://localhost:9080/Graduation-Project-web/Staff/DisplayStaffSheets/'+56
); }
}

