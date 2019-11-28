import { SheetComponent } from 'src/app/pages/Sheet/Sheet.component';
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

import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';


@NgModule({
   imports: [
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      ComponentsModule,
      NgbModule,
      RouterModule,
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      PanelMenuModule,
   ],
   declarations: [
      AppComponent,
      AdminLayoutComponent,
      AuthLayoutComponent,
      PopupComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      PopupComponent
   ]
})
export class AppModule {
}
