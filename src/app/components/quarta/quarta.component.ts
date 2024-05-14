import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-quarta',
    standalone: true,
    templateUrl: './quarta.component.html',
    styleUrl: './quarta.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class QuartaComponent {
    constructor(
        private router: Router
      ) {}
    
      next() {
        this.router.navigate(['quinta'])
      }
      unnext() {
        this.router.navigate(['terca'])
      }
}
