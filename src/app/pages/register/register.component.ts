import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from '../../Services/entreprise.service';
import {NotifierOptions, NotifierService} from 'angular-notifier';
import {Entreprise} from '../../Models/entreprise';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private readonly notifier: NotifierService;
  Company: Entreprise = new Entreprise();
  key: string;
  recaptcha: any[];
  userForm1 = new FormGroup({
    nomEntreprise: new FormControl('',
      [Validators.required, Validators.minLength(4)]),
    identifiant: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
    numtelentre: new FormControl('', [Validators.required, Validators.minLength(8)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lienlinkedin: new FormControl('', [Validators.required, Validators.minLength(4)]),
    presentation: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mail: new FormControl('', [Validators.required,
      Validators.pattern(
        '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    siteweb: new FormControl('', [Validators.required,
      Validators.pattern(
        '^[www.]+.[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  });


  get presentation() {
    return this.userForm1.get('presentation');
  }

  get lienlinkedin() {
    return this.userForm1.get('lienlinkedin');
  }

  get siteweb() {
    return this.userForm1.get('siteweb');
  }

  get description() {
    return this.userForm1.get('description');
  }

  get numtelentre() {
    return this.userForm1.get('numtelentre');
  }

  get nom() {
    return this.userForm1.get('nomEntreprise');
  }

  get identifiant() {
    return this.userForm1.get('identifiant');
  }

  get password() {
    return this.userForm1.get('password');
  }

  get adresse() {
    return this.userForm1.get('adresse');
  }

  get mail() {
    return this.userForm1.get('mail');
  }

  constructor(public CompanyService: EntrepriseService, notifierService: NotifierService, private formBuilder: FormBuilder) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.key = '6LdjfsYUAAAAAEsHupRPAysP8yC0-GehWE52NdyR';

  }

  resolved(captcharesponse: any[]) {
    this.recaptcha = captcharesponse;
    console.log(this.recaptcha);
  }

  addCompany(value: any) {
    if (this.userForm1.valid) {
      this.CompanyService.registerCompany(this.userForm1.value).subscribe(data => 'ok');
      console.log(this.userForm1.value);
      this.notifier.show({
        type: 'success',
        message: 'Company successfully registred...wait for Approvement',
        id: 'THAT_NOTIFICATION_ID',

      });
    }
  }
}

