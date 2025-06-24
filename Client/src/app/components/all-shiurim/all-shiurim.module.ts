import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';
import { AllShiurimComponent } from './all-shiurim.component';
import { ShiurimTableModule } from '../shiurim-table/shiurim-table.module';
import { AllShiurimRoutingModule } from './all-shiurim-routing.module';

@NgModule({
  declarations: [AllShiurimComponent],
  imports: [
  CommonModule, 
  SharedPrimeNGModule,
  ShiurimTableModule,
  AllShiurimRoutingModule ,
],
exports:[AllShiurimComponent]
})
export class AllShiurimModule {}
