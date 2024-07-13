import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../components/maquetados/maq-uno/maq-uno.component';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<Country[]>(this.apiUrl);
  }
}
