import { Injectable, NotFoundException } from '@nestjs/common';
import { v7 as uuid} from 'uuid';
import { Car } from './interfaces/car.interfance';
import { CreateCarDto , UpdateCarDto } from './dto';


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

    create( createCarDto: CreateCarDto ){

        const newCar: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        this.cars.push(newCar);
       return newCar;
    }

    update(id: string , updateCardDto: UpdateCarDto){

        let carDB = this.findOneById(id);
        
        this.cars = this.cars.map( car => {
            if (car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCardDto,
                    id
                }
                return carDB;
            }
            return car;
        } );


        return carDB;
    }

    delete( id :string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter( car => car.id === id);
        
    }

    
}
