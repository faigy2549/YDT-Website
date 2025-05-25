import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: any[] = [];
   loading:boolean=true;

  constructor(private newsletterService: NewsletterService, private router: Router) {}
ngOnInit(): void {
  this.newsletterService.getAllCampaigns().subscribe(
    (data) => {
      this.campaigns = data.campaigns;
      this.loading = false;
    },
    (error) => {
      console.error('Error fetching campaigns:', error);
      this.loading = false;
    }
  );
}


  viewCampaignContent(campaignId: string): void {
    this.router.navigate(['/newsletter', campaignId]);
  }

}
