import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {DepartementService} from '../../../Services/departement.service';
import {Departement} from '../../../Models/Departement';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutdepart',
  templateUrl: './ajoutdepart.component.html',
  styleUrls: ['./ajoutdepart.component.scss']
})
export class AjoutdepartComponent implements OnInit {
  private readonly notifier: NotifierService;
  departement: Departement = new Departement();
  constructor(public departements: DepartementService, public  notifierService: NotifierService, public Routerr: Router) {
    this.notifier = notifierService ;
  }

  ngOnInit() {
  }

  addDepartement(c) {
    this.departements.AddDepartement(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'School successfully Added',
      id: 'THAT_NOTIFICATION_ID',

    });
    this.Routerr.navigateByUrl('nadeparts');
  }
}
