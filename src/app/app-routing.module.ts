import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightscheduleComponent } from './flightschedule/flightschedule.component';
import { OrderscheduleComponent } from './orderschedule/orderschedule.component';

const routes: Routes = [
  {path:'flight',component:FlightscheduleComponent},
  {path:'order/:flightNumber',component:OrderscheduleComponent},
  {path:'**',component:FlightscheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
