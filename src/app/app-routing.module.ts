import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SalesComponent } from './components/sales/sales.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutGuard } from './guards/checkout.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'sales', component: SalesComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
