import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SalesService } from '../services/sales.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private salesService: SalesService, private router: Router) {
  }

  canActivate(): boolean {
    this.salesService.promoCode.subscribe(x => {
      if (x.id === 0)
        this.router.navigate(['']);
      else if (x.status === 'Заказ' || x.status === 'Одобрен')
        this.router.navigate(['/checkout']);
    })

    return true;
  }
  
}
