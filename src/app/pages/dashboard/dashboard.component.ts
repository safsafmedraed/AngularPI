import {Component, Inject, OnInit} from '@angular/core';

import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {Message} from 'src/app/Services/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [EntrepriseService]
})
export class DashboardComponent implements OnInit {
  Companies: Entreprise[] = [];
  Company: Entreprise;
  Message: Message;
  accepted: string;
  Pending: false;
  pending: string;
  index: number;
  id: number;

  constructor(public CompanyService: EntrepriseService, public dialog: MatDialog) {
  }

  ngOnInit() {

    this.CompanyService.getCompanies().subscribe(data => this.Companies = data, eur => console.log('error'));
    this.accepted = 'Accepted';
    this.pending = 'Pending';
    // this.Message.message = 'Your company has been approved ,thanks for trusting Our Society';
  }

  approveCompany(id) {

    this.index = this.Companies.indexOf(id);
    console.log(this.index);
    console.log(id);
    this.pending = 'Accepted';
    this.CompanyService.approveCompany(id.id).subscribe(data => console.log('ok'));

    /*this.CompanyService.getCompanies().subscribe(data => this.Companies = data, eur => console.log('error'));*/


  }

  popup() {
    this.dialog.open(PopupComponent);
  }

  deleteCompany(id) {
    this.index = this.Companies.indexOf(id);
    console.log(this.index);
    console.log(id);
    /*this.CompanyService.deleteCompany(id.id).subscribe(data => console.log('delete succesfull'));*/
    this.Companies.splice(this.index, 1);
  }

}
