import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
