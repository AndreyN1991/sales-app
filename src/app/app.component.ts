import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BooksService } from './services/books.service';
import { SalesService } from './services/sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public salesService: SalesService, public cookieService: CookieService, public booksService: BooksService) {
    let promocode = cookieService.get('promocode');
    if (promocode) {
      salesService.checkPromoCode(promocode);
    }
  }

  deleteCookie() {
    this.cookieService.delete('promocode');
    window.location.reload();
  }
}
