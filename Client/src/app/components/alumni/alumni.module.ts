import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniComponent } from './alumni.component';
import { AlumniRoutingModule } from './alumni-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';
import { UpdatesComponent } from '../updates/updates.component';
import { MediaComponent } from '../media/media.component';
import { JoinNewsletterModule } from '../join-newsletter/join-newsletter.module';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [AlumniComponent,UpdatesComponent,MediaComponent,],
  imports: [
  CommonModule, 
  AlumniRoutingModule, 
  SharedPrimeNGModule,
  JoinNewsletterModule,
  InputTextModule,
  MultiSelectModule,
]
})
export class AlumniModule {}
