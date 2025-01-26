import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent implements OnInit {
  htmlContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    const campaignId = this.route.snapshot.paramMap.get('campaignId');
    if (campaignId) {
      this.newsletterService.getCampaignContent(campaignId).subscribe(
        (content) => {
          this.htmlContent = content;
        },
        (error) => {
          console.error('Error fetching campaign content:', error);
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/newsletter']);
  }
}
