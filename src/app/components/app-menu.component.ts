import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from "../models/common";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu-container">
      <nav>
        <ul>
          <li *ngFor="let item of menuItems" [class.active]="isActive(item.link)">
            <a [routerLink]="item.link">
              {{ item.name }} <html-entity-icon [name]="item.icon"></html-entity-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .menu-container {
      border-radius: 8px;
      width: 95vw;
      margin: auto;
      background: linear-gradient(45deg, #f3f3f3, #f0f0f0);
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav {
      padding: 7px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding: 0;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-evenly;
    }

    li {
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 4px;
      align-content: space-between;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background-color 0.2s ease-in-out;
    }

    li.active {
      background-color: #f0f0f0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    a {
      text-decoration: none;
      color: #333;
      padding: 8px 12px;
      border-radius: 4px;
      display: block;
      width: 120px;
    }

    li.active a {
      color: #1976d2 !important;
      font-weight: 600;
      background: linear-gradient(-185deg, #e0d5d5, #c9adad);
    }

    a:hover {
      background-color: #e0e0e0;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppMenuComponent {
  @Input()
  menuItems: MenuItem[] = [];

  constructor(private router: Router) {
    // Subscribe to route changes to update active state
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // This will trigger change detection when route changes
    });
  }

  isActive(path: string): boolean {
    const currentPath = this.router.url;
    return currentPath === path || currentPath === path + '/';
  }
}
