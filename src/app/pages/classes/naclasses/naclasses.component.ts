import { Component, OnInit } from '@angular/core';
import {Classes} from '../../../Models/Classes';
import {MatDialog} from '@angular/material/dialog';
import {ClassesService} from '../../../Services/classes.service';
import {ClasspopupComponent} from '../classpopup/classpopup.component';

@Component({
  selector: 'app-naclasses',
  templateUrl: './naclasses.component.html',
  styleUrls: ['./naclasses.component.scss']
})
export class NaclassesComponent implements OnInit {
  classes: Classes[] = [] ;
  constructor(public dialog: MatDialog, public classesservice: ClassesService) { }

  ngOnInit() {
    this.classesservice.getSites().subscribe(data => this. classes = data, eur => console.log('error'));
  }
  DeleteSchool(id) {
    console.log(id);
    this.classesservice.DeleteSite(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
  popup(i) {
    this.dialog.open(ClasspopupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
}
