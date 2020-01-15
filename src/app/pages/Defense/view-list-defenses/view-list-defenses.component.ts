import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, View, MonthAgendaService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { DefenseService } from '../../../Services/defense.service';
import { EJ2Instance } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-list-defenses',
  templateUrl: './view-list-defenses.component.html',
  styles: [`
  @media (min-width: 481px) {
      .schedule-wrapper {
          margin: 0 25%;
      }
  }`],
  providers: [MonthAgendaService],
  encapsulation: ViewEncapsulation.None
})
export class ViewListDefensesComponent implements OnInit {
  public date;
  public time;
  public NameClassRoom;
  public Location;
  public State;
  private list=[];
  constructor(private defenseservice:DefenseService, private router: Router) { }
  ngOnInit() {
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
        this.list.push(obj);
    
      }
   
    

     },
        err => console.error(err),
     () => console.log('done loading all Defenses')
   );

  }
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = { dataSource: this.list };
  public currentView: View = 'MonthAgenda';
  onPopupOpen(args: PopupOpenEventArgs): void {
    let listNames=[];
  let data:any=args.data;
  console.log(data.Id);
  this.router.navigate(['/ViewDefenseJury'], { queryParams: { "IdDefense":data.Id

} });
    //To disable the edit and delete button
    var buttonElement = args.type === "QuickInfo" ? ".e-event-popup .e-edit" : ".e-schedule-dialog .e-event-edit";
    var buttonElement2 = args.type === "QuickInfo" ? ".e-event-popup .e-delete" : ".e-schedule-dialog .e-event-delete";
    var deleteButton = document.querySelector(buttonElement2);
    var editButton = document.querySelector(buttonElement);
    if (editButton && (editButton as EJ2Instance).ej2_instances) {
      ((editButton as EJ2Instance).ej2_instances[0] as Button).disabled = true;
    }
    if (deleteButton && (deleteButton as EJ2Instance).ej2_instances) {
      ((deleteButton as EJ2Instance).ej2_instances[0] as Button).disabled = true;
    }

}



}
