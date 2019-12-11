import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {ProjectComponent} from '../../pages/project/project.component';
import {BoardComponent} from '../../pages/project/board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AddTaskComponent} from '../../pages/project/add-task/add-task.component';
import {PopupComponent} from '../../pages/popup/popup.component';
import {TaskDetailsComponent} from '../../pages/project/task-details/task-details.component';
import {TaskCommentComponent} from '../../pages/project/task-comment/task-comment.component';
import {StatsComponent} from '../../pages/project/stats/stats.component';

import {ChartModule} from 'primeng/chart';
import {ActivityComponent} from '../../pages/project/activity/activity.component';
import {TaskFileComponent} from '../../pages/project/task-file/task-file.component';
import {NgxDocViewerModule} from "ngx-doc-viewer";
import {MatInputModule} from '@angular/material/input';
import {HelpComponent} from '../../pages/project/help/help.component';
import {HelpDetailComponent} from '../../pages/project/help-detail/help-detail.component';
import {AgoraConfig, NgxAgoraModule} from 'ngx-agora';
import {environment} from '../../../environments/environment';
import {VideoComponent} from '../../pages/project/video/video.component';
import {ImageViewerModule} from "ng2-image-viewer";

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
    MatButtonModule,
    DragDropModule,
    ReactiveFormsModule,
    ChartModule,
    NgxDocViewerModule,
    NgxAgoraModule.forRoot(agoraConfig),
    ImageViewerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    NourcheneComponent,
    OfferComponent,
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
  ],
  entryComponents: [AddTaskComponent, VideoComponent, TaskDetailsComponent, HelpComponent, TaskFileComponent]
})

export class AdminLayoutModule {/*constructor(
  private readonly router: Router,
) {
  router.events
    .subscribe(console.log);
}*/}
