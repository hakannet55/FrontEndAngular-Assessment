import { Component, Input } from '@angular/core';

@Component({
  selector: 'html-entity-icon',
  template: `
    <span class="icon" [style.color]="color" [style.font-size]="size">
      <span [innerHTML]="getIcon()"></span>
    </span>
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

  @Input() color = 'black';

  @Input() size='1.2em';

  @Input() custom = '';

  private iconMap: { [key: string]: string } = {
    'home': '&#x1F3E0;',
    'order': '&#x1F6D2;',
    'about': '&#x1F4D5;',
    'contact': '&#x1F4DE;'
  };

  getIcon(): string {
    if (this.custom) {
      return this.custom;
    }
    return this.iconMap[this.name.toLowerCase()] || '';
  }
}
