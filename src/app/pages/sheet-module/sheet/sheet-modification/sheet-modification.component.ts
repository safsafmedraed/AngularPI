import { Component, OnInit } from '@angular/core';
import { Sheet } from 'src/app/Models/Sheet';
import { SheetServiceService } from 'src/app/Services/SheetService.service';

@Component({
  selector: 'app-sheet-modification',
  templateUrl: './sheet-modification.component.html',
  styleUrls: ['./sheet-modification.component.scss']
})
export class SheetModificationComponent implements OnInit {
  sheet: Sheet[];
  constructor(private sheetservice: SheetServiceService) { }

  ngOnInit() {
    this.sheetservice.getListStaffModification().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
      console.log(this.sheet);
  });
  }
  toArrays(categorys: object ) {
    return Object.keys(categorys).map(key => categorys[key]);
  }
  AcceptModification(index :number){
    this.sheetservice.AcceptModification(index).subscribe((data) =>{
      console.log(data);
      this.ngOnInit();
    })
  }
}
