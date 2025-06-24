import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { CampaignContentComponent } from '../campaign-content/campaign-content.component';
import { NewsletterRoutingModule } from './newsletter-routing.module';
import { SharedPrimeNGModule } from 'src/app/shared/shared/sharedPrimeNG.module';
import { CampaignListComponent } from '../campaign-list/campaign-list.component';
import { JoinNewsletterModule } from '../join-newsletter/join-newsletter.module';

@NgModule({
  declarations: [
    NewsletterComponent,
    CampaignContentComponent,
    CampaignListComponent,

  ],
  imports: [
    CommonModule,
    NewsletterRoutingModule,
    SharedPrimeNGModule,
    JoinNewsletterModule
  ]
})
export class NewsletterModule {}
