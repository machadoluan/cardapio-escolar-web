import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quinta',
  standalone: true,
  templateUrl: './quinta.component.html',
  styleUrl: './quinta.component.scss',
  imports: [FooterComponent, HeaderComponent]
})
export class QuintaComponent {
  constructor(
    private router: Router
  ) { }

  next() {
    this.router.navigate(['sexta'])
  }

  unnext(){
    this.router.navigate(['quarta'])
  }
}
