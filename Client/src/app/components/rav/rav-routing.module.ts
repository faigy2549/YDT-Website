import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RavComponent } from './rav.component';  // import your existing component

const routes: Routes = [
  { path: '', component: RavComponent }  // default route loads the component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RavRoutingModule {}
