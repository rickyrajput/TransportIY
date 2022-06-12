export class Flight{
    flight_number:number;
    departure_city:string;
    arrival_city:string;
    day:number;
constructor(flightnumber,departCity,arrivalCity,day){
    this.flight_number = flightnumber;
    this.departure_city =departCity;
    this.arrival_city = arrivalCity;
    this.day = day;
}
}


export class FlightData{
    Day:number;
    Flights : Flight[];
    constructor(day,Flights){
        this.Day = day;
        this.Flights = Flights;
    }
}