import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import { SheetComponent } from 'src/app/pages/Sheet/Sheet.component';
// import { ToastrModule } from 'ngx-toastr';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatDialogModule,
    MatButtonModule,
    ButtonModule,
    PanelMenuModule,
    TabMenuModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    SheetComponent,
    MapsComponent,
    NourcheneComponent,
    OfferComponent
  ]
})

export class AdminLayoutModule {/*constructor(
  private readonly router: Router,
) {
  router.events
    .subscribe(console.log);
}*/}
