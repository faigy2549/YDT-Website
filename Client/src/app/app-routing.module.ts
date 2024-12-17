import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShiurimComponent } from './components/shiurim/shiurim.component';
import { RavComponent } from './components/rav/rav.component';
import { AllShiurimComponent } from './components/all-shiurim/all-shiurim.component';

 const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shiurim',component:ShiurimComponent},
  {path:'all_shiurim',component:AllShiurimComponent},


  {path:'rebbeim',component:RavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

