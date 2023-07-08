import { Flight } from "./flight.model";

export interface Journey {
    journeyId: string;
    flights?: Flight[];
    origin?: string;
    destination?: string;
    price: number;
  }