import { Sheet } from 'app/Models/Sheet';
import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { SheetServiceService } from 'app/Services/SheetService.service';
import { MatTableDataSource } from '@angular/material';  
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
    
sheet : Sheet [];
    cols: any[];
    selectedCars: Sheet[];
    exportColumns: any[];
    name: string;
    position: number;
    weight: number;
    symbol: string;
    dataSource ;

    displayedColumns: string[] = ['nom','title','date','staff','sheetstatus','assign'];
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  constructor( private serviceSheet : SheetServiceService) { }

  ngOnInit() {
    this.serviceSheet.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
  });
this.cols = [
    { field: 'description', header: 'Description' },
    { field: 'title', header: 'Title' },
    { field: 'issue', header: 'Issue' },
    { field: 'features', header: 'Features' }
];
this.exportColumns = this.cols.map(sh => ({title: sh.header, dataKey: sh.field}));
console.log(this.exportColumns);
}

exportPdf() {
import("jspdf").then(jsPDF => {
    import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0,0);
        console.log(this.exportColumns);
        doc.autoTable(this.exportColumns, this.sheet);
        
        doc.save('primengTable.pdf');
    })
})
}

exportExcel() {
import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.getCars());
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "primengTable");
});
}

saveAsExcelFile(buffer: any, fileName: string): void {
import("file-saver").then(FileSaver => {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
});
}

getCars() {
let cars = [];
for(let car of this.sheet) {
    car.issue = car.issue.toString();
    cars.push(car);
}
return cars;
}

}

  


