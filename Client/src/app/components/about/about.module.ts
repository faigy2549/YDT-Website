import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
  CommonModule, 
  AboutRoutingModule, 
  SharedPrimeNGModule,
]
})
export class AboutModule {}
