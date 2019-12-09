import { Component, OnInit } from '@angular/core';
import {DepartementService} from '../../../Services/departement.service';
import {MatDialog} from '@angular/material/dialog';
import {Departement} from '../../../Models/Departement';
import {PoppupComponent} from '../poppup/poppup.component';

@Component({
  selector: 'app-nadeparts',
  templateUrl: './nadeparts.component.html',
  styleUrls: ['./nadeparts.component.scss']
})
export class NadepartsComponent implements OnInit {
  departements: Departement[] = [] ;
  constructor(public departementService: DepartementService, public dialog: MatDialog) { }

  ngOnInit() {
    this.departementService.getDepartements().subscribe(data => this.departements = data, eur => console.log('error'));
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
