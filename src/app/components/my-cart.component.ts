import {Component, OnInit} from "@angular/core";
import {State} from "../state";

@Component({
  selector: 'app-my-cart',
  template: `
    <div class="my-cart">
      <a href="">
        <html-entity-icon custom="🛒"></html-entity-icon>
        <span>My Cart</span>
        <span class="cart-count">{{ count }}</span>
      </a>
    </div>
  `,
  styles: [`
    .my-cart {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .cart-count {
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 4px 8px;
      margin-left: 4px;
    }

    a {
      text-decoration: none;
      color: white;
    }
  `]
})
export class MyCartComponent implements OnInit {
  count = 0;

  constructor(private state: State) {
  }

  ngOnInit(): void {
    this.state.myCart$.subscribe(data => {
      this.count = data.items.length;
    });
  }


}
