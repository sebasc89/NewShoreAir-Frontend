import { Transport } from "./transport.model";

export class Flight {
  flightId: string;
  transport?: Transport;
  departureStation?: string;
  arrivalStation?: string;
  price: number;

  constructor() {
    this.flightId = '';
    this.price = 0;
  }
}