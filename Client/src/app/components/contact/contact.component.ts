import { Component } from '@angular/core';
import { ContactFormRequest } from 'src/app/models/ContactFormRequest.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formSubmitted = false;
  isSubmitting = false;
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: any) {
    if (form.valid) {
      const contactForm: ContactFormRequest = {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      };

      this.isSubmitting = true;
      this.errorMessage = '';

      this.contactService.sendContactForm(contactForm).subscribe({
        next: (response) => {
          console.log('Form submission successful:', response);
          this.formSubmitted = true;
          this.isSubmitting = false;
          form.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.errorMessage = 'There was a problem submitting the form. Please try again later.';
          this.isSubmitting = false;
        },
      });
    }
  }
}
