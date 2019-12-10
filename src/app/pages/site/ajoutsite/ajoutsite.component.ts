import { Component, OnInit } from '@angular/core';
import {SiteService} from '../../../Services/site.service';
import {SchoolService} from '../../../Services/school.service';
import {Site} from '../../../Models/Site';
import {School} from '../../../Models/School';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutsite',
  templateUrl: './ajoutsite.component.html',
  styleUrls: ['./ajoutsite.component.scss']
})
export class AjoutsiteComponent implements OnInit {
  Sites: Site[] = [];
  private readonly notifier: NotifierService;
  Sitte: Site = new Site();
  Schools: School[] = [];
  show = false;
  School: School;
  constructor(public SiteeService: SiteService, public SchoolsService: SchoolService, public notifierService: NotifierService, public Routerr: Router) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.SchoolsService.getSchools().subscribe(data => this.Schools = data, eur => console.log('error'));
  }

  AddSite(c) {
    this.SiteeService.AddSite(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'Site successfully Added and now affect it to a scholl',
      id: 'THAT_NOTIFICATION_ID',

    });
    this.show = true;
    this.Routerr.navigateByUrl('nasite');
  }
}
