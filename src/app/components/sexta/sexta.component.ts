import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-sexta',
    standalone: true,
    templateUrl: './sexta.component.html',
    styleUrl: './sexta.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class SextaComponent {
    constructor(
        private router: Router
      ) {}
    
      next() {
        this.router.navigate(['quinta'])
      }
}
