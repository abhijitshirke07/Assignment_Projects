import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailsService {
  private apiUrl = 'https://api.example.com/company-details'; // Use your actual API URL here

  constructor(private http: HttpClient) {}

  getCompanyDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
