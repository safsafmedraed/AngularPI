import {Component, Inject, Input, OnInit} from '@angular/core';

import {TaskCommentService} from '../../../Services/task-comment.service';
import {ProjectService} from "../../../Services/project.service";
import {LOCAL_STORAGE, WebStorageService} from "ngx-webstorage-service";

@Component({
  selector: 'app-task-comment',
  templateUrl: './task-comment.component.html',
  styleUrls: ['./task-comment.component.scss']
})
export class TaskCommentComponent implements OnInit {
 @Input() task;
  constructor(private cs: TaskCommentService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  comm: string;
  ngOnInit() {
  }

  onenter(cmm) {
     this.comm = cmm.value;
     const comment =  {body: cmm.value, task: this.task , user: this.storage.get('user') };

     console.log(comment);
     this.cs.addComment(JSON.stringify(comment)).subscribe( sucess => {
    });
  }
}
