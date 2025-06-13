import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsletterService } from '../../services/newsletter.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent implements OnInit {
  htmlContent: SafeHtml = ''; 
  campaignId:string|null="0";
  newsletterUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.campaignId=this.route.snapshot.paramMap.get('campaignId');
    if (this.campaignId) {
      this.newsletterUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
       `https://IonosDemohost:7117/api/newsletter/campaigns/${this.campaignId}/html-content`
        //`http://ydtwebsite-001-site1.mtempurl.com/api/newsletter/campaigns/${this.campaignId}/html-content`
      );      
    }
  }

  goBack(): void {
    this.router.navigate(['/newsletter']);
  }
}
