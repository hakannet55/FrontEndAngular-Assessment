// src/enums/burger-api-routes.enum.ts
export enum BurgerApiRoutes {
  // Burger Menüsü
  MENU = '/api/menu',
  BURGER_BY_ID = '/api/menu/:id',

  // Siparişler
  ORDERS = '/api/orders',
  ORDER_BY_ID = '/api/orders/:id',
  ORDER_STATUS = '/api/orders/:id/status',

  // Kategoriler
  CATEGORIES = '/api/categories',
  CATEGORY_BY_ID = '/api/categories/:id',

  // İndirimler
  DISCOUNTS = '/api/discounts',
  DISCOUNT_BY_ID = '/api/discounts/:id',

  // Kullanıcılar
  USERS = '/api/users',
  USER_BY_ID = '/api/users/:id',
  LOGIN = '/api/auth/login',
  REGISTER = '/api/auth/register'
}
