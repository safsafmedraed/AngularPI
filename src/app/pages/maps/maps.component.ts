import { Sheet } from 'src/app/Models/Sheet';
import { Component, OnInit } from '@angular/core';
import { SheetServiceService } from 'src/app/Services/SheetService.service';
import { SelectItem } from 'primeng/api';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
sheet : Sheet [];
cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;

    yearTimeout: any;
  constructor( private serviceSheet : SheetServiceService) { }

  ngOnInit() {
    this.serviceSheet.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
  });

  this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
}

exportPdf() {
import("jspdf").then(jsPDF => {
    import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0,0);
        doc.autoTable(this.columns, this.cars);
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
for(let car of this.cars) {
    car.year = car.year.toString();
    cars.push(car);
}
return cars;
}

}

  


