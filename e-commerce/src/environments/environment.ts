// "ng g environments" for creating environment.ts & environment.development.ts files

// This is for the production.
export const environment = {
    apiUrl: '',
};

/*  
    We could also do that for production later on, add API URL, but change that one right, 
    Change it to the production URL and our code would simply pick the correct environment file 
    which we have specified in our angular Json and then read the correct value 
    without the need of switching the code from our site.

*/
