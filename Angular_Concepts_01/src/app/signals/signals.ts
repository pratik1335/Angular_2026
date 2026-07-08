import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  count = signal(0);

  onClick(){
    // this.count.set(10);

    this.count.update(val => val +5);
  }



}
