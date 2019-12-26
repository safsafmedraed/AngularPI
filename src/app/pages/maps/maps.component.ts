import { Category } from '../../Models/Category';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { MatTableDataSource } from '@angular/material';
import {Sheet} from '../../Models/Sheet';
import {SheetServiceService} from '../../Services/SheetService.service';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

sheet: Sheet [];
    cols: any[];
    sh: Sheet ;
    sheetfilter: Sheet [];
    selectedCars: Sheet[];
    exportColumns: any[];
    name: string;
    position: number;
    weight: number;
    symbol: string;
    dataSource ;
    dataSourceFilter;
    show = false;
    showall = true ;
    chosenMod = '';

    displayedColumns: string[] = ['nom', 'title', 'date', 'sheetstatus', 'cancel'];

    displayedColumnsFilter: string[] = ['nom', 'title', 'assign'];
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  constructor( private serviceSheet: SheetServiceService , private changeDetectorRefs: ChangeDetectorRef) { }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
}
  ngOnInit() {
    this.serviceSheet.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      this.delay(1000).then(any => {
        this.dataSource = new MatTableDataSource(this.sheet);
   });
  });

    this.cols = [
    { field: 'description', header: 'Description' },
    { field: 'title', header: 'Title' },
    { field: 'issue', header: 'Issue' },
    { field: 'features', header: 'Features' }
];
    this.exportColumns = this.cols.map(sh => ({title: sh.header, dataKey: sh.field}));

}






getCars() {
const cars = [];
for (const car of this.sheet) {
    car.issue = car.issue.toString();
    cars.push(car);
}
return cars;
}
getNotAcceptedSheet() {
  this.show = true;
  this.showall = false;
  this.serviceSheet.getNotAcceptedSheets().subscribe();
  console.log(this.sheetfilter);


}
Acceptsheet(id) {
    this.serviceSheet.AcceptSheetByChef(id, this.sh).subscribe(
      data => {for (let i = 0; i < this.sheetfilter.length; i++) {
        if (this.sheetfilter[i].id_sheet == id) {
          this.sheetfilter.splice(i, 1);
          this.dataSourceFilter = new MatTableDataSource(this.sheetfilter);
        }
        console.log(this.sheetfilter);
      }

      });

}

CancelStaff(id) {

    this.serviceSheet.DeleteStaff(id, this.sh).subscribe(data => {for (let i = 0; i < this.sheet.length; i++) {
      if (this.sheet[i].id_sheet == id) {
        this.sheet.splice(i, 1);
        this.dataSource = new MatTableDataSource(this.sheet);
      }
      console.log(this.sheet);
    }

    });



}
affich() {
  this.serviceSheet.getAllSheet().subscribe(data => {
    this.sheet = [];
    this.sheet = data;
    this.dataSourceFilter = new MatTableDataSource(this.sheet);
    this.changeDetectorRefs.detectChanges();
 });


}
modo() {
  switch (this.chosenMod) {
     case 'all': {
        this.show = false ;
        this.showall = true;
        console.log(this.show + 'filter ');
        console.log(this.showall + 'all filter');
        break;
     }
     case 'not': {
      this.show = true ;
      this.showall = false;
      this.serviceSheet.getNotAcceptedSheets().subscribe(data => {
        this.sheetfilter = [];
        this.sheetfilter = data;
        this.dataSourceFilter = new MatTableDataSource(data);
        console.log(this.sheetfilter);
    });
      console.log(this.show + 'filter ');
      console.log(this.showall + 'all filter');
      break;
     }
  }
}
}




