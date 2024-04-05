import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WeatherComponent, ForecastComponent],
  imports: [CommonModule, WeatherRoutingModule, SharedModule],
})
export class WeatherModule {}
