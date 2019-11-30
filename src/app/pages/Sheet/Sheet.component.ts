import { SheetDetailsChildComponent } from './../SheetDetailsChild/SheetDetailsChild.component';
import { Student } from './../../Models/Student';
import { SheetServiceService } from '../../Services/SheetService.service';
import { Sheet } from '../../Models/Sheet';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Sheet',
  templateUrl: './Sheet.component.html',
  styleUrls: ['./Sheet.component.scss']
})
export class SheetComponent implements OnInit {
  showFiller = false;
  sheet: Sheet[];
  SheetD = false;
  constructor(private sheetservice: SheetServiceService , private router: Router) { }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
}
// tslint:disable-next-line: use-life-cycle-interface
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
  hideAndShow(SheetD){
    this.SheetD = true ;
    console.log(this.SheetD);
  }
  getStaffSheet() {
  this.sheetservice.getStaffSheet().subscribe(data => {
    this.sheet = [] ;
    this.sheet = data ;
  });
  }
}
