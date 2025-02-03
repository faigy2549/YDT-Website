import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { Subscriber } from 'src/app/models/Subscriber.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: any[] = [];
  newSubscriber: Subscriber = { firstName: '', lastName: '', email: '' };
  formSubmitted: boolean = false;
  errorMessage: string | null = null;

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
    this.errorMessage = null; // Reset error message
  
    this.newsletterService.addSubscriber(this.newSubscriber).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.formSubmitted = true;
      },
      error: (error: HttpErrorResponse) => {
        let errorTitle = 'An error occurred Try Again';
  
        if (error.error) {
          try {
            let errorText = typeof error.error === 'string' ? error.error : JSON.stringify(error.error);
            const jsonMatch = errorText.match(/\{.*\}/);
            if (jsonMatch) {
              const parsedError = JSON.parse(jsonMatch[0]);
              if (parsedError.title) {
                errorTitle = `${errorTitle}: ${parsedError.title}`;
              }
            } else {
              errorTitle = `${errorTitle}: Could not extract JSON error details`;
            }
          } catch (e) {
            console.error('Error parsing error response:', e);
          }
        }
  
        this.errorMessage = errorTitle; 
      }
    });
  }
  
  
  resetForm(): void {
    console.log("in reset");
    setTimeout(() => {
      this.formSubmitted = false;
      console.log("timer over");
    }, 10000); 
  }
}
