import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/Order';
import { FlightService } from '../services/flights.service';
@Component({
  selector: 'app-orderschedule',
  templateUrl: './orderschedule.component.html',
  styleUrls: ['./orderschedule.component.css']
})
export class OrderscheduleComponent implements OnInit {
  title = 'TransportIY';
  Orders: Order[] =[];
  OrdersByDest = [];
  selectedFlightNumber : number;
  constructor(private flightSvc :FlightService, private activatedRoute:ActivatedRoute){}
ngOnInit(){
  this.getFlightOrder();
}

  getFlightOrder(){
    this.flightSvc.getOrders()
      .subscribe((orders)=>{ 
        this.Orders =[];
         let OrderDestinations  = orders.map(x=>x.OrderDestination).filter(function(element,index,self){ return index === self.indexOf(element);});
        OrderDestinations.forEach((orderDestination)=>{
          this.OrdersByDest = [];
          let FlightsByDest = this.flightSvc.Flights.filter(function(flight,index){ return flight.arrival_city === orderDestination })
          this.OrdersByDest = orders.filter(function(order,index){ return order.OrderDestination === orderDestination })
          let orderIndex =0;
          FlightsByDest.forEach((flight)=>{
            orderIndex =0;
            this.OrdersByDest.forEach((order,index) => {
                  orderIndex++;
                  let orderObj =  orders.filter(function(Order,index){ return Order.OrderNumber === order.OrderNumber })[0];
                  orderObj.FlightNumber = flight.flight_number;
                  orderObj.Arrival =flight.departure_city;
                  orderObj.Day =flight.day;
                  this.OrdersByDest.splice(index,1);
                  if(orderIndex >=20){
                        return false;
                  }
              });
            })
         })
         this.activatedRoute.params.subscribe((param)=> {this.selectedFlightNumber =  +param["flightNumber"];});
         
         if(this.selectedFlightNumber  == 0){
          this.Orders = orders 
         }
         else{
         this.Orders = orders.filter(x=>x.FlightNumber == this.selectedFlightNumber);
         }
       },
      (err)=>{console.log(err);});
  }
}

