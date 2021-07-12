import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { PromoCode } from '../models/promo-code';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl: string = 'https://localhost:44379/';
  promoCode: PromoCode;
  code: Observable<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.promoCode = { 
      Id: 0,
      Code: ' ',
      Status: ''
    };

    this.code = from(this.promoCode.Code);
  }

  getPromoCode() {
    this.http.get<PromoCode>(this.apiUrl + 'PromoCodes').subscribe(x => {
      this.promoCode = x;
      this.router.navigate(['\sales']);
    });
  }

  checkPromoCode(code: string) {
    this.http.get<PromoCode>(`${this.apiUrl}PromoCodes/${code}`).subscribe(x => {
      this.promoCode = x;
      this.router.navigate(['\sales']);
    });
  }
}
