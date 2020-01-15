import { Injectable } from '@angular/core';
import {Entreprise} from '../Models/entreprise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefenseService {

  constructor(private http: HttpClient) { }

  getAllSheets() {
    return this.http.get<any>('api/defenseressource/getAllSheets');
  }
  sendReminderEmail(email:string , content:string, subject:string){
    return this.http.get<any>('api/defenseressource/sendReminderemail/'+ email+"/"+ subject+"/"+ content);
  }
  getAllTeachersWithCategories(id){
    return this.http.get<any>('api/defenseressource/getAllTeachersWithSpecificCategories/'+id);
  }
  getTheTeacherById(id){
    return this.http.get<any>('api/defenseressource/getTeacherById/'+id);
  }
  affectAReporter(idsheet,reporter){

    return this.http.post<any>('api/defenseressource/affectReporter/'+idsheet, reporter);

  }
  affectAPresident(idsheet,reporter){

    return this.http.post<any>('api/defenseressource/affectPresident/'+idsheet, reporter);
  }
  getTheReporter(idsheet){
    return this.http.get<any>('api/defenseressource/getTheReporter/'+idsheet);

  }
  getThePresident(idsheet){
    return this.http.get<any>('api/defenseressource/getThePresident/'+idsheet);

  }
  getTheFramer(idsheet){
    return this.http.get<any>('api/defenseressource/getTheFramer/'+idsheet);

  }
  getUpcomingEvents(email){
    return this.http.get<any>('api/defenseressource/getUpcoming/'+email);

  }
  addDefenseInDatabase(date,location,sheet,time){
    return this.http.post<any>('api/defenseressource/addDefense/'+date+'/'+location+'/'+time, sheet);

  }
  addEventInGoogleCalendar(emailReporter,emailFramer,EmailPresident,description,start,end,sheet){
    return this.http.post<any>('api/defenseressource/addDefenseGoogleCalendar/'+emailReporter+'/'+emailFramer+'/'+EmailPresident+'/'+description+'/'+start+'/'+end,sheet);
  }
  getEmailTeacherById(id){
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.get<any>('api/defenseressource/getEmailTeacherById/'+id,headers);
  }
  sendEmailToFramer(email,time,date,description,idDefense){

    return this.http.get<any>('api/defenseressource/sendEmailToFramer/'+email+"/"+time+"/"+date+"/"+description+"/"+idDefense);

  }
  sendEmailToReporter(email,time,date,description,idDefense){

    return this.http.get<any>('api/defenseressource/sendEmailToReporter/'+email+"/"+time+"/"+date+"/"+description+"/"+idDefense);

  }
  sendEmailToPresident(email,time,date,description,idDefense){

    return this.http.get<any>('api/defenseressource/sendEmailToPresident/'+email+"/"+time+"/"+date+"/"+description+"/"+idDefense);

  }
  getTheIdOfDefenseFromSheet(idSheet){

    return this.http.get<any>('api/defenseressource/getIdDefenseFromSheet/'+idSheet);

  }
  getAllDefenses(){

    return this.http.get<any>('api/defenseressource/getAllDefenses');

  }
}
