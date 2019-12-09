import { Component, OnInit } from '@angular/core';
import {School} from '../../Models/School';
import {SchoolService} from '../../Services/school.service';
import {Router} from "@angular/router";
import {Site} from "../../Models/Site";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  Schools: School[] = [];
  site: Site[] = [];
  constructor(public SchoolsService: SchoolService, public Routerr: Router) { }
  showdetails = false;
  ngOnInit() {
    this.SchoolsService.getSchools().subscribe(data => this.Schools = data, eur => console.log('error'));
  }
onshow() {
  this.showdetails = true;
  console.log(this.showdetails);
}
  DeleteSchool(id) {
    console.log(id);
    this.SchoolsService.DeleteSchool(id).subscribe(data => console.log('ok'));
    console.log(id);
    window.location.reload();
  }
  cliick(s) {
    this.Routerr.navigate(['/site', s]);
  }
}
