import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {NotifierService} from 'angular-notifier';
import {DefenseService} from '../../../Services/defense.service';


@Component({
  selector: 'app-details-sheet-diag',
  templateUrl: './details-sheet-diag.component.html',
  styleUrls: ['./details-sheet-diag.component.scss']
})
export class DetailsSheetDiagComponent implements OnInit {

  public listItems:any;
  public list=[];
  selectedValue: any;
  constructor(@Inject(MAT_DIALOG_DATA) public dataa ,private diag:MatDialog,private defenseService:DefenseService) {



  }

  ngOnInit() {

    this.defenseService.getAllTeachersWithCategories(this.dataa.info.id_sheet)
      .subscribe(
        res => {this.listItems = res;
          for(let a of this.listItems){
            let fullname=a.prenom+" "+a.nom;
            this.list.push(fullname);

          }
          console.log(this.list);
        },
        err => console.error(err),
        () => console.log('done loading all teachers')
      );


  }

}
