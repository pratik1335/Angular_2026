import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

// A reducer always needs an initial state
export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
)


/*
Finally, the reducer needs to know about the book. Why does the reducer needs to know about the book?
A reducer only takes care of a segment of the app state.
For example: app state may have book, users so then we will have
separate reducers for book as well as for the users
*/

/*
We use reducers that process actions to change the state. But how does that work in the end?
And the way a reducer is changing the state is by copying the current state, 
then making changes and returning a new state, right?
So we take the state, we copy it, make changes, return it.
*/

/*
Why is a reducer called reducer?
Well, that's pretty simple because the reducer takes an action and the current state.
So those two elements and he reduces them to one new state. So action plus current state is equals to a new state.
So he has reduced those two elements into one new state. This is why a reducer is called a reducer.
*/