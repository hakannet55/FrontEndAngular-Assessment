import {Component, Input} from "@angular/core";

@Component({
  selector: 'catalog-menu',
  template: `

    <section class="featured-burgers">
      <h2>Our Featured Burgers</h2>
      <div>
        Filter:
        <select>
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        Price:
        <select name="price" id="price" (change)="sortBurgers($event)" >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div class="burger-grid">
        <div *ngFor="let burger of burgers" class="burger-card">
          <img src="../../assets/burger.jpg" alt="Classic Burger">
            <h3>{{burger.name}}</h3>
            <p>{{burger.description}}</p>
            <span class="price">{{burger.price}}</span>
          </div>
      </div>
    </section>

  `,
  styles: [`
    .featured-burgers {
      margin: 20px;
    }
    .burger-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 10px;
    }
    .burger-card {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    .burger-card img {
      max-width: 100%;
      height: auto;
    }
    .price {
      font-weight: bold;
    }
  `]
})
export class CatalogMenuComponent {
  @Input() burgers: any[] = [];

  constructor() {
  }

  sortBurgers(event: any) {
    const order = event.target.value;
    if (order === 'asc') {
      this.burgers.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      this.burgers.sort((a, b) => b.price - a.price);
    }
  }
}
