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
  private projectid: number;

  constructor(private route: ActivatedRoute, private ts: TaskService) {
    this.projectid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ts.getStats(this.projectid).subscribe(data => {
                                           this.data = {
      labels: ['To Do ', 'Doing', 'Done'],
      datasets: [
        {
          data: [data.TO_DO , data.DOING, data.DONE.number],
          backgroundColor: [
            '#8789C0',
            '#7CC6FE',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#8789C0',
            '#7CC6FE',
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
              '#B5446E',
              '#05A8AA'
            ],
            hoverBackgroundColor: [
              '#B5446E',
              '#05A8AA'
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
              '#BC412B',
              '#1446A0',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#BC412B',
              '#1446A0',
              '#FFCE56'
            ]
          }]
      };

    });

  }
  ngOnInit() {
  }

}
