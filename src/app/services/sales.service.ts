import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromoCode } from '../models/promo-code';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl: string = 'https://localhost:44379/';
  promoCode: PromoCode;

  constructor(private http: HttpClient) {
    this.promoCode = { 
      Id: 0,
      Code: '',
      Status: ''
    };
  }

  getPromoCode() {
    this.http.get<PromoCode>(this.apiUrl + 'PromoCodes').subscribe(x => this.promoCode = x);
  }
}
