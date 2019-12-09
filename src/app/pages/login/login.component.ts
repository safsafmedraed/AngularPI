import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {Entreprise} from '../../Models/entreprise';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
// @ts-ignore
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(private router: Router,  private ls: LoginService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {


  }


  ngOnDestroy() {
  }



  dashbord(email, password) {
    this.ls.logIn(email.value, password.value).subscribe(
      data => {

        if (data.type == 'staff') {
          console.log('staff');

          this.storage.set('email', email);
          this.storage.set('type', 'staff');
          this.storage.set('user', data.user);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('dashboard');
        } else if (data.type == 'student') {
          console.log('student');
          this.storage.set('type', 'student');
          this.storage.set('email', email.value);
          this.storage.set('user', data.user);
          this.storage.set('token', data.token);
          console.log(this.storage.get('user').id
          );
          this.router.navigateByUrl('dashboard');

        } else if (data.type == 'encadreur') {
          console.log('encadreur');

          console.log(email.value);
          this.storage.set('encadreur', 'encadreur');

          this.storage.set('user', data.user);
          this.storage.set('email', email.value);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('dashboard');

        }

      }
    );

  }
}





