import {Component, OnInit, OnDestroy} from '@angular/core';
import {Entreprise} from '../../Models/entreprise';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {EntrepriseService} from '../../Services/entreprise.service';

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
              private router: Router, private httpClient: HttpClient, private entrepriseservice: EntrepriseService) {
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


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // const identifiant = $('.identifiant').val();
    // const password = $('.password').val();

    this.httpClient.post('/Graduation-Project-web/Entreprise/login?identifiant=' + this.f.identifiant + '&password='
      + this.f.password, {identifiant: this.f.identifiant, password: this.f.password})
      .subscribe((data: any) => {
        if (data.identifiant !== null) {
          this.currentUser = data;
          localStorage.setItem('id', this.currentUser.id.toString());
          localStorage.setItem('email', this.currentUser.mail.toString());
          localStorage.setItem('nomEntreprise', this.currentUser.nomEntreprise.toString());
          localStorage.setItem('identifiant', this.currentUser.identifiant.toString());
          localStorage.setItem('logoentreprise', this.currentUser.logoentreprise.toString());


          if (localStorage.getItem('nomEntreprise').toString() !== 'X') {
            this.router.navigateByUrl('/dashboard');
          } else {
            this.router.navigateByUrl('/register');
          }
        } else {
          console.log('bad credentials');
        }
      });
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


