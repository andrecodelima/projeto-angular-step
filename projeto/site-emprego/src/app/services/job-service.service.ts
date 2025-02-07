import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  logo:string;
  company: string;
  role: string;
  level: string;
  languages: string[]; // Pode ser um array de strings
  tools: string[]; // Pode ser um array de strings
}

@Injectable({
  providedIn: 'root'
})

export class JobServiceService {

  private apiUrl = '/data.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
}
