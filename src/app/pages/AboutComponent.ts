import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h2>About Us</h2>
      <div class="about-content">
        <p>Welcome to Burgers Order! We are passionate about delivering the best burger experience to our customers.</p>
        <div class="about-section">
          <h3>Our Mission</h3>
          <p>To provide delicious, high-quality burgers while maintaining exceptional service and sustainability.</p>
        </div>
        <div class="about-section">
          <h3>Our Story</h3>
          <p>Founded in 2025, Burgers Order has grown from a small local restaurant to a beloved brand known for its amazing burgers.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem;
    }

    .about-content {
      background-color: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
      color: #1976d2;
      margin-bottom: 2rem;
    }

    .about-section {
      margin-bottom: 2rem;
    }

    h3 {
      color: #333;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {}
