import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DefenseService} from '../../Services/defense.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NourcheneComponent} from '../nourchene/nourchene.component';
import {NotifierService} from 'angular-notifier';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import {
  ScheduleComponent, EJ2Instance, EventSettingsModel, DayService, WeekService,
  WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import {DetailsSheetDiagComponent} from '../Defense/details-sheet-diag/details-sheet-diag.component';
import {Router} from '@angular/router';
import { Query, Predicate, DataManager, ReturnOption } from '@syncfusion/ej2-data';
import { Grid, ToolbarItems, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { extend } from '@syncfusion/ej2-base';
import { ViewDetailsDefenseComponent } from '../Defense/view-details-defense/view-details-defense.component';


@Component({
  selector: 'app-gestion-soutenances',
  templateUrl: './gestion-soutenances.component.html',
  styleUrls: ['./gestion-soutenances.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class GestionSoutenancesComponent implements OnInit {

  public datagrid: Object[];
  public pageSettings: Object;
  public toolbargrid: string[];
 public data: any;
  private notifier: NotifierService;
  constructor( private defenseservice: DefenseService,private diag:MatDialog,notifierService: NotifierService,    private router: Router) {
    this.notifier = notifierService;
  }
  public scheduleData = [];
  public selectedDate: Date = new Date();
  public toolbarOptions: ToolbarItems[];
  public months=[];
  public countJanvier=0;
  public countFevrier=0;
  public countMars=0;
  public countAvril=0;
  public countMai=0;
  public countJuin=0;
  public countJuillet=0;
  public countAout=0;
  public countSeptembre=0;
  public countOctober=0;
  public countNovembre=0;
  public countDecembre=0;


  ngOnInit() {
 
    this.pageSettings = { pageCount: 5 };
    this.toolbargrid = ['Search'];
    this.defenseservice.getAllDefenses()
      .subscribe(
        res => {
          const JSobj =JSON.parse(JSON.stringify(res));
          for(let a of JSobj){
            var dateObj = new Date(a.dateDefense);
          var month=dateObj.getUTCMonth() + 1;
          this.months.push(month);
          }
          for(let mo of this.months){
            if(mo==1){
             this.countDecembre++;
        
            }
            if(mo==2){
              this.countFevrier++;
             }
             if(mo==3){
              this.countMars++;
             }
             if(mo==4){
              this.countAvril++;
             }
             if(mo==5){
              this.countMai++;
             }
             if(mo==6){
              this.countJuin++;
             }
             if(mo==7){
              this.countJuillet++;
             }
             if(mo==8){
              this.countAout++;
             }
             if(mo==9){
              this.countSeptembre++;
             }
             if(mo==10){
              this.countOctober++;
             }
             if(mo==11){
              this.countNovembre++;
             }
             if(mo==12){
              this.countDecembre++;
          
             }   
           
      
            }

        },
        err => console.error(err),
        () => console.log('done loading all defenses')
      );
   
      



    this.toolbarOptions = ['Print'];
    console.log(this.toolbarOptions);
    this.defenseservice.getAllSheets()
      .subscribe(
        res => {this.data = res;
          this.datagrid =res ;
        },
        err => console.error(err),
        () => console.log('done loading all sheets')
      );
      
      this.defenseservice.getAllDefenses().subscribe(res => {
     
     
       const JSobj =JSON.parse(JSON.stringify(res));
       for(let a of JSobj){
        let startTime= a.dateDefense+" "+a.timeDefense;
        let datestart=new Date(startTime);
        let dateend= new Date(startTime).setHours(new Date(startTime).getHours() + 1);
        
        let obj:any={
          Id: a.id_defense,
          Subject: 'Defense '+a.id_defense,
          StartTime: datestart,
          EndTime: new Date(dateend),
          Location:'Charguia',
          StateDefense:a.stateDefense,
          CategoryColor: '#1aaa55'

         };
         this.scheduleData.push(obj);
         console.log(this.scheduleData);
       }
    
     

      },
         err => console.error(err),
      () => console.log('done loading all Defenses')
    );




  }
    //NGX-Admin angular table
    public mydata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'The report of defenses',
          data: [50,40, 10, this.countAvril, this.countMai, this.countJuin, 30],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };
    //END
  public eventSettings: EventSettingsModel = { dataSource: this.scheduleData};

  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message);
  }
  View(d:any) {
    let data1={
      caller:'Details',
      info:d
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='800px';
    dialogConfig.data=data1;

    let diag = this.diag.open(NourcheneComponent,dialogConfig);
 }

  public ShowNotification(){


  }

  ViewDetails(d){
   /* let data1={
      caller:'Sheet',
      info:d
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='800px';
    dialogConfig.data=data1;

    let diag = this.diag.open(DetailsSheetDiagComponent,dialogConfig);
*/
    this.router.navigate(['/Detailsheets'], { queryParams: { "title": d.title,
        "description":d.description,
        "issues":d.issue,
        "Features":d.features,
        "EncadreurId":d.encadreur.id,
        "EncadreurName":d.encadreur.nom,
        "EncadreurPrenom":d.encadreur.prenom,
        "EncadreurEmail":d.encadreur.email,
        "IdSheet":d.id_sheet

      } });
    //this.router.navigate(['/Detailsheets']);

  }

  @ViewChild('scheduleObj') scheduleObj: ScheduleComponent;
  @ViewChild('subject') subjectObj: ElementRef;
  @ViewChild('location') locationObj: ElementRef;
  @ViewChild('startTime') startTimeObj: DatePickerComponent;
  @ViewChild('endTime') endTimeObj: DatePickerComponent;

  globalSearch(args: KeyboardEvent): void {
    let searchString: string = (args.target as HTMLInputElement).value;
    if (searchString !== '') {
      new DataManager(this.scheduleObj.getEvents(null, null, true)).executeQuery(new Query().
      search(searchString, ['Subject', 'Location', 'Description'], null, true, true)).then((e: ReturnOption) => {
        if ((e.result as any).length > 0) {
          this.showSearchEvents('show', e.result);
        } else {
          this.showSearchEvents('hide');
        }
      });
    } else {
      this.showSearchEvents('hide');
    }
  }

  searchOnClick(): void {
    let searchObj: { [key: string]: any }[] = [];
    let endDate: Date;
    let formElements: HTMLInputElement[] = [
      this.subjectObj.nativeElement,
      this.locationObj.nativeElement
    ];
    formElements.forEach((node: HTMLInputElement) => {
      if (node.value && node.value !== '') {
        searchObj.push({
          field: node.name, operator: 'contains', value: node.value, predicate: 'or',
          matchcase: 'true'
        });
      }
    });
    if (this.startTimeObj.value) {
      searchObj.push({
        field: 'StartTime', operator: 'greaterthanorequal', value: this.startTimeObj.value, predicate: 'and',
        matchcase: false
      });
    }
    if (this.endTimeObj.value) {
      let date: Date = new Date(+this.endTimeObj.value);
      endDate = new Date(date.setDate(date.getDate() + 1));
      searchObj.push({
        field: 'EndTime', operator: 'lessthanorequal', value: endDate, predicate: 'and',
        matchcase: false
      });
    }
    if (searchObj.length > 0) {
      let filterCondition: { [key: string]: any } = searchObj[0];
      let predicate: Predicate = new Predicate(
        filterCondition.field, filterCondition.operator, filterCondition.value, filterCondition.matchcase);
      for (let i: number = 1; i < searchObj.length; i++) {
        predicate = predicate.and(searchObj[i].field, searchObj[i].operator, searchObj[i].value, searchObj[i].matchcase);
      }
      let result: Object[] = new DataManager(this.scheduleObj.getEvents(this.startTimeObj.value, endDate, true))
        .executeLocal(new Query().where(predicate));
      this.showSearchEvents('show', result);
    } else {
      this.showSearchEvents('hide');
    }
  }
  @ViewChild('grid')
  public gridObj: GridComponent;

  clearOnClick(): void {
    document.getElementById('schedule').style.display = 'block';
    (document.getElementById('form-search') as HTMLFormElement).reset();
    this.showSearchEvents('hide');
  }
public show=false;
public data1=[];
rowSelected(args: RowSelectEventArgs) {
  console.log(args.data);
  let thedata:any=args.data;
  console.log('The id'+thedata.Id);
  let data1={
    caller:'Details',
    info:thedata.Id
  }
  const dialogConfig = new MatDialogConfig();
  dialogConfig.height='auto';
  dialogConfig.width='800px';
  dialogConfig.data=data1;

  let diag = this.diag.open(ViewDetailsDefenseComponent,dialogConfig);

}
  private showSearchEvents(type: string, data?: Object): void {
    console.log('the data'+data);
    this.show=true;
    this.data1.push(data);
    this.scheduleObj.element.style.display = 'none';
    this.gridObj.dataSource = data;
    if (type === 'show') {
      // if (document.getElementById('grid').classList.contains('e-grid')) {
      //   let gridObj: Grid = (document.querySelector('#grid') as EJ2Instance).ej2_instances[0] as Grid;

      //   gridObj.dataBind();
      // } else {
   
        // let gridObj: Grid = new Grid({
        //   dataSource: data,
        //   height: 850,
        //   width: 850,
        //   toolbar:this.toolbarOptions,
      
        //   columns: [
        //     { field: 'Subject', headerText: 'Subject', width: 120 },
        //     {field:'StateDefense',headerText:'State',width:120},
        //     { field: 'Location', headerText: 'Location', width: 120 },
        //     { field: 'StartTime', headerText: 'StartTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
        //     { field: 'EndTime', headerText: 'EndTime', width: 120, format: { type: 'dateTime', format: 'M/d/y hh:mm a' } },
        //   ]
        // });
        
        // gridObj.appendTo(document.querySelector('#grid') as HTMLElement);
     

     // }
    } else {
      let gridObj: Object[] = (document.querySelector('#grid') as EJ2Instance).ej2_instances;
      if (gridObj && gridObj.length > 0 && !(gridObj[0] as Grid).isDestroyed) {
        (gridObj[0] as Grid).destroy();
      }
      this.scheduleObj.element.style.display = 'block';
    }
  }


}
