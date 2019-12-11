import { Component, OnInit } from '@angular/core';
import {Site} from '../../Models/Site';
import {SiteService} from '../../Services/site.service';
import {MatDialog} from '@angular/material/dialog';
import {PoopupComponent} from './poopup/poopup.component';
import {School} from '../../Models/School';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  Sites: Site[] = [];
  ssites: Site[] = [];
  constructor(public SiteeService: SiteService, public dialog: MatDialog, private route: ActivatedRoute) { }
  school: School = new School();
  schoolname: string;
  id: number;
  size: number;
  startindex = 0;
  endindex = 10;
  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    // tslint:disable-next-line:max-line-length
    this.SiteeService.getsitebyschool(this.id).subscribe(data => {this.Sites = data; console.log(data.length); this.size = data.length; }, eur => console.log('error'));
    console.log(this.school);
  }
  popup(i) {
    this.dialog.open(PoopupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
  getArrayfromNumber() {
    return new Array(this.size);
  }
  updateindex(pageindex) {
    this.startindex = pageindex;
    this.endindex = pageindex +1;
  }
  DeleteSite(id) {
    console.log(id);
    this.SiteeService.DeleteSite(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
}
