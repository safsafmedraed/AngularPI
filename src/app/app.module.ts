import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { PopupComponent } from './pages/popup/popup.component';
import {NotifierModule} from 'angular-notifier';
import { PoopupComponent } from './pages/site/poopup/poopup.component';
import { PoppupComponent } from './pages/departements/poppup/poppup.component';
import { OptionpoppupComponent } from './pages/options/optionpoppup/optionpoppup.component';
import { ClasspopupComponent } from './pages/classes/classpopup/classpopup.component';
import { AddstudentpopupComponent } from './pages/classes/addstudentpopup/addstudentpopup.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NotifierModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PopupComponent,
    PoopupComponent,
    PoppupComponent,
    OptionpoppupComponent,
    ClasspopupComponent,
    AddstudentpopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, PoopupComponent, PoppupComponent, OptionpoppupComponent, ClasspopupComponent, AddstudentpopupComponent]
})
export class AppModule { }
