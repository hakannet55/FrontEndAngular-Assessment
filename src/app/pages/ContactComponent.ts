import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <h2>Contact Us</h2>

      <div class="contact-info">
        <div class="contact-section">
          <h3>Get in Touch</h3>
          <p><i class="material-icons">location_on</i> 123 Burger Street, Food City</p>
          <p><i class="material-icons">phone</i> +1 234 567 8900</p>
          <p><i class="material-icons">email</i> info@burgersorder.com</p>
        </div>

        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <div class="form-group">
              <input type="text"
                     name="name"
                     [(ngModel)]="contact.name"
                     placeholder="Your Name"
                     required>
            </div>

            <div class="form-group">
              <input type="email"
                     name="email"
                     [(ngModel)]="contact.email"
                     placeholder="Your Email"
                     required>
            </div>

            <div class="form-group">
              <textarea name="message"
                        [(ngModel)]="contact.message"
                        placeholder="Your Message"
                        required></textarea>
            </div>

            <button type="submit" [disabled]="!contactForm.form.valid">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem;
    }

    h2 {
      color: #1976d2;
      margin-bottom: 2rem;
    }

    .contact-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .contact-section {
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .material-icons {
      vertical-align: middle;
      margin-right: 8px;
    }

    .contact-form {
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 1rem;
    }

    input, textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    textarea {
      height: 120px;
      resize: vertical;
    }

    button {
      background-color: #1976d2;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover:not(:disabled) {
      background-color: #1565c0;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-info {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      // TODO: Implement form submission logic
      console.log('Form submitted:', this.contact);
      // Reset form
      form.reset();
    }
  }
}
