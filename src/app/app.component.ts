import { Component, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SiteHeaderComponent } from "./shared/site-header/site-header.component";
import { SiteFooterComponent } from "./shared/site-footer/site-footer.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HomeComponent, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mock-shop-ui';
}
