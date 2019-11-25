import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from '../../Services/entreprise.service';
import {NotifierService} from 'angular-notifier';
import {Entreprise} from '../../Models/entreprise';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private readonly notifier: NotifierService;
  Company: Entreprise = new Entreprise();

  constructor(public CompanyService: EntrepriseService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
  }



  addCompany(c) {
    this.CompanyService.registerCompany(c).subscribe(data => 'ok');
    console.log(c);
    this.notifier.show({
      type: 'success',
      message: 'Company successfully registred...wait for Approvement',
      id: 'THAT_NOTIFICATION_ID'
    });
  }
}
