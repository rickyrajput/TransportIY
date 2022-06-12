import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Flight } from "src/Flight";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Order } from "src/Order";


@Injectable({providedIn:'root'})
export class FlightService{

constructor(private http:HttpClient){}
Flights  : Flight[] =[];
Orders :Order[] = [];
DestinationOrders :[] =[];
    getFlights():Observable<Flight[]>{
      this.Flights=[];
      return  this.http.get<Flight[]>("assets/coding-assignment-schedule.json")
              .pipe(map((data)=>{
                data.forEach((obj)=>{                
                  this.Flights.push(new Flight(obj.flight_number,obj.departure_city,obj.arrival_city,obj.day))
                })
                return this.Flights;
                }))
        
    }


    getOrders():Observable<Order[]>{
      this.Orders=[];
      return  this.http.get("assets/coding-assigment-orders.json")
      .pipe(map((data:any)=>{
        this.Orders=[];
        Object.keys(data).forEach((key)=>{  this.Orders.push(new Order(key,data[key].destination)) });
        debugger;
        return this.Orders;
        }))
    }
    
}