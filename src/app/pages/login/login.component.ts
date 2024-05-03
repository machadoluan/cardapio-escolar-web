import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [FooterComponent, CommonModule, GoogleSigninButtonModule]
})
export class LoginComponent {
    user: any;
    loggedIn: any;

    constructor(
        private authService: SocialAuthService,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        // Verificar se há informações de login no Local Storage ao inicializar o componente
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          this.user = JSON.parse(storedUser);
          this.loggedIn = true;
          this.userService.setUserProfile(this.user);
          this.router.navigate(['/dashboard']);
        } else {
          this.authService.authState.subscribe((user) => {
            if (user) {
              this.user = user;
              this.loggedIn = true;
              // Salvar as informações do usuário no Local Storage
              localStorage.setItem('user', JSON.stringify(user));
              this.userService.setUserProfile(user);
              this.router.navigate(['/dashboard']);
            }
          });
        }
      }
}
