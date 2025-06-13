import {Component, Input} from "@angular/core";

@Component({
  selector: 'catalog-menu',
  template: `

    <section class="featured-burgers">
      <h2>Our Featured Burgers</h2>
      <div class="burger-grid">
        <div *ngFor="let burger of burgers" class="burger-card">
          <img src="../../assets/burger.jpg" alt="Classic Burger">
          <h3>Classic Burger</h3>
          <p>Beef patty, lettuce, tomato, cheese, special sauce</p>
          <span class="price">$9.99</span>
        </div>
      </div>
    </section>

  `
})
export class CatalogMenuComponent {
  @Input() burgers: any[] = [];

  constructor() {
  }
}
