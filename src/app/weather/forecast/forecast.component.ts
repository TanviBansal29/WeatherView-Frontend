import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
  providers: [WeatherService],
})
export class ForecastComponent {
  constructor() {}
  weatherser: WeatherService = inject(WeatherService);
  forecasts: any;
  @Input('cityName') city: string = '';
  ngOnInit() {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    // this.loading = true;
    this.weatherser.getWeatherForecast(this.city, 3).subscribe({
      next: (data: any) => {
        this.forecasts = data;
        console.log(data);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 404) {
        }
      },
    });
  }
}
