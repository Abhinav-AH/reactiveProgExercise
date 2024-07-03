// Create an Observable1 which emits a 
// new car every Interval of 1s. 
// (using the previous function) 

import { interval, map } from "rxjs"
import { Car, getRandomCar } from "./question-1"

export const observable1 = interval(1000). pipe(
    map(() => getRandomCar())
)


const oberver1 = {
    next: (car: Car) => console.log('New Car: ', car),
    error: (err: any) => console.error('Error: ', err),
    complete: () => console.log('Complete')  
}


// observable1.subscribe(oberver1);