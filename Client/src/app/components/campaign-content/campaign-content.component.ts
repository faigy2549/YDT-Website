import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsletterService } from '../../services/newsletter.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent implements OnInit {
  htmlContent: SafeHtml = ''; // Use SafeHtml for sanitized content

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsletterService: NewsletterService,
  ) {}

  ngOnInit(): void {
    const campaignId = this.route.snapshot.paramMap.get('campaignId');
    if (campaignId) {
      this.newsletterService.getCampaignContent(campaignId).subscribe(
        (content) => {
          const modifiedContent = this.cleanAndApplyStyles(content);
          this.htmlContent = modifiedContent; 
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

  private cleanAndApplyStyles(html: string): string {
    // Parse the HTML string into a DOM structure
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove inline styles
    const elementsWithStyles = doc.querySelectorAll('[style]');
    elementsWithStyles.forEach((el) => el.removeAttribute('style'));

    // Remove <style> tags
    const styleTags = doc.querySelectorAll('style');
    styleTags.forEach((styleTag) => styleTag.remove());

    // Add custom classes or styles
    const body = doc.querySelector('body');
    if (body) {
      body.classList.add('custom-body');
    }

  

    // Example: Add custom classes to specific elements
    doc.querySelectorAll('h1, h2, h3').forEach((heading) => {
      heading.classList.add('custom-heading');
    });

    doc.querySelectorAll('p').forEach((paragraph) => {
      paragraph.classList.add('custom-paragraph');
    });

    // Return the modified HTML as a string
    console.log(doc.documentElement.outerHTML)
    return doc.documentElement.outerHTML;
  }
}
