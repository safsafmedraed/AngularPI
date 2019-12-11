import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from "ngx-webstorage-service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role: any;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Corporate space', icon: 'ni-tv-2 text-primary', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/offer', title: 'Corporate space1', icon: 'ni-tv-2 text-primary', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/icons', title: 'Fiche', icon: 'ni-planet text-blue', class: '', role: []},
  {path: '/maps', title: 'Marwen', icon: 'ni-pin-3 text-orange', class: '', role: []},
  {path: '/user-profile', title: 'user-profile', icon: 'ni-single-02 text-yellow', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/projects', title: 'project', icon: ' ni-folder-17 text-yellow', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/tables', title: 'Forum', icon: 'ni-bullet-list-67 text-red', class: '', role: ['student', 'SUPERVISOR', 'encadreur']},
  {path: '/nourchene', title: 'Nourchene', icon: 'ni-bullet-list-67 text-red', class: '', role: []},
  {path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '', role: []},
  {path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '', role: []}
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
    if (this.storage.get('type') === 'staff'){
   this.role = this.storage.get('user').role;
    } else {
      this.role = this.storage.get('type');
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
}
