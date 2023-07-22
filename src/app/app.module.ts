import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './services/flights.service';
import { OrderscheduleComponent } from './orderschedule/orderschedule.component';
import { FlightscheduleComponent } from './flightschedule/flightschedule.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderscheduleComponent,
    FlightscheduleComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [FlightService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
