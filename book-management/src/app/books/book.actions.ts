/*
sometimes we want to create an action, let's say, for removing a book,
but we have to specify some more information which book to create.
Right? And this is a property kind of a property. So we import something called "props" here.
*/

import { createAction, props} from "@ngrx/store";
import { Book } from "../models/book";

// create some actions for adding a book and for removing a book
export const AddBook = createAction('[Book] Add Book', props<Book>());
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());