import { Student } from './../../Models/Student';
import { SheetServiceService } from '../../Services/SheetService.service';
import { Sheet } from '../../Models/Sheet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Sheet',
  templateUrl: './Sheet.component.html',
  styleUrls: ['./Sheet.component.scss']
})
export class SheetComponent implements OnInit {
  sheet: Sheet[];
  items: MenuItem[];
  activeItem: MenuItem;
  constructor(private sheetservice: SheetServiceService , private router: Router) { }

  ngOnInit() {
    this.items = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart' , routerLink: ['/register']},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
  ];
}


  getAllSheetData() {
    this.sheetservice.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      console.log(this.toArrays(this.sheet[0].student));

    });
  }
  toArrays(student: object ) {
    return Object.keys(student).map(key => student[key] );
  }

  getStaffSheet() {
  this.sheetservice.getStaffSheet().subscribe(data => {
    this.sheet = [] ;
    this.sheet = data ;
  });
  }
}
