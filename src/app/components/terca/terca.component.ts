import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-terca',
    standalone: true,
    templateUrl: './terca.component.html',
    styleUrl: './terca.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class TercaComponent {
    constructor(
        private router: Router
      ) {}
    
      next() {
        this.router.navigate(['quarta'])
      }
      unnext() {
        this.router.navigate(['segunda'])
      }
}
