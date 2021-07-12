import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './components/sales/sales.component';
import { BooksComponent } from './components/books/books.component';
import { BasketComponent } from './components/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SalesComponent,
    BooksComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
