import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShiurimComponent } from './all-shiurim.component';

const routes: Routes = [
  { path: '', component: AllShiurimComponent }  // default route loads the component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllShiurimRoutingModule {}
