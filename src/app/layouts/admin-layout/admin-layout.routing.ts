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

import {ProjectComponent} from '../../pages/project/project.component';
import {BoardComponent} from '../../pages/project/board/board.component';
import {StatsComponent} from '../../pages/project/stats/stats.component';
import {SheetComponent} from '../../pages/sheet-module/sheet/sheet.component';
import {StudentSheetComponent} from "../../pages/student-sheet/student-sheet.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'projects/stats/:id', component: StatsComponent},
  {path: 'projectboard/:id', component: BoardComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'nourchene', component: NourcheneComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'offerc', component: ByidComponent},
  {path: 'search', component: SearchUiComponent},
  {path: 'stat', component: ChatComponent},

  {path: 'student', component: StudentSheetComponent},


  {path: 'sheet-process', component: UserProfileComponent},
  {path: 'stats', component: TablesComponent},
  {path: 'sheet', component: SheetComponent},
  {path: 'allsheets', component: MapsComponent},



];
