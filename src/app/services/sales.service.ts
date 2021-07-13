import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PromoCode } from '../models/promo-code';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl: string = 'https://localhost:44379/';
  promoCode: Observable<PromoCode>;

  constructor(private http: HttpClient, private router: Router) {
    this.promoCode = of({ 
      id: 0,
      code: '',
      status: ''
    });
  }

  getPromoCode() {
    this.http.get<PromoCode>(this.apiUrl + 'PromoCodes').subscribe(x => {
      this.promoCode = of(x);
      this.router.navigate(['\sales']);
    });
  }

  checkPromoCode(code: string) {
    this.http.get<PromoCode>(`${this.apiUrl}PromoCodes/${code}`).subscribe(x => {
      this.promoCode = of(x);
      this.router.navigate(['\sales']);
    });
  }
}
