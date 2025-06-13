// src/services/user.service.ts
import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Observable} from "rxjs";
import {BurgerApiRoutes} from "../models/burger-api-routes.enum";
import {User} from "../models/burger.model";
import Order = jasmine.Order;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private restService: RestService) {}

  getUserProfile(): Observable<User> {
    return this.restService.get<User>(BurgerApiRoutes.USERS);
  }

  updateUserProfile(user: User): Observable<User> {
    return this.restService.post<User>(BurgerApiRoutes.USERS, user);
  }

  getUserOrders(): Observable<Order[]> {
    return this.restService.get<Order[]>(BurgerApiRoutes.ORDERS);
  }
}
