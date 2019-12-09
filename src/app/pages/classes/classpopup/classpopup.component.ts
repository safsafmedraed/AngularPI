import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OptionService} from '../../../Services/option.service';
import {ClassesService} from '../../../Services/classes.service';
import {Options} from '../../../Models/Options';

@Component({
  selector: 'app-classpopup',
  templateUrl: './classpopup.component.html',
  styleUrls: ['./classpopup.component.scss']
})
export class ClasspopupComponent implements OnInit {
  Options: Options[] = [];
  constructor(public OptionsS: OptionService, public classesService: ClassesService, public dialogRef: MatDialogRef<ClasspopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.OptionsS.getOpt().subscribe(data => this.Options = data, eur => console.log('error'));
    console.log(Options);
  }
  affecter(c, id) {
    this.classesService.affecter(c, id).subscribe(data => 'ok');
    console.log(id, c);
    this.dialogRef.close();
  }
}
