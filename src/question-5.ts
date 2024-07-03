// Create an Observable4 which makes an 
// api call to a free service every second. 
// Ex. https://random-data-api.com/documentation 
// (Hint: Use ‘switchMap’ operator) 

import axios from "axios";
import { interval, switchMap } from "rxjs";


export function fetchUser() {
    return axios.get('https://random-data-api.com/api/v2/users')
}

export const observable4 = interval(2000).pipe(
    switchMap(() => fetchUser())
);

const observer = {
    next: (response: any) => console.log('API Response: ', response.data),
    error: (err: any) => console.log('Error: ', err),
    complete: () => console.log('Complete'),
}


// observable4.subscribe(observer);