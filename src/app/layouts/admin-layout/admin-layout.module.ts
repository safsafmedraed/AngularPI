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
import {SheetModuleModule} from "../../pages/sheet-module/sheet-module.module";
import {StudentSheetComponent} from "../../pages/student-sheet/student-sheet.component";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {DialogModule} from "primeng";

// import { ToastrModule } from 'ngx-toastr';
const agoraConfig: AgoraConfig = {
  AppID: 'b76638003a5c40b5afb4efcd196249d1',
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
    DialogModule
  ],
  providers: [EntrepriseService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],

  declarations: [
    DashboardComponent,
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
    DialogMinorModif
  ],
  entryComponents: [AddTaskComponent, VideoComponent, TaskDetailsComponent, HelpComponent, TaskFileComponent, DialogMajorModif, DialogMinorModif]
})

export class AdminLayoutModule {
}
