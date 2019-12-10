import { Component, OnInit } from '@angular/core';
import {Classes} from '../../Models/Classes';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {ClassesService} from '../../Services/classes.service';
import {ClasspopupComponent} from './classpopup/classpopup.component';
import {AddstudentpopupComponent} from './addstudentpopup/addstudentpopup.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: Classes[] = [] ;
  id: number;
  constructor(public dialog: MatDialog, private route: ActivatedRoute, public classeservice: ClassesService) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    console.log(this.id);
    this.classeservice.getsitebyschool(this.id).subscribe(data => this.classes = data, eur => console.log('error'));
  }
  DeleteSchool(id) {
    console.log(id);
    this.classeservice.DeleteSite(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
  popup(i) {
    this.dialog.open(AddstudentpopupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
}
