import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LatestShiurimModule } from '../latest-shiurim/latest-shiurim.module';
import { JoinNewsletterModule } from '../join-newsletter/join-newsletter.module';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LatestShiurimModule,
    JoinNewsletterModule,
    SliderModule,
    FormsModule,
    CardModule,
    FieldsetModule,
    ImageModule,
    SliderModule,
    ButtonModule,
    HomeRoutingModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule {}
