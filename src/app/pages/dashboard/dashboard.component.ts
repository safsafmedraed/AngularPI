import {Component, Inject, OnInit} from '@angular/core';

import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [EntrepriseService]
})
export class DashboardComponent implements OnInit {
  

  constructor() {
  }

  ngOnInit() {
   
  }


}
