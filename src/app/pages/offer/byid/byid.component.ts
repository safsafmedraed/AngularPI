import {Component, Inject, Input, OnInit} from '@angular/core';
import {OffreService} from '../../../Services/offre.service';
import {Offreentreprise} from '../../../Models/offreentreprise';
import {CandidaturePopupComponent} from '../../candidature-popup/candidature-popup.component';
import {PopupoffreComponent} from '../popupoffre/popupoffre.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-byid',
  templateUrl: './byid.component.html',
  styleUrls: ['./byid.component.scss']
})
export class ByidComponent implements OnInit {
  Offre: Offreentreprise[] = [];
  offre1: Offreentreprise = new Offreentreprise();
  @Input()
  index: number;
  x = this.storage.get('entreprise').id;

  constructor(public offreservice: OffreService, public dialog: MatDialog,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.offreservice.offrebyid().subscribe(data => this.Offre = data);
  }

  deleteoffre(id) {
    this.index = this.Offre.indexOf(id);
    console.log(this.index);
    console.log(id);

    this.offreservice.Deletoffre(id.id).subscribe(data => console.log('delete succesfull'));
    this.Offre.splice(this.index, 1);
    this.snackBar.open('You have deleted your offre ' + id.annonce);
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
      this.offreservice.offrebyid().subscribe(data1 => this.Offre = data1);
    });
  }


}
