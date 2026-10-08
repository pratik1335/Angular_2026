import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HealthResponse{
  message : string;
  rating : string;
}

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private http = inject(HttpClient);

    getHealth() : Observable<HealthResponse>{
        return this.http.get<HealthResponse>('http://localhost:3000/api/health');
    }
}
