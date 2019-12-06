import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {Observable} from 'rxjs';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-loginentreprise',
  templateUrl: './loginentreprise.component.html',
  styleUrls: ['./loginentreprise.component.scss']
})
export class LoginentrepriseComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;

  private readonly notifier: NotifierService;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router, private httpClient: HttpClient, private entrepriseservice: EntrepriseService,
              private ls: LoginService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
  }

  get f() {
    return this.loginForm.controls;
  }

  loginComapny(identifiant, password) {
    this.ls.logCompany(identifiant.value, password.value).subscribe(
      data => {
        if (data.entreprise.autorise === 1) {
          this.storage.set('entreprise', data.entreprise);
          this.storage.set('identifiant', data.entreprise.identifiant);
          this.storage.set('token', data.token);
          this.router.navigateByUrl('offerc');
        } else {
          console.log('cant connect');
          this.router.navigateByUrl('loginE');
          this.notifier.show({
            type: 'Error',
            message: 'wait for Approvement or Maybe approvement refused',
            id: 'THAT_NOTIFICATION_ID',

          });
        }


      }
    );

  }

}
