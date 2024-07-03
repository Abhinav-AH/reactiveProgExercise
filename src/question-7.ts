// Create an Observable6 which makes 
// an api call to a free service every 50 milliseconds 
// without wait but completes when it receives 5 emits. 
// (Hint: Use ‘mergeMap’ and ‘take’ operator) 

import { interval, mergeMap, switchMap, take } from "rxjs";
import { fetchUser } from "./question-5";


export const observable6 = interval(2000).pipe(
    take(5),
    mergeMap(() => fetchUser())
);

const observer = {
    next: (response: any) => console.log('API Response: ', response.data),
    error: (err: any) => console.log('Error: ', err),
    complete: () => console.log('Complete'),
}


observable6.subscribe(observer);