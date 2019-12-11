import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../../../Services/project.service';
import {TaskService} from '../../../Services/task.service';
import { Task } from 'src/app/Models/Task';
import {TaskAttachmentService} from '../../../Services/task-attachment.service';
import {HelpComponent} from "../help/help.component";
import {forEach} from "@angular/router/src/utils/collection";
import {TaskFileComponent} from "../task-file/task-file.component";

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
  filesnames: any[] = [];
  uploadedFiles: any[] = [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal , private fs: TaskAttachmentService, private ps: ProjectService, private ts: TaskService) {
  }

  ngOnInit() {
    this.ts.getTask(this.id).subscribe(data => this.task = data);
    this.fs.getFiles(this.id).subscribe(data => {this.files = data; console.log(data); data.forEach(e => this.filesnames.push('http://localhost:9080/Graduation-Project-web/taskfile/downloadbyid/' + e.id)); });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fs.postFile(this.fileToUpload, this.id).subscribe(data => {
    }, error => {
      console.log(error);
    });
    this.files = [];
    this.fs.getFiles(this.id).subscribe(data2 => {this.files = data2; console.log(data2); });
  }
  openHelp(id: number) {
    const modalRef = this.modalService.open(HelpComponent);
    modalRef.componentInstance.id = id;
  }
  openfile(id: number) {
    const modalRef = this.modalService.open(TaskFileComponent);
    modalRef.componentInstance.id = id;
  }
}
