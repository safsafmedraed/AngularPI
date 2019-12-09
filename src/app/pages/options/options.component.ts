import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OptionService} from '../../Services/option.service';
import {Options} from '../../Models/Options';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  Optionns: Options[] = [];
  id: number;
  constructor(private route: ActivatedRoute, public Ooptionsservice: OptionService) {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    console.log(this.id);
  }

  ngOnInit() {
    this.Ooptionsservice.getOptbyDepart(this.id).subscribe(data => this.Optionns = data, eur => console.log('error'));
  }
  deleteoption(id) {
    console.log(id);
    this.Ooptionsservice.DeleteDepart(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
}
