import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES = [
  {path: '/dashboard', title: 'Corporate space', icon: 'ni-tv-2 text-primary', class: '', role : ['Student']},
  {path: '/offer', title: 'Corporate space1', icon: 'ni-tv-2 text-primary', class: '', role : ['Student']},
  {path: '/icons', title: 'Fiche', icon: 'ni-planet text-blue', class: '', role : ['Student']},
  {path: '/maps', title: 'Marwen', icon: 'ni-pin-3 text-orange', class: '', role : ['Student']},
  {path: '/user-profile', title: 'Dhaker', icon: 'ni-single-02 text-yellow', class: '', role : ['Student']},
  {path: '/tables', title: 'Aziz', icon: 'ni-bullet-list-67 text-red', class: '', role : ['Student']},
  {path: '/gestionSoutenance', title: 'Manage Defenses', icon: 'ni-hat-3 text-red', class: '', role : ['Student']},
  {path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '', role : ['Student', 'Teacher']},
  {path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '', role : ['Student']},


];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public role: any[];

  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.role =this.storage.get('role');
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
}
