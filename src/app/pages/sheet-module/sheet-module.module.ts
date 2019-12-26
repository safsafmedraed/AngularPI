import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { MatDialogModule, MatButtonModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { SheetChildComponent } from './sheet/sheet-child/sheet-child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { SheetRouterRoutes } from './sheetRouter.routing';
import { SheetModificationComponent, DialogOverviewExampleDialog } from './sheet/sheet-modification/sheet-modification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SheetComponent, SheetChildComponent, SheetModificationComponent , DialogOverviewExampleDialog ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ButtonModule,
    PanelMenuModule,
    TabMenuModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    SheetRouterRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents : [
    DialogOverviewExampleDialog
  ]
})
export class SheetModuleModule { }
