// service class state new Subject
import {Burger} from "./models/burger.model";
import {BehaviorSubject} from "rxjs";

export class State {

  myCart: { items: { item: Burger, quantity: number, price: number }[], totalPrice: number } = {
    items: [],
    totalPrice: 0
  };

  user: { name: string, email: string, phoneNumber: string, address: string } = {
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  };

  myCart$ = new BehaviorSubject<{
    items: { item: Burger, quantity: number, price: number }[],
    totalPrice: number
  }>(this.myCart);

  addToCart(item: { item: Burger, quantity: number, price: number }) {
    this.myCart.items.push(item);
    this.myCart.totalPrice += item.price * item.quantity;
    this.myCart$.next(this.myCart);
  }
}
