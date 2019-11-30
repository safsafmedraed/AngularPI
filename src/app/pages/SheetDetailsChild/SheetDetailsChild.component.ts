import { MatDialog } from '@angular/material/dialog';
import { Sheet, sheetStatus } from './../../Models/Sheet';
import { Component, OnInit, Input } from '@angular/core';
import { SheetServiceService } from 'src/app/Services/SheetService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SheetDetailsChild',
  templateUrl: './SheetDetailsChild.component.html',
  styleUrls: ['./SheetDetailsChild.component.scss']
})

export class SheetDetailsChildComponent implements OnInit {
  constructor(private sheetservice: SheetServiceService, dialog: MatDialog) { }

  sheet: Sheet[];
  testID = false ;
 step = 0;

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.sheetservice.getAllSheet().subscribe(data => {
      this.sheet = [];
      this.sheet = data;
  });

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
}

