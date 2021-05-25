import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterial } from './app.material.module';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DisplayComponent } from './components/display/display.component';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { BookAppointmentCardComponent } from './components/book-appointment-card/book-appointment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    DisplayComponent,
    HomeComponent,
    SearchCardComponent,
    BookAppointmentComponent,
    BookAppointmentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterial,
    MatIconModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
