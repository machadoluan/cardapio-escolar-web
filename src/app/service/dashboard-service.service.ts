import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private userSubject: BehaviorSubject<SocialUser | null> = new BehaviorSubject<SocialUser | null>(null);

  constructor() { }

  setUser(user: SocialUser | null): void {
    this.userSubject.next(user);
  }

  getUser(): Observable<SocialUser | null> {
    return this.userSubject.asObservable();
  }
}
