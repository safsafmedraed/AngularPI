import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {PopupComponent} from './pages/popup/popup.component';
import {NotifierOptions} from 'angular-notifier';
import {NourcheneComponent} from './pages/nourchene/nourchene.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ProjectComponent } from './pages/project/project.component';
import { BoardComponent } from './pages/project/board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HelpComponent } from './pages/project/help/help.component';
import { HelpDetailComponent } from './pages/project/help-detail/help-detail.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';
import { VideoComponent } from './pages/project/video/video.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    DragDropModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PopupComponent,



  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ],
  entryComponents: [PopupComponent]
})
export class AppModule {
}
