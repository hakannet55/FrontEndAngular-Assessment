// catalog-menu.ts
import {Component, Input} from "@angular/core";
import {Burger} from "../models/burger.model";

@Component({
  selector: 'catalog-menu',
  template: `
    <section class="featured-burgers">
      <h2>Our Featured Burgers</h2>
      <div>
        Filter:
        <select (change)="filterBurgers($event)">
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        Price:
        <select name="price" id="price" (change)="sortBurgers($event)">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div class="burger-grid">
        <div *ngFor="let burger of burgers" (click)="showBurgerDetails(burger)" class="burger-card">
          <img src="../../assets/burger.jpg" alt="Classic Burger">
          <h3>{{burger.name}}</h3>
          <p>{{burger.description}}</p>
          <span class="price">{{burger.price | currency}}</span>
        </div>
      </div>
    </section>

    <!-- Burger Details Popup -->
    <div class="popup-overlay" [style.display]="selectedBurger ? 'flex' : 'none'" (click)="closePopup($event)">
      <div class="popup-content">
        <span class="popup-close" (click)="closePopup($event)">×</span>
        <img [src]="selectedBurger?.image" [alt]="selectedBurger?.name">
        <h2>{{selectedBurger?.name}}</h2>
        <p>{{selectedBurger?.description}}</p>
        <div class="burger-details">
          <p><strong>Price:</strong> {{selectedBurger?.price | currency}}</p>
          <p><strong>Category:</strong> {{selectedBurger?.category}}</p>
          <p><strong>Calories:</strong> {{selectedBurger?.calories}} kcal</p>
          <p><strong>Ingredients:</strong> {{selectedBurger?.ingredients?.join(', ')}}</p>
        </div>
        <button class="cta-button" (click)="addToCart(selectedBurger)">Add to Cart</button>
      </div>
    </div>
  `
})
export class CatalogMenuComponent {
  @Input() burgers: Burger[] = [];
  selectedBurger: any = null;

  constructor() {}

  showBurgerDetails(burger: any) {
    this.selectedBurger = burger;
  }

  closePopup(event: MouseEvent) {
    // Sadece overlay'e tıklanırsa popup'ı kapat
    const target = event.target as HTMLElement;
    if (target.classList.contains('popup-overlay')) {
      this.selectedBurger = null;
    }
  }

  sortBurgers(event: any) {
    const order = event.target.value;
    if (order === 'asc') {
      this.burgers.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.burgers.sort((a, b) => b.price - a.price);
    }
  }

  filterBurgers($event: Event) {
    const filter = ($event.target as HTMLSelectElement).value;
    if (filter === 'all') {
      this.burgers = this.burgers;
    } else {
      this.burgers = this.burgers.filter(burger => burger.category === filter);
    }
  }

  addToCart(burger: any) {
    // TODO: Add burger to cart logic
    console.log('Adding to cart:', burger);
    this.closePopup(new MouseEvent('click'));
  }
}
