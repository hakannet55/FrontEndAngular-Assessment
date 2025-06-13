import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <div class="order-container">
      <h2>Order Your Burger</h2>
      <div class="order-form">
        <form>
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" required>
          </div>

          <div class="form-group">
            <label for="address">Delivery Address</label>
            <textarea id="address" required></textarea>
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" required>
          </div>

          <div class="form-group">
            <label for="burger">Choose Your Burger</label>
            <select id="burger" required>
              <option value="classic">Classic Burger - $9.99</option>
              <option value="double">Double Cheese - $12.99</option>
              <option value="veggie">Veggie Burger - $10.99</option>
            </select>
          </div>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .order-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
    }

    .order-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input, textarea, select {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 30px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  `]
})
export class OrderComponent {}
