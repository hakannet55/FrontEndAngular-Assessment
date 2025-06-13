import { Component, Input } from '@angular/core';

@Component({
  selector: 'html-entity-icon',
  template: `
    <span class="icon" [innerHTML]="getIcon()"></span>
  `,
  styles: [`
    .icon {
      display: inline-block;
      margin-left: 8px;
      font-size: 1.2em;
    }
    :host {
      font-size: 1.2em;
      display: inline-block;
    }
  `]
})
export class HtmlEntityIcon {
  @Input() name: string = '';

  private iconMap: { [key: string]: string } = {
    'home': '&#x1F3E0;',
    'order': '&#x1F6D2;',
    'about': '&#x1F4D5;',
    'contact': '&#x1F4DE;'
  };

  getIcon(): string {
    return this.iconMap[this.name.toLowerCase()] || '';
  }
}
