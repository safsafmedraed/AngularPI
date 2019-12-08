import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../../Services/task.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data: any;
  data2: any;
  data3: any;

  constructor(private route: ActivatedRoute, private ts: TaskService) {
    this.ts.getStats(4).subscribe(data => {
                                           this.data = {
      labels: ['To Do ', 'Doing', 'Done'],
      datasets: [
        {
          data: [data.TO_DO , data.DOING, data.DONE.number],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
                                           this.data2 = {
        labels: ['Approved', 'Not Approved'],
        datasets: [
          {
            data: [data.DONE.approved , data.DONE.notapproved ],
            backgroundColor: [
              '#FF6384',
              '#36A2EB'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB'
            ]
          }]
      };
  });


    this.ts.getDateStats(4).subscribe(data => {
      this.data3 = {
        labels: ['In Time ', 'Without Delay', 'With Delay'],
        datasets: [
          {
            data: [data.inTime , data.withoutDelay, data.withDelay],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
      };

    });

  }
  ngOnInit() {
  }

}
