import { Injectable, Inject, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate{

  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService , private router: Router) {};
// tslint:disable-next-line:member-ordering
  Token: any = this.storage.get('token');

  canActivate() {

    if (this.Token) {
     
      return true;
    } else {
      console.log(this.Token);
       this.router.navigate(['login']);
      return false;
    }
  }
}
