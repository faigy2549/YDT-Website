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
  validationErrors: string[] = [];

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
      this.validationErrors = [];

      this.contactService.sendContactForm(contactForm).subscribe({
        next: (response) => {
          console.log('Form submission successful:', response);
          this.formSubmitted = true;
          this.isSubmitting = false;
          form.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.isSubmitting = false;

          if (error.status === 400 && error.error?.errors) {
            const errors = error.error.errors;
            this.validationErrors = Object.keys(errors).reduce((acc, key) => {
              return acc.concat(errors[key]);
            }, []);
          } else {
            this.errorMessage =
              'There was a problem submitting the form. Please try again later.';
          }
        },
      });
    }
  }
}
