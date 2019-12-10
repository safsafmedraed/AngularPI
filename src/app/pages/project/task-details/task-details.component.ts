import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../../../Services/project.service';
import {TaskService} from '../../../Services/task.service';
import { Task } from 'src/app/Models/Task';
import {TaskAttachmentService} from '../../../Services/task-attachment.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  @Input() id;
  fileToUpload: File = null;
  files: any[] = [];

  uploadedFiles: any[] = [];

  constructor(public activeModal: NgbActiveModal, private fs: TaskAttachmentService, private ps: ProjectService, private ts: TaskService, private as: TaskAttachmentService) {
  }

  ngOnInit() {
    this.ts.getTask(this.id).subscribe(data => this.task = data);
    this.fs.getFiles(this.id).subscribe(data => {this.files = data; console.log(data); });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.as.postFile(this.fileToUpload, this.id).subscribe(data => {
    }, error => {
      console.log(error);
    });
    this.files = [];
    this.fs.getFiles(this.id).subscribe(data2 => {this.files = data2; console.log(data2); });
  }
}
