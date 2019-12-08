import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';

import {OfferComponent} from '../../pages/offer/offer.component';
import {GestionSoutenancesComponent} from '../../pages/gestion-soutenances/gestion-soutenances.component';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {DetailsSheetComponent} from '../../pages/Defense/details-sheet/details-sheet.component';
import {AddDefenseComponent} from '../../pages/Defense/add-defense/add-defense.component';
import { EvaluationSheetComponent } from '../../pages/Defense/evaluation-sheet/evaluation-sheet.component';
import { ViewListDefensesComponent } from '../../pages/Defense/view-list-defenses/view-list-defenses.component';
import { ViewDetailsDefenseComponent } from '../../pages/Defense/view-details-defense/view-details-defense.component';
import { ViewDefenseJuryComponent } from '../../pages/Defense/view-defense-jury/view-defense-jury.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'Detailsheets', component: DetailsSheetComponent},
  {path: 'AddDefense', component: AddDefenseComponent},

  {path: 'gestionSoutenance', component: GestionSoutenancesComponent},
  {path: 'evaluateDefense', component: ViewListDefensesComponent},
  {path: 'ViewDefenseJury', component: ViewDefenseJuryComponent}
];
