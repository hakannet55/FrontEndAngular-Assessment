// src/services/burger.service.ts
import {Observable} from "rxjs";
import {Burger, Category, Discount, Order, OrderStatus, User} from "../models/burger.model";
import {BurgerApiRoutes} from "../models/burger-api-routes.enum";
import {RestService} from "./rest.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  constructor(private restService: RestService) {}

  // Burger Menüsü
  getMenu(): Observable<Burger[]> {
    return this.restService.get<Burger[]>(BurgerApiRoutes.MENU);
  }

  getBurgerById(id: number): Observable<Burger> {
    return this.restService.get<Burger>(BurgerApiRoutes.BURGER_BY_ID, { id: id.toString() });
  }

  // Kategoriler
  getCategories(): Observable<Category[]> {
    return this.restService.get<Category[]>(BurgerApiRoutes.CATEGORIES);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.restService.get<Category>(BurgerApiRoutes.CATEGORY_BY_ID, { id: id.toString() });
  }

  // Siparişler
  getOrders(): Observable<Order[]> {
    return this.restService.get<Order[]>(BurgerApiRoutes.ORDERS);
  }

  getOrderById(id: number): Observable<Order> {
    return this.restService.get<Order>(BurgerApiRoutes.ORDER_BY_ID, { id: id.toString() });
  }

  createOrder(order: Order): Observable<Order> {
    return this.restService.post<Order>(BurgerApiRoutes.ORDERS, order);
  }

  updateOrderStatus(orderId: number, status: OrderStatus): Observable<Order> {
    return this.restService.post<Order>(BurgerApiRoutes.ORDER_STATUS,
      { id: orderId.toString(), status: status });
  }

  // İndirimler
  getDiscounts(): Observable<Discount[]> {
    return this.restService.get<Discount[]>(BurgerApiRoutes.DISCOUNTS);
  }

  getDiscountById(id: number): Observable<Discount> {
    return this.restService.get<Discount>(BurgerApiRoutes.DISCOUNT_BY_ID, { id: id.toString() });
  }

  // Kullanıcılar
  login(user: { email: string, password: string }): Observable<any> {
    return this.restService.post(BurgerApiRoutes.LOGIN, user);
  }

  register(user: User): Observable<User> {
    return this.restService.post<User>(BurgerApiRoutes.REGISTER, user);
  }
}
