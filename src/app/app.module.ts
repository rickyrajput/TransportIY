import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './services/flights.service';
import { OrderscheduleComponent } from './orderschedule/orderschedule.component';
import { FlightscheduleComponent } from './flightschedule/flightschedule.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderscheduleComponent,
    FlightscheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
