import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuItem} from "./models/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndAngular-Assessment';

  menuItems:MenuItem[] = [];
  showHero= false;
  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
      console.log("event",event);
      if(!!event['url']){
        this.showHero = false;
        if(event['url'] === "/home"){
          this.showHero = true;
        }
      }
    });

    this.menuItems = [
      { name: 'Home', link: '/home', icon: 'home' },
      { name: 'Order', link: '/order', icon: 'order' },
      { name: 'About', link: '/about', icon: 'about' },
      { name: 'Contact', link: '/contact', icon: 'contact' }
    ]
  }
}
