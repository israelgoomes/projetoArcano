import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardPersonService {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem('personagem')) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
