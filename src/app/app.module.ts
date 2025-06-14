import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppMenuComponent} from "./components/app-menu.component";
import {HomeComponent} from "./pages/HomeComponent";
import {AboutComponent} from "./pages/AboutComponent";
import {ContactComponent} from "./pages/ContactComponent";
import {FormsModule} from "@angular/forms";
import {OrderComponent} from "./pages/OrderComponent";
import {HtmlentityiconComponent} from "./components/htmlentityicon.component";
import {CatalogMenuComponent} from "./components/catalog-menu.component";
import {HttpClientModule} from "@angular/common/http";
import {PopupBurgerComponent} from "./components/popup/popup-burger.component";
import {MyCartComponent} from "./components/my-cart.component";
import {State} from "./state";

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    HtmlentityiconComponent,
    CatalogMenuComponent,
    PopupBurgerComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [State],
  bootstrap: [AppComponent]
})
export class AppModule {
}
