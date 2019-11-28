import { Student } from './../../Models/Student';
import { SheetServiceService } from '../../Services/SheetService.service';
import { Sheet } from '../../Models/Sheet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Sheet',
  templateUrl: './Sheet.component.html',
  styleUrls: ['./Sheet.component.scss']
})
export class SheetComponent implements OnInit {
  sheet: Sheet[];
  constructor(private sheetservice: SheetServiceService , private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: semicolon
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
   
  }
}
