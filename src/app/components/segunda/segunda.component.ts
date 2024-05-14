import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.scss'
})
export class SegundaComponent {

  constructor(
    private router: Router
  ) {}

  next() {
    this.router.navigate(['terca'])
  }
}
