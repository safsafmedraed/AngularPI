import {Component, Input, OnInit} from '@angular/core';
import {TaskAttachmentService} from '../../../Services/task-attachment.service';

@Component({
  selector: 'app-task-file',
  templateUrl: './task-file.component.html',
  styleUrls: ['./task-file.component.scss']
})
export class TaskFileComponent implements OnInit {
   file = 'http://localhost:9080/Graduation-Project-web/taskfile/downloadbyid/4';

  @Input() id;
  constructor() { }

  ngOnInit() {


  }

}
