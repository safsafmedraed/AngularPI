import {Component, OnInit} from '@angular/core';
import {Offreentreprise} from '../../Models/offreentreprise';
import {OffreService} from '../../Services/offre.service';
import {Category} from '../../Models/Category';
import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  Offre: Offreentreprise[] = [];
  entreprise: Entreprise[] = [];
  //category: Category[];
  index: number;

  constructor(public offreservice: OffreService) {
  }

  ngOnInit() {
    this.offreservice.getOffre().subscribe(
      data => {
        this.Offre = data;
        console.log(data[0].entreprise);
      },
      eur => console.log('error'));
  }

  deleteoffre(id) {
    this.index = this.Offre.indexOf(id);
    console.log(this.index);
    console.log(id);
    this.offreservice.Deletoffre(id.id).subscribe(data => console.log('delete succesfull'));
    /* window.location.reload();*/
  }
}
