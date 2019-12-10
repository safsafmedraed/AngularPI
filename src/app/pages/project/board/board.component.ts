import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {TaskService} from '../../../Services/task.service';
import {Task} from '../../../Models/Task';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTaskComponent} from '../add-task/add-task.component';
import {Project} from '../../../Models/Project';
import {ProjectService} from '../../../Services/project.service';
import {TaskDetailsComponent} from '../task-details/task-details.component';

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
  project: Project;

  constructor(private route: ActivatedRoute, private ts: TaskService, private modalService: NgbModal, private ps: ProjectService) {

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
    this.ps.getProjectbyid(this.projectid).subscribe(data => {this.project = data; console.log(this.project); });
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
  open() {
    const modalRef = this.modalService.open(AddTaskComponent);
    modalRef.componentInstance.id = this.projectid;
    modalRef.componentInstance.passEntry.subscribe((task) => {
      console.log(task);
      this.todo.push(task);
    });
  }

  openDetails(taskId) {
    const modalRef = this.modalService.open(TaskDetailsComponent);
    modalRef.componentInstance.id = taskId;

  }

  deletetodo(item) {
    this.ts.deletetask(item.id).subscribe();
    const index = this.todo.indexOf(item);
    if (index !== -1) {
      this.todo.splice(index, 1);
    }
  }
  deletedoing(item) {
    this.ts.deletetask(item.id).subscribe();
    const index = this.doing.indexOf(item);
    if (index !== -1) {
      this.doing.splice(index, 1);
    }
  }
  deletedone(item) {
    this.ts.deletetask(item.id).subscribe();
    const index = this.done.indexOf(item);
    if (index !== -1) {
      this.done.splice(index, 1);
    }
  }
}
