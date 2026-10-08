import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  private apiService = inject(ApiService);

  message = signal('');
  rating = signal('');

  constructor(){
    this.apiService.getHealth().subscribe(response => {
      console.log(response);
      this.message.set(response.message)
      this.rating.set(response.rating)
    })
  }
}
