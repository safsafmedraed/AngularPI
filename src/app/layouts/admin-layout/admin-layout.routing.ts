import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {ProjectComponent} from '../../pages/project/project.component';
import {BoardComponent} from '../../pages/project/board/board.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'projectboard/:id', component: BoardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'nourchene', component: NourcheneComponent}
];
