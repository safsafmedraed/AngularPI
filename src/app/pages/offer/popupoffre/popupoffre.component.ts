import {Component, OnInit} from '@angular/core';
import {Offreentreprise} from '../../../Models/offreentreprise';
import {OffreService} from '../../../Services/offre.service';
import {observable, Observable} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-popupoffre',
  templateUrl: './popupoffre.component.html',
  styleUrls: ['./popupoffre.component.scss']
})
export class PopupoffreComponent implements OnInit {
  offre: Offreentreprise = new Offreentreprise();
  Offre1: Offreentreprise [] = [];
  foods: Food[] = [
    {value: 'internship', viewValue: 'internship'},
    {value: 'event', viewValue: 'event'},
    {value: 'training', viewValue: 'training'}
  ];

  constructor(public offreservice: OffreService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.offreservice.getOffre().subscribe(data => this.Offre1 = data);
  }

  addoffre(c) {
    this.offreservice.Addoffre(c).subscribe(
      data => 'ok'
    );
    this.snackBar.open('Your Offre ' + c.annonce + ' has been added ');
    this.offreservice.getOffre().subscribe(data => this.Offre1 = data);
    console.log(c);
  }
}
