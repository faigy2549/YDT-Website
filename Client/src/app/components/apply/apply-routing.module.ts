import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply.component';  // import your existing component

const routes: Routes = [
  { path: '', component: ApplyComponent }  // default route loads the component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyRoutingModule {}
