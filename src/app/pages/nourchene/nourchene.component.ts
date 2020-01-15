import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog} from '@angular/material';
import {DefenseService} from '../../Services/defense.service';
import {NotifierService} from 'angular-notifier';
import {GestionSoutenancesComponent} from '../gestion-soutenances/gestion-soutenances.component';

@Component({
  selector: 'app-nourchene',
  templateUrl: './nourchene.component.html',
  styleUrls: ['./nourchene.component.scss']
})
export class NourcheneComponent implements OnInit {
  private readonly  notifier: NotifierService;

  constructor(@Inject(MAT_DIALOG_DATA) public data , private defenseservice: DefenseService, notifierService: NotifierService,private diag:MatDialog) {
    this.notifier = notifierService;
  }
 public email= this.data.info.encadreur.email;
  public subject="Rating reminder";
  public content="Dear "+this.data.info.encadreur.prenom+" "+ this.data.info.encadreur.nom+",You are required to rate your students in order to assign them a defense.Cordially";

  ngOnInit() {
  }
  SendEmail(email, subject, content){

   this.defenseservice.sendReminderEmail(email, content, subject).subscribe(res=>{
 console.log('email envoyé');

     this.diag.closeAll();
     this.notifier.show({
       type: 'success',
       message: 'The email was successfully sended...',
       id: 'THAT_NOTIFICATION_ID',

     });
     //this.notifier.hide("THAT_NOTIFICATION_ID");


 },err=>{
  this.notifier.show({
    type: 'danger',
    message: 'Problem occured while sending...',
    id: 'THAT_NOTIFICATION_ID1',

  });
   });

  }

}
