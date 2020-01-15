import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DepartementService} from '../../../Services/departement.service';
import {Departement} from '../../../Models/Departement';
import {OptionService} from '../../../Services/option.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-optionpoppup',
  templateUrl: './optionpoppup.component.html',
  styleUrls: ['./optionpoppup.component.scss']
})
export class OptionpoppupComponent implements OnInit {
  departs: Departement[] = [] ;
  // tslint:disable-next-line:max-line-length
  constructor(public departementsS: DepartementService, public Optionsservice: OptionService , public dialogRef: MatDialogRef<OptionpoppupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public Routerr: Router) { }

  ngOnInit() {
    this.departementsS.getDepartements().subscribe(data => this.departs = data, eur => console.log('error'));
  }
  affecter(c, id) {
    this.Optionsservice.affecter(c, id).subscribe(data => 'ok');
    console.log(id, c);
    this.dialogRef.close();
    this.Routerr.navigateByUrl('options/' + c.id);
  }
}
