import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NourcheneComponent } from '../../pages/nourchene/nourchene.component';

import {SiteComponent} from '../../pages/site/site.component';
import {DetailsComponent} from '../../pages/maps/details/details.component';
import {AjoutSchoolComponent} from '../../pages/maps/ajout-school/ajout-school.component';
import {AjoutsiteComponent} from '../../pages/site/ajoutsite/ajoutsite.component';
import {DepartementsComponent} from '../../pages/departements/departements.component';
import {AjoutdepartComponent} from '../../pages/departements/ajoutdepart/ajoutdepart.component';
import {NadepartsComponent} from '../../pages/departements/nadeparts/nadeparts.component';
import {NasiteComponent} from '../../pages/site/nasite/nasite.component';
import {OptionsComponent} from '../../pages/options/options.component';
import {AjoutOptionComponent} from '../../pages/options/ajout-option/ajout-option.component';
import {NaoptionsComponent} from '../../pages/options/naoptions/naoptions.component';
import {ClassesComponent} from '../../pages/classes/classes.component';
import {NaclassesComponent} from '../../pages/classes/naclasses/naclasses.component';
import {AjoutclassComponent} from '../../pages/classes/ajoutclass/ajoutclass.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'nourchenne',     component: NourcheneComponent },
    { path: 'school',           component: MapsComponent },
    { path: 'nourchenne',     component: NourcheneComponent },
    { path: 'site/:id', component: SiteComponent},
    { path: 'details', component: DetailsComponent},
    { path: 'AjoutSchool', component: AjoutSchoolComponent},
    { path: 'AjoutSite', component: AjoutsiteComponent},
    { path: 'Departement/:id', component: DepartementsComponent},
    { path: 'AjoutDepart', component: AjoutdepartComponent},
    { path: 'nadeparts', component: NadepartsComponent},
    { path: 'nasite', component: NasiteComponent},
    { path: 'options/:id', component: OptionsComponent},
    { path: 'AjoutOption', component: AjoutOptionComponent},
    { path: 'naoptions', component: NaoptionsComponent},
    { path: 'class/:id', component: ClassesComponent},
    { path: 'naclass', component: NaclassesComponent},
    { path: 'ajoutclass', component: AjoutclassComponent}
    ];
