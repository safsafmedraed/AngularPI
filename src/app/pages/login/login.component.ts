import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {Entreprise} from '../../Models/entreprise';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  currentUser: Entreprise = new Entreprise();
  /*check: boolean;
  identifiant: string;
  password: string;*/
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router, private httpClient: HttpClient,
              private entrepriseservice: EntrepriseService, private ls: LoginService,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {


  }


  ngOnDestroy() {
  }


  dashbord(email, password) {
    this.ls.logIn(email.value, password.value).subscribe(
      data => {

        if (data.type === 'staff') {
          console.log('staff');

          this.storage.set('email', email);
          this.storage.set('type', 'staff');
          this.storage.set('user', data.user);
          this.storage.set('role', data.role);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('dashboard');
        } else if (data.type === 'student') {
          console.log('student');
          this.storage.set('type', 'student');
          this.storage.set('email', email.value);
          this.storage.set('user', data.user);
          this.storage.set('role', data.role);

          this.storage.set('token', data.token);

          console.log(this.storage.get('user').id);
          console.log(data);

          console.log(this.storage.get('user').id
          );
          this.router.navigateByUrl('projects');

        } else if (data.type === 'encadreur') {
          console.log('encadreur');
          this.storage.set('role', data.role);

          console.log(email.value);
          this.storage.set('encadreur', 'encadreur');

          this.storage.set('user', data.user);
          this.storage.set('email', email.value);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('projects');

        }
        else if (data.role === 'Teacher') {
          this.storage.set('role', data.role);


          this.storage.set('user', data.user);
          this.storage.set('email', email.value);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('projects');

        }
        else if (data.role === 'Directeur') {
          this.storage.set('role', data.role);


          this.storage.set('user', data.user);
          this.storage.set('email', email.value);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('projects');

        }
      }
    );

  }
}





