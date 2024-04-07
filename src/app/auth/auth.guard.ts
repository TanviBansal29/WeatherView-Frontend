import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const jwt: any = sessionStorage.getItem('jwt');
  const decodedToken: any = jwtDecode(jwt);

  if (route.url[1].path === decodedToken.role) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
