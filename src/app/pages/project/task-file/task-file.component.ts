import {Component, Input, OnInit} from '@angular/core';
import {TaskAttachmentService} from '../../../Services/task-attachment.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-file',
  templateUrl: './task-file.component.html',
  styleUrls: ['./task-file.component.scss']
})
export class TaskFileComponent implements OnInit {
   file ;

  @Input() id;
  @Input() files;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
this.file = 'http://localhost:9080/Graduation-Project-web/taskfile/downloadbyid/' + this.id;

  }

}
