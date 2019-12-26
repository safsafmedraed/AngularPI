import {Component, OnInit, ElementRef, Inject} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {Entreprise} from '../../Models/entreprise';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;

  public nom: string;
  public prenom: string;

  constructor(location: Location, private element: ElementRef, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService,
              public CompanyService: EntrepriseService, public Logout: LoginService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    /*let userCredentials = JSON.parse(localStorage.getItem('user'));

    this.nom = userCredentials.nom;
    this.prenom = userCredentials.prenom;
    console.log(userCredentials.nom);*/
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {

    localStorage.removeItem('user');
    localStorage.removeItem('type');
    localStorage.removeItem('entreprise');
    localStorage.removeItem('identifiant');

    this.storage.remove('email');
    this.storage.remove('type');
    this.storage.remove('user');

    this.router.navigateByUrl('login');

  }
}
