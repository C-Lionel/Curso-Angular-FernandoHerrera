//se importa esta libreria para poder inyectar dependencias sin constructor de clase
import { inject } from '@angular/core';
import { Observable, tap, pipe } from 'rxjs';
import {ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment,} from '@angular/router';

import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {

  //se inyectan el AuthService y el Router

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap(isAuthenticated => console.log('Authenticated', isAuthenticated)),
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
      }
    })
  );
};

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing

export const canActivateAuthGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log('CanActivate');
  console.log({ route, state });

  return checkAuthStatus();
};

export const canMatchAuthGuard: CanMatchFn = ( route: Route, segments: UrlSegment[] ) => {
  console.log('CanMatch');
  console.log({ route, segments });

  return checkAuthStatus();
};


