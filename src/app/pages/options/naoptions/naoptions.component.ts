import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Options} from '../../../Models/Options';
import {OptionService} from '../../../Services/option.service';
import {OptionpoppupComponent} from '../optionpoppup/optionpoppup.component';

@Component({
  selector: 'app-naoptions',
  templateUrl: './naoptions.component.html',
  styleUrls: ['./naoptions.component.scss']
})
export class NaoptionsComponent implements OnInit {
  options: Options[] = [] ;
  constructor(public dialog: MatDialog, public Opptionservice: OptionService) { }

  ngOnInit() {
    this.Opptionservice.getOpt().subscribe(data => this.options = data, eur => console.log('error'));
    console.log(this.options);
  }

  popup(i) {
    this.dialog.open(OptionpoppupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
  deleteoption(id) {
    console.log(id);
    this.Opptionservice.DeleteDepart(id).subscribe(data => console.log('ok'));
    console.log(id);
     // window.location.reload();
  }
}
