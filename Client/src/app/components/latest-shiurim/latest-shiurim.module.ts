import { NgModule } from '@angular/core';
import { LatestShiurimComponent } from './latest-shiurim.component';
import { ShiurimTableModule } from '../shiurim-table/shiurim-table.module';

@NgModule({
  declarations: [LatestShiurimComponent],
  imports: [
    ShiurimTableModule,
],
  exports: [LatestShiurimComponent] 

})
export class LatestShiurimModule {}
