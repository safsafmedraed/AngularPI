import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SiteService} from '../../../Services/site.service';
import {Site} from '../../../Models/Site';
import {DepartementService} from '../../../Services/departement.service';
import {Departement} from '../../../Models/Departement';

@Component({
  selector: 'app-poppup',
  templateUrl: './poppup.component.html',
  styleUrls: ['./poppup.component.scss']
})
export class PoppupComponent implements OnInit {
  Sites: Site[] = [];
  departs: Departement[] = [] ;
  constructor(public SiteServiice: SiteService, public departementsS: DepartementService, public dialogRef: MatDialogRef<PoppupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.SiteServiice.getSites().subscribe(data => this.Sites = data, eur => console.log('error'));
    this.departementsS.getDepartements().subscribe(data => this.departs = data, eur => console.log('error'));
  }
  affecter(c, id) {
    this.departementsS.affecter(c, id).subscribe(data => 'ok');
    console.log(id, c);
    this.dialogRef.close();
  }
}
