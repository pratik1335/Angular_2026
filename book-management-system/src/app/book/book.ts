import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewBook } from '../models/book.model';

@Component({
  imports: [FormsModule],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book implements OnInit {
  bookTitle : string = "";
  bookAuthor : string = "";

  books : NewBook[] = [];

  ngOnInit(): void {
    let setBooks = localStorage.getItem('books');

    this.books = setBooks ? JSON.parse(setBooks) : [];
  }

  addNewBook(){
    if(this.bookTitle.trim().length && this.bookAuthor.trim().length){
      let newBook : NewBook = {
        id : Date.now(),
        title : this.bookTitle,
        author : this.bookAuthor,
      }

      this.books.push(newBook);

      localStorage.setItem('books', JSON.stringify(this.books));

      this.bookAuthor = "";
      this.bookTitle = "";
    }
  }

  deleteBook(index : number){
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books))
  }
}
