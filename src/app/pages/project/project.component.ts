import {Component, Inject, OnInit} from '@angular/core';
import {Project} from '../../Models/Project';
import {LoginService} from '../../Services/login.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {ProjectService} from '../../Services/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  constructor(private ps: ProjectService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, ) { }

  ngOnInit() {
  this.ps.getProjects(this.storage.get('user').id).subscribe(data => {this.projects = data; console.log(this.projects);});
  }

  onselect(selectedid: number) {
this.router.navigate(['projectboard', selectedid]);
  }
}
