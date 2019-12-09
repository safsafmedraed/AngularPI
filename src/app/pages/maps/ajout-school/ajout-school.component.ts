import { Component, OnInit } from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {School} from '../../../Models/School';
import {SchoolService} from '../../../Services/school.service';

@Component({
  selector: 'app-ajout-school',
  templateUrl: './ajout-school.component.html',
  styleUrls: ['./ajout-school.component.scss']
})
export class AjoutSchoolComponent implements OnInit {
  private readonly notifier: NotifierService;
  School: School = new School();
  constructor(public SchooolService: SchoolService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
  }
  addschool(c) {
    this.SchooolService.AddSchool(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'School successfully Added',
      id: 'THAT_NOTIFICATION_ID',

    });
  }
}
