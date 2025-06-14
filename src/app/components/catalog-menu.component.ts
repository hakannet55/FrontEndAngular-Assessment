// catalog-menu.component.ts
import {Component, Input} from "@angular/core";
import {Burger} from "../models/burger.model";
import {State} from "../state";

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
          <h3>{{ burger.name }}</h3>
          <p>{{ burger.description }}</p>
          <span class="price">{{ burger.price | currency }}</span>
        </div>
      </div>
    </section>

    <popup-burger *ngIf="showPopup"
                  [selectedBurger]="selectedBurger"
                  (onClosePopup)="showPopup = false"
                  (onConfirm)="navigateToOrder(selectedBurger)">
    </popup-burger>

  `
})
export class CatalogMenuComponent {
  @Input() burgers: Burger[] = [];
  selectedBurger: any = null;

  showPopup = false;

  constructor(private state: State) {
  }

  showBurgerDetails(burger: any) {
    this.selectedBurger = burger;
    this.showPopup = true;
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

  navigateToOrder(selectedBurger: Burger) {
    this.state.addToCart({item: selectedBurger, quantity: 1, price: selectedBurger.price});
    this.showPopup = false;
    // Navigate to the 'order' route with the order data as a query parameter
    this.selectedBurger = null;
    this.burgers = this.burgers.filter(burger => burger !== selectedBurger);
    this.burgers = this.burgers.filter(burger => burger.id !== selectedBurger.id);
  }

}
