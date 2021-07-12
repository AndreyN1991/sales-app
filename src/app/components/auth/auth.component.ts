import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  promoCode: string = '';

  constructor(public salesService: SalesService) { }

  ngOnInit(): void {
  }
}
