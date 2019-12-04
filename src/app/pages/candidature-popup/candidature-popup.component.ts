import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Useroffre} from '../../Models/useroffre';
import {OffreService} from '../../Services/offre.service';

@Component({
  selector: 'app-candidature-popup',
  templateUrl: './candidature-popup.component.html',
  styleUrls: ['./candidature-popup.component.scss']
})
export class CandidaturePopupComponent implements OnInit {
  userO: Useroffre[] = [];

  index: number;

  constructor(private Offreservice: OffreService) {
  }

  ngOnInit() {
    this.Offreservice.candidature(this.index).subscribe(data => this.userO = data);
  }

}
