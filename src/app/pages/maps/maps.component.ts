import { Category } from './../../Models/Category';
import { Sheet } from 'app/Models/Sheet';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
    sh : Sheet ;
    sheetfilter : Sheet [];
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
    chosenMod: string = "";

    displayedColumns: string[] = ['nom','title','date','sheetstatus','cancel'];

    displayedColumnsFilter: string[] = ['nom','title','assign'];
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  constructor( private serviceSheet : SheetServiceService , private changeDetectorRefs: ChangeDetectorRef) { }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
  ngOnInit() {
    this.serviceSheet.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      this.delay(1000).then(any=>{
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
getNotAcceptedSheet(){
  this.show = true;
  this.showall = false;
  this.serviceSheet.getNotAcceptedSheets().subscribe()
console.log(this.sheetfilter);
    
    
}
Acceptsheet(id) 
{
    this.serviceSheet.AcceptSheetByChef(id,this.sh).subscribe(
      data=>{for(var i=0;i<this.sheetfilter.length;i++){
        if(this.sheetfilter[i].id_sheet==id){
          this.sheetfilter.splice(i,1);
          this.dataSourceFilter = new MatTableDataSource(this.sheetfilter);
        }
        console.log(this.sheetfilter);
      }
      
      });
      
}

CancelStaff(id) 
{
  
    this.serviceSheet.DeleteStaff(id,this.sh).subscribe(data=>
      {for(var i=0;i<this.sheet.length;i++){
      if(this.sheet[i].id_sheet==id){
        this.sheet.splice(i,1);
        this.dataSource = new MatTableDataSource(this.sheet);
      }
      console.log(this.sheet);
    }
    
    });
     
  
  
}
affich(){
  this.serviceSheet.getAllSheet().subscribe(data => {
    this.sheet = [];
    this.sheet = data;
      this.dataSourceFilter = new MatTableDataSource(this.sheet);
      this.changeDetectorRefs.detectChanges();
 });
    

}
modo(){
  switch(this.chosenMod) {  
     case "all": { 
        this.show = false ;
        this.showall = true;   
        console.log(this.show+ "filter ") 
        console.log(this.showall+ "all filter")
        break;
     }
     case "not": { 
      this.show = true ;
      this.showall = false;
      this.serviceSheet.getNotAcceptedSheets().subscribe(data => {
        this.sheetfilter = [];
        this.sheetfilter = data;
        this.dataSourceFilter = new MatTableDataSource(data);
        console.log(this.sheetfilter);
    });
      console.log(this.show+ "filter ") 
      console.log(this.showall+ "all filter")
        break;
     }
  }
}
}

  


