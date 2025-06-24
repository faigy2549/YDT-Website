import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { ApplyRoutingModule } from './apply-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';

@NgModule({
  declarations: [ApplyComponent],
  imports: [
  CommonModule, 
  ApplyRoutingModule, 
  SharedPrimeNGModule,
]
})
export class ApplyModule {}
