import { Service } from '@angular/core';
import { of } from 'rxjs';

@Service()
export class UserService {

    users = [
        {
            id : 1, 
            name : "Pratik"
        },
        {
            id : 2, 
            name : "Shivam"
        },
        {
            id : 3, 
            name : "Kartik"
        }
    ]

    getUsers(){
        return of(this.users)   // of is used to make values as observables
    }
}
