import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SalesComponent } from './components/sales/sales.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'sales', component: SalesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
