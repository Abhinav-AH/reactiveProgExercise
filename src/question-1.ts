// Create a function which returns a random object of 
// interface Car 
// {
//     name: string, 
//     model: string, 
//     yearOfRelease:number, 
//     brand: string, 
//     color: string
// } 

const names = ["Speedster", "Roadster", "Cruiser", "Hatchback", "Sedan"];
const models = ["X1", "X2", "X3", "X4", "X5"];
const brands = ["Toyota", "Ford", "BMW", "Audi", "Tesla"];
const colors = ["Red", "Blue", "Green", "Black", "White"];

const randomElement = (array: string[]): string => array[Math.floor(Math.random() * array.length)];
const randomYear = (start: number, end: number): number => Math.floor(Math.random() * (end - start + 1)) + start;


export interface Car 
{
    name: string;
    model: string; 
    yearOfRelease: number; 
    brand: string;
    color: string;
} 

export function getRandomCar(): Car {
    const car: Car = {
        name: randomElement(names),
        model: randomElement(models), 
        yearOfRelease: randomYear(1990, 2010), 
        brand: randomElement(brands),
        color: randomElement(colors),
    }

    return car;
}


// console.log('getting random',getRandomCar())