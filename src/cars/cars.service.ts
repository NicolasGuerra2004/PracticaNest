import { Injectable, NotFoundException } from '@nestjs/common';
import { v7 as uuid} from 'uuid';
import { Car } from './interfaces/car.interfance';

@Injectable()
export class CarsService{

    private cars: Car[] = [
        {
            id: uuid(),
            brand:'toyota',
            model:'corolla'

        },
        {
            id: uuid(),
            brand:'messi',
            model:'barcelona'

        },
        {
            id: uuid(),
            brand:'cristiano',
            model:'madrid'

        },
        

    ];

    findAll(){
        return this.cars
    }

    findOneById(id: string){
        const car = this.cars.find( car => car.id === id);

        if (!car) throw new NotFoundException(`Car with id '${ id }' not found`);
        

        return car;
    }
    
}
