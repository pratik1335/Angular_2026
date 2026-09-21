// Global interface for this application

import { Book } from "./models/book";

// this appstate is immutable, we are never changing it directly. 
// By calling actions, reducers will change this state.
export interface AppState {
    // you think it should get called books because it's an array, but in ngrx it's by
    // convention that you still call it book instead of books.
    readonly book: Book[];
}
