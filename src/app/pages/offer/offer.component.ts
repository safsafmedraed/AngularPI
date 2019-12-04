import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Offreentreprise} from '../../Models/offreentreprise';
import {OffreService} from '../../Services/offre.service';
import {Category} from '../../Models/Category';
import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';
import {PopupComponent} from '../popup/popup.component';
import {PopupoffreComponent} from './popupoffre/popupoffre.component';
import {MatDialog} from '@angular/material';
import {CandidaturePopupComponent} from '../candidature-popup/candidature-popup.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  Offre: Offreentreprise[] = [];
  entreprise: Entreprise[] = [];
  @Input()
  index: number;
  newDynamic: any = {};

  constructor(public offreservice: OffreService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.Offre.push(this.newDynamic);
    this.offreservice.getOffre().subscribe(
      data => {
        this.Offre = data;

      },
      eur => console.log('error'));

  }

  affectOffre(id) {
    this.index = this.Offre.indexOf(id);
    this.offreservice.applytoOffre(id.id).subscribe(data => console.log('affected'));
    console.log(this.offreservice.applytoOffre(id.id));
  }

  deleteoffre(id) {
    this.index = this.Offre.indexOf(id);
    console.log(this.index);
    console.log(id);

    this.offreservice.Deletoffre(id.id).subscribe(data => console.log('delete succesfull'));
    this.Offre.splice(this.index, 1);
    /*this.offreservice.getOffre().subscribe(
      data => {
        this.Offre = data;

      },
      eur => console.log('error'));*/

  }

  viewcandidature(id) {
    const dialogREf1 = this.dialog.open(CandidaturePopupComponent);

    this.index = this.Offre.indexOf(id);
    console.log(id.id);
    dialogREf1.componentInstance.index = id.id;

  }

  popup() {
    const dialogREf = this.dialog.open(PopupoffreComponent);
    dialogREf.afterClosed().subscribe(data => {
      this.offreservice.getOffre().subscribe(data1 => {
        this.Offre = data1;
      }, eur => console.log('error'));
    });
  }
}
