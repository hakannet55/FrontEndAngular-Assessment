// src/models/burger.model.ts
export interface Burger {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  isAvailable: boolean;
  rating: number;
  calories: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Order {
  id: number;
  userId: number;
  burgers: Burger[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  deliveryAddress: string;
  contactNumber: string;
}

export enum OrderStatus {
  PENDING = 'pending',
  PREPARING = 'preparing',
  READY = 'ready',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export interface Discount {
  id: number;
  name: string;
  description: string;
  percentage: number;
  startDate: string;
  endDate: string;
  minOrderAmount: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  orders: Order[];
}
