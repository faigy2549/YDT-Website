import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { Subscriber } from 'src/app/models/Subscriber.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-join-newsletter',
  templateUrl: './join-newsletter.component.html',
  styleUrls: ['./join-newsletter.component.css']
})
export class JoinNewsletterComponent {
 newSubscriber: Subscriber = { firstName: '', lastName: '', email: '' };
  formSubmitted: boolean = false;
  errorMessage: string | null = null;

  constructor(private newsletterService: NewsletterService, private router: Router) {}
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
