import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('lifecycle-hooks');
  
  ngOnInit(){
    console.log("NgOnInit is called"); 
  }

  constructor(){
    console.log("Constructor Called");
  }
}

// Output:
// Constructor Called
// NgOnInit is called
