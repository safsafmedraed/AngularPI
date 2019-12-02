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


  constructor(private Offreservice: OffreService) {
  }

  ngOnInit() {
    this.Offreservice.candidature(7).subscribe(data => this.userO = data);
  }

}
