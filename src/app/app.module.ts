import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ResidentsComponent } from 'src/pages/residents/residents.component';
import { HomeModule } from '../pages/home/home.module';
import { ErrorComponent } from '../pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidentsComponent,
    ErrorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomeModule],
})
export class AppModule {}
