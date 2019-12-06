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

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'Detailsheets', component: DetailsSheetComponent},
  {path: 'AddDefense', component: AddDefenseComponent},

  {path: 'gestionSoutenance', component: GestionSoutenancesComponent}
];
