import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {PopupComponent} from './pages/popup/popup.component';

import {EntrepriseService} from './Services/entreprise.service';
import {LoginService} from './Services/login.service';
import {TokenInterceptorService} from './Services/token-interceptor.service';

import {PopupoffreComponent} from './pages/offer/popupoffre/popupoffre.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSlideToggleModule, MatSnackBarModule
} from '@angular/material';

import {MatSelectModule} from '@angular/material/select';
import {SkillsComponent} from './pages/skills/skills.component';
import {CandidaturePopupComponent} from './pages/candidature-popup/candidature-popup.component';
import {RedirecttologinComponent} from './pages/redirecttologin/redirecttologin.component';
import {ByidComponent} from './pages/offer/byid/byid.component';
import {MatchingComponent} from './pages/offer/matching/matching.component';
import {RECAPTCHA_LANGUAGE} from 'ng-recaptcha';
import {ChatComponent} from './pages/offer/chat/chat.component';
import {DragDropModule} from '@angular/cdk/drag-drop';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,

    ScrollingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule, MatSnackBarModule,

    DragDropModule,


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PopupComponent,

    PopupoffreComponent,
    CandidaturePopupComponent,
    MatchingComponent
  ],
  providers: [EntrepriseService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }, MatDatepickerModule,

    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}, {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'en'
    }

  ],
  bootstrap: [AppComponent],

  entryComponents: [PopupComponent, PopupoffreComponent, CandidaturePopupComponent, MatchingComponent],

  exports: [

  ],

})
export class AppModule {
}
