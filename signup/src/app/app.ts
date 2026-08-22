import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from './pages/signup/signup';

@Component({
  imports: [RouterOutlet, Signup],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signup');
}
