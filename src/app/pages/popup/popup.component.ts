import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [EntrepriseService]
})
export class PopupComponent implements OnInit {
  Companies: Entreprise[] = [];
  constructor(public Company: EntrepriseService) { }

  ngOnInit() {
    this.Company.getCompanies().subscribe(data => this.Companies = data, eur => console.log('error'));
  }

}
