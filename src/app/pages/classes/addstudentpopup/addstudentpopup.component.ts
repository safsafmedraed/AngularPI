import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ClassesService} from '../../../Services/classes.service';
import {UserService} from '../../../Services/user.service';
import {Student} from '../../../Models/Student';

@Component({
  selector: 'app-addstudentpopup',
  templateUrl: './addstudentpopup.component.html',
  styleUrls: ['./addstudentpopup.component.scss']
})
export class AddstudentpopupComponent implements OnInit {
  Students: Student[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(public StudentService: UserService, public classesService: ClassesService, public dialogRef: MatDialogRef<AddstudentpopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.StudentService.getStuents().subscribe(data => this.Students = data, eur => console.log('error'));
  }
  affecter(c, id) {
    this.classesService.affecterstudent(c, id).subscribe(data => 'ok');
    console.log(id, c);
    this.dialogRef.close();
  }
}
