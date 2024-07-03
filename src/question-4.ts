// Create an Observable3 which emits an object of 
// interface Scrap 
// {
//     brand: string, 
//     yearOfRelease: 
//     number
// }, using the Observable2 (Hint use ‘map’ operator) 

import { map } from "rxjs";
import { observable2 } from "./question-3";
import { Car } from "./question-1";


interface Scrap {
    brand: string;
    yearOfRelease: number;
}

const observable3 = observable2.pipe(
    map((car: Car) => ({
        brand: car.brand,
        yearOfRelease: car.yearOfRelease
    }))
)


const observer3 = {
    next: (scrap: Scrap) => console.log('Scrap:', scrap),
    error: (err: any) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

// observable3.subscribe(observer3);
