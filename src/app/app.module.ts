

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {PopupComponent} from './pages/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { DialogMinorModif } from './pages/user-profile/user-profile.component';





@NgModule({
   imports: [
   BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
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
      PopupComponent,
      
   ]
})
export class AppModule {
}
