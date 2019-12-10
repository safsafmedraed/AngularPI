import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutRoutes} from './auth-layout.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LoginComponent} from '../../pages/login/login.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import {LoginentrepriseComponent} from '../../pages/loginentreprise/loginentreprise.component';
import {LoginService} from '../../Services/login.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../../Services/token-interceptor.service';
import {EntrepriseService} from '../../Services/entreprise.service';
import {CandidaturePopupComponent} from '../../pages/candidature-popup/candidature-popup.component';
import {RedirecttologinComponent} from '../../pages/redirecttologin/redirecttologin.component';
import {RecaptchaModule} from 'ng-recaptcha';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    ReactiveFormsModule,
    RecaptchaModule,
    // NgbModule
  ]
  ,
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginentrepriseComponent,
    RedirecttologinComponent
  ]
})
export class AuthLayoutModule {
}
