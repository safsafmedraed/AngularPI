import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
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
  constructor(private ps: ProjectService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) {

  }

  ngOnInit() {
    if (this.storage.get('user').role == 'SUPERVISOR' || this.storage.get('type') == 'encadreur') {
      this.ps.getProjects(this.storage.get('user').id).subscribe(data => {
        this.projects = data;
        console.log(this.projects);
      });
    } else if (this.storage.get('type') == 'student') {

      this.ps.getProjectbystudent(this.storage.get('user').id).subscribe(data => {
        this.router.navigate(['projectboard', data.id]);
      });
    } else {
      this.router.navigate(['dashboard']);
    }

  }

  onselect(selectedid: number) {
    this.router.navigate(['projectboard', selectedid]);
  }

  delete(project) {
 this.ps.delete(project.id).subscribe();
 const index = this.projects.indexOf(project);
 if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  opencharts(id: number) {
    this.router.navigate(['projects/stats/', id]);
  }

}
