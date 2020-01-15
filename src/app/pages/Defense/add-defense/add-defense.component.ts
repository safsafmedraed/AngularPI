
import {Component, ViewEncapsulation, Inject, ViewChild, OnInit} from '@angular/core';
import { extend } from '@syncfusion/ej2-base';

import {
  EventSettingsModel, View, GroupModel, TimelineViewsService, TimelineMonthService, DayService,
  ResizeService, DragAndDropService, ResourceDetails, ScheduleComponent, PopupOpenEventArgs,ActionEventArgs 
} from '@syncfusion/ej2-angular-schedule';
import {ListViewComponent} from '@syncfusion/ej2-angular-lists';
import {SplitterComponent} from '@syncfusion/ej2-angular-layouts';
import {DefenseService} from '../../../Services/defense.service';
import {ActivatedRoute} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import { Item } from '@syncfusion/ej2-splitbuttons';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { L10n } from '@syncfusion/ej2-base';
import { isNullOrUndefined } from 'util';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { EJ2Instance } from '@syncfusion/ej2-navigations';
import { Location } from '@angular/common';

L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': 'Add',
          'cancelButton': 'Close',
          'deleteButton': 'Remove',
          'newEvent': 'Add Defense',
      },
  }
});
@Component({
  selector: 'app-add-defense',
  templateUrl: './add-defense.component.html',
  styleUrls: ['./add-defense.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, TimelineViewsService, TimelineMonthService, ResizeService, DragAndDropService]
})
export class AddDefenseComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  public dataSource=[];
  private show=false;
  public stepIndex=0;
  private blockData: Object[] = [
    // {
    //   Id: 1,
    //   Subject: 'Not Available',
    //   StartTime: new Date(2018, 7, 1, 10, 0),
    //   EndTime: new Date(2018, 7, 1, 12, 0),
    //   IsAllDay: false,
    //   IsBlock: true,
    //   EmployeeId: 1
    // }, {
    //   Id: 2,
    //   Subject: 'Not Available',
    //   StartTime: new Date(2018, 7, 1, 16, 0),
    //   EndTime: new Date(2018, 7, 1, 20, 0),
    //   IsAllDay: false,
    //   IsBlock: true,
    //   EmployeeId: 2
    // }
  ];
  cambiaStep(e) {
    console.log(this.stepIndex)
    this.stepIndex = e.selectedIndex;
}
  public data: Object[] = <Object[]>extend([], this.blockData, null, true);
  public selectedDate: Date = new Date();
  public currentView: View = 'TimelineDay';

  public group: GroupModel = { enableCompactView: false, resources: ['Employee'] };
  public allowMultiple: Boolean = true;
  private idFramer;
  private idReporter;
  private idSheet;
  public list=[];
  private framer;
  private reporter;
  private president;

  private notifier: NotifierService;

  constructor(private defenseservice: DefenseService,private activateRouter: ActivatedRoute,notifierService: NotifierService) {
    this.notifier = notifierService;
    this.activateRouter
      .queryParams
      .subscribe(params => {
        this.idSheet = params['idSheet'] || 0;
      });
    this.defenseservice.getAllSheets()
      .subscribe(
        res => {
          for (let a of res) {
            if (a.id_sheet == this.idSheet && a.reporter != null&& a.encadreur !=null) {
              this.idFramer=a.encadreur.id;
              this.idReporter=a.reporter.id;
              this.defenseservice.getAllTeachersWithCategories(this.idSheet)
                .subscribe(
                  res => {

                    for (let a of res) {
                      let fullname = a.prenom + " " + a.nom;
                      if (a.id!=this.idReporter&&a.id!=this.idFramer){
                        let obj:any={
                          id:a.id,
                          text:fullname,
                          pic:"pic06",
                          color:'blue'
                        }
                        //this.list.push(fullname);
                        //console.log(obj);
                        this.list.push(obj);
                        //console.log(this.dataSource);
                        this.dataSource=this.list;
                        //console.log(this.dataSource);


                      }
//
                    }

                  },
                  err => console.error(err),
                  () => console.log('done loading all teachers')
                );
            }

          }
        },
        err => console.error(err),
        () => console.log('done loading all sheets')
      );

  }
  public employeeDataSource: any = [];
  private idd;
  public idPresident;
public listItems=['CHARGUIA','GHAZELLA'];
public emailReporter;
public emailFramer;
public emailPresident;
  ngOnInit() {

    this.defenseservice.getTheReporter(this.idSheet).subscribe(
      res => {
        let fullname=res.prenom+' '+res.nom;
        this.emailReporter=res.email;
        let obj:any={
          Text: fullname,
          Id: res.id,
          Color: '#bbdc00',
          Designation:'Reporter',
          Email:res.email
        }
        this.idd=res.id;
        this.employeeDataSource.push(obj);
        this.defenseservice.getUpcomingEvents(res.email).subscribe(
          res => {
            const JSobj =JSON.parse(JSON.stringify(res));
             for(let a of JSobj){
              let start: string = (a.StartTime as { [key: string]: Object }).dateTime as string;
              let end: string = (a.EndTime as { [key: string]: Object }).dateTime as string;
               //console.log(new Date(a.EndTime));
               let obj1:any={
            
                Subject: 'Not Available',
                StartTime: new Date(a.StartTime),
                EndTime: new Date(a.EndTime),
                IsAllDay: false,
                IsBlock: true,
                EmployeeId: this.idd
               }
               this.blockData.push(obj1);

             }
         
          
        
        
          },
          err => console.error(err),
          () => console.log('done loading all events')
        );

        

      },
      err => console.error(err),
      () => console.log('done loading the reporter')
    );
    //Get the president

    this.defenseservice.getThePresident(this.idSheet).subscribe(
      res => {
        this.emailPresident=res.email;
        let fullname=res.prenom+' '+res.nom;
         this.idPresident=res.id;
        let obj:any={

          Text: fullname,
          Id: res.id,
          Color: ' #CD5C5C',
          Designation:'President',
          Email:res.email
        }
        this.employeeDataSource.push(obj);
        this.defenseservice.getUpcomingEvents(res.email).subscribe(
          res => {
        
            const JSobj =JSON.parse(JSON.stringify(res));
             for(let a of JSobj){
              let start: string = (a.StartTime as { [key: string]: Object }).dateTime as string;
              let end: string = (a.EndTime as { [key: string]: Object }).dateTime as string;
               //console.log(new Date(a.EndTime));
               let obj1:any={
            
                Subject: 'Not Available',
                StartTime: new Date(a.StartTime),
                EndTime: new Date(a.EndTime),
                IsAllDay: false,
                IsBlock: true,
                EmployeeId: this.idPresident
               }
               this.blockData.push(obj1);
       
             }
         
          
        
        
          },
          err => console.error(err),
          () => console.log('done loading all events')
        );

      },
      err => console.error(err),
      () => console.log('done loading the teacher')
    );
    //get The Framer
    this.defenseservice.getTheFramer(this.idSheet).subscribe(
      res => {
        this.emailFramer=res.email;
        let fullname=res.prenom+' '+res.nom;
        let idFramer=res.id;
        let obj:any={

          Text: fullname,
          Id: res.id,
          Color: '',
          Designation:'Framer',
          Email:res.email
        }
        this.employeeDataSource.push(obj);
        this.defenseservice.getUpcomingEvents(res.email).subscribe(
          res => {
            const JSobj =JSON.parse(JSON.stringify(res));
             for(let a of JSobj){
               let obj1:any={
            
                Subject: 'Not Available',
                StartTime: new Date(a.StartTime),
                EndTime: new Date(a.EndTime),
                IsAllDay: false,
                IsBlock: true,
                EmployeeId: idFramer
               }

               this.blockData.push(obj1);

             }
         
          
        
        
          },
          err => console.error(err),
          () => console.log('done loading all events')
        );

      },
      err => console.error(err),
      () => console.log('done loading the teacher')
    );
    //console.log('list of employees'+this.employeeDataSource);

    
  }

   minValidation: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    return args['value'].length >= 5;
};
  public eventSettings: EventSettingsModel = {
    dataSource: this.blockData,
    fields: {

      subject: { name: 'Subject',validation: { required: true } },
      location: { name: 'Location', validation: { required: true } },
      description: {
          name: 'Description', validation: {
              required: true, minLength: [this.minValidation, 'Need atleast 5 letters to be entered']
          }
      },
      startTime: { name: 'StartTime', validation: { required: true } },
      endTime: { name: 'EndTime', validation: { required: true } }
  }

  };
  
  getEmployeeName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
  }
  getEmployeeDesignation(value: ResourceDetails): string {
    let resourceName: string =
      (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
    return (value as ResourceDetails).resourceData.Designation as string;
  }
  getEmployeeImageName(value: ResourceDetails): string {
    return this.getEmployeeName(value).toLowerCase();
  }
  //For the list of availaible teachers
  @ViewChild('letterAvatarList') listObj: ListViewComponent;
  @ViewChild('splitterInstance') splitterObj: SplitterComponent;
  getData(){


  }

  onActionComplete(): void {
    this.listObj.selectItem(this.dataSource[0]);

  }
private idteacher;
  onSelect(e: any): void {
    this.show=true;
    const listid: string = e.item.dataset.uid;
    this.idteacher=listid;
    this.defenseservice.getTheTeacherById(listid).subscribe(
      res => {
        this.splitterObj.paneSettings[1].content = '<div class="header-image"></div><div class="profile-name"><h1>'+res.nom+' '+res.prenom+'</h1></div><table><tr><td class="e-bold">Email</td><td>'+res.email+'</td></tr><tr><td class="e-bold">Last Date of Defense</td><td>'+res.dateLastDefense+'</td></tr><tr><td class="e-bold">Number of Defenses</td><td>'+res.nbrSoutenance+'</td></tr></table>';


      },
      err => console.error(err),
      () =>{ console.log('done loading the teacher');
      }
    );

  }
  affectPresident(){
    //console.log(this.idteacher);
    this.defenseservice.getTheTeacherById(1).subscribe(
      res => {
        let teacher = res;
        this.defenseservice.getAllSheets().subscribe(
          res => {   
            for (let a of res) {
              if (a.id_sheet == this.idSheet && a.reporter.id != teacher.id&& a.encadreur.id !=teacher.id) {

                this.defenseservice.affectAPresident(this.idSheet,teacher).subscribe(
                  res => {    this.notifier.notify( 'success', 'The president was Assigned');this.ngOnInit();
                     },
                  err => console.error(err),
                );
              }
            
            }

             },
          err => console.error(err),
        );
        //
        

      },
      err => console.error(err),
      () =>{ console.log('done loading the teacher');
      }
    );
  }
  public sheet:any;
  onActionBegin(args: ActionEventArgs): void {
    let listNames=[];
    if(args.requestType == 'eventCreate') {
      console.log(args.data);
      let k:any=args.data;
      //Get the sheet
      this.defenseservice.getAllSheets()
      .subscribe(
        res => {
          for (let a of res) {
            if (a.id_sheet == this.idSheet) {
              this.sheet=a;
            }
            let start;
            let locationn;
            let idEmp;
            let end;
            let idEvent;
            for(let a of k){
               start=a.StartTime;
               locationn=a.Location;
                  
              console.log('thedata'+a.StartTime);
             console.log('thedata'+a.Location);
             end=a.EndTime;
             console.log(a.EmployeeId);
             idEmp=a.EmployeeId;
             idEvent=a.Id;

             console.log()
      
               }
            console.log('the sheet'+start);
            let datestart=new Date(start);
            let dateEnd=new Date(end);
          

            this.defenseservice.addDefenseInDatabase(this.formatDate(datestart),locationn,this.sheet,this.getFormattedDate(datestart)).subscribe(
   
             res => {
               if(res==false){
                //Ajouter notif mtaa el refus
                args.cancel=true;
                //this.scheduleObj.deleteEvent(idEvent);

               }
               else{
                //Notif mtaa el ajout
                //Get All emails
       
                console.log("id reporter"+this.idReporter);
                let dates=this.formatDate(datestart)+' '+this.getFormattedDate(datestart);
                console.log('ssss'+dates);
                let dateen=this.formatDate(dateEnd)+' '+this.getFormattedDate(dateEnd);
                console.log('eeee'+dateen);
           this.defenseservice.addEventInGoogleCalendar(this.emailReporter,this.emailFramer,this.emailPresident,'aa',this.formatDate(datestart)+' '+this.getFormattedDate(datestart),this.formatDate(dateEnd)+' '+this.getFormattedDate(dateEnd),this.sheet).subscribe(
           res =>{
            this.defenseservice.getTheIdOfDefenseFromSheet(this.idSheet).subscribe(res => {
              this.defenseservice.sendEmailToPresident(this.emailPresident,this.getFormattedDate(datestart),this.formatDate(datestart)," ",res)
              .subscribe(res =>{},
                err => console.error(err),
                () => console.log('')
              );
              this.defenseservice.sendEmailToFramer(this.emailFramer,this.getFormattedDate(datestart),this.formatDate(datestart)," ",res)
              .subscribe(res =>{},
                err => console.error(err),
                () => console.log('')
              );
              this.defenseservice.sendEmailToReporter(this.emailReporter,this.getFormattedDate(datestart),this.formatDate(datestart)," ",res)
              .subscribe(res =>{},
                err => console.error(err),
                () => console.log('')
              );

            },
          
              err => console.error(err),
              () => console.log('Added to google calendar')
            );
 
          

           },
          
             err => console.error(err),
             () => console.log('Added to google calendar')
           );

    

          }
             },
        err => console.error(err),
        () => console.log('done loading all sheets') );
            }});
  
}
   }
 formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
 getFormattedDate(date) {
  
  var str =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return str;
}
  onPopupOpen(args: PopupOpenEventArgs): void {
    let listNames=[];
    console.log(this.employeeDataSource);
    for(let a of this.employeeDataSource){
   listNames.push(a.Text);
    }
    console.log(args.data);
    if (args.type === 'Editor') {
       
    }
}

}
