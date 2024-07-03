// Create an Observable2 which emits 
// a car with color = ‘black’ and 
// yearOfRelease < 2000 
// (Using the Observable1, Hint: use ‘filter’ operator) 

import { filter } from "rxjs"
import { Car } from "./question-1"
import { observable1 } from "./question-2"

export const observable2 = observable1.pipe(
    filter((car: Car) => car.color === 'Black' && car.yearOfRelease < 2000)
);

const observer2 = {
    next: (car: Car) => console.log('Filtered Car:', car),
    error: (err: any) => console.error('Error:', err),
    complete: () => console.log('Complete')
};


// observable2.subscribe(observer2);