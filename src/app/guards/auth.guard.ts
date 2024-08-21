import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const userSvc = inject(UserService);
  const router = inject(Router);
  
  if (userSvc.getUserValue()) {
    return true;
  }
  
  router.navigate(['/sign-in']);
  return false;
};