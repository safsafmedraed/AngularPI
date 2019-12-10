
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Sheet } from './../../Models/Sheet';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Component, OnInit, Inject } from '@angular/core';
import { SheetServiceService } from 'app/Services/SheetService.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  sheetIdStudent : any;
  sh: any;
  sheet : Sheet;
  id : any ;
  display: boolean = false;
  constructor(private sheetservice: SheetServiceService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,public dialog: MatDialog) { }
  
  ngOnInit() {
    this.sheetIdStudent = this.storage.get('user').id;
    this.sheetservice.getSheetbyIDstudent(this.sheetIdStudent).subscribe(data => {
      this.sh = data;
  });
}
showDialog() {
  this.display = true;
}
toArrays(categorys: object ) {
  return Object.keys(categorys).map(key => categorys[key]);
}

openDialog(sheetIdStudent:number): void {
  this.sheetservice.getSheetbyIDstudent(sheetIdStudent).subscribe((data) =>{
    this.sheet=data;
    const dialogRef = this.dialog.open(DialogMinorModif, {
      width: '800px',
      height : '400px',
      data: {shh: this.sheet }
      
    });
  })

}
openDialogMajor(sheetIdStudent:number): void {
    
  this.sheetservice.getSheetbyIDstudent(sheetIdStudent).subscribe((data) =>{
    this.sheet=data;
    const dialogRef = this.dialog.open(DialogMajorModif, {
      width: '800px',
      height : '400px',
      data: {shh: this.sheet }
      
    });
  })
}
}
@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog.html',
})
export class DialogMinorModif {
  public refuseForm:FormGroup= new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
     })
    sheet : Sheet;
    valuesJson:any;
    ref : any ;
  constructor(
    public dialogRef: MatDialogRef<DialogMinorModif>,
    @Inject(MAT_DIALOG_DATA) public data: any , private sheetservice: SheetServiceService,
    private formBuilder:FormBuilder) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ModifMino(id:number) {
    
      this.sheet=this.refuseForm.value;
      this.valuesJson=JSON.stringify(this.sheet);
      
    this.sheetservice.ModifyMin(id,this.valuesJson).subscribe((data) =>{
      
    });
   
    
  }
}
@Component({
  selector: 'dialog-over',
  templateUrl: './dialogMajor.html',
})
export class DialogMajorModif {
  public refuseForm:FormGroup= new FormGroup({
    featuresRequest:new FormControl(),
    issueRequest:new FormControl(),
     })
    sheet : Sheet;
    valuesJson:any;
    ref : any ;
  constructor(
    public dialogRef: MatDialogRef<DialogMajorModif>,
    @Inject(MAT_DIALOG_DATA) public data: any , private sheetservice: SheetServiceService,
    private formBuilder:FormBuilder) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ModifMajor(id:number,studentId :number) {
    
      this.sheet=this.refuseForm.value;
      this.valuesJson=JSON.stringify(this.sheet);
    
    this.sheetservice.ModifyMajor(id,this.valuesJson).subscribe((data) =>{
      
    });
   
    
  }
}