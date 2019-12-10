import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {NotifierModule, NotifierOptions, NotifierService} from 'angular-notifier';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { DetailsSheetDiagComponent } from './pages/Defense/details-sheet-diag/details-sheet-diag.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {DropDownsModule, AutoCompleteModule} from '@progress/kendo-angular-dropdowns';
import { ScheduleModule, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, MonthService, ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import {DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, DatePickerModule, DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { AddDefenseComponent } from './pages/Defense/add-defense/add-defense.component';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { DlDateTimePickerModule, DlDateTimeDateModule } from 'angular-bootstrap-datetimepicker';
import { AgmCoreModule } from '@agm/core';
import { ToolbarService, PageService, GridModule } from '@syncfusion/ej2-angular-grids';
import { ViewDetailsDefenseComponent } from './pages/Defense/view-details-defense/view-details-defense.component';
import { EvaluationSheetComponent } from './pages/Defense/evaluation-sheet/evaluation-sheet.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { ViewListDefensesComponent } from './pages/Defense/view-list-defenses/view-list-defenses.component';
import { ViewDefenseJuryComponent } from './pages/Defense/view-defense-jury/view-defense-jury.component';
import { Ng2ScreenshotModule } from 'ng2-screenshot';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';
import { AlwaysAuthGuard } from './guard/AlwaysAuthGuard';
import { NbThemeModule, NbStepperModule } from '@nebular/theme';


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
    ReactiveFormsModule,
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
    SplitterModule,
    AutoCompleteModule,
    GridModule,
    SignaturePadModule,
    ChartjsModule,
    MatStepperModule
 

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PopupComponent,
    NourcheneComponent,
    DetailsSheetDiagComponent,
    ViewDetailsDefenseComponent,
    

   



  ],
  providers: [NotifierService,DayService,
    WeekService,
     ToolbarService,
     PageService,
    WorkWeekService,
    ToolbarService,
    MonthService,
    AgendaService,
    MonthAgendaService,OnlyLoggedInUsersGuard,AlwaysAuthGuard,
    TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent,ViewDetailsDefenseComponent,NourcheneComponent,DetailsSheetDiagComponent]
})
export class AppModule {
}

