import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home/admin/users',
    component: UsersListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/user',
    loadChildren: () =>
      import('./weather/weather.module').then((module) => module.WeatherModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
