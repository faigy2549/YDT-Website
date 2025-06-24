import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {TableModule} from 'primeng/table'
import { ShiurimTableComponent } from './shiurim-table.component';

@NgModule({
  declarations: [ShiurimTableComponent],
  imports: [
    CommonModule, 
    TableModule,
],
  exports: [ShiurimTableComponent] 
})
export class ShiurimTableModule {}
