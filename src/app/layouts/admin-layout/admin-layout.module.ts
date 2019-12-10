import {forwardRef, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule, MatMenuModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {LoginentrepriseComponent} from '../../pages/loginentreprise/loginentreprise.component';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
import {TokenInterceptorService} from '../../Services/token-interceptor.service';
import {SkillsComponent} from '../../pages/skills/skills.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PopupoffreComponent} from '../../pages/offer/popupoffre/popupoffre.component';
import {CandidaturePopupComponent} from '../../pages/candidature-popup/candidature-popup.component';
import {ByidComponent} from '../../pages/offer/byid/byid.component';
import {MatchingComponent} from '../../pages/offer/matching/matching.component';
import {SearchUiComponent} from '../../pages/search-ui/search-ui.component';
import {
  NgAisHierarchicalMenuModule, NgAisHitsModule,
  NgAisInstantSearchModule, NgAisModule,
  NgAisRefinementListModule,
  NgAisSearchBoxModule
} from 'angular-instantsearch';
import {ChatComponent} from '../../pages/offer/chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatDialogModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgAisModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,

  ],
  providers: [EntrepriseService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    NourcheneComponent,
    OfferComponent,
    SkillsComponent,
    ByidComponent,
    SearchUiComponent, ChatComponent
  ]
})

export class AdminLayoutModule {/*constructor(
  private readonly router: Router,
) {
  router.events
    .subscribe(console.log);
}*/
}
