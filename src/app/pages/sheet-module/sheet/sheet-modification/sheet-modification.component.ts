import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Sheet } from 'src/app/Models/Sheet';
import { SheetServiceService } from 'src/app/Services/SheetService.service';
import { forEach } from '@angular/router/src/utils/collection';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-sheet-modification',
  templateUrl: './sheet-modification.component.html',
  styleUrls: ['./sheet-modification.component.scss']
})
export class SheetModificationComponent implements OnInit {
  sheet: Sheet[];
  shh : Sheet;
  animal: string;
  name: string;
  constructor(private sheetservice: SheetServiceService , public dialog: MatDialog) { }
  ngOnInit() {
    this.sheetservice.getListStaffModification().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
  });
  }
//   getsheetbyStudentId(sheetIdStudent:number) {
//     this.sheetservice.getSheetbyIDstudent(sheetIdStudent).subscribe((data) =>{
//       this.sh = data ;
//     })
// }
  toArrays(categorys: object ) {
    return Object.keys(categorys).map(key => categorys[key]);
  }
  AcceptModification(index :number){
    this.sheetservice.AcceptModification(index).subscribe((data) =>{
      this.ngOnInit();
    })
  }
  openDialog(sheetIdStudent:number): void {
    
    this.sheetservice.getSheetbyIDstudent(sheetIdStudent).subscribe((data) =>{
      console.log(data);
      this.shh=data;
      console.log(this.shh);
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {shh: this.shh }
        
      });
      console.log(this.shh);
    })
  
    
   
   
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {
  public refuseForm:FormGroup= new FormGroup({
    refuseModificationReason:new FormControl()  })
    sheet : Sheet ;
    valuesJson:any;
    ref : any ;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any , private sheetservice: SheetServiceService,
    private formBuilder:FormBuilder) {}
   
  onNoClick(): void {
    this.dialogRef.close();
  }
  RefuseMod(id:number,studentId :number) {
    this.sheetservice.getSheetbyIDstudent(studentId).subscribe((values) =>{
      this.sheet=values;


      this.sheet=this.refuseForm.value;
      
      this.valuesJson=JSON.stringify(this.sheet);
      console.log(this.valuesJson);
    this.sheetservice.ResfuseModification(id,this.refuseForm.value.refuseModificationReason).subscribe((data) =>{
      console.log(data)
    });
    })
  }
  mapformvalue(){
    this.sheet.refuseModificationReason = this.refuseForm.value.refuseModificationReason;
  }
}

