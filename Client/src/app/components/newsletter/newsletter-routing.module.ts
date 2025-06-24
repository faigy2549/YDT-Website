import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter.component';
import { CampaignContentComponent } from '../campaign-content/campaign-content.component';

const routes: Routes = [
  { path: '', component: NewsletterComponent },
  { path: ':campaignId', component: CampaignContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterRoutingModule {}
