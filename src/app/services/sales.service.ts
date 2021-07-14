import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { PromoCode } from '../models/promo-code';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl: string = 'https://localhost:44379/';
  promoCode: Observable<PromoCode>;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
    this.promoCode = of({ 
      id: 0,
      code: '',
      status: '',
      url: ''
    });
  }

  getPromoCode() {
    this.http.get<PromoCode>(this.apiUrl + 'PromoCodes').subscribe(x => {
      this.cookieService.set( 'promocode', x.code );
      this.promoCode = of(x);
      this.router.navigate(['\sales']);
    });
  }

  checkPromoCode(code: string) {
    this.http.get<PromoCode>(`${this.apiUrl}PromoCodes/${code}`).subscribe(x => {
      this.cookieService.set( 'promocode', x.code);
      this.promoCode = of(x);
      this.router.navigate(['\sales']);
    });
  }

  checkout() {
    this.promoCode.subscribe(x => this.promoCode = this.http.put<PromoCode>(`${this.apiUrl}PromoCodes/${x.id}`, x))
  }
}
