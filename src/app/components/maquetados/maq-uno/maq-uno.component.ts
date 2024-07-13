import { Component } from '@angular/core';
import { CountriesServiceService } from '../../../services/countries-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export interface Country{
  name: {
    common: string;
    official: string;
    nativeName?: { [key: string]: { official: string; common: string } };
  };
}
@Component({
  selector: 'app-maq-uno',
  standalone:true,
  imports: [HttpClientModule, CommonModule],
  providers: [CountriesServiceService],
  templateUrl: './maq-uno.component.html',
  styleUrl: './maq-uno.component.scss'
})
export class MaqUnoComponent {
  countries: Country[] = [];

  constructor(private countryService: CountriesServiceService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
