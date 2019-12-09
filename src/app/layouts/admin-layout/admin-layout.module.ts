import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {AjoutSchoolComponent} from '../../pages/maps/ajout-school/ajout-school.component';
import {DetailsComponent} from '../../pages/maps/details/details.component';
import {SiteComponent} from '../../pages/site/site.component';
import {NotifierModule} from 'angular-notifier';
import {AjoutsiteComponent} from '../../pages/site/ajoutsite/ajoutsite.component';
import {PoopupComponent} from '../../pages/site/poopup/poopup.component';
import {DepartementsComponent} from '../../pages/departements/departements.component';
import {AjoutdepartComponent} from '../../pages/departements/ajoutdepart/ajoutdepart.component';
import {PoppupComponent} from '../../pages/departements/poppup/poppup.component';
import {NadepartsComponent} from '../../pages/departements/nadeparts/nadeparts.component';
import {NasiteComponent} from '../../pages/site/nasite/nasite.component';
import {OptionsComponent} from '../../pages/options/options.component';
import {NaoptionsComponent} from '../../pages/options/naoptions/naoptions.component';
import {AjoutOptionComponent} from '../../pages/options/ajout-option/ajout-option.component';
import {ClasspopupComponent} from "../../pages/classes/classpopup/classpopup.component";
import {NaclassesComponent} from "../../pages/classes/naclasses/naclasses.component";
import {ClassesComponent} from "../../pages/classes/classes.component";
import {AjoutclassComponent} from "../../pages/classes/ajoutclass/ajoutclass.component";
// import { ToastrModule } from 'ngx-toastr';

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
    NotifierModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    NourcheneComponent,
    AjoutSchoolComponent,
    DetailsComponent,
    SiteComponent,
    AjoutsiteComponent,
    DepartementsComponent,
    AjoutdepartComponent,
    NadepartsComponent,
    NasiteComponent,
    OptionsComponent,
    NaoptionsComponent,
    AjoutOptionComponent,
    NaclassesComponent,
    ClassesComponent,
    AjoutclassComponent,
  ]
})

export class AdminLayoutModule {}
