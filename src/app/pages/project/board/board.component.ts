import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {TaskService} from '../../../Services/task.service';
import {Task} from '../../../Models/Task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
   public projectid;
  tasks: Task[] = [];
  status: string;
  task: Task ;
  idd: number;
  constructor(private route: ActivatedRoute, private ts: TaskService) {

  }
  todo: Task[] = [];
  doing: Task[] = [];
  done: Task[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('11');
      console.log(event.container.data);
      console.log(event.previousIndex);
      console.log(event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('22');

      console.log(event.previousContainer.data);
      console.log(event.container.data);
      console.log(event.previousIndex);
      console.log(event.currentIndex);

    }}
  ngOnInit() {

    this.projectid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ts.getTasks(this.projectid).subscribe(data => {this.done = data.filter(t => t.status.includes('DONE'));
                                                        this.doing = data.filter(t => t.status.includes('DOING'));
                                                        this.todo = data.filter(t => t.status.includes('TO_DO'));
                                                        console.log(this.tasks); });


  }

  dragEnd(st) {
this.status = st;
  }
  dragEnded() {
    console.log(this.status);
    const task =  {
      id: this.idd,
      status : this.status
    };
    this.ts.updatestatus(JSON.stringify(task)).subscribe();
  }
  dragStart(idd: number, item: string) {
    console.log(item);
    console.log(idd);
    this.idd = idd;
  }
}
