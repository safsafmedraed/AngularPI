import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../../../Services/project.service';
import {TaskService} from '../../../Services/task.service';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  @Input() id;

  constructor(public activeModal: NgbActiveModal, private ps: ProjectService, private ts: TaskService) { }

  ngOnInit() {
    this.ts.getTask(this.id).subscribe(data => this.task = data);
  }

}
