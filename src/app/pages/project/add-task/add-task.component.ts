import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateNativeUTCAdapter,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../../Models/Task';
import {Project} from '../../../Models/Project';
import {ProjectService} from '../../../Services/project.service';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../../Services/task.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter}],
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() id;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal, private ps: ProjectService, private ts: TaskService) { }
  ajout = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    deadline: new FormControl('', [Validators.required])
  });
  private task: Task;
private project: Project;
  ngOnInit() {
    this.ps.getProjectbyid(this.id).subscribe(data => {this.project = data; console.log(this.project); });

  }
  get title() {
    return this.ajout.get('title');
  }
  get description() {
    return this.ajout.get('description');
  }
  get deadline() {
    return this.ajout.get('deadline');
  }

  ajoutaction(value: any) {
    const dateTime = this.deadline.value.toString() ;
 //   const dateTime = new Date() ;
  //  dateTime.setFullYear(this.deadline.value.year, this.deadline.value.month, this.deadline.value.day)
    console.log(dateTime);
    console.log(moment(dateTime).format('DD-MM-YYYY'));
    const task =  {title: this.title.value, description: this.description.value , deadline: moment(dateTime).format('DD-MM-YYYY'), project: this.project };

    console.log(task);
    this.ts.addTask(JSON.stringify(task)).subscribe( sucess => {
        this.passEntry.emit(task);this.activeModal.close();
    });
  }
}
