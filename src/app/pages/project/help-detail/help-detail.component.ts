import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../Services/project.service';

@Component({
  selector: 'app-help-detail',
  templateUrl: './help-detail.component.html',
  styleUrls: ['./help-detail.component.scss']
})
export class HelpDetailComponent implements OnInit {
@Input() key ;
   Links: any[];
  constructor(private ps: ProjectService) {


  }

  ngOnInit() {
   // this.replaced = this.key.split(' ').join('+');
    this.ps.getLinks(this.key).subscribe(data => {this.Links = data; console.log(data);});
  }

}
