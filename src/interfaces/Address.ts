import { Coordinates } from "./Coordinates";
export interface Address {
    address:     string;
    city?:       string;
    coordinates: Coordinates;
    postalCode:  string;
    state:       string;
}