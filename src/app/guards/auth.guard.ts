import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private salesService: SalesService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.salesService.promoCode.Id === 0)
      this.router.navigate(['']);

    return true;
  }
  
}