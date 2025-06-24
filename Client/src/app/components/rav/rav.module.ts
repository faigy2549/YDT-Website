import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RavComponent } from './rav.component';
import { RavRoutingModule } from './rav-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';

@NgModule({
  declarations: [RavComponent],
  imports: [
  CommonModule, 
  RavRoutingModule, 
  SharedPrimeNGModule,
]
})
export class RavModule {}
