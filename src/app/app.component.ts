import { Component, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SiteHeaderComponent } from "./components/shared/site-header/site-header.component";
import { SiteFooterComponent } from "./components/shared/site-footer/site-footer.component";
import { CartComponent } from "./components/cart/cart.component";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HomeComponent, SiteHeaderComponent, SiteFooterComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mock-shop-ui';
}
