import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.cookieService.get('promocode') === '') {
      this.router.navigate(['']);
    }

    return true;
  }
  
}
