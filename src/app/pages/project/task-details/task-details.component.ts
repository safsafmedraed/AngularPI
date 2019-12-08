import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../../../Services/project.service';
import {TaskService} from '../../../Services/task.service';
import { Task } from 'src/app/Models/Task';
import {TaskAttachmentService} from '../../../Services/task-attachment.service';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  @Input() id;
  fileToUpload: File = null;
  uploadedFiles: any[] = [];

  constructor(public activeModal: NgbActiveModal, private ps: ProjectService, private ts: TaskService, private as: TaskAttachmentService) {
  }

  ngOnInit() {
    this.ts.getTask(this.id).subscribe(data => this.task = data);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.as.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
}
