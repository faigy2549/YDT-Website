import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';
import { DonateRoutingModule } from './donate-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';

@NgModule({
  declarations: [DonateComponent],
  imports: [
  CommonModule, 
  DonateRoutingModule, 
  SharedPrimeNGModule,
]
})
export class DonateModule {}
