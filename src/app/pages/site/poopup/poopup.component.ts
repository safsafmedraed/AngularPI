import {Component, Inject, OnInit} from '@angular/core';
import {SiteService} from '../../../Services/site.service';
import {SchoolService} from '../../../Services/school.service';
import {School} from '../../../Models/School';
import {Site} from '../../../Models/Site';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-poopup',
  templateUrl: './poopup.component.html',
  styleUrls: ['./poopup.component.scss']
})
export class PoopupComponent implements OnInit {
  School: School[] = [];
  Site: Site ;
  id: number;
  constructor(public SiteServiice: SiteService , public SchooolService: SchoolService, public dialogRef: MatDialogRef<PoopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { console.log('data passed in is:', this.data);
                                                           this.id = this.data;
    }
  ngOnInit() {
    this.SchooolService.getSchools().subscribe(data => this.School = data, eur => console.log('error'));
  }
  affecter(c, id) {
    this.SiteServiice.affecter(c, id).subscribe(data => 'ok');
    console.log(id, c);
    this.dialogRef.close();
  }
}
