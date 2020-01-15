import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role: any;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Corporate space',
    icon: 'ni-tv-2 text-primary',
    class: '',
    role: ['DEPARTEMENT_MANAGER']
  },
  {path: '/offer', title: 'internship Space', icon: 'ni-tv-2 text-primary', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/icons', title: 'Fiche', icon: 'ni-planet text-blue', class: '', role: ['SUPERVISOR']},
  {path: '/school', title: 'Schools', icon: 'ni-pin-3 text-orange', class: '', role: ['DEPARTEMENT_MANAGER']},
  {path: '/sheet-process', title: 'sheet process', icon: 'ni-single-02 text-yellow', class: '', role: ['student']},
  {path: '/stats', title: 'stats', icon: 'ni-bullet-list-67 text-red', class: '', role: ['DEPARTEMENT_MANAGER']},
  {path: '/allsheets', title: 'All sheets', icon: 'ni-bullet-list-67 text-red', class: '', role: ['DEPARTEMENT_MANAGER']},
  {path: '/sheet', title: 'sheet', icon: 'ni-bullet-list-67 text-red', class: '', role: ['SUPERVISOR']},

  {path: '/student', title: 'add sheet', icon: 'ni-tv-2 text-primary', class: '', role: ['student']},
  {path: '/skills', title: 'Skills', icon: 'ni-tv-2 text-primary', class: '', role: ['student']},
  {path: '/choice', title: 'login choice', icon: 'ni-tv-2 text-primary', class: '', role: []},
  {path: '/offerc', title: 'MyOffres', icon: 'ni-tv-2 text-primary', class: '', role: ['']},
  {path: '/search', title: 'search', icon: 'ni-tv-2 text-primary', class: '', role: ['student']},
  {path: '/projects', title: 'project', icon: ' ni-folder-17 text-yellow', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/gestionSoutenance', title: 'Manage Defenses', icon: 'ni-hat-3 text-red', class: '', role : ['Directeur']},
  // {path: '/evaluateDefense', title: 'EvaluateDefense', icon: 'ni-circle-08 text-pink', class: '', role : ['Teacher']},
  {path: '/ViewListDefenseJury', title: 'Manage Defenses', icon: 'ni-circle-08 text-pink', class: '', role : ['Teacher']},
  {path: '/posts', title: 'forum', icon: 'ni-tv-2 text-primary', class: '', role: ['student']},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public role: string;


  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {

      if (this.storage.get('type') === 'staff') {
        this.role = this.storage.get('user').role;
      } else if (this.storage.get('role') === 'Teacher') {
        this.role = this.storage.get('role') ;
      } else if (this.storage.get('role') === 'Directeur') {
        this.role = this.storage.get('role') ;
      } else {
        this.role = this.storage.get('type');
      }
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });


  }
}
