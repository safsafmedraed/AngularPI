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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {NourcheneComponent} from '../../pages/nourchene/nourchene.component';
import {OfferComponent} from '../../pages/offer/offer.component';
import {GestionSoutenancesComponent} from '../../pages/gestion-soutenances/gestion-soutenances.component';

import {MatTabsModule} from '@angular/material/tabs';

import {NotifierModule, NotifierOptions, NotifierService} from 'angular-notifier';
import { ScheduleModule, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, MonthService } from '@syncfusion/ej2-angular-schedule';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DetailsSheetComponent} from '../../pages/Defense/details-sheet/details-sheet.component';
import {ComboBoxModule} from '@progress/kendo-angular-dropdowns';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {ButtonAllModule, ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {AddDefenseComponent} from '../../pages/Defense/add-defense/add-defense.component';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import {SplitterModule} from '@syncfusion/ej2-angular-layouts';



// import { ToastrModule } from 'ngx-toastr';
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
    MatButtonModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatTabsModule,
    ScheduleModule,
    Ng2SmartTableModule,
    ComboBoxModule,
    DatePickerModule,
    ButtonAllModule,
    ButtonModule,
    ListViewAllModule,
    SplitterModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    GestionSoutenancesComponent,
    OfferComponent,
    DetailsSheetComponent,
    AddDefenseComponent

  ],
  providers: [NotifierService,DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService, TimelineMonthService]
})

export class AdminLayoutModule {/*constructor(
  private readonly router: Router,
) {
  router.events
    .subscribe(console.log);
}*/}
