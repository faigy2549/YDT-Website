import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './alumni.component';  // import your existing component

const routes: Routes = [
  { path: '', component: AlumniComponent }  // default route loads the component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule {}
