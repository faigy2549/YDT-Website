import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { Subscriber } from 'src/app/models/Subscriber.model';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: any[] = [];
  newSubscriber: Subscriber = { firstName: '', lastName: '', email: '' };
  formSubmitted: boolean = false;

  constructor(private newsletterService: NewsletterService, private router: Router) {}

  ngOnInit(): void {
    this.newsletterService.getAllCampaigns().subscribe(
      (data) => {
        this.campaigns = data.campaigns; // Adjust based on API response structure
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }

  viewCampaignContent(campaignId: string): void {
    this.router.navigate(['/newsletter', campaignId]);
  }

  addSubscriber(): void {
    if (this.newSubscriber.firstName && this.newSubscriber.lastName && this.newSubscriber.email) {
      this.newsletterService.addSubscriber(this.newSubscriber).subscribe(
        () => {
          this.formSubmitted = true;
          this.newSubscriber = { firstName: '', lastName: '', email: '' };
        },
        (error) => {
          console.error('Error adding subscriber:', error);
        }
      );
    }
  }
}
