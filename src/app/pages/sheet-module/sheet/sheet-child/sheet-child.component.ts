import { Category } from './../../../../Models/Category';
import { MatDialog } from '@angular/material/dialog';
import { Sheet } from './../../../../Models/Sheet';
import { Component, OnInit, Input } from '@angular/core';
import { SheetServiceService } from 'app/Services/SheetService.service';

@Component({
  selector: 'app-sheet-child',
  templateUrl: './sheet-child.component.html',
  styleUrls: ['./sheet-child.component.scss']
})
export class SheetChildComponent implements OnInit {

  constructor(private sheetservice: SheetServiceService, dialog: MatDialog) { }

  sheet: Sheet[];
  s : number;
  isShown: boolean = false ;
 step = 0;
 color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isShownR : boolean = false
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.sheetservice.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      console.log(this.sheet);
  });

}
toArrays(categorys: object ) {
  return Object.keys(categorys).map(key => categorys[key]);
}
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 AcceptSheet(index :number){
    this.sheetservice.AcceptSheet(index).subscribe((data) =>{
      console.log(data);
      this.ngOnInit();
    })
  }

  RefuseSheet(index :number){
    this.sheetservice.RefuseSheet(index).subscribe((data) =>{
      console.log(data);
      this.ngOnInit();
    })
  }
  toggleShow(){
    this.isShown = ! this.isShown;
    console.log(this.isShown);
  }
  toggleShowRefuse(){
    this.isShownR = ! this.isShownR;
  }
 
}
