import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  imports: [Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
