import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [FooterComponent]
})
export class LoginComponent {

}
