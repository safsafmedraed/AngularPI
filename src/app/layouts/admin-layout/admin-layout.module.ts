import {forwardRef, NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {
  DialogMajorModif,
  DialogMinorModif,
  UserProfileComponent
} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule, MatMenuModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {LoginentrepriseComponent} from '../../pages/loginentreprise/loginentreprise.component';
import {EntrepriseService} from '../../Services/entreprise.service';
import {LoginService} from '../../Services/login.service';
import {TokenInterceptorService} from '../../Services/token-interceptor.service';
import {SkillsComponent} from '../../pages/skills/skills.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PopupoffreComponent} from '../../pages/offer/popupoffre/popupoffre.component';
import {CandidaturePopupComponent} from '../../pages/candidature-popup/candidature-popup.component';
import {ByidComponent} from '../../pages/offer/byid/byid.component';
import {MatchingComponent} from '../../pages/offer/matching/matching.component';
import {SearchUiComponent} from '../../pages/search-ui/search-ui.component';
import {
  NgAisHierarchicalMenuModule, NgAisHitsModule,
  NgAisInstantSearchModule, NgAisModule,
  NgAisRefinementListModule,
  NgAisSearchBoxModule
} from 'angular-instantsearch';
import {ChatComponent} from '../../pages/offer/chat/chat.component';

import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import {ProjectComponent} from '../../pages/project/project.component';
import {BoardComponent} from '../../pages/project/board/board.component';
import {AddTaskComponent} from '../../pages/project/add-task/add-task.component';
import {PopupComponent} from '../../pages/popup/popup.component';
import {TaskDetailsComponent} from '../../pages/project/task-details/task-details.component';
import {TaskCommentComponent} from '../../pages/project/task-comment/task-comment.component';
import {StatsComponent} from '../../pages/project/stats/stats.component';

import {ChartModule} from 'primeng/chart';
import {ActivityComponent} from '../../pages/project/activity/activity.component';
import {TaskFileComponent} from '../../pages/project/task-file/task-file.component';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import {HelpComponent} from '../../pages/project/help/help.component';
import {HelpDetailComponent} from '../../pages/project/help-detail/help-detail.component';
import {AgoraConfig, NgxAgoraModule} from 'ngx-agora';
import {environment} from '../../../environments/environment';
import {VideoComponent} from '../../pages/project/video/video.component';
import {ImageViewerModule} from 'ng2-image-viewer';
import {SheetModuleModule} from '../../pages/sheet-module/sheet-module.module';
import {StudentSheetComponent} from '../../pages/student-sheet/student-sheet.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AutoCompleteModule, ButtonModule, DialogModule} from 'primeng';
import {AjoutsiteComponent} from '../../pages/site/ajoutsite/ajoutsite.component';
import {DetailsComponent} from '../../pages/maps/details/details.component';
import {AjoutSchoolComponent} from '../../pages/maps/ajout-school/ajout-school.component';
import {OptionsComponent} from '../../pages/options/options.component';
import {NasiteComponent} from '../../pages/site/nasite/nasite.component';
import {NadepartsComponent} from '../../pages/departements/nadeparts/nadeparts.component';
import {AjoutdepartComponent} from '../../pages/departements/ajoutdepart/ajoutdepart.component';
import {SiteComponent} from '../../pages/site/site.component';
import {DepartementsComponent} from '../../pages/departements/departements.component';
import {NaoptionsComponent} from '../../pages/options/naoptions/naoptions.component';
import {AjoutclassComponent} from '../../pages/classes/ajoutclass/ajoutclass.component';
import {ClassesComponent} from '../../pages/classes/classes.component';
import {NaclassesComponent} from '../../pages/classes/naclasses/naclasses.component';
import {AjoutOptionComponent} from '../../pages/options/ajout-option/ajout-option.component';
import {NotifierModule, NotifierOptions, NotifierService} from "angular-notifier";
import {PostdetailsComponent} from '../../pages/postdetails/postdetails.component';
import {PostsComponent} from '../../pages/posts/posts.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {AddstudentpopupComponent} from "../../pages/classes/addstudentpopup/addstudentpopup.component";
import {AllSheetsComponent} from "../../pages/all-sheets/all-sheets.component";
import {DayMarkersService, ToolbarService} from "@syncfusion/ej2-angular-gantt";
import {DetailsSheetComponent} from "../../pages/Defense/details-sheet/details-sheet.component";
import {GestionSoutenancesComponent} from "../../pages/gestion-soutenances/gestion-soutenances.component";
import {AddDefenseComponent} from "../../pages/Defense/add-defense/add-defense.component";
import {EvaluationSheetComponent} from "../../pages/Defense/evaluation-sheet/evaluation-sheet.component";
import {ViewDefenseJuryComponent} from "../../pages/Defense/view-defense-jury/view-defense-jury.component";
import {ViewListDefensesComponent} from "../../pages/Defense/view-list-defenses/view-list-defenses.component";
import {OnlyLoggedInUsersGuard} from "../../pages/guard/OnlyLoggedInUsersGuard";
import {AlwaysAuthGuard} from "../../pages/guard/AlwaysAuthGuard";
import {MatExpansionModule} from "@angular/material/expansion";
import {DatepickerModule} from "ngx-bootstrap";
import {MatTabsModule} from '@angular/material/tabs';
import {
  AgendaService,
  MonthAgendaService,
  MonthService,
  ScheduleModule, TimelineMonthService,
  TimelineViewsService, WeekService, WorkWeekService
} from "@syncfusion/ej2-angular-schedule";
import {GridModule, PageService} from "@syncfusion/ej2-angular-grids";
import {ListViewAllModule} from "@syncfusion/ej2-angular-lists";
import {ButtonAllModule} from "@syncfusion/ej2-angular-buttons";

import {DatePickerAllModule, DateTimePickerAllModule} from "@syncfusion/ej2-angular-calendars";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {SplitterModule} from "@syncfusion/ej2-angular-layouts";
import {ComboBoxModule} from "@syncfusion/ej2-angular-dropdowns";

import {DetailsSheetDiagComponent} from "../../pages/Defense/details-sheet-diag/details-sheet-diag.component";
import {SignaturePadModule} from "@ng-plus/signature-pad";
// import { ToastrModule } from 'ngx-toastr';
const agoraConfig: AgoraConfig = {
  AppID: 'b76638003a5c40b5afb4efcd196249d1',
};
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatDialogModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgAisModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    SheetModuleModule,

    MatButtonModule,
    DragDropModule,
    ReactiveFormsModule,
    ChartModule,
    NgxDocViewerModule,
    NgxAgoraModule.forRoot(agoraConfig),
    ImageViewerModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    DialogModule,
    NotifierModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatTabsModule,
    ScheduleModule,
    GridModule,

    ComboBoxModule,
    DatepickerModule,
    ButtonAllModule,
    ButtonModule,
    ListViewAllModule,
    AutoCompleteModule,
    SplitterModule,
    DateTimePickerAllModule,
    DatePickerAllModule,
    MatExpansionModule,
    SignaturePadModule,
    NgxQRCodeModule,


    MatStepperModule

  ],
  providers: [EntrepriseService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },NotifierService, DayMarkersService,
    WeekService,
    WorkWeekService
    ,
    ToolbarService,
    MonthService,
    PageService,
    AgendaService,

    MonthAgendaService,
    TimelineViewsService, TimelineMonthService, OnlyLoggedInUsersGuard, AlwaysAuthGuard],

  declarations: [
    DashboardComponent,
    DetailsSheetDiagComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    NourcheneComponent,
    OfferComponent,
    SkillsComponent,
    ByidComponent,
    SearchUiComponent,
    ChatComponent,
    ProjectComponent,
    BoardComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    TaskCommentComponent,
    StatsComponent,
    ActivityComponent,
    HelpComponent,
    HelpDetailComponent,
    TaskFileComponent,
    VideoComponent,
    StudentSheetComponent,
    DialogMajorModif,
    DialogMinorModif,
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
    PostdetailsComponent,
    PostsComponent,
    AllSheetsComponent,
    GestionSoutenancesComponent,
    OfferComponent,
    DetailsSheetComponent,
    AddDefenseComponent,
    EvaluationSheetComponent,
    ViewListDefensesComponent,
    ViewDefenseJuryComponent
  ],
  entryComponents: [AddTaskComponent, VideoComponent, TaskDetailsComponent, HelpComponent, TaskFileComponent, DialogMajorModif, DialogMinorModif],

})

export class AdminLayoutModule {
}
