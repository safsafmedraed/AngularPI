import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {LoginentrepriseComponent} from '../../pages/loginentreprise/loginentreprise.component';
import {SkillsComponent} from '../../pages/skills/skills.component';
import {ByidComponent} from '../../pages/offer/byid/byid.component';
import {SearchUiComponent} from '../../pages/search-ui/search-ui.component';
import {ChatComponent} from '../../pages/offer/chat/chat.component';


export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'nourchene', component: NourcheneComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'offerc', component: ByidComponent},
  {path: 'search', component: SearchUiComponent},
  {path: 'stat', component: ChatComponent}


];
