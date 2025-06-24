import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiurimComponent } from './shiurim.component';

const routes: Routes = [{ path: '', component: ShiurimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiurimRoutingModule {}