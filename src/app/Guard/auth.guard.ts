import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verificar se o token está presente no Local Storage
    const token = localStorage.getItem('user');

    if (token) {
      // Se o token estiver presente, permita o acesso à rota
      return true;
    } else {
      // Se o token não estiver presente, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
