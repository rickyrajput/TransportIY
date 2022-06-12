import { Component, OnInit  } from '@angular/core';
import { Flight, FlightData } from 'src/Flight';
import { FlightService } from './services/flights.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TransportIY';
  Flights :Flight[] = [];
  Days : number[] = [];
  FlightDayWise : FlightData[] =[];
  constructor(private flightSvc :FlightService){}
ngOnInit(){
  this.getFlights();
  this.getFlightOrder();
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

  getFlightOrder(){
    this.flightSvc.getOrders()
      .subscribe((orders)=>{ 
        console.log("before");
        console.log(orders);
        
         let OrderDestinations  = orders.map(x=>x.OrderDestination).filter(function(element,index,self){ return index === self.indexOf(element);});
        OrderDestinations.forEach((orderDestination)=>{
          let FlightsByDest = this.Flights.filter(function(flight,index){ return flight.arrival_city === orderDestination })
          let OrdersByDest = orders.filter(function(order,index){ return order.OrderDestination === orderDestination })
          let orderIndex =0;
          FlightsByDest.forEach((flight)=>{
            orderIndex =0;
            OrdersByDest.forEach((order,index) => {
              orderIndex++;
              let orderObj =  orders.filter(function(Order,index){ return Order.OrderNumber === order.OrderNumber })[0];
              orderObj.FlightNumber = flight.flight_number;
              OrdersByDest.splice(index,1);
              if(orderIndex >=20){
                    return false;
              }
            });
                 
            })
         })
         console.log("after");
         console.log(orders);
       },
      (err)=>{console.log(err);});

  }
}
