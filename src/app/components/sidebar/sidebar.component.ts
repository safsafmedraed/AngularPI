import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { Sheet } from 'src/app/Models/Sheet';
import { SheetServiceService } from 'src/app/Services/SheetService.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role : any; 
  
}

export const ROUTES: RouteInfo[] = [
  {path: '/sheet', title: 'Fiche', icon: 'ni-planet text-blue', class: '', role: ['SUPERVISOR']},
  {path: '/student', title: 'Student', icon: 'ni-tv-2 text-primary', class: '', role: ['student']},
  {path: '/user-profile', title: 'Dhaker', icon: 'ni-single-02 text-yellow', class: '', role: ['student']},
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

  constructor(private sheetservice: SheetServiceService,private router: Router ,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
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