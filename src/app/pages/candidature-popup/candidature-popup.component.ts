import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {Useroffre} from '../../Models/useroffre';
import {OffreService} from '../../Services/offre.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-candidature-popup',
  templateUrl: './candidature-popup.component.html',
  styleUrls: ['./candidature-popup.component.scss']
})
export class CandidaturePopupComponent implements OnInit {
  userO: Useroffre[] = [];

  index: number;
  x = this.storage.get('entreprise').id;
  constructor(private Offreservice: OffreService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.Offreservice.candidature(this.index).subscribe(data => this.userO = data);
  }

}
