import { Category } from './../../../Models/Category';
import { Sheet } from './../../../Models/Sheet';
import { Component, OnInit, Input } from '@angular/core';
import { SheetServiceService } from 'src/app/Services/SheetService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  showFiller = false;
  sheet: Sheet[];
  res : number;
 
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
  toArrays(Category: object ) {
    return Object.keys(Category).map(key => Category[key] );
  }

  getStaffSheet() {
  this.sheetservice.getStaffSheet().subscribe(data => {
    this.sheet = [] ;
    this.sheet = data ;
  });
  }
  calcul(){
    this.sheetservice.getListStaffModification().subscribe(data => {
      this.sheet = data;
    this.res=this.sheet.length;
    return this.res;
  });
}
}
