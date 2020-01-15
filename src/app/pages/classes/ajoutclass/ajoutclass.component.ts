import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {Classes} from '../../../Models/Classes';
import {ClassesService} from '../../../Services/classes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutclass',
  templateUrl: './ajoutclass.component.html',
  styleUrls: ['./ajoutclass.component.scss']
})
export class AjoutclassComponent implements OnInit {
  private readonly notifier: NotifierService;
  class: Classes = new Classes();
  constructor(public classeS: ClassesService, private notifyservice: NotifierService, public Routerr: Router) {
    this.notifier = notifyservice;
  }

  ngOnInit() {
  }
  addDepartement(c) {
    this.classeS.AddSite(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'class successfully created',
      id: 'THAT_NOTIFICATION_ID',

    });
    this.Routerr.navigateByUrl('naclass');
  }
}
