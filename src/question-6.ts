// Create an Observable5 which makes 
// an api call to a free service every 100 milliseconds 
// until but waits until the previous request is completed. 
// (Hint: Use ‘concatMap’ operator) 

import { concatMap, interval, switchMap } from "rxjs";
import { fetchUser } from "./question-5";

export const observable5 = interval(2000).pipe(
    concatMap(() => fetchUser())
);

const observer = {
    next: (response: any) => console.log('API Response: ', response.data),
    error: (err: any) => console.log('Error: ', err),
    complete: () => console.log('Complete'),
}


// observable5.subscribe(observer);