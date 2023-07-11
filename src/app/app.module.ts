import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navBar/navBar.component';
import { CardComponent } from 'src/components/card/card.component';
import { ModalComponent } from 'src/components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
