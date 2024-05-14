import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from './pages/login/login.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginModule]
})
export class AppComponent {
  title = 'cardapio-escolar';
}
