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
import { OnlyLoggedInUsersGuard } from '../../guard/OnlyLoggedInUsersGuard';
import { AlwaysAuthGuard } from '../../guard/AlwaysAuthGuard';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'icons', component: IconsComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'maps', component: MapsComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'Detailsheets', component: DetailsSheetComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'AddDefense', component: AddDefenseComponent},
  {path: 'gestionSoutenance', component: GestionSoutenancesComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'evaluateDefense', component: EvaluationSheetComponent,canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'ViewDefenseJury', component: ViewDefenseJuryComponent,canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'ViewListDefenseJury', component: ViewListDefensesComponent,canActivate: [OnlyLoggedInUsersGuard]}

  
];
