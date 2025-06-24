import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate.component';  // import your existing component

const routes: Routes = [
  { path: '', component: DonateComponent }  // default route loads the component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateRoutingModule {}
