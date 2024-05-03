import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private userProfile: any;

  constructor() {}

  setUserProfile(userProfile: any) {
    this.userProfile = userProfile;
  }

  getUserProfile() {
    return this.userProfile;
  }
}
