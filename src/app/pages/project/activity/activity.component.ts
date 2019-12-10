import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../Models/Activity';
import {ActivityService} from '../../../Services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
 @Input() id;
  constructor(private as: ActivityService) { }
  activities: Activity[] = [];

  ngOnInit() {
this.as.getActivities(this.id).subscribe(data => this.activities = data);
  }




}
