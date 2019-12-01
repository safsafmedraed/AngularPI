import { Sheet } from './../Models/Sheet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InitialInputData } from '@angular/core/src/render3/interfaces/node';


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

AcceptSheet(id){
  return this.httpClient.put<Sheet>(
    'http://localhost:9080/Graduation-Project-web/Staff/AcceptSheetBySupervisor/'+id,new Sheet())}
  

RefuseSheet(id){
      return this.httpClient.put<Sheet>(
        'http://localhost:9080/Graduation-Project-web/Staff/RefuseSheetBySupervisor/'+id,new Sheet())}   
getListStaffModification() {
      return this.httpClient.get<Sheet[]>(
        'http://localhost:9080/Graduation-Project-web/Staff/DisplayModificationRequests/'+56
        ); }
 
AcceptModification(id){
      return this.httpClient.put<Sheet>(
        'http://localhost:9080/Graduation-Project-web/Staff/AcceptModification/'+id,new Sheet())}
}




