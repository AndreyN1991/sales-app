import { Component } from '@angular/core';
import { SalesService } from './services/sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  code: string = '';

  constructor(private salesService: SalesService) {
    this.salesService.code.subscribe(x => this.code = x);
  }
}
