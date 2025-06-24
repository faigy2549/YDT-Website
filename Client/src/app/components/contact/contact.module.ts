import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';
import { ContactRoutingModule } from './contact-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedPrimeNGModule,
    InputTextModule,
    MultiSelectModule,
  ]
})
export class ContactModule {}
