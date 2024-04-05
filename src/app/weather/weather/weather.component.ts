import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherService],
})
export class WeatherComponent {
  @ViewChild('inputEl') cityname: ElementRef | undefined;
  weatherser: WeatherService = inject(WeatherService);
  weatherData: any;
  searchedCityName: string = '';
  cityName: string = '';
  currentTemperature: string = '';
  windSpeed: string = '';
  sunrise: string = '';
  sunset: string = '';
  isCitySearched: boolean = false;
  message: string = 'Please search for a city';
  loading: any = false;

  constructor() {}

  ngOnInit() {}

  getCurrentWeather() {
    this.loading = true;
    this.weatherser.getCurrentWeather(this.searchedCityName).subscribe({
      next: (data: any) => {
        this.cityName = this.searchedCityName;
        this.currentTemperature = data['Max_temp (°C)'];
        this.windSpeed = data['windspeed (m/hr)'];
        this.sunset = data.sunset;
        this.sunrise = data.sunrise;
        this.isCitySearched = true;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
          this.message = 'Please enter a valid city name.';
          this.isCitySearched = false;
          this.loading = false;
        }
      },
    });
  }
}
