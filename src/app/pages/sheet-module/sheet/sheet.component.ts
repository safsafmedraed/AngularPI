import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Category } from './../../../Models/Category';
import { Sheet } from './../../../Models/Sheet';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { SheetServiceService } from 'app/Services/SheetService.service';
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
  sheetIdStaff : any;
 
  constructor(private sheetservice: SheetServiceService , private router: Router ,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
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
    this.sheetIdStaff = this.storage.get('user').id;
  this.sheetservice.getStaffSheet(this.sheetIdStaff).subscribe(data => {
    this.sheet = [] ;
    this.sheet = data ;
  });
  }
  calcul(){
    this.sheetIdStaff = this.storage.get('user').id;
    this.sheetservice.getListStaffModification(this.sheetIdStaff).subscribe(data => {
      this.sheet = data;
    this.res=this.sheet.length;
    return this.res;
  });
}
}
