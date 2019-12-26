import { Routes, RouterModule } from '@angular/router';
import { SheetComponent } from './sheet/sheet.component';
import { SheetChildComponent } from './sheet/sheet-child/sheet-child.component';
import { SheetModificationComponent, DialogOverviewExampleDialog } from './sheet/sheet-modification/sheet-modification.component';

const routes: Routes = [
  { 
path:  'sheet',
component:  SheetComponent,
children: [
{
path:  'all',
component:  SheetChildComponent
},
{
path:  'requests',
component:  SheetModificationComponent
},
]
}
];


export const SheetRouterRoutes = RouterModule.forChild(routes);
