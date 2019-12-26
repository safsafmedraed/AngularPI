import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../../../Services/project.service';
import {TaskService} from '../../../Services/task.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
 @Input() id;
  @Input() title;
  Links: any[];
 keywords: any[];
 keyword: string;
  constructor(public activeModal: NgbActiveModal, private ps: ProjectService, private ts: TaskService) { }

  ngOnInit() {
    this.keyword = this.title;
    this.ts.getKeywords(this.id).subscribe(data => {this.keywords = data; });
  }

  detail(keyword: any) {
  this.keyword = keyword;

  const replaced = keyword.split(' ').join('+');
  this.ps.getLinks(replaced).subscribe(data => {this.Links = data; console.log(data);});
  }
}
