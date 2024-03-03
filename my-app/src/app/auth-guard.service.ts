import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  if (service.haveAcess()) {
    return true;
  } else {
    alert('access denied');
    router.navigate(['/auth']);
    return false;
  }
};
