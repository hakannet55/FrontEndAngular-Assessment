import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMenuComponent} from "./components/app-menu.component";
import {HomeComponent} from "./pages/HomeComponent";
import {AboutComponent} from "./pages/AboutComponent";
import {ContactComponent} from "./pages/ContactComponent";
import {FormsModule} from "@angular/forms";
import {OrderComponent} from "./pages/OrderComponent";
import {HtmlEntityIcon} from "./components/htmlentityicon";
import {CatalogMenuComponent} from "./components/catalog-menu";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    HtmlEntityIcon,
    CatalogMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
