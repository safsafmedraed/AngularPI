import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';
import {Options} from '../../../Models/Options';
import {OptionService} from '../../../Services/option.service';

@Component({
  selector: 'app-ajout-option',
  templateUrl: './ajout-option.component.html',
  styleUrls: ['./ajout-option.component.scss']
})
export class AjoutOptionComponent implements OnInit {
  private readonly notifier: NotifierService;
  Option: Options = new Options();
  constructor(public  notifierService: NotifierService, public Routerr: Router, public OptionnsService: OptionService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
  }
  addDepartement(c) {
    this.OptionnsService.Adddepart(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'Option successfully created',
      id: 'THAT_NOTIFICATION_ID',

    });
    this.Routerr.navigateByUrl('nasite');
  }
}
