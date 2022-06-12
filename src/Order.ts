export class Order{
 OrderNumber :string;
 OrderDestination:string;
 FlightNumber:number;
 Arrival :string;
 Day:number;
 constructor(orderNumber:string,OrderDestination:string){
    this.OrderNumber = orderNumber; 
    this.OrderDestination = OrderDestination;
 }
}
