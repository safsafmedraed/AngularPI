import {Component, OnInit} from '@angular/core';


import {OffreService} from '../../../Services/offre.service';
import {Entreprise} from '../../../Models/entreprise';
import {EntrepriseService} from '../../../Services/entreprise.service';
import {Offreentreprise} from '../../../Models/offreentreprise';
import * as moment from 'moment';
import {Stat} from '../../../Models/stat';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  Companies: Entreprise[] = [];
  Offre: Offreentreprise = new Offreentreprise();

  stats: Stat[];

  constructor(public offre: OffreService, public CompanyService: EntrepriseService) {
  }

  ngOnInit() {
    this.CompanyService.getCompanies().subscribe(data => this.Companies = data, eur => console.log('error'));
  }

  onclick(idE, date) {
    const formattedDate = moment(date).format('YYYY/MM/DD');
    console.log(formattedDate);
    this.offre.stat(idE, formattedDate).subscribe(data => this.stats = data);
  }
}


