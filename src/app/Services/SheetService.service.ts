import { Lib } from './../Models/Lib';
import { Category } from './../Models/Category';
import { Sheet } from './../Models/Sheet';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InitialInputData } from '@angular/core/src/render3/interfaces/node';


@Injectable({
  providedIn: 'root'
})

export class SheetServiceService {
  sheet: Sheet;
  category : Category;
  constructor(private httpClient: HttpClient) { }
  getAllSheet() {
    return this.httpClient.get<Sheet[]>(
      'http://localhost:9080/Graduation-Project-web/Staff/DisplayAllSheet'
    );
  }
  getStaffSheet(id) {
    return this.httpClient.get<Sheet[]>(
      'http://localhost:9080/Graduation-Project-web/Staff/DisplayStaffSheets/'+id
    );
  }

  AcceptSheet(id) {
    return this.httpClient.put<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Staff/AcceptSheetBySupervisor/' + id, new Sheet())
  }


  RefuseSheet(id) {
    return this.httpClient.put<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Staff/RefuseSheetBySupervisor/' + id, new Sheet())
  }
  getListStaffModification(id) {
    return this.httpClient.get<Sheet[]>(
      'http://localhost:9080/Graduation-Project-web/Staff/DisplayModificationRequests/'+id
    );
  }

  AcceptModification(id) {
    return this.httpClient.put<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Staff/AcceptModification/' + id, new Sheet())
  }
  getSheetbyIDstudent(id) {
    return this.httpClient.get<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Student/GetSheetByStudentId?idStudent='+id
    );
  }
  ResfuseModification(id, ref) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.get(
      'http://localhost:9080/Graduation-Project-web/Staff/RefuseModification/' + id + '?ref=' + ref, httpOptions)
  };
  addSheet(Sheet) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Student/AddSheet/',Sheet,httpOptions

    )
  }
  addCategory(category,id){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Category>(
      'http://localhost:9080/Graduation-Project-web/Student/AddCategory/'+id,category,httpOptions

    )
    
  }
  ModifyMin(id,sheet){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Student/ModifySheet/'+id,sheet,httpOptions

    )
    
  }

  ModifyMajor(id,sheet){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Student/ModifySheetbyRequest/'+id,sheet,httpOptions

    )
    
  }
 getNotAcceptedSheets () {
    return this.httpClient.get<Sheet[]>(
      'http://localhost:9080/Graduation-Project-web/Staff/DisplayNotAcceptedSheets'
    );
  }

  AcceptSheetByChef(id,sheet){

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Sheet>(
      'http://localhost:9080/Graduation-Project-web/Staff/AcceptSheet/'+id,sheet,httpOptions

    )  
}

DeleteStaff(id,sheet){

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  return this.httpClient.post<Sheet>(
    'http://localhost:9080/Graduation-Project-web/Staff/DeleteStaffFromSheet/'+id,sheet,httpOptions

  )
  
}

getLib () {
  return this.httpClient.get<Lib[]>(
    'https://libraries.io/api/platforms?api_key=0e2fb660ededecba6ff3c3fef1b656be'
  );
}

}




