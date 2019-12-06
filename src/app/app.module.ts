import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {PopupComponent} from './pages/popup/popup.component';

import {NourcheneComponent} from './pages/nourchene/nourchene.component';
import { OfferComponent } from './pages/offer/offer.component';
import { GestionSoutenancesComponent } from './pages/gestion-soutenances/gestion-soutenances.component';
import {MatDialogModule} from '@angular/material';

import {MatTabsModule} from '@angular/material/tabs';
import {NotifierModule, NotifierOptions, NotifierService} from 'angular-notifier';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { DetailsSheetDiagComponent } from './pages/Defense/details-sheet-diag/details-sheet-diag.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { ScheduleModule, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, MonthService, ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import {DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, DatePickerModule} from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { AddDefenseComponent } from './pages/Defense/add-defense/add-defense.component';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';






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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatTabsModule,
    ScheduleModule,
    Ng2SmartTableModule,
    InputsModule,
    DropDownsModule,
    RecurrenceEditorAllModule,
    DropDownListModule,
    DateTimePickerAllModule,
    DatePickerAllModule,
    ButtonModule,
    NumericTextBoxModule,
    ScheduleAllModule,
    NumericTextBoxAllModule, DatePickerAllModule, TimePickerAllModule,
    DateTimePickerAllModule, CheckBoxAllModule,
    ToolbarAllModule,   DropDownListAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    ListViewAllModule,
    SplitterModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PopupComponent,
    NourcheneComponent,
    DetailsSheetDiagComponent,




  ],
  providers: [NotifierService,DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent,NourcheneComponent,DetailsSheetDiagComponent]
})
export class AppModule {
}

