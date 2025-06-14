import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Burger} from "../../models/burger.model";

@Component({
  selector: 'popup-burger',
  template: `
    <!-- Burger Details Popup -->
    <div class="popup-overlay" (click)="closePopupFunc($event)">
      <div class="popup-content">
        <span class="popup-close" (click)="closeFunc()">×</span>
        <img [src]="selectedBurger?.image" [alt]="selectedBurger?.name">
        <h2>{{ selectedBurger?.name }}</h2>
        <p>{{ selectedBurger?.description }}</p>
        <div class="burger-details">
          <p><strong>Price:</strong> {{ selectedBurger?.price | currency }}</p>
          <p><strong>Category:</strong> {{ selectedBurger?.category }}</p>
          <p><strong>Calories:</strong> {{ selectedBurger?.calories }} kcal</p>
          <p><strong>Ingredients:</strong> {{ selectedBurger?.ingredients?.join(', ') }}</p>
        </div>
        <div>
          <label for="quantity">Quantity:</label>
          <select id="quantity" name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button class="cta-button" (click)="confirmFunc()">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  `,
})
export class PopupBurgerComponent {
  @Output()
  onClosePopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  selectedBurger: Burger | null = null;

  @Input()
  buttonText: string = 'Add to Cart';

  closePopupFunc(event: MouseEvent) {
    event.stopPropagation();
    const popupOverlay = document.querySelector('.popup-overlay');
    if (!popupOverlay) {
      this.closeFunc();
    }

  }

  confirmFunc() {
    this.onConfirm.emit(true);
  }

  closeFunc() {
    this.onClosePopup.emit(true);
  }
}
