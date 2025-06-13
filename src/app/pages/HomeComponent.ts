import {Component, OnInit} from "@angular/core";
import {RestService} from "../services/rest.service";
import {BurgerService} from "../services/burger.service";

@Component({
  selector: 'app-home',
  templateUrl: './HomeComponent.html'
})
export class HomeComponent implements  OnInit {
  burgers=[
    {
      name:'Classic Burger',
      description:'Beef patty, lettuce, tomato, cheese, special sauce',
      price:9.99
    },
    {
      name:'Double Cheese',
      description:'Double beef patties, double cheese, bacon, lettuce',
      price:12.99
    },
    {
      name:'Veggie Burger',
      description:'Plant-based patty, avocado, tomato, special sauce',
      price:10.99
    }
  ];

  constructor(private burgerService: BurgerService) {
  }

  ngOnInit() {
    this.burgerService.getMenu().subscribe(data => {
      console.log(data);
      this.burgers = data;
    });
  }
}
