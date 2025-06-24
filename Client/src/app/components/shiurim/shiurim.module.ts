import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiurimComponent } from './shiurim.component';
import { ShiurimRoutingModule } from './shiurim-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';
import { AllShiurimComponent } from '../all-shiurim/all-shiurim.component';
import { ShiurimTableModule } from '../shiurim-table/shiurim-table.module';
import { AllShiurimModule } from '../all-shiurim/all-shiurim.module';

@NgModule({
  declarations: [ShiurimComponent],
  imports: [
    CommonModule, 
    ShiurimRoutingModule, 
    SharedPrimeNGModule,
    AllShiurimModule,
    ShiurimTableModule
]
})
export class ShiurimModule {}
