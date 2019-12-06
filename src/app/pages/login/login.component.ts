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
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get f() {
    return this.loginForm.controls;
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
        } else if (data.type === 'student') {
          console.log('student');
          this.storage.set('type', 'student');
          this.storage.set('email', email.value);
          this.storage.set('user', data.user);
          this.storage.set('token', data.token);
          console.log(this.storage.get('user').id);
          this.router.navigateByUrl('offer');
          console.log(data);
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


/*checkLogin() {
  const identifiant = $('.identifiant').val();
  const password = $('.password').val();
  this.httpClient.get('/Graduation-Project-web/Entreprise/login?identifiant=' + identifiant + '&password=' + password)
    .subscribe((data: any) => {
      if (data.identifiant !== null) {
        this.currentUser = data;
        localStorage.setItem('id', this.currentUser.id.toString());
        localStorage.setItem('email', this.currentUser.mail.toString());
        localStorage.setItem('nomEntreprise', this.currentUser.nomEntreprise.toString());
        localStorage.setItem('identifiant', this.currentUser.identifiant.toString());
        localStorage.setItem('logoentreprise', this.currentUser.logoentreprise.toString());

        this.check = true;
        if (localStorage.getItem('nomEntreprise').toString() !== 'X') {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/register');
        }
      } else {
        console.log('bad credentials');
      }
    });
}*/


