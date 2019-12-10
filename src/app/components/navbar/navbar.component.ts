import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { WebStorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService ,location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

public nomprenom;
  ngOnInit() {
    this.nomprenom= this.storage.get('Fullname');
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  logout(){
    console.log("aaa")
    this.storage.clear();

  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
