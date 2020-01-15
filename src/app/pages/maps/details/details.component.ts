import { Component, OnInit } from '@angular/core';
import {School} from '../../../Models/School';
import {ActivatedRoute} from '@angular/router';
import {Site} from '../../../Models/Site';
import {SchoolService} from '../../../Services/school.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  school: School[] = [];
  Sschool: School;
  schoolname: string;
  sites: Site[] = [];
  constructor(private route: ActivatedRoute , public SchoolsService: SchoolService) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.schoolname = params.get('schoolname');
  });
  console.log(this.schoolname);
  this.SchoolsService.findbyname(this.schoolname).subscribe(data => this.school = data, eur => console.log('error'));
  }

}
