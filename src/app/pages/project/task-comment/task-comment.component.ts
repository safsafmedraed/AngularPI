import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';

import {TaskCommentService} from '../../../Services/task-comment.service';

import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {TaskComment} from '../../../Models/TaskComment';

@Component({
  selector: 'app-task-comment',
  templateUrl: './task-comment.component.html',
  styleUrls: ['./task-comment.component.scss']
})
export class TaskCommentComponent implements OnInit , OnChanges  {
  @Input() private task: any;
  constructor(private cs: TaskCommentService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {



  }
  comm: string;
  comments: any[] = [];
  ngOnInit() {

  }
  ngOnChanges() {
  this.cs.getComments(this.task.id).subscribe(data => {this.comments = data; console.log(this.comments); });
  }
  onenter(cmm) {
     this.comm = cmm.value;
     const comment =  {body: cmm.value, task: this.task , user: {id : this.storage.get('user').id } };

     console.log(comment);
     this.cs.addComment(JSON.stringify(comment)).subscribe( );
     this.comments = [];
     this.cs.getComments(this.task.id).subscribe(data => {this.comments = data; console.log(this.comments); });
  }
}
