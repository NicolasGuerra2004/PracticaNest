import { v7 as uuid } from "uuid";
import { Car } from "../../cars/interfaces/car.interfance";

export const CARS_SEED: Car[]= [
    {
        id: uuid(),
        brand: 'toyota',
        model: 'corolla'
    },
    {
        id: uuid(),
        brand: 'honda',
        model: 'civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    },
]