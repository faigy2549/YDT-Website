import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { Subscriber } from 'src/app/models/Subscriber.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MultiSelect } from 'primeng/multiselect';

@Component({
  selector: 'app-join-newsletter',
  templateUrl: './join-newsletter.component.html',
  styleUrls: ['./join-newsletter.component.css']
})
export class JoinNewsletterComponent {
 newSubscriber: Subscriber = { firstName: '', lastName: '', email: '' ,Tags:[]};
  formSubmitted: boolean = false;
  errorMessage: string | null = null;
  selectedTags: string[] = [];
  allowedTags = [
    { label: 'Talmid', value: 'Talmid' },
    { label: 'Parent', value: 'Parent' },
    { label: 'Alumni', value: 'Alumni' },
    { label: 'Other', value: 'Other' } 
  ];
  handleTagSelection() {
    if (this.selectedTags.includes('Other')) {
      this.selectedTags = ['Other']; 
    }
  }

  constructor(private newsletterService: NewsletterService, private router: Router) {}
  // addSubscriber(): void {
  //   this.errorMessage = null; // Reset error message
  //   const finalTags = this.selectedTags.includes('Other') ? [] : this.selectedTags;
  //   console.log(finalTags,this.selectedTags);
    
  //   this.newSubscriber.tag = finalTags; 
  //   this.newsletterService.addSubscriber(this.newSubscriber).subscribe({
  //     next: (response) => {
  //       console.log('Success:', response);
  //       this.formSubmitted = true;
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       let errorTitle = 'An error occurred Try Again';
  
  //       if (error.error) {
  //         try {
  //           let errorText = typeof error.error === 'string' ? error.error : JSON.stringify(error.error);
  //           const jsonMatch = errorText.match(/\{.*\}/);
  //           if (jsonMatch) {
  //             const parsedError = JSON.parse(jsonMatch[0]);
  //             if (parsedError.title) {
  //               errorTitle = `${errorTitle}: ${parsedError.title}`;
  //             }
  //           } else {
  //             errorTitle = `${errorTitle}: Could not extract JSON error details`;
  //           }
  //         } catch (e) {
  //           console.error('Error parsing error response:', e);
  //         }
  //       }
  
  //       this.errorMessage = errorTitle; 
  //     }
  //   });
  // }

  addSubscriber(): void {
    this.errorMessage = null; // Reset error message
    const finalTags = this.selectedTags.includes('Other') ? [] : [...this.selectedTags]; // Copy selectedTags array
    console.log('Final Tags:', finalTags); // Debugging log
    
    this.newSubscriber.Tags = finalTags; // Assign correct tags
    console.log('New Subscriber:', this.newSubscriber); // Debugging log
  
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
