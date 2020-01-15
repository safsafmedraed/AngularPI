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
import {StudentSheetComponent} from '../../pages/student-sheet/student-sheet.component';
import {AjoutclassComponent} from '../../pages/classes/ajoutclass/ajoutclass.component';
import {NaclassesComponent} from '../../pages/classes/naclasses/naclasses.component';
import {ClassesComponent} from '../../pages/classes/classes.component';
import {NaoptionsComponent} from '../../pages/options/naoptions/naoptions.component';
import {AjoutOptionComponent} from '../../pages/options/ajout-option/ajout-option.component';
import {OptionsComponent} from '../../pages/options/options.component';
import {NasiteComponent} from '../../pages/site/nasite/nasite.component';
import {NadepartsComponent} from '../../pages/departements/nadeparts/nadeparts.component';
import {AjoutdepartComponent} from '../../pages/departements/ajoutdepart/ajoutdepart.component';
import {DepartementsComponent} from '../../pages/departements/departements.component';
import {AjoutsiteComponent} from '../../pages/site/ajoutsite/ajoutsite.component';
import {AjoutSchoolComponent} from '../../pages/maps/ajout-school/ajout-school.component';
import {DetailsComponent} from '../../pages/maps/details/details.component';
import {SiteComponent} from '../../pages/site/site.component';
import {PostdetailsComponent} from '../../pages/postdetails/postdetails.component';
import {PostsComponent} from '../../pages/posts/posts.component';
import {AllSheetsComponent} from '../../pages/all-sheets/all-sheets.component';
import {DetailsSheetComponent} from "../../pages/Defense/details-sheet/details-sheet.component";
import {OnlyLoggedInUsersGuard} from "../../pages/guard/OnlyLoggedInUsersGuard";
import {AddDefenseComponent} from "../../pages/Defense/add-defense/add-defense.component";
import {GestionSoutenancesComponent} from "../../pages/gestion-soutenances/gestion-soutenances.component";
import {EvaluationSheetComponent} from "../../pages/Defense/evaluation-sheet/evaluation-sheet.component";
import {ViewDefenseJuryComponent} from "../../pages/Defense/view-defense-jury/view-defense-jury.component";
import {ViewListDefensesComponent} from "../../pages/Defense/view-list-defenses/view-list-defenses.component";


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
  {path: 'school', component: MapsComponent},
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
  { path: 'ajoutclass', component: AjoutclassComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'allsheets', component: AllSheetsComponent},
  {path: 'Detailsheets', component: DetailsSheetComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'AddDefense', component: AddDefenseComponent},
  {path: 'gestionSoutenance', component: GestionSoutenancesComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'evaluateDefense', component: EvaluationSheetComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'ViewDefenseJury', component: ViewDefenseJuryComponent, canActivate: [OnlyLoggedInUsersGuard]},
  {path: 'ViewListDefenseJury', component: ViewListDefensesComponent, canActivate: [OnlyLoggedInUsersGuard]}

];
