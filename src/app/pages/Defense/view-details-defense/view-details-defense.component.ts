import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DefenseService } from '../../../Services/defense.service';

@Component({
  selector: 'app-view-details-defense',
  templateUrl: './view-details-defense.component.html',
  styleUrls: ['./view-details-defense.component.scss']
})
export class ViewDetailsDefenseComponent implements OnInit {
  public date;
  public time;
  public NameClassRoom;
  public Location;
  public State;
  constructor(@Inject(MAT_DIALOG_DATA) public data ,private diag:MatDialog,private defenseService:DefenseService) {



   }

Close(){
  this.diag.closeAll();

}

  ngOnInit() {
  
    this.defenseService.getAllDefenses().subscribe(res => {
     
     
      const JSobj =JSON.parse(JSON.stringify(res));
      for(let a of JSobj){
      if(a.id_defense==this.data.info){
      this.date=a.dateDefense;
      this.Location=a.location;
      this.State=a.stateDefense;
      this.NameClassRoom=a.nameClassroom;
      this.time=a.timeDefense;
      }
       
  
   
    

     }},
        err => console.error(err),
     () => console.log('done loading all Defenses')
   );

  }
  Modify(){


    
  }

}
