import {Component, OnInit} from "@angular/core";
import {RestService} from "../services/rest.service";
import {BurgerService} from "../services/burger.service";
import {Burger} from "../models/burger.model";

@Component({
  selector: 'app-home',
  templateUrl: './HomeComponent.html'
})
export class HomeComponent implements  OnInit {
  burgers:Burger[]=[];

  constructor(private burgerService: BurgerService) {
  }

  ngOnInit() {
    this.burgerService.getMenu().subscribe(data => {
      console.log(data);
      this.burgers = data;
    });
  }
}
