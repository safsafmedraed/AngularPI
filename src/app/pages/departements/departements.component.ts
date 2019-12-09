import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../Services/departement.service';
import {Departement} from '../../Models/Departement';
import {MatDialog} from '@angular/material/dialog';
import {PoppupComponent} from './poppup/poppup.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {
  departements: Departement[] = [];
  id: number;
  constructor(public departementService: DepartementService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    console.log(this.id);
    this.departementService.getDepartementsbySite(this.id).subscribe(data => this.departements = data, eur => console.log('error'));
  }
  DeleteSchool(id) {
    console.log(id);
    this.departementService.DeleteDepartement(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
  popup(i) {
    this.dialog.open(PoppupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
}
