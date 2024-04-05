import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CommonConstants } from '../shared/constants/commonConstants';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  getCurrentWeather(cityname: string) {
    // return of({
    //   'Min_temp (°C)': 32,
    //   'Max_temp (°C)': 32,
    //   'windspeed (m/hr)': 2.45,
    //   sunrise: '06:07:00 A.M.',
    //   sunset: '18:39:53 P.M.',
    // });
    return this.httpClient.get(
      `${CommonConstants.baseURL}/weather/place?placename=${cityname}`
    );
  }

  getWeatherForecast(cityname: string, days: number) {
    // return of([
    //   {
    //     Date: '2024-04-05',
    //     'Max_temp (°C)': 35.7,
    //     'Min_temp (°C)': 24.9,
    //     'Windspeed (m/hr)': 10.5,
    //     Sunrise: '06:13 AM',
    //     Sunset: '06:46 PM',
    //   },
    //   {
    //     Date: '2024-04-06',
    //     'Max_temp (°C)': 36.3,
    //     'Min_temp (°C)': 23.1,
    //     'Windspeed (m/hr)': 15.4,
    //     Sunrise: '06:12 AM',
    //     Sunset: '06:46 PM',
    //   },
    //   {
    //     Date: '2024-04-06',
    //     'Max_temp (°C)': 36.3,
    //     'Min_temp (°C)': 23.1,
    //     'Windspeed (m/hr)': 15.4,
    //     Sunrise: '06:12 AM',
    //     Sunset: '06:46 PM',
    //   },
    // ]);
    return this.httpClient.get(
      `${CommonConstants.baseURL}/forecast?city=${cityname}&days=${days}`
    );
  }
}

// Date: '2024-04-04', Max_temp (°C): 36.9, Min_temp (°C): 26.3, Windspeed (m/hr): 16.3, Sunrise: '06:10 AM', …}
