import { Component, OnInit  } from '@angular/core';
import { Flight, FlightData } from 'src/Flight';
import { FlightService } from '../services/flights.service';


@Component({
  selector: 'app-flightschedule',
  templateUrl: './flightschedule.component.html',
  styleUrls: ['./flightschedule.component.css']
})
export class FlightscheduleComponent implements OnInit {
  title = 'TransportIY';
  Flights :Flight[] = [];
  Days : number[] = [];
  FlightDayWise : FlightData[] =[];
  constructor(private flightSvc :FlightService){}
ngOnInit(){
  this.getFlights();
}
  getFlights(){
    this.flightSvc.getFlights().subscribe((res)=>{ 
      this.Flights =  res; 
      this.Days = this.Flights.map(x=>x.day).filter(function(element,index,self){ return index === self.indexOf(element);});
      this.Days.forEach((day)=>{
        this.FlightDayWise.push(new FlightData(day,this.Flights.filter(obj=>{ if(obj.day === day){  return obj;}})))
      })
    },(err)=>{console.log(err);})
  }
  
}
