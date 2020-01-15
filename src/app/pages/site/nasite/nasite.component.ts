import { Component, OnInit } from '@angular/core';
import {SiteService} from '../../../Services/site.service';
import {MatDialog} from '@angular/material/dialog';
import {Site} from '../../../Models/Site';
import {PoopupComponent} from '../poopup/poopup.component';

@Component({
  selector: 'app-nasite',
  templateUrl: './nasite.component.html',
  styleUrls: ['./nasite.component.scss']
})
export class NasiteComponent implements OnInit {
  Sites: Site[] = [] ;
  constructor(public SiteeService: SiteService, public dialog: MatDialog) { }

  ngOnInit() {
    this.SiteeService.getSites().subscribe(data => this.Sites = data, eur => console.log('error'));
  }
  popup(i) {
    this.dialog.open(PoopupComponent, {
      data: {
        anyProperty: i
      }
    });
  }
  DeleteSite(id) {
    console.log(id);
    this.SiteeService.DeleteSite(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
}
